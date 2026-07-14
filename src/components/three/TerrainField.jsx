import { useMemo, useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// All displacement happens on the GPU in the vertex shader — the CPU side
// only updates a handful of uniforms per frame, so a dense grid (thousands
// of vertices) animates at full framerate with negligible JS cost.
const vertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uMouseActive;
  varying float vElevation;
  varying float vViewZ;

  // Layered sine waves stand in for terrain noise — cheap, seamless,
  // and tuned by hand to feel like liquid rather than random static.
  float wave(vec2 p, float t) {
    float e = 0.0;
    e += sin(p.x * 0.15 + t * 0.6) * 0.6;
    e += sin(p.y * 0.22 - t * 0.5) * 0.5;
    e += sin((p.x + p.y) * 0.09 + t * 0.35) * 0.8;
    e += sin(length(p) * 0.05 - t * 0.4) * 0.7;
    return e;
  }

  void main() {
    vec3 pos = position;
    float elevation = wave(pos.xy, uTime);

    // A ripple travels outward from the cursor's projected position,
    // fading with distance and only present while the cursor is moving.
    float d = distance(pos.xy, uMouse);
    float ripple = sin(d * 0.35 - uTime * 3.0) * exp(-d * 0.045) * 2.6 * uMouseActive;
    elevation += ripple;

    pos.z += elevation;
    vElevation = elevation;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    vViewZ = -mvPosition.z;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  uniform vec3 uColor;
  uniform vec3 uFogColor;
  uniform float uFogNear;
  uniform float uFogFar;
  varying float vElevation;
  varying float vViewZ;

  void main() {
    // Peaks catch more "light" than valleys — cheap fake shading.
    float brightness = clamp(0.4 + vElevation * 0.14, 0.05, 1.0);
    vec3 color = uColor * brightness;

    // Fades into the page's own background color at the horizon, so the
    // terrain reads as emerging from the void rather than being clipped.
    float fogFactor = clamp((vViewZ - uFogNear) / (uFogFar - uFogNear), 0.0, 1.0);
    vec3 finalColor = mix(color, uFogColor, fogFactor);
    float alpha = (1.0 - fogFactor * 0.92) * 0.8;

    gl_FragColor = vec4(finalColor, alpha);
  }
`;

export default function TerrainField({ edgeColor, fogColor, segments, size }) {
  const meshRef = useRef();
  const scrollRef = useRef(0);
  const pointerRef = useRef({ x: 0, y: 20, active: 0, lastMove: 0 });
  const { camera } = useThree();

  useEffect(() => {
    camera.lookAt(0, -4, -22);
  }, [camera]);

  const geometry = useMemo(
    () => new THREE.PlaneGeometry(size[0], size[1], segments[0], segments[1]),
    [size, segments]
  );

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uMouse: { value: new THREE.Vector2(0, 20) },
          uMouseActive: { value: 0 },
          uColor: { value: new THREE.Color(edgeColor) },
          uFogColor: { value: new THREE.Color(fogColor) },
          uFogNear: { value: 16 },
          uFogFar: { value: 52 },
        },
        vertexShader,
        fragmentShader,
        wireframe: true,
        transparent: true,
        depthWrite: false,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    material.uniforms.uColor.value.set(edgeColor);
    material.uniforms.uFogColor.value.set(fogColor);
  }, [edgeColor, fogColor, material]);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = max > 0 ? window.scrollY / max : 0;
    };
    const onPointer = (e) => {
      // Rough screen-to-plane mapping — good enough for an ambient ripple,
      // no raycast needed against a mesh that's constantly deforming anyway.
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      pointerRef.current.x = nx * (size[0] / 2.2);
      pointerRef.current.y = 8 - ny * (size[1] / 2.2);
      pointerRef.current.lastMove = performance.now();
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const canHover = window.matchMedia('(pointer: fine)').matches;
    if (canHover) window.addEventListener('pointermove', onPointer, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointer);
    };
  }, [size]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    material.uniforms.uTime.value = t;

    const idleFor = performance.now() - pointerRef.current.lastMove;
    const target = idleFor < 2200 ? 1 : 0;
    pointerRef.current.active += (target - pointerRef.current.active) * 0.05;
    material.uniforms.uMouseActive.value = pointerRef.current.active;
    material.uniforms.uMouse.value.set(pointerRef.current.x, pointerRef.current.y);

    // Scrolling reads as travelling further out across the landscape —
    // the site's own progress becomes the camera's journey.
    if (meshRef.current) {
      const targetZ = scrollRef.current * 26;
      meshRef.current.position.z += (targetZ - meshRef.current.position.z) * 0.02;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} material={material} rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, -15]} />
  );
}
