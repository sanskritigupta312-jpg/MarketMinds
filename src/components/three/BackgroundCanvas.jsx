import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import TerrainField from './TerrainField';
import { useTheme } from '../../hooks/useTheme';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);
  return matches;
}

// Persistent, site-wide ambient 3D layer — a liquid gold wireframe terrain
// rippling below the horizon, reacting to cursor and scroll. Mounted once
// in Layout so it survives route changes (no WebGL re-init on navigation).
//
// Respects prefers-reduced-motion (freezes to a single static frame),
// pauses when the tab isn't visible, and scales grid density down on small
// viewports. Bails out entirely on very low-end hardware — the flat brand
// backgrounds still look great on their own.
export default function BackgroundCanvas() {
  const { theme } = useTheme();
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const isSmallViewport = useMediaQuery('(max-width: 768px)');
  const [tabVisible, setTabVisible] = useState(true);

  useEffect(() => {
    const onVisibility = () => setTabVisible(document.visibilityState === 'visible');
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  const isLowEnd =
    typeof navigator !== 'undefined' && navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
  if (isLowEnd) return null;

  const isDark = theme === 'dark';
  const edgeColor = '#C9A227'; // gold-500, constant across themes
  const fogColor = isDark ? '#0B0B0D' : '#FAF6EC'; // ink / paper
  const segments = isSmallViewport ? [34, 22] : [72, 46];
  const size = [90, 70];

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <Canvas
        dpr={isSmallViewport ? 1 : [1, 1.75]}
        gl={{ antialias: !isSmallViewport, alpha: true }}
        camera={{ position: [0, 4, 18], fov: 55 }}
        frameloop={reduceMotion || !tabVisible ? 'demand' : 'always'}
      >
        <color attach="background" args={[fogColor]} />
        <Suspense fallback={null}>
          <TerrainField edgeColor={edgeColor} fogColor={fogColor} segments={segments} size={size} />
        </Suspense>
      </Canvas>
    </div>
  );
}
