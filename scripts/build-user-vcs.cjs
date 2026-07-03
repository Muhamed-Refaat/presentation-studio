const fs = require('fs');

const svgPath = 'assets/images/gemini-svg.svg';
let svgContent = fs.readFileSync(svgPath, 'utf8');

// Compile dark-themed SVG properties to pristine light technical CAD colors
let whiteSvg = svgContent
  // Background - converted to standard JSX object style to prevent fatal React runtime crashes, with preserveAspectRatio to prevent horizontal clipping
  .replace('style="background-color: #0d1117;"', 'preserveAspectRatio="xMidYMid meet" style={{ backgroundColor: "#ffffff" }}')
  // Title text
  .replace('fill="#ffffff"', 'fill="#1e293b"')
  // Panels - Match and replace each rectangle individually by its literal coordinate bounds to prevent overlapping
  .replace('<rect x="40" y="90" width="320" height="470" rx="12" fill="#161b22" stroke="#30363d" stroke-width="2" />', '<rect x="40" y="90" width="320" height="470" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />')
  .replace('<rect x="420" y="90" width="540" height="160" rx="12" fill="#161b22" stroke="#30363d" stroke-width="2" />', '<rect x="420" y="90" width="540" height="160" rx="12" fill="#faf5ff" stroke="#e9d5ff" stroke-width="1.5" />')
  .replace('<rect x="420" y="280" width="540" height="280" rx="12" fill="#161b22" stroke="#30363d" stroke-width="2" />', '<rect x="420" y="280" width="540" height="280" rx="12" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />')
  // General Panel Rects
  .replaceAll('fill="#161b22" stroke="#30363d"', 'fill="#f8fafc" stroke="#e2e8f0"')
  // Text fills
  .replaceAll('fill="#c9d1d9"', 'fill="#475569"')
  .replaceAll('fill="#8b949e"', 'fill="#64748b"')
  // Developer PC Workstations
  .replaceAll('fill="#0d1117" stroke="#58a6ff"', 'fill="#ffffff" stroke="#3b82f6"')
  .replaceAll('fill="#21262d" stroke="#58a6ff"', 'fill="#f1f5f9" stroke="#3b82f6"')
  // GitHub Server
  .replace('fill="#21262d" stroke="#ff7b72" stroke-width="2"', 'fill="#ffffff" stroke="#ff7b72" stroke-width="1.5"')
  .replaceAll('fill="#0d1117" rx="2" fill="#0d1117"', 'fill="#f1f5f9"')
  .replaceAll('fill="#0d1117"', 'fill="#f1f5f9"')
  .replaceAll('stroke="#30363d" stroke-width="3"', 'stroke="#cbd5e1" stroke-width="1.5"')
  // Flow lines and push lines
  .replaceAll('stroke="#30363d" stroke-width="3" stroke-dasharray="4 4"', 'stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4 4"')
  // Git Commit Graph line
  .replace('stroke="#444c56" stroke-width="5"', 'stroke="#cbd5e1" stroke-width="3"')
  .replace('stroke="#21262d" stroke-width="2" stroke-dasharray="6 6"', 'stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="4 4"')
  // Stable Commits
  .replaceAll('fill="#1f4e29" stroke="#2ea44f"', 'fill="#f0fdf4" stroke="#10b981"')
  .replaceAll('fill="#2ea44f" font-family="system-ui, sans-serif"', 'fill="#15803d" font-family="system-ui, sans-serif"')
  // Broken Commit
  .replace('fill="#4c1e1a" stroke="#f85149"', 'fill="#fee2e2" stroke="#ef4444"')
  .replace('fill="#f85149" font-family="system-ui, sans-serif"', 'fill="#b91c1c" font-family="system-ui, sans-serif"')
  // Rest of XML text entities
  .replaceAll('&amp;', '&');

// Strip out any redundant text shadow styles or glow references to keep it perfectly clean
whiteSvg = whiteSvg.replaceAll('filter="url(#glow)"', '');

// Embed inside SoftVcsSlide
const filePath = 'src/components/AeroSlides.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const targetStart = '// ========================================== SLIDE 23: VCS & PARALLEL INTEGRATION ==========================================';
const targetEnd = '// ========================================== SLIDE 24: FUTURE INDUSTRY APPLICATIONS ==========================================';

const startIndex = content.indexOf(targetStart);
const endIndex = content.indexOf(targetEnd);

if (startIndex === -1 || endIndex === -1) {
  console.error("Could not find block boundaries!");
  process.exit(1);
}

const newComponent = `// ========================================== SLIDE 23: VCS & PARALLEL INTEGRATION ==========================================
export const SoftVcsSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-emerald-500 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-wider text-emerald-600 font-bold uppercase">Software Pillar</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Version Control</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column: Exactly 1 Sibling Card (col-span-6) */}
        <div className="col-span-5 h-full flex flex-col justify-center">
          
          {/* Unified single Card */}
          <div className="bg-gray-50/80 border border-gray-200/60 p-5 rounded-xl shadow-xs">
            <h3 className="font-mono text-[11px] text-emerald-600 font-bold uppercase mb-2 leading-none">01 / Repository Hosting & Rollback Recovery</h3>
            <p className="text-[13px] text-slate-700 font-semibold mb-3 leading-relaxed">
              The entire ASAR codebase is hosted on a secure <span className="font-extrabold text-purple-600">GitHub</span> repository. We enforce parallel branching, allowing multiple developers to edit hardware drivers and navigation scripts simultaneously. If any merge breaks the build, engineers can instantly roll back to stable save points.
            </p>
            <ul className="space-y-1.5 font-mono text-[10px] text-slate-700 font-bold uppercase leading-normal pl-1">
              <li>• GitHub Cloud Hosting: Centralizes all codebase assets in a secure workspace</li>
              <li>• Parallel Development: Supports simultaneous driver and navigation script additions</li>
              <li>• Save Point Recovery: Instantly recovers the last stable tag checkout to bypass bugs</li>
            </ul>
          </div>

        </div>

        {/* Right Column: User\'s custom compiled SVG Graph on a White Background (col-span-7) */}
        <div className="col-span-7 h-full flex items-center justify-center">
          <div className="bg-white border border-gray-200 rounded-xl w-full h-[375px] p-2 relative overflow-hidden text-gray-800 shadow-xs">
            ${whiteSvg}
          </div>
        </div>

      </div>
    </div>
  );
};

`;

content = content.substring(0, startIndex) + newComponent + content.substring(endIndex);
fs.writeFileSync(filePath, content, 'utf8');
console.log("Custom User SVG compiled and patched successfully!");
