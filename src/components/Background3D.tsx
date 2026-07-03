/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useEffect } from 'react';

interface Background3DProps {
  cameraX: number;
  cameraY: number;
  cameraZoom: number;
}

interface Particle3D {
  x: number;
  y: number;
  z: number;
  size: number;
  vx: number;
  vy: number;
  vz: number;
  baseAlpha: number;
  color: string;
}

export const Background3D: React.FC<Background3DProps> = ({
  cameraZoom,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle3D[]>([]);
  const autoDriftRef = useRef({ x: 0, y: 0 });

  // Initialize particles once on mount
  useEffect(() => {
    const canvas = canvasRef.current;
    const width = canvas ? canvas.offsetWidth : 1200;
    const height = canvas ? canvas.offsetHeight : 800;

    const particles: Particle3D[] = [];
    const count = 130; // Slightly lower density for elegant, clean spacing

    const neonColors = [
      'rgba(37, 99, 235, ',   // Electric Blue (Blue 600)
      'rgba(147, 51, 234, ',  // Vibrant Purple (Purple 600)
      'rgba(13, 148, 136, ',   // Turquoise/Teal (Teal 600)
      'rgba(219, 39, 119, ',  // Hot Pink / Magenta (Pink 600)
      'rgba(5, 150, 105, ',   // Cyber Emerald Green (Emerald 600)
      'rgba(217, 119, 6, ',   // Warm Solar Orange (Amber 600)
    ];

    for (let i = 0; i < count; i++) {
      particles.push({
        // Distribute uniformly across the screen's 3D volume
        x: Math.random() * (width + 400) - 200,
        y: Math.random() * (height + 400) - 200,
        z: Math.random() * 800 + 100, // Z depth from 100 to 900
        size: Math.random() * 3.2 + 1.8, // Slightly smaller, elegant stars
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        vz: (Math.random() - 0.5) * 0.10,
        baseAlpha: Math.random() * 0.35 + 0.20, // Lower base alpha for softer visual weight
        color: neonColors[Math.floor(Math.random() * neonColors.length)],
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    // Handle responsive container resize using ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: entryWidth, height: entryHeight } = entry.contentRect;
        width = canvas.width = entryWidth;
        height = canvas.height = entryHeight;
      }
    });
    resizeObserver.observe(canvas);

    const focalLength = 500;
    const maxZ = 900;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;

      // Update automatic background drift over time (grid slow horizontal yaw)
      autoDriftRef.current.y += 0.0004;
      autoDriftRef.current.x += 0.0001;

      // ----------------------------------------------------------------
      // 1. Render stable 3D perspective floor/ceiling grids (Unlinked from Panning)
      // ----------------------------------------------------------------
      const gridColorPrefix = 'rgba(59, 130, 246, '; // Tech Blue (Blue 500)
      ctx.lineWidth = 1.0; // Slightly finer grid line width

      const gridYFloor = 420;
      const gridYCeiling = -420;

      // 3D projection for grid points
      const projectGridPoint = (gx: number, gy: number, gz: number) => {
        // Rotate around Y (yaw) slowly over time
        const cosY = Math.cos(autoDriftRef.current.y);
        const sinY = Math.sin(autoDriftRef.current.y);
        const rx = gx * cosY - gz * sinY;
        let rz = gx * sinY + gz * cosY;

        // Rotate around X (pitch) - elegant fixed angle so floor stays floor, ceiling stays ceiling
        const cosX = Math.cos(0.42);
        const sinX = Math.sin(0.42);
        const ry = gy * cosX - rz * sinX;
        rz = gy * sinX + rz * cosX;

        if (rz + focalLength <= 0) return null;

        const scale = (focalLength / (rz + focalLength)) * Math.min(cameraZoom * 1.1, 1.2);
        const px = rx * scale + width / 2;
        const py = ry * scale + height / 2;
        const alpha = 0.38 * (1 - rz / 1400); // Softer grid transparency

        return { px, py, alpha };
      };

      const draw3DGridLine = (x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, opacityFactor = 1) => {
        const p1 = projectGridPoint(x1, y1, z1);
        const p2 = projectGridPoint(x2, y2, z2);
        if (p1 && p2) {
          const avgAlpha = ((p1.alpha + p2.alpha) / 2) * opacityFactor;
          if (avgAlpha > 0.01) {
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.strokeStyle = `${gridColorPrefix}${avgAlpha * 0.65})`; // Very soft grid lines
            ctx.stroke();
          }
        }
      };

      // Draw Floor & Ceiling Longitudinal Grid Lines
      for (let x = -2000; x <= 2000; x += 400) {
        draw3DGridLine(x, gridYFloor, 50, x, gridYFloor, 1500, 0.7);
        draw3DGridLine(x, gridYCeiling, 50, x, gridYCeiling, 1500, 0.7);
      }

      // Draw Floor & Ceiling Transverse Grid Lines (Horizontal parallel grid rungs)
      for (let z = 100; z <= 1500; z += 200) {
        draw3DGridLine(-2000, gridYFloor, z, 2000, gridYFloor, z, 0.6);
        draw3DGridLine(-2000, gridYCeiling, z, 2000, gridYCeiling, z, 0.6);
      }

      // ----------------------------------------------------------------
      // 2. Render stable 3D particles with gentle free-drift motion
      // ----------------------------------------------------------------
      const projected: { px: number; py: number; alpha: number; z: number; color: string }[] = [];

      // Update, project, and render individual stars/points
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Apply velocities to coordinates
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Warp out of bound values smoothly to preserve uniform distribution at all screen sizes
        if (p.x < -150) p.x = width + 150;
        if (p.x > width + 150) p.x = -150;
        if (p.y < -150) p.y = height + 150;
        if (p.y > height + 150) p.y = -150;
        if (p.z < 50) p.z = maxZ;
        if (p.z > maxZ) p.z = 50;

        // Project with updated coordinates for actual rendering
        const finalScale = focalLength / (p.z + focalLength);
        const fpx = (p.x - width / 2) * finalScale + width / 2;
        const fpy = (p.y - height / 2) * finalScale + height / 2;
        const alpha = p.baseAlpha * (1 - p.z / maxZ);

        projected.push({ px: fpx, py: fpy, alpha, z: p.z, color: p.color });

        if (fpx >= 0 && fpx <= width && fpy >= 0 && fpy <= height && alpha > 0) {
          ctx.beginPath();
          ctx.arc(fpx, fpy, p.size * finalScale, 0, 2 * Math.PI);
          ctx.fillStyle = `${p.color}${alpha * 1.6})`; // Softened glow intensity
          ctx.fill();
        }
      }

      // Connect proximal 3D elements in point cloud
      const maxDistance = 130; // Slightly shorter distance threshold for clean connection lines
      ctx.lineWidth = 0.6; // Thinner connection lines

      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];

          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const proximityFactor = 1 - (dist / maxDistance);
            const lineAlpha = Math.min(p1.alpha, p2.alpha) * proximityFactor * 0.45;

            if (lineAlpha > 0.02) {
              ctx.beginPath();
              ctx.moveTo(p1.px, p1.py);
              ctx.lineTo(p2.px, p2.py);
              ctx.strokeStyle = `${p1.color}${lineAlpha * 0.9})`; // Elegant, subtle connection threads
              ctx.stroke();
            }
          }
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, [cameraZoom]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none bg-slate-50 block z-0"
    />
  );
};
