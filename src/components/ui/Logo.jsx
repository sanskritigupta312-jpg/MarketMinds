import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoMarkSrc from '../../assets/images/logo-mark.webp';

/**
 * Removes ONLY the background white using BFS flood-fill from image edges.
 * Internal white/silver parts of the logo mark are preserved.
 */
function useTransparentLogo(src) {
  const [dataUrl, setDataUrl] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width  = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      const w = canvas.width, h = canvas.height;

      const isNearWhite = (idx) =>
        data[idx] > 220 && data[idx + 1] > 220 && data[idx + 2] > 220;

      // BFS flood-fill seeded from all 4 edges
      const visited = new Uint8Array(w * h);
      const queue = [];

      for (let x = 0; x < w; x++) {
        for (const y of [0, h - 1]) {
          const i = y * w + x;
          if (!visited[i] && isNearWhite(i * 4)) { visited[i] = 1; queue.push(i); }
        }
      }
      for (let y = 1; y < h - 1; y++) {
        for (const x of [0, w - 1]) {
          const i = y * w + x;
          if (!visited[i] && isNearWhite(i * 4)) { visited[i] = 1; queue.push(i); }
        }
      }

      let head = 0;
      while (head < queue.length) {
        const i = queue[head++];
        data[i * 4 + 3] = 0; // transparent
        const x = i % w, y = Math.floor(i / w);
        for (const [nx, ny] of [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]]) {
          if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
            const ni = ny * w + nx;
            if (!visited[ni] && isNearWhite(ni * 4)) { visited[ni] = 1; queue.push(ni); }
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);

      // Auto-crop to bounding box of remaining visible pixels
      let minX = w, minY = h, maxX = 0, maxY = 0;
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          if (data[(y * w + x) * 4 + 3] > 10) {
            if (x < minX) minX = x; if (x > maxX) maxX = x;
            if (y < minY) minY = y; if (y > maxY) maxY = y;
          }
        }
      }

      const pad = 6;
      minX = Math.max(0, minX - pad); minY = Math.max(0, minY - pad);
      maxX = Math.min(w, maxX + pad); maxY = Math.min(h, maxY + pad);
      const cropW = maxX - minX, cropH = maxY - minY;
      const size = Math.max(cropW, cropH);

      const out = document.createElement('canvas');
      out.width = out.height = size;
      const octx = out.getContext('2d');
      octx.drawImage(canvas, minX, minY, cropW, cropH,
        (size - cropW) / 2, (size - cropH) / 2, cropW, cropH);

      setDataUrl(out.toDataURL('image/png'));
    };
    img.src = src;
  }, [src]);

  return dataUrl;
}

export default function Logo({ className = '', showWordmark = true, size = 'md' }) {
  const badgeSize = size === 'sm' ? 'h-9 w-9' : 'h-11 w-11';
  const textSize = size === 'sm' ? 'text-base' : 'text-lg';
  const transparentLogo = useTransparentLogo(logoMarkSrc);

  return (
    <Link to="/" className={`group flex items-center gap-3 ${className}`} aria-label="MarketMinds — home">
      <span
        className={`flex ${badgeSize} shrink-0 items-center justify-center rounded-xl bg-ink ring-1 ring-gold-500/30 transition-transform duration-300 group-hover:scale-105 group-hover:ring-gold-500/60`}
      >
        <img src={transparentLogo || logoMarkSrc} alt="" className="h-[82%] w-[82%] object-contain" />
      </span>
      {showWordmark && (
        <span className={`font-display ${textSize} leading-none tracking-tight text-charcoal dark:text-ivory`}>
          Market<span className="italic text-gold-500">Minds</span>
        </span>
      )}
    </Link>
  );
}