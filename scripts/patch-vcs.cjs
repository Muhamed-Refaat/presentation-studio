const fs = require('fs');
const filePath = 'src/components/AeroSlides.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Locate the exact VCS slide boundaries
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
      <style dangerouslySetInnerHTML={{__html: \`
        @keyframes dev-flow {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        .test-flow-line {
          stroke-dasharray: 4 3;
          animation: dev-flow 1.5s linear infinite;
        }
      \`}} />

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
        <div className="col-span-6 h-full flex flex-col justify-center">
          
          {/* Unified single Card */}
          <div className="bg-gray-50/80 border border-gray-200/60 p-5 rounded-xl shadow-xs">
            <h3 className="font-mono text-[11px] text-emerald-600 font-bold uppercase mb-2 leading-none">01 / Repository Hosting, Parallel Development & Rollbacks</h3>
            <p className="text-[13.5px] text-slate-700 font-semibold mb-3 leading-relaxed">
              The entire firmware stack and presentation studio code is hosted on a secure GitHub repository. We enforce parallel branching, allowing multiple developers to edit hardware drivers and navigation scripts simultaneously. If any merge breaks the build, engineers can instantly retrieve stable versions and roll back to known save points.
            </p>
            <ul className="space-y-1.5 font-mono text-[10.5px] text-slate-700 font-bold uppercase leading-normal pl-1">
              <li>• GitHub Cloud Hosting: Centralizes all codebase assets in a secure workspace</li>
              <li>• Parallel Development: Supports simultaneous driver and navigation script additions</li>
              <li>• Save Point Recovery: Instantly recovers the last stable tag checkout to bypass bugs</li>
            </ul>
          </div>

        </div>

        {/* Right Column: Exactly 1 Widescreen Graph on a White Background (col-span-6) */}
        <div className="col-span-6 h-full">
          <div className="bg-white border border-gray-200 rounded-xl h-full flex flex-col justify-between p-4 relative overflow-hidden text-gray-800 shadow-xs min-h-[350px]">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-100 pb-1 uppercase tracking-widest leading-none mb-2">
              FAILSAFE_GITHUB_HOSTING_&_PARALLEL_DEV // WHITE_THEME
            </div>
            
            {/* White background visualization inside */}
            <div className="flex-grow flex items-center justify-center p-2 bg-gray-50/30 rounded-lg border border-gray-150 h-[85%] relative">
              <svg className="w-full h-full text-slate-400 overflow-visible" viewBox="0 0 300 145" fill="none">
                
                {/* BOX 1: GITHUB SOURCE CODE HOSTING */}
                <g>
                  {/* Unified GitHub Hosting Container Box */}
                  <rect x="5" y="5" width="290" height="38" rx="2" fill="#faf5ff" stroke="#a855f7" strokeWidth="1" />
                  <text x="12" y="14" fill="#7e22ce" className="font-mono text-[5px] font-extrabold">01 / GITHUB SOURCE CODE HOSTING [CENTRAL REPOSITORY]</text>
                  
                  {/* Github central cloud box representation */}
                  <rect x="15" y="19" width="80" height="16" rx="1.5" fill="#ffffff" stroke="#a855f7" strokeWidth="0.8" />
                  <text x="55" y="29.5" fill="#7e22ce" textAnchor="middle" className="font-mono text-[4.5px] font-bold">ASAR_FIRMWARE / main</text>

                  {/* Flow line */}
                  <path d="M 95,27 H 145" stroke="#a855f7" strokeWidth="1" className="test-flow-line" />

                  <rect x="145" y="19" width="85" height="16" rx="1.5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />
                  <text x="187.5" y="29.5" fill="#475569" textAnchor="middle" className="font-mono text-[4.5px] font-bold">GITHUB SECURE WORKSPACE</text>

                  {/* Flow line */}
                  <path d="M 230,27 H 245" stroke="#10b981" strokeWidth="1" />

                  {/* Active cloud sync indicator */}
                  <rect x="245" y="19" width="40" height="16" rx="1.5" fill="#f0fdf4" stroke="#10b981" strokeWidth="0.8" />
                  <text x="265" y="29.5" fill="#166534" textAnchor="middle" className="font-mono text-[4px] font-extrabold">ONLINE ✓</text>
                </g>

                {/* BOX 2: PARALLEL DEVELOPERS PUSH WORKFLOW */}
                <g>
                  {/* Unified Parallel Developers Container Box */}
                  <rect x="5" y="49" width="290" height="38" rx="2" fill="#fafaf9" stroke="#cbd5e1" strokeWidth="1" />
                  <text x="12" y="58" fill="#475569" className="font-mono text-[5px] font-extrabold">02 / PARALLEL DEVELOPERS WORKFLOW [PC PUSH CODE]</text>

                  {/* Developer 1 Workstation */}
                  <rect x="15" y="63" width="60" height="16" rx="1.5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />
                  <text x="45" y="73.5" fill="#475569" textAnchor="middle" className="font-mono text-[4.5px] font-bold">DEV_01 [DRIVERS]</text>

                  {/* Flow Dev 1 to push merge */}
                  <path d="M 75,71 Q 125,60 175,71" stroke="#2563eb" strokeWidth="1" className="test-flow-line" />

                  {/* Developer 2 Workstation */}
                  <rect x="85" y="63" width="60" height="16" rx="1.5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />
                  <text x="115" y="73.5" fill="#475569" textAnchor="middle" className="font-mono text-[4.5px] font-bold">DEV_02 [STEER]</text>

                  {/* Flow Dev 2 to push merge */}
                  <path d="M 145,71 Q 160,82 175,71" stroke="#2563eb" strokeWidth="1" className="test-flow-line" />

                  {/* Push and Merge Target Box */}
                  <rect x="175" y="63" width="50" height="16" rx="1.5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />
                  <text x="200" y="73.5" fill="#475569" textAnchor="middle" className="font-mono text-[4.5px] font-bold">GIT PUSH/MERGE</text>

                  {/* Flow Merge to Complete */}
                  <path d="M 225,71 H 235" stroke="#cbd5e1" strokeWidth="1" />

                  {/* Active merge badge */}
                  <rect x="235" y="63" width="50" height="16" rx="1.5" fill="#f0fdf4" stroke="#86efac" strokeWidth="0.6" />
                  <text x="260" y="73.5" fill="#166534" textAnchor="middle" className="font-mono text-[4px] font-bold">MERGED ✓</text>
                </g>

                {/* BOX 3: FAILSAFE ROLLBACK TO SAVE COMMIT */}
                <g>
                  {/* Unified Rollback Container Box */}
                  <rect x="5" y="93" width="290" height="42" rx="2" fill="#f0fdf4" stroke="#10b981" strokeWidth="1" />
                  <text x="12" y="102" fill="#0369a1" className="font-mono text-[5px] font-extrabold">03 / FAILSAFE ROLLBACK TO STABLE SAVE COMMITS [GIT GRAPH]</text>

                  {/* Commit A (Stable) */}
                  <circle cx="25" cy="118" r="3.5" fill="#10b981" />
                  <line x1="28.5" y1="118" x2="81.5" y2="118" stroke="#10b981" strokeWidth="1" />
                  <text x="25" y="112" fill="#15803d" textAnchor="middle" className="font-mono text-[4px] font-bold">Commit v1.1</text>

                  {/* Commit B (Stable Save Point) */}
                  <circle cx="85" cy="118" r="3.5" fill="#10b981" />
                  <line x1="88.5" y1="118" x2="151.5" y2="118" stroke="#10b981" strokeWidth="1" />
                  <text x="85" y="112" fill="#15803d" textAnchor="middle" className="font-mono text-[4px] font-extrabold">Commit v1.2 [STABLE]</text>

                  {/* Commit C (Corrupted) */}
                  <circle cx="155" cy="118" r="4" fill="#ef4444" className="animate-pulse" />
                  <text x="155" y="112" fill="#b91c1c" textAnchor="middle" className="font-mono text-[4px] font-bold">Commit v1.3 [BROKEN]</text>

                  {/* Backward Rollback Flow line from C back to B save-point */}
                  <path d="M 155,118 Q 120,100 85,118" stroke="#10b981" strokeWidth="1.5" className="test-flow-line" />
                  <polygon points="85,118 91,114 93,121" fill="#10b981" />
                  <text x="120" y="107" fill="#047857" textAnchor="middle" className="font-mono text-[4px] font-extrabold">RETRIEVE/ROLLBACK ✓</text>

                  {/* Rollback pass indicator */}
                  <rect x="225" y="106" width="60" height="16" rx="1.5" fill="#f0fdf4" stroke="#86efac" strokeWidth="0.6" />
                  <circle cx="231" cy="114" r="1.5" fill="#10b981" />
                  <text x="238" y="116" fill="#166534" className="font-mono text-[4px] font-bold">SYSTEM OK ✓</text>
                </g>

              </svg>
            </div>
            
            {/* White bottom text */}
            <div className="font-mono text-[8.5px] text-gray-400 font-bold border-t border-gray-100 pt-2 text-center uppercase tracking-wider leading-none mt-1">
              CENTRAL REPOSITORY WORKSPACE DIRECTLY SYNCED TO PARALLEL WORKSTATIONS
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

`;

content = content.substring(0, startIndex) + newComponent + content.substring(endIndex);
fs.writeFileSync(filePath, content, 'utf8');
console.log("Component successfully patched!");
