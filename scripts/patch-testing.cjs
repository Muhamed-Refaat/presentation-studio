const fs = require('fs');
const filePath = 'src/components/AeroSlides.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Locate the exact Testing slide boundaries
const targetStart = '// ========================================== SLIDE 22: TESTING & EVALUATION ==========================================';
const targetEnd = '// ========================================== SLIDE 23: VCS & PARALLEL INTEGRATION ==========================================';

const startIndex = content.indexOf(targetStart);
const endIndex = content.indexOf(targetEnd);

if (startIndex === -1 || endIndex === -1) {
  console.error("Could not find block boundaries!");
  process.exit(1);
}

const newComponent = `// ========================================== SLIDE 22: TESTING & EVALUATION ==========================================
export const SoftTestingSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      <style dangerouslySetInnerHTML={{__html: \`
        @keyframes test-stimulus-flow {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        .test-flow-line {
          stroke-dasharray: 4 3;
          animation: test-stimulus-flow 1.5s linear infinite;
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
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Testing & Evaluation</h2>
        </div>
      </div>

      {/* Preamble Header Paragraph: Outside and above any card boxes! */}
      <div className="z-10 relative select-text bg-gray-50/80 border border-gray-200/60 p-3 rounded-xl shadow-xs mt-3.5">
        <p className="text-[13.5px] font-sans font-semibold text-slate-800 leading-relaxed">
          Three testing types are applied to validate the ASAR robotic stack: Integration Testing, End-to-End (E2E) Black-Box Testing, and Exploratory Stress Testing. These verify that software co-processors, hardware actuators, and steering planners interact flawlessly in all dynamic situations.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column: 3 Split Sibling Cards representing each test type (col-span-6) */}
        <div className="col-span-6 flex flex-col gap-2.5">
          
          {/* Card 1: Integration Testing */}
          <div className="bg-gray-50/80 border border-gray-200/60 p-3 rounded-xl shadow-xs">
            <h3 className="font-mono text-[9.5px] text-emerald-600 font-bold uppercase mb-0.5 leading-none">01 / Module-Interface Integration</h3>
            <p className="text-[11.5px] text-slate-700 font-semibold leading-normal">
              Integration testing verifies the physical data interfaces and UART/SPI signal handshakes in-between our primary on-board ECU modules (Arduino Mega and ESP32 co-processors).
            </p>
            <span className="font-mono text-[9px] text-slate-700 font-bold uppercase leading-none block mt-1">
              • Interface: Confirmed 0% packet drops across serial bridges
            </span>
          </div>

          {/* Card 2: E2E Black-Box Testing */}
          <div className="bg-gray-50/80 border border-gray-200/60 p-3 rounded-xl shadow-xs">
            <h3 className="font-mono text-[9.5px] text-emerald-600 font-bold uppercase mb-0.5 leading-none">02 / End-to-End (E2E) Loop</h3>
            <p className="text-[11.5px] text-slate-700 font-semibold leading-normal">
              E2E testing audits the entire data loop—from dispatching commands on the mobile app, executing steering outputs on-board, to receiving refreshed status telemetry back on the mobile screen.
            </p>
            <span className="font-mono text-[9px] text-slate-700 font-bold uppercase leading-none block mt-1">
              • E2E Flow: Achieved bi-directional round-trip syncs under 15ms latency
            </span>
          </div>

          {/* Card 3: Manual Exploratory Stress Testing */}
          <div className="bg-gray-50/80 border border-gray-200/60 p-3 rounded-xl shadow-xs">
            <h3 className="font-mono text-[9.5px] text-emerald-600 font-bold uppercase mb-0.5 leading-none">03 / Manual Exploratory Stress Trials</h3>
            <p className="text-[11.5px] text-slate-700 font-semibold leading-normal">
              Exploratory testing is applied as random manual runs conducted by engineers in the field. These trials manually challenge steering overrides and emergency stops to verify feature stability.
            </p>
            <span className="font-mono text-[9px] text-slate-700 font-bold uppercase leading-none block mt-1">
              • Stress Runs: Confirms instantaneous emergency override responses
            </span>
          </div>

        </div>

        {/* Right Column: Single Unified Graph in White Theme (col-span-6) */}
        <div className="col-span-6 h-full">
          <div className="bg-white border border-gray-200 rounded-xl h-full flex flex-col justify-between p-4 relative overflow-hidden text-gray-800 shadow-xs min-h-[350px]">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-100 pb-1 uppercase tracking-widest leading-none mb-2">
              THREE-TIER_PARALLEL_VAL_MATRIX // SYSTEM_OK
            </div>
            
            {/* White background visualization inside */}
            <div className="flex-grow flex items-center justify-center p-2 bg-gray-50/30 rounded-lg border border-gray-150 h-[85%] relative">
              <svg className="w-full h-full text-slate-400 overflow-visible" viewBox="0 0 300 145" fill="none">
                
                {/* BOX 1: INTEGRATION TESTING CORE [INTER-ECU CHANNELS] */}
                <g>
                  {/* Unified Integration Container Box */}
                  <rect x="5" y="5" width="290" height="38" rx="2" fill="#fafaf9" stroke="#cbd5e1" strokeWidth="1" />
                  <text x="12" y="14" fill="#475569" className="font-mono text-[5px] font-extrabold">01 / INTEGRATION TESTS: INTER-ECU SIGNALS</text>
                  
                  {/* Inside Flow */}
                  <rect x="15" y="19" width="45" height="15" rx="1" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />
                  <text x="37.5" y="28" fill="#475569" textAnchor="middle" className="font-mono text-[4.5px] font-bold">MEGA 2560</text>

                  <path d="M 60,26.5 H 85" stroke="#cbd5e1" strokeWidth="1" className="test-flow-line" />

                  <rect x="85" y="19" width="55" height="15" rx="1" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />
                  <text x="112.5" y="28" fill="#475569" textAnchor="middle" className="font-mono text-[4.5px] font-bold">UART CO-PROC</text>

                  <path d="M 140,26.5 H 170" stroke="#cbd5e1" strokeWidth="1" className="test-flow-line" />

                  <rect x="170" y="19" width="40" height="15" rx="1" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />
                  <text x="190" y="28" fill="#475569" textAnchor="middle" className="font-mono text-[4.5px] font-bold">ESP32 LINK</text>

                  {/* Pass badge */}
                  <rect x="225" y="19" width="60" height="15" rx="1" fill="#f0fdf4" stroke="#86efac" strokeWidth="0.6" />
                  <circle cx="231" cy="26.5" r="1.5" fill="#10b981" />
                  <text x="238" y="28.5" fill="#166534" className="font-mono text-[4.5px] font-bold">INTEG PASS ✓</text>
                </g>

                {/* BOX 2: END-TO-END BLACK-BOX LOOP CONTAINER */}
                <g>
                  {/* Unified E2E Container Box */}
                  <rect x="5" y="49" width="290" height="38" rx="2" fill="#faf5ff" stroke="#a855f7" strokeWidth="1" />
                  <text x="12" y="58" fill="#7e22ce" className="font-mono text-[5px] font-extrabold">02 / END-TO-END BLACK-BOX: COMPLETE DATA LOOP</text>

                  {/* Inside Flow */}
                  <rect x="15" y="63" width="45" height="15" rx="1" fill="#ffffff" stroke="#a855f7" strokeWidth="0.8" />
                  <text x="37.5" y="72" fill="#7e22ce" textAnchor="middle" className="font-mono text-[4.5px] font-bold">MOBILE APP</text>

                  <path d="M 60,70.5 H 85" stroke="#a855f7" strokeWidth="1" className="test-flow-line" />

                  <rect x="85" y="63" width="55" height="15" rx="1" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />
                  <text x="112.5" y="72" fill="#475569" textAnchor="middle" className="font-mono text-[4.5px] font-bold">ON-BOARD ECU</text>

                  <path d="M 140,70.5 H 170" stroke="#cbd5e1" strokeWidth="1" className="test-flow-line" />

                  <rect x="170" y="63" width="40" height="15" rx="1" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />
                  <text x="190" y="72" fill="#475569" textAnchor="middle" className="font-mono text-[4.5px] font-bold">APP TELEM</text>

                  {/* Pass badge */}
                  <rect x="225" y="63" width="60" height="15" rx="1" fill="#f0fdf4" stroke="#86efac" strokeWidth="0.6" />
                  <circle cx="231" cy="70.5" r="1.5" fill="#10b981" />
                  <text x="238" y="72.5" fill="#166534" className="font-mono text-[4.5px] font-bold">E2E PASS ✓</text>
                </g>

                {/* BOX 3: EXPLORATORY TESTING AND MANUAL STRESS CONTAINER */}
                <g>
                  {/* Unified Exploratory Container Box */}
                  <rect x="5" y="93" width="290" height="42" rx="2" fill="#f0f9ff" stroke="#0284c7" strokeWidth="1" />
                  <text x="12" y="102" fill="#0369a1" className="font-mono text-[5px] font-extrabold">03 / EXPLORATORY TESTING: MANUAL FIELD TRIALS</text>

                  {/* Inside Wavy Path */}
                  <path d="M 15,115 Q 90,102 150,115 T 215,115" stroke="#2563eb" strokeWidth="1.2" strokeDasharray="3 1" className="test-flow-line" />
                  <circle cx="95" cy="108" r="3" fill="#fee2e2" stroke="#ef4444" strokeWidth="0.5" />
                  <circle cx="160" cy="120" r="3" fill="#fee2e2" stroke="#ef4444" strokeWidth="0.5" />
                  <text x="110" y="128.5" fill="#1d4ed8" className="font-mono text-[4.5px] font-extrabold">MANUAL OVERRIDES & RANDOM ROAD HAZARDS</text>

                  {/* Pass badge */}
                  <rect x="225" y="106" width="60" height="15" rx="1" fill="#f0fdf4" stroke="#86efac" strokeWidth="0.6" />
                  <circle cx="231" cy="113.5" r="1.5" fill="#10b981" />
                  <text x="238" y="115.5" fill="#166534" className="font-mono text-[4.5px] font-bold">STRESS PASS ✓</text>
                </g>

              </svg>
            </div>
            
            <div className="font-mono text-[8.5px] text-gray-400 font-bold border-t border-gray-100 pt-2 text-center uppercase tracking-wider leading-none mt-1">
              ALL TESTS VERIFIED ON HIGH-FIDELITY AUTOMATED INTEGRATION SCOPES
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
