/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Shield, Zap, Activity, Cpu, Compass, Users, 
  CheckCircle, TrendingDown, Terminal, Settings, 
  Radio, HelpCircle, LogOut, Maximize, Play, Pause,
  RefreshCw, Edit3, Code, Trash, Plus, Grid, Wifi, Gauge,
  BatteryCharging, ChevronRight, Check, Eye
} from 'lucide-react';

interface SlideProps {
  onStartPlay?: () => void;
  onEnterDesign?: () => void;
  isEditing?: boolean;
}

// 1. MISSION CONTROL / COVER SLIDE
export const MissionControlSlide: React.FC<SlideProps> = ({ onStartPlay, onEnterDesign }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-12 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      {/* Subtle scan line effect */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-[pulse_2s_infinite] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] bg-[size:32px_32px] opacity-70 pointer-events-none" />

      {/* Background geometric design corners */}
      <div className="absolute top-10 left-10 w-8 h-8 border-t-2 border-l-2 border-blue-200/60" />
      <div className="absolute top-10 right-10 w-8 h-8 border-t-2 border-r-2 border-blue-200/60" />
      <div className="absolute bottom-10 left-10 w-8 h-8 border-b-2 border-l-2 border-blue-200/60" />
      <div className="absolute bottom-10 right-10 w-8 h-8 border-b-2 border-r-2 border-blue-200/60" />

      {/* Top Slide Bar */}
      <div className="flex justify-between items-center z-10">
        <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[10px] tracking-wider text-emerald-700 font-bold uppercase">SYSTEM STATUS: ACTIVE</span>
        </div>
        <div className="font-mono text-[10px] text-gray-400 font-semibold tracking-wider">
          FREQ: 5.2GHZ | INTERFACES: NOMINAL
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center my-auto z-10 flex flex-col justify-center items-center">
        <div className="font-mono text-xs text-blue-600 font-bold uppercase tracking-[0.25em] mb-4">Spatial Presentation Platform</div>
        <h1 className="text-5xl font-extrabold font-sans tracking-tight mb-5 uppercase text-gray-900">
          Adaptive Smart <span className="text-blue-600">Autonomous Robot</span> <span className="text-gray-400 font-normal font-mono text-3xl">(ASAR)</span>
        </h1>
        <div className="flex flex-col items-center gap-1.5 mb-8">
          <div className="font-mono text-xs md:text-sm text-teal-600 font-bold tracking-[0.18em] uppercase">
            BORG EL ARAB TECHNOLOGICAL UNIVERSITY
          </div>
          <div className="font-sans text-xs text-gray-500 font-medium tracking-wide uppercase">
            FACULTY OF INDUSTRY AND ENERGY TECHNOLOGY | IT DEPARTMENT
          </div>
        </div>
        
        <div className="flex gap-4 justify-center">
          <button 
            onClick={onStartPlay}
            className="group relative bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded shadow hover:shadow-md active:scale-95"
          >
            START MISSION
            <span className="absolute -right-2 -top-2 w-3 h-3 border-t-2 border-r-2 border-blue-400"></span>
            <span className="absolute -left-2 -bottom-2 w-3 h-3 border-b-2 border-l-2 border-blue-400"></span>
          </button>
          
          <button 
            onClick={onEnterDesign}
            className="px-8 py-4 font-mono text-xs font-bold text-blue-600 border border-blue-200 hover:bg-blue-50 transition-all duration-300 rounded uppercase active:scale-95 shadow-xs bg-white"
          >
            VIEW SCHEMATICS
          </button>
        </div>
      </div>

      {/* Bottom telemetry panels */}
      <div className="grid grid-cols-4 gap-6 z-10 bg-gray-50/80 border border-gray-150 p-4 rounded-xl">
        <div className="border-r border-gray-200 pr-4">
          <div className="flex justify-between items-center mb-1 text-[9px] font-mono text-blue-600 font-bold uppercase">
            <span>Sensor Fusion</span>
            <Radio className="w-3.5 h-3.5 text-blue-500" />
          </div>
          <div className="font-mono text-xs font-bold text-gray-700">LIDAR: ACTIVE SYNC</div>
        </div>
        <div className="border-r border-gray-200 px-4">
          <div className="flex justify-between items-center mb-1 text-[9px] font-mono text-blue-600 font-bold uppercase">
            <span>Neural Core</span>
            <Cpu className="w-3.5 h-3.5 text-blue-500" />
          </div>
          <div className="font-mono text-xs font-bold text-gray-700">COGNITION: 98%</div>
        </div>
        <div className="border-r border-gray-200 px-4">
          <div className="flex justify-between items-center mb-1 text-[9px] font-mono text-blue-600 font-bold uppercase">
            <span>Navigation</span>
            <Compass className="w-3.5 h-3.5 text-blue-500" />
          </div>
          <div className="font-mono text-xs font-bold text-gray-700">PATH: OPTIMAL</div>
        </div>
        <div className="pl-4">
          <div className="flex justify-between items-center mb-1 text-[9px] font-mono text-red-500 font-bold uppercase">
            <span>Security Layer</span>
            <Shield className="w-3.5 h-3.5 text-red-400" />
          </div>
          <div className="font-mono text-xs font-bold text-gray-700">ENCRYPTION: AES_256</div>
        </div>
      </div>
    </div>
  );
};

// 2. METRICS / TELEMETRY SLIDE
export const MetricsSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      {/* Top Banner */}
      <div className="border-l-4 border-blue-600 pl-4 py-1 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-wider text-gray-400 font-bold uppercase">EXPERIMENTAL_SEQUENCE: 005</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">EXPERIMENTAL TESTING METRICS</h2>
        </div>
        <div className="text-right text-xs font-mono text-gray-400 font-semibold uppercase">
          SYSTEM_NOMINAL | V.4 PROTOCOL
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-12 gap-6 my-auto flex-1 py-4">
        {/* Left Column (Success and Latency Specs) */}
        <div className="col-span-5 flex flex-col justify-between gap-4">
          {/* Success Rate */}
          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 flex justify-between items-center relative group overflow-hidden shadow-xs">
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000" />
            <div>
              <div className="font-mono text-[10px] text-blue-600 font-bold uppercase mb-1">MISSION_SUCCESS</div>
              <div className="text-5xl font-extrabold text-emerald-600 tracking-tighter">95%</div>
              <div className="mt-2.5 flex gap-2">
                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[8px] font-mono border border-emerald-100 rounded uppercase font-bold">Optimal</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[8px] font-mono border border-gray-200/50 rounded uppercase font-semibold">V.4 Protocol</span>
              </div>
            </div>
            
            <div className="w-20 h-20 relative flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle className="text-gray-100" cx="40" cy="40" fill="transparent" r="32" stroke="currentColor" strokeWidth="6"></circle>
                <circle className="text-emerald-500" cx="40" cy="40" fill="transparent" r="32" stroke="currentColor" strokeDasharray="201" strokeDashoffset="10" strokeWidth="6" strokeLinecap="round"></circle>
              </svg>
              <CheckCircle className="w-7 h-7 text-emerald-500 absolute" />
            </div>
          </div>

          {/* Response Latency */}
          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-5 flex justify-between items-center relative overflow-hidden shadow-xs">
            <div>
              <div className="font-mono text-[10px] text-blue-600 font-bold uppercase mb-1">RESPONSE_LATENCY</div>
              <div className="text-4xl font-extrabold text-blue-600 tracking-tighter">&lt;150ms</div>
              <p className="text-[11px] text-gray-500 mt-3 font-sans leading-relaxed font-medium">
                Real-time neural link established via redundant gigabit mesh backbone.
              </p>
            </div>
            <div className="flex items-end gap-1.5 h-14 w-28 bg-white/40 border border-gray-100 p-2 rounded-lg">
              <div className="w-2 bg-blue-100 h-6 rounded-xs"></div>
              <div className="w-2 bg-blue-200 h-10 rounded-xs"></div>
              <div className="w-2 bg-blue-300 h-14 rounded-xs"></div>
              <div className="w-2 bg-blue-500 h-8 rounded-xs animate-pulse"></div>
              <div className="w-2 bg-indigo-500 h-12 rounded-xs"></div>
            </div>
          </div>

          {/* Drift Status */}
          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 flex items-center gap-4 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5 text-red-500 animate-spin" style={{ animationDuration: '10s' }} />
            </div>
            <div className="w-full">
              <div className="font-mono text-[9px] text-gray-400 font-bold uppercase">DIRECTIONAL_DRIFT</div>
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-xl font-bold text-gray-800">&lt;1.5°</span>
                <span className="font-mono text-[9px] text-emerald-600 font-bold">STABLE</span>
              </div>
              <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 w-[15%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Live Telemetry Feed stream image / radar) */}
        <div className="col-span-7 h-full">
          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl h-full overflow-hidden flex flex-col relative group shadow-xs">
            <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200 bg-white/50 font-mono text-[10px] text-gray-500 font-bold">
              <div className="flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
                <span>LIVE_TELEMETRY_FEED_STREAM</span>
              </div>
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              </div>
            </div>

            <div className="flex-grow relative overflow-hidden bg-slate-50 flex items-center justify-center">
              {/* Telemetry Scanning Hologram simulation */}
              <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />
              
              {/* Moving scanning beam */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-[scan_3s_linear_infinite] opacity-65" />
              
              {/* Beautiful SVG Tech Blueprint of Robot Chassis */}
              <svg className="w-[85%] h-[85%] text-blue-200" viewBox="0 0 400 200" fill="none">
                <path d="M50 100 H350 M100 50 V150 M300 50 V150" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
                <circle cx="200" cy="100" r="80" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="200" cy="100" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" />
                <rect x="150" y="75" width="100" height="50" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M200 60 L240 100 L200 140 L160 100 Z" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.4" />
                <line x1="200" y1="100" x2="270" y2="30" stroke="#22c55e" strokeWidth="2" strokeOpacity="0.8" />
                <circle cx="270" cy="30" r="5" fill="#22c55e" />
                <text x="210" y="90" fill="currentColor" className="font-mono text-[8px] opacity-60">CHASSIS_SYS</text>
              </svg>

              {/* Float HUD values */}
              <div className="absolute top-3 right-3 bg-white/95 border border-gray-200/80 p-2.5 font-mono text-[8px] text-gray-500 shadow-sm rounded leading-normal">
                <p>ENCRYPTION: AES-256-GCM</p>
                <p>SATELLITE: 0X_G_LINK</p>
                <p>SIGNAL: 100% NOMINAL</p>
              </div>

              <div className="absolute bottom-3 left-3 flex gap-4">
                <div className="bg-white/95 border border-gray-200/80 px-2.5 py-1 rounded font-mono text-[8px] text-emerald-600 shadow-sm">
                  SYS_COOL: 42°C
                </div>
                <div className="bg-white/95 border border-gray-200/80 px-2.5 py-1 rounded font-mono text-[8px] text-blue-600 shadow-sm">
                  SENSORS: ONLINE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Footer */}
      <div className="grid grid-cols-3 gap-4 border-t border-gray-150 pt-4 text-[10px] font-mono text-gray-400 font-semibold uppercase">
        <div>HARDWARE_ITERATION: TITAN_V4_ALPHA</div>
        <div className="text-center">LOC_ID: NORTH_POLE_TEST_FACILITY</div>
        <div className="text-right">RUNTIME: 4,288_HOURS_CONTINUOUS</div>
      </div>
    </div>
  );
};

// 3. TEAM / ROSTER SLIDE
export const TeamSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      {/* Slide Header */}
      <div className="border-l-4 border-blue-600 pl-4 py-1 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-wider text-blue-600 font-bold uppercase">LIVE_ROSTER // PROJECT_OMEGA</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Project Team Distribution</h2>
        </div>
        <p className="text-right max-w-sm text-xs text-gray-500 font-medium leading-relaxed">
          Mapping AERO_BOTICS cognitive architecture. 21 specialized operators across 6 high-precision modules.
        </p>
      </div>

      {/* Content layout */}
      <div className="grid grid-cols-12 gap-6 my-auto flex-1 py-4">
        {/* Modules breakdown */}
        <div className="col-span-8 grid grid-cols-2 gap-4">
          {/* LIDAR */}
          <div className="bg-gray-50/60 border border-gray-200/80 rounded-lg p-4 border-t-2 border-t-blue-500 relative">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-mono text-xs font-bold text-blue-600 uppercase">LIDAR_UNIT</h3>
              <span className="font-mono text-[8px] text-gray-400 uppercase font-semibold">OPTICAL_SPATIAL</span>
            </div>
            <ul className="space-y-1.5 font-mono text-[11px] text-gray-600 font-medium">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> CHEN, J. (LEAD)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-300 rounded-full"></span> RODRIGUEZ, M.</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-300 rounded-full"></span> SMYTHE, A.</li>
            </ul>
          </div>

          {/* IMU */}
          <div className="bg-gray-50/60 border border-gray-200/80 rounded-lg p-4 border-t-2 border-t-indigo-500 relative">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-mono text-xs font-bold text-indigo-600 uppercase">IMU_UNIT</h3>
              <span className="font-mono text-[8px] text-gray-400 uppercase font-semibold">KINETIC_STAB</span>
            </div>
            <ul className="space-y-1.5 font-mono text-[11px] text-gray-600 font-medium">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> OKORO, T. (LEAD)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-300 rounded-full"></span> TANAKA, H.</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-300 rounded-full"></span> BERG, S.</li>
            </ul>
          </div>

          {/* NEURAL CORE */}
          <div className="bg-gray-50/60 border border-gray-200/80 rounded-lg p-4 border-t-2 border-t-emerald-500 col-span-2">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-mono text-xs font-bold text-emerald-600 uppercase">NEURAL_CORE</h3>
              <span className="font-mono text-[8px] text-gray-400 uppercase font-semibold">DECISION_ENGINE_&_OS</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-1.5 font-mono text-[11px] text-gray-600 font-medium">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> VANCE, L. (LEAD)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span> PATEL, R.</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span> AL-SAYED, F.</li>
              </ul>
              <ul className="space-y-1.5 font-mono text-[11px] text-gray-600 font-medium">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span> DUVAL, E.</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span> PETROV, K.</li>
              </ul>
            </div>
          </div>

          {/* MOTION CTRL */}
          <div className="bg-gray-50/60 border border-gray-200/80 rounded-lg p-4 border-t-2 border-t-blue-600">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-mono text-xs font-bold text-blue-700 uppercase">MOTION_CTRL</h3>
              <span className="font-mono text-[8px] text-gray-400 uppercase font-semibold">ACTUATION_DYNAMICS</span>
            </div>
            <ul className="space-y-1.5 font-mono text-[11px] text-gray-600 font-medium">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> GUPTA, N. (LEAD)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> MULLER, D.</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> CHOI, S.</li>
            </ul>
          </div>

          {/* SENSOR FUSION */}
          <div className="bg-gray-50/60 border border-gray-200/80 rounded-lg p-4 border-t-2 border-t-teal-500">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-mono text-xs font-bold text-teal-600 uppercase">SENSOR_FUSION</h3>
              <span className="font-mono text-[8px] text-gray-400 uppercase font-semibold">SIGNAL_INTEGRITY</span>
            </div>
            <ul className="space-y-1.5 font-mono text-[11px] text-gray-600 font-medium">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span> LI, W. (LEAD)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-300 rounded-full"></span> GARCIA, P.</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-300 rounded-full"></span> JENSEN, O.</li>
            </ul>
          </div>
        </div>

        {/* Right side Visual Anchor (Team schematic camera) */}
        <div className="col-span-4 h-full">
          <div className="bg-gray-50/80 border border-gray-200 rounded-xl h-full overflow-hidden flex flex-col justify-between p-4 relative bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:16px_16px]">
            <div className="font-mono text-[9px] text-gray-400 font-bold border-b border-gray-200 pb-2 flex justify-between">
              <span>VISUAL_FEED :: HQ_CENTRAL</span>
              <span className="text-emerald-600">● ONLINE</span>
            </div>

            {/* Neural network graph diagram representation */}
            <div className="my-auto h-36 flex items-center justify-center relative bg-white/50 border border-gray-100 rounded-lg p-2">
              <svg className="w-full h-full text-blue-200" viewBox="0 0 100 80">
                <circle cx="20" cy="40" r="3" fill="#2563eb" />
                <circle cx="40" cy="20" r="3" fill="#2563eb" />
                <circle cx="40" cy="60" r="3" fill="#2563eb" />
                <circle cx="60" cy="30" r="3" fill="#2563eb" />
                <circle cx="60" cy="50" r="3" fill="#2563eb" />
                <circle cx="80" cy="40" r="4" fill="#10b981" />
                
                <line x1="20" y1="40" x2="40" y2="20" stroke="currentColor" strokeWidth="0.75" />
                <line x1="20" y1="40" x2="40" y2="60" stroke="currentColor" strokeWidth="0.75" />
                <line x1="40" y1="20" x2="60" y2="30" stroke="currentColor" strokeWidth="0.75" />
                <line x1="40" y1="60" x2="60" y2="50" stroke="currentColor" strokeWidth="0.75" />
                <line x1="40" y1="20" x2="60" y2="50" stroke="currentColor" strokeWidth="0.75" />
                <line x1="40" y1="60" x2="60" y2="30" stroke="currentColor" strokeWidth="0.75" />
                <line x1="60" y1="30" x2="80" y2="40" stroke="currentColor" strokeWidth="0.75" />
                <line x1="60" y1="50" x2="80" y2="40" stroke="currentColor" strokeWidth="0.75" />
              </svg>
              <div className="absolute inset-0 border border-dashed border-blue-200/55 rounded-lg animate-pulse pointer-events-none" />
            </div>

            <div className="border-t border-gray-200 pt-2">
              <div className="font-mono text-[10px] text-blue-600 font-bold uppercase tracking-wider mb-1">Human Scale active</div>
              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 w-2/3"></div>
              </div>
              <div className="flex justify-between font-mono text-[9px] text-gray-400 font-bold mt-2">
                <span>UPTIME: 99.9%</span>
                <span>LATENCY: 12ms</span>
                <span>NODES: 21/21</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Footer */}
      <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 font-bold border-t border-gray-150 pt-4">
        <span>© 2026 NEURAL_CORE ROBOTICS. ALL SYSTEMS NOMINAL.</span>
        <div className="flex gap-4">
          <span>PRIVACY_PROTOCOL</span>
          <span>API_DOCS</span>
          <span className="text-emerald-600 underline">SYSTEM_STATUS</span>
        </div>
      </div>
    </div>
  );
};

// 4. PERCEPTION / SLAM SLIDE
export const PerceptionSlide: React.FC = () => {
  const [bearing, setBearing] = useState(284.5);

  useEffect(() => {
    const interval = setInterval(() => {
      setBearing(prev => {
        const next = prev + (Math.random() - 0.5) * 0.4;
        return parseFloat(next.toFixed(1));
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      {/* Light Scanline line effect */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-[scan_4s_linear_infinite] opacity-60" />

      <div className="border-l-4 border-indigo-500 pl-4 py-1 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-wider text-indigo-600 font-bold uppercase">SLIDE 02 // SENSOR_FUSION_PROTOCOL</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">
            Multi-Modal Perception & Modality Strategy
          </h2>
        </div>
        <div className="font-mono text-[10px] text-gray-400 font-bold uppercase">
          PERFORMANCE_VALIDATION
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 my-auto flex-1 py-4">
        {/* Left Side (LiDAR details + breakdown) */}
        <div className="col-span-5 flex flex-col gap-4">
          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 relative overflow-hidden shadow-xs">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-mono text-xs font-bold text-indigo-600 uppercase">2D LiDAR</h3>
              <span className="px-1.5 py-0.5 bg-indigo-50 text-indigo-700 text-[8px] font-mono font-bold rounded uppercase">PRIMARY</span>
            </div>
            <p className="text-xs text-gray-500 mb-3 leading-relaxed font-medium">
              High-frequency laser ranging providing 360° point cloud data for simultaneous localization and mapping (SLAM).
            </p>
            <div className="border-l-2 border-blue-600 pl-3 py-1 font-mono text-[10px] bg-white/90 rounded-r shadow-xs">
              <span className="text-gray-400 font-bold">DISTANCE INTEGRATION: </span>
              <code className="text-blue-600 block font-bold mt-0.5">d = (c × Δt) / 2</code>
              <span className="text-gray-400 block mt-1 text-[8px]">Where c = speed of light, Δt = time of flight</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-3 shadow-xs">
              <h4 className="font-mono text-[9px] text-blue-600 uppercase font-bold mb-1">Ultrasonic</h4>
              <p className="text-[10px] text-gray-500 mb-2 font-medium">HC-SR04 obstacle avoidance.</p>
              <code className="font-mono text-[9px] text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded font-bold">dist = d * 0.034 / 2</code>
            </div>
            <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-3 shadow-xs">
              <h4 className="font-mono text-[9px] text-emerald-600 uppercase font-bold mb-1">MPU6050 IMU</h4>
              <p className="text-[10px] text-gray-500 mb-2 font-medium">6-axis motion tracking.</p>
              <code className="font-mono text-[9px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">θ = α(θ+ωt) + (1-α)a</code>
            </div>
          </div>

          {/* Performance Dials bar */}
          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 flex-1 flex flex-col justify-between shadow-xs">
            <div className="font-mono text-[9px] text-gray-400 tracking-wider uppercase border-b border-gray-150 pb-1.5 mb-2 font-bold">
              Accuracy Breakdown
            </div>
            
            <div className="space-y-2">
              <div>
                <div className="flex justify-between font-mono text-[10px] mb-1">
                  <span className="font-semibold text-gray-600">LiDAR FIDELITY</span>
                  <span className="text-indigo-600 font-bold">95%</span>
                </div>
                <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 w-[95%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between font-mono text-[10px] mb-1">
                  <span className="font-semibold text-gray-600">ULTRASONIC ACCURACY</span>
                  <span className="text-blue-600 font-bold">78%</span>
                </div>
                <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[78%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between font-mono text-[10px] mb-1">
                  <span className="font-semibold text-gray-600">IMU DRIFT RECOVERY</span>
                  <span className="text-emerald-600 font-bold">89%</span>
                </div>
                <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[89%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (Visualizer scan canvas) */}
        <div className="col-span-7 h-full flex flex-col justify-between">
          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl h-[80%] overflow-hidden relative group shadow-xs">
            <div className="absolute inset-0 bg-slate-50 flex items-center justify-center">
              {/* Radar scanner grid */}
              <div className="w-[300px] h-[300px] rounded-full border border-blue-100 absolute flex items-center justify-center">
                <div className="w-[200px] h-[200px] rounded-full border border-blue-100 absolute" />
                <div className="w-[100px] h-[100px] rounded-full border border-blue-100 absolute" />
                <div className="w-[1px] h-[340px] bg-blue-100 absolute" />
                <div className="w-[340px] h-[1px] bg-blue-100 absolute" />
                
                {/* Rotating scanning ray */}
                <div className="w-[150px] h-[150px] absolute top-1/2 left-1/2 origin-top-left bg-gradient-to-br from-indigo-500/10 to-transparent animate-[spin_4s_linear_infinite] pointer-events-none" />
              </div>

              {/* Target dots */}
              <div className="absolute top-[30%] left-[45%] w-2 h-2 rounded-full bg-red-400 animate-ping" />
              <div className="absolute top-[30%] left-[45%] w-2 h-2 rounded-full bg-red-500" />
              <div className="absolute bottom-[25%] right-[35%] w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              
              {/* Telemetry frame details */}
              <div className="absolute top-4 left-4 flex gap-2 pointer-events-none">
                <div className="bg-white/95 border border-gray-200 px-2 py-1 rounded font-mono text-[8px] text-blue-600 shadow-sm font-bold">
                  ● LIVE_FEED: LIDAR_SCAN_004
                </div>
              </div>
              
              <div className="absolute top-4 right-4 font-mono text-[8px] text-gray-400 font-bold">
                37.7749° N, 122.4194° W
              </div>

              {/* Bearing coordinates bottom panel */}
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-4 pointer-events-none">
                <div className="bg-white/95 border-l-2 border-blue-500 p-2 rounded shadow-sm">
                  <div className="font-mono text-[8px] text-gray-400 font-bold">BEARING</div>
                  <div className="text-lg font-bold text-gray-800 font-mono">{bearing}°</div>
                </div>
                <div className="bg-white/95 border-l-2 border-indigo-500 p-2 rounded shadow-sm">
                  <div className="font-mono text-[8px] text-gray-400 font-bold">PULSE_FREQ</div>
                  <div className="text-lg font-bold text-gray-800 font-mono">12.4 KHz</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-50/80 border border-gray-200/60 rounded-lg p-3 text-center shadow-xs">
              <div className="font-mono text-[8px] text-gray-400 font-bold uppercase">Latency</div>
              <div className="font-bold text-sm text-indigo-600 font-mono">12ms</div>
            </div>
            <div className="bg-gray-50/80 border border-gray-200/60 rounded-lg p-3 text-center shadow-xs">
              <div className="font-mono text-[8px] text-gray-400 font-bold uppercase">Sample Rate</div>
              <div className="font-bold text-sm text-indigo-600 font-mono">10Hz</div>
            </div>
            <div className="bg-gray-50/80 border border-gray-200/60 rounded-lg p-3 text-center shadow-xs">
              <div className="font-mono text-[8px] text-gray-400 font-bold uppercase">Error Margin</div>
              <div className="font-bold text-sm text-red-500 font-mono">±0.02%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 font-bold border-t border-gray-150 pt-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>SYSTEM_NOMINAL | AES-256</span>
        </div>
        <span>© 2026 NEURAL_CORE ROBOTICS. ALL RIGHTS RESERVED.</span>
      </div>
    </div>
  );
};

// 5. POWER & MECHANICAL SLIDE
export const PowerSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] bg-[size:32px_32px] opacity-70 pointer-events-none" />

      {/* Header */}
      <div className="border-l-4 border-blue-600 pl-4 py-1">
        <div className="font-mono text-[9px] tracking-wider text-blue-600 font-bold uppercase mb-1">PHASE 03 // HARDWARE CONFIGURATION</div>
        <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Power, Actuation & Mechanical Setup</h2>
      </div>

      <div className="grid grid-cols-12 gap-6 my-auto flex-1 py-4">
        {/* Specs Column */}
        <div className="col-span-4 flex flex-col gap-4">
          {/* Power Source */}
          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 border-t-2 border-t-emerald-500 relative overflow-hidden shadow-xs">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-mono text-xs font-bold text-emerald-600 uppercase">POWER SOURCE</h3>
              <BatteryCharging className="w-5 h-5 text-emerald-500" />
            </div>
            <div className="font-mono text-[9px] text-gray-400 font-bold mb-1">UNIT_TYPE:</div>
            <div className="font-bold text-sm mb-2 text-gray-800">3S BMS Lithium Battery Pack</div>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div>
                <span className="text-gray-400 text-[9px] font-bold block">NOMINAL</span>
                <span className="text-indigo-600 font-bold text-sm">11.1V</span>
              </div>
              <div>
                <span className="text-gray-400 text-[9px] font-bold block">PEAK</span>
                <span className="text-indigo-600 font-bold text-sm">12.6V</span>
              </div>
            </div>
          </div>

          {/* Motor Driver */}
          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 border-l-2 border-l-blue-500 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="w-4 h-4 text-blue-600" />
              <h4 className="font-mono text-xs font-bold text-blue-600 uppercase">L298N MOTOR DRIVER</h4>
            </div>
            <p className="text-[11px] text-gray-500 font-medium leading-relaxed">
              Dual-channel H-bridge driver enabling independent speed and direction control. Integrated heatsink for thermal safety.
            </p>
            <div className="mt-3 flex gap-2 text-[8px] font-mono font-bold uppercase">
              <span className="bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded">PWM READY</span>
              <span className="bg-red-50 text-red-500 border border-red-100 px-2 py-0.5 rounded">THERMAL PROT</span>
            </div>
          </div>

          {/* Motors */}
          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 border-l-2 border-l-indigo-400 flex-1 flex flex-col justify-between shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <Settings className="w-4 h-4 text-indigo-500 animate-spin" style={{ animationDuration: '6s' }} />
              <h4 className="font-mono text-xs font-bold text-indigo-500 uppercase">GEARED DC MOTORS</h4>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-4xl font-extrabold font-mono text-gray-700 leading-none">4X</span>
              <div className="text-right font-mono">
                <span className="text-[8px] text-gray-400 font-bold block">GEAR_RATIO</span>
                <span className="text-emerald-600 font-bold text-xs">1:48 Geared</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chassis blueprint mockup visualizer */}
        <div className="col-span-8 h-full">
          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl h-full overflow-hidden relative group shadow-xs">
            {/* Robot chassis layout background sketch rendering */}
            <div className="absolute inset-0 bg-slate-50 flex items-center justify-center">
              {/* Radial HUD lines */}
              <div className="absolute w-[400px] h-[400px] border border-dashed border-blue-100/60 rounded-full" />
              <div className="absolute w-[250px] h-[250px] border border-dashed border-blue-100/60 rounded-full" />
              
              <svg className="w-[90%] h-[90%] text-blue-200/80" viewBox="0 0 500 250" fill="none">
                <rect x="180" y="50" width="140" height="150" rx="8" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="150" cy="80" r="25" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="150" cy="170" r="25" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="350" cy="80" r="25" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="350" cy="170" r="25" stroke="currentColor" strokeWidth="1.5" />
                
                {/* Wiring lines */}
                <path d="M180 125 H320 M250 50 V200" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                
                <text x="210" y="100" fill="currentColor" className="font-mono text-[8px] opacity-60">DRIVETRAIN_BLUEPRINT</text>
              </svg>

              {/* Callouts and labels */}
              <div className="absolute top-[35%] left-[25%] flex items-center pointer-events-none">
                <div className="w-3.5 h-3.5 rounded-full border border-blue-500 bg-white flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" />
                </div>
                <div className="w-10 h-[1px] bg-blue-300" />
                <div className="bg-white border border-blue-200 px-1.5 py-0.5 rounded font-mono text-[8px] text-blue-600 shadow-xs font-bold">
                  Actuator_01-04 (12V DC)
                </div>
              </div>

              {/* Motor driver callout */}
              <div className="absolute top-[20%] right-[25%] flex items-center pointer-events-none">
                <div className="bg-white border border-indigo-200 px-1.5 py-0.5 rounded font-mono text-[8px] text-indigo-600 shadow-xs font-bold">
                  Drive_Module_A (L298N)
                </div>
                <div className="w-10 h-[1px] bg-indigo-300" />
                <div className="w-3.5 h-3.5 rounded-full border border-indigo-500 bg-white flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                </div>
              </div>

              {/* Core battery cell callout */}
              <div className="absolute bottom-[20%] left-[45%] flex flex-col items-center pointer-events-none">
                <div className="w-3.5 h-3.5 rounded-full border border-emerald-500 bg-white flex items-center justify-center mb-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                </div>
                <div className="h-8 w-[1px] bg-emerald-300" />
                <div className="bg-white border border-emerald-200 px-1.5 py-0.5 rounded font-mono text-[8px] text-emerald-600 shadow-xs font-bold">
                  Core_Cell_3S (BMS PROTECTED)
                </div>
              </div>

              <div className="absolute top-4 left-4 font-mono text-[8px] text-gray-400 font-bold">
                X: 452.2 | Y: 118.9 | Z: 009.1
              </div>
              <div className="absolute bottom-4 right-4 font-mono text-[8px] text-gray-400 font-bold text-right">
                CHASSIS_DYNAMICS_V4
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary widgets at bottom */}
      <div className="grid grid-cols-3 gap-4 border-t border-gray-150 pt-4">
        <div className="flex items-center gap-3 bg-gray-50 p-2.5 rounded-lg border border-gray-100 shadow-xs">
          <Gauge className="w-5 h-5 text-blue-600 animate-pulse" />
          <div className="font-mono text-xs font-bold text-gray-700">
            <span className="text-gray-400 text-[8px] block font-bold uppercase">MAX VELOCITY</span>
            <span>1.2 M/S</span>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-gray-50 p-2.5 rounded-lg border border-gray-100 shadow-xs">
          <Compass className="w-5 h-5 text-indigo-500" />
          <div className="font-mono text-xs font-bold text-gray-700">
            <span className="text-gray-400 text-[8px] block font-bold uppercase">TOTAL MASS</span>
            <span>1.84 KG</span>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-gray-50 p-2.5 rounded-lg border border-gray-100 shadow-xs">
          <Zap className="w-5 h-5 text-emerald-500" />
          <div className="font-mono text-xs font-bold text-gray-700">
            <span className="text-gray-400 text-[8px] block font-bold uppercase">CONSUMPTION</span>
            <span>~350 MAH/H</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 6. SYSTEM ARCHITECTURE SLIDE
export const ArchitectureSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] bg-[size:32px_32px] opacity-70 pointer-events-none" />

      {/* Header */}
      <div className="border-l-4 border-emerald-500 pl-4 py-1">
        <div className="font-mono text-[9px] tracking-wider text-emerald-600 font-bold uppercase mb-1">CORE_SYSTEM_V4 // CONTROLLER ARCHITECTURE</div>
        <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">System Architecture</h2>
      </div>

      <div className="grid grid-cols-12 gap-6 my-auto flex-1 py-4">
        {/* Left Columns (low-level vs high level logic details) */}
        <div className="col-span-5 flex flex-col gap-4">
          {/* Low level controller */}
          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 relative shadow-xs">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-mono text-xs font-bold text-blue-600 uppercase">Low-Level Control</h3>
              <span className="bg-blue-50 border border-blue-150 text-blue-600 font-mono text-[8px] px-1.5 py-0.5 rounded font-bold">CORE_A</span>
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-white border border-gray-200 p-2 rounded-lg shrink-0 shadow-xs">
                <Cpu className="w-6 h-6 text-indigo-500" />
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-tight text-gray-800 mb-0.5">Arduino Mega 2560</h4>
                <p className="text-[11px] text-gray-500 font-medium leading-relaxed">
                  Dedicated to real-time kinematic calculations, high-frequency sensor fusion, and micro-second PID actuator loops.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 border-t border-gray-150 pt-2.5 mt-2.5 font-mono text-[9px] text-gray-400 font-bold uppercase">
              <div className="flex items-center gap-1">
                <ChevronRight className="w-3 h-3 text-blue-500" /> PIN_D2: INT_0
              </div>
              <div className="flex items-center gap-1">
                <ChevronRight className="w-3 h-3 text-blue-500" /> PIN_A0: V_SENSE
              </div>
              <div className="flex items-center gap-1">
                <ChevronRight className="w-3 h-3 text-blue-500" /> PIN_D10: PWM_M1
              </div>
              <div className="flex items-center gap-1">
                <ChevronRight className="w-3 h-3 text-blue-500" /> PIN_SDA: I2C_BUS
              </div>
            </div>
          </div>

          {/* High level intelligence */}
          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl p-4 relative shadow-xs">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-mono text-xs font-bold text-emerald-600 uppercase">High-Level Intelligence</h3>
              <span className="bg-emerald-50 border border-emerald-150 text-emerald-600 font-mono text-[8px] px-1.5 py-0.5 rounded font-bold">CORE_B</span>
            </div>
            <div className="flex gap-3 items-start">
              <div className="bg-white border border-gray-200 p-2 rounded-lg shrink-0 shadow-xs">
                <Wifi className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-tight text-gray-800 mb-0.5">ESP32-WROOM-32</h4>
                <p className="text-[11px] text-gray-500 font-medium leading-relaxed">
                  Manages concurrent Wi-Fi/Bluetooth stack processes, telemetry streaming, and asynchronous JSON API handshakes.
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-150 pt-2.5 mt-2.5 font-mono text-[9px] font-bold text-gray-400 uppercase">
              <div className="flex justify-between mb-1">
                <span>SERIAL_COMM (UART2)</span>
                <span className="text-emerald-600 font-bold">115200 BAUD</span>
              </div>
              <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[85%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right schematic image details */}
        <div className="col-span-7 h-full">
          <div className="bg-gray-50/80 border border-gray-200/60 rounded-xl h-full overflow-hidden relative flex flex-col justify-between shadow-xs">
            <div className="bg-slate-50 flex-grow relative overflow-hidden flex items-center justify-center p-4">
              {/* Circuit board chip visual blueprint */}
              <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />
              <div className="absolute w-[80%] h-[1px] bg-blue-100" />
              <div className="absolute h-[80%] w-[1px] bg-blue-100" />

              <svg className="w-[85%] h-[85%] text-blue-200" viewBox="0 0 300 160" fill="none">
                {/* Board grid and chips */}
                <rect x="20" y="20" width="260" height="120" rx="4" stroke="currentColor" strokeWidth="1.5" />
                <rect x="50" y="40" width="70" height="50" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <text x="55" y="55" fill="currentColor" className="font-mono text-[8px] opacity-50">MEGA_2560</text>
                
                <rect x="180" y="45" width="50" height="60" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <text x="185" y="60" fill="currentColor" className="font-mono text-[8px] opacity-50">ESP32</text>
                
                {/* Paths between them */}
                <path d="M120 65 H180" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M85 90 V115 H205 V105" stroke="#3b82f6" strokeWidth="1" />
              </svg>

              {/* Blueprint details */}
              <div className="absolute top-4 left-4 flex flex-col gap-1.5 font-mono text-[8px] font-bold">
                <div className="bg-white/95 border border-gray-200 px-2 py-0.5 text-blue-600 rounded flex items-center gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                  BUS_COMM_IDLE
                </div>
                <div className="bg-white/95 border border-gray-200 px-2 py-0.5 text-emerald-600 rounded flex items-center gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                  LINK_ACTIVE
                </div>
              </div>

              {/* Floating diagnostic block */}
              <div className="absolute bottom-4 right-4 bg-white/95 border border-gray-200 p-2.5 font-mono text-[8px] text-gray-500 rounded shadow-sm w-40 leading-relaxed">
                <div className="text-blue-600 font-bold uppercase border-b border-gray-150 pb-1 mb-1 text-[9px]">DIAG_DATA</div>
                <div className="flex justify-between"><span>CPU_TEMP</span> <span className="text-emerald-600 font-bold">42.8°C</span></div>
                <div className="flex justify-between"><span>LATENCY</span> <span className="text-blue-600 font-bold">12ms</span></div>
                <div className="flex justify-between"><span>UPTIME</span> <span className="text-gray-700">02:14:59</span></div>
              </div>
            </div>

            <div className="bg-white border-t border-gray-200 p-3 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <div className="font-mono text-[10px]">
                  <span className="font-bold text-gray-800 block">Synchronous Handshake</span>
                  <span className="text-gray-400 font-semibold uppercase">Bi-directional UART</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600 shrink-0" />
                <div className="font-mono text-[10px]">
                  <span className="font-bold text-gray-800 block">Fail-Safe Routine</span>
                  <span className="text-gray-400 font-semibold uppercase">Watchdog timer status</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Footer */}
      <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 font-bold border-t border-gray-150 pt-4">
        <span>© 2026 NEURAL_CORE ROBOTICS. ALL SYSTEMS NOMINAL.</span>
        <div className="flex gap-4">
          <span>PRIVACY_PROTOCOL</span>
          <span>API_DOCS</span>
          <span className="text-emerald-600 underline">SYSTEM_STATUS</span>
        </div>
      </div>
    </div>
  );
};

// Dispatcher component that selects the slide render template
import { Slide } from '../types';

interface DynamicSlideProps {
  slide: Slide;
  onStartPlay?: () => void;
  onEnterDesign?: () => void;
  isEditing?: boolean;
}

export const DynamicSlide: React.FC<DynamicSlideProps> = ({ slide, onStartPlay, onEnterDesign, isEditing }) => {
  switch (slide.type) {
    case 'mission_control':
      return <MissionControlSlide onStartPlay={onStartPlay} onEnterDesign={onEnterDesign} isEditing={isEditing} />;
    case 'metrics':
      return <MetricsSlide />;
    case 'team':
      return <TeamSlide />;
    case 'perception':
      return <PerceptionSlide />;
    case 'power':
      return <PowerSlide />;
    case 'architecture':
      return <ArchitectureSlide />;
    default:
      return null;
  }
};
