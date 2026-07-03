/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Shield, Zap, Activity, Cpu, Compass, Users,
  CheckCircle, Terminal, Settings, Radio, Code, Move, RefreshCw, ZoomIn, ZoomOut, Sparkles, Wifi, Gauge
} from 'lucide-react';

interface SlideProps {
  onStartPlay?: () => void;
  onEnterDesign?: () => void;
  isEditing?: boolean;
}

// ========================================== SLIDE 1: COVER SLIDE ==========================================
export const MissionControlSlide: React.FC<SlideProps> = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-12 rounded-xl border border-gray-200 relative flex flex-col justify-between items-center text-center overflow-hidden shadow-lg select-none">
      {/* Subtle scan line effect */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-[pulse_2s_infinite] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] bg-[size:32px_32px] opacity-70 pointer-events-none" />

      {/* Background geometric design corners */}
      <div className="absolute top-10 left-10 w-8 h-8 border-t-2 border-l-2 border-blue-200/60" />
      <div className="absolute top-10 right-10 w-8 h-8 border-t-2 border-r-2 border-blue-200/60" />
      <div className="absolute bottom-10 left-10 w-8 h-8 border-b-2 border-l-2 border-blue-200/60" />
      <div className="absolute bottom-10 right-10 w-8 h-8 border-b-2 border-r-2 border-blue-200/60" />

      {/* Animated Vector Blueprint of Robot Car & LiDAR in the background as a watermark */}
      <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] opacity-[0.14] pointer-events-none z-0">
        <svg className="w-full h-full text-blue-600 overflow-visible" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Concentric rotating scanner base grids */}
          <circle cx="200" cy="210" r="150" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="5 5" className="animate-[spin_40s_linear_infinite]" style={{ transformOrigin: '200px 210px' }} />
          <circle cx="200" cy="210" r="120" stroke="#bfdbfe" strokeWidth="1.2" strokeDasharray="15 8" className="animate-[spin_25s_linear_infinite_reverse]" style={{ transformOrigin: '200px 210px' }} />
          <circle cx="200" cy="210" r="85" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3 3" />

          {/* LOWER DECK PLATE (Isometric wireframe) */}
          <polygon 
            points="200,290 270,255 270,165 200,130 130,165 130,255" 
            stroke="#2563eb" 
            strokeWidth="2" 
            fill="rgba(37, 99, 235, 0.03)" 
          />

          {/* WHEELS (Mecanum Wheel Cylinders with rollers) */}
          <g>
            <ellipse cx="115" cy="255" rx="10" ry="24" stroke="#475569" strokeWidth="2.5" fill="#1e293b" />
            <line x1="110" y1="240" x2="120" y2="250" stroke="#94a3b8" strokeWidth="1" />
            <line x1="110" y1="250" x2="120" y2="260" stroke="#94a3b8" strokeWidth="1" />
            <line x1="110" y1="260" x2="120" y2="270" stroke="#94a3b8" strokeWidth="1" />
            <circle cx="115" cy="255" r="4" fill="#94a3b8" />
          </g>
          
          <g>
            <ellipse cx="285" cy="255" rx="10" ry="24" stroke="#475569" strokeWidth="2.5" fill="#1e293b" />
            <line x1="280" y1="240" x2="290" y2="250" stroke="#94a3b8" strokeWidth="1" />
            <line x1="280" y1="250" x2="290" y2="260" stroke="#94a3b8" strokeWidth="1" />
            <line x1="280" y1="260" x2="290" y2="270" stroke="#94a3b8" strokeWidth="1" />
            <circle cx="285" cy="255" r="4" fill="#94a3b8" />
          </g>
          
          <g>
            <ellipse cx="115" cy="165" rx="10" ry="24" stroke="#475569" strokeWidth="2.5" fill="#1e293b" />
            <line x1="110" y1="150" x2="120" y2="160" stroke="#94a3b8" strokeWidth="1" />
            <line x1="110" y1="160" x2="120" y2="170" stroke="#94a3b8" strokeWidth="1" />
            <circle cx="115" cy="165" r="4" fill="#94a3b8" />
          </g>
          
          <g>
            <ellipse cx="285" cy="165" rx="10" ry="24" stroke="#475569" strokeWidth="2.5" fill="#1e293b" />
            <line x1="280" y1="150" x2="290" y2="160" stroke="#94a3b8" strokeWidth="1" />
            <line x1="280" y1="160" x2="290" y2="170" stroke="#94a3b8" strokeWidth="1" />
            <circle cx="285" cy="165" r="4" fill="#94a3b8" />
          </g>

          {/* ELEVATED TOP DECK PLATE (Acrylic wireframe shifted up) */}
          <polygon 
            points="200,245 270,210 270,120 200,85 130,120 130,210" 
            stroke="#60a5fa" 
            strokeWidth="2.5" 
            fill="rgba(96, 165, 250, 0.08)" 
          />

          {/* DECK SUPPORT PILLARS */}
          <line x1="130" y1="255" x2="130" y2="210" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3 2" />
          <line x1="270" y1="255" x2="270" y2="210" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3 2" />
          <line x1="130" y1="165" x2="130" y2="120" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3 2" />
          <line x1="270" y1="165" x2="270" y2="120" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3 2" />

          {/* CONTROLLERS (Arduino Mega outline & circuits on deck) */}
          <polygon points="160,150 185,138 200,150 175,162" stroke="#10b981" strokeWidth="1.5" fill="rgba(16, 185, 129, 0.15)" />
          <line x1="168" y1="147" x2="172" y2="145" stroke="#fbbf24" strokeWidth="1" />
          <line x1="180" y1="153" x2="185" y2="150" stroke="#fbbf24" strokeWidth="1" />

          {/* FRONT ULTRASONIC SENSOR HC-SR04 AT BUMPER */}
          <rect x="185" y="280" width="30" height="12" rx="2" stroke="#475569" strokeWidth="1.5" fill="#334155" />
          <circle cx="192" cy="286" r="4.5" stroke="#60a5fa" strokeWidth="1.5" fill="#0f172a" />
          <circle cx="208" cy="286" r="4.5" stroke="#60a5fa" strokeWidth="1.5" fill="#0f172a" />

          {/* Pulsing Sonar Front Radar Waves */}
          <g className="opacity-80">
            <path d="M 182,305 Q 200,325 218,305" stroke="#10b981" strokeWidth="1.5" fill="none" className="animate-ping" style={{ transformOrigin: '200px 286px' }} />
          </g>

          {/* LIDAR MOUNT TOWER (RPLIDAR A8 on center top deck) */}
          <ellipse cx="200" cy="165" rx="25" ry="11" stroke="#1e3a8a" strokeWidth="2" fill="#1e293b" />
          <rect x="195" y="145" width="10" height="15" fill="#475569" stroke="#334155" strokeWidth="1" />
          
          {/* Rotating LiDAR Drum */}
          <ellipse cx="200" cy="142" rx="28" ry="12" stroke="#2563eb" strokeWidth="2" fill="#0f172a" />
          <ellipse cx="200" cy="135" rx="26" ry="10" stroke="#10b981" strokeWidth="1.5" fill="#334155" />

          {/* Interactive Spinning Laser Sweep wedge */}
          <g className="animate-[spin_4s_linear_infinite]" style={{ transformOrigin: '200px 135px' }}>
            <path d="M 200,135 L 340,95 A 150,75 0 0,0 280,45 Z" fill="rgba(59, 130, 246, 0.16)" />
            <line x1="200" y1="135" x2="340" y2="95" stroke="#3b82f6" strokeWidth="2.5" />
            <circle cx="340" cy="95" r="3.5" fill="#60a5fa" className="animate-ping" />
          </g>
        </svg>
      </div>

      {/* Top Spacer */}
      <div className="h-6 z-10" />

      {/* Foreground Centered Content */}
      <div className="text-center my-auto z-10 flex flex-col justify-center items-center w-full max-w-5xl px-6">
        <h1 className="text-[42px] font-extrabold font-sans tracking-tight mb-6 uppercase text-slate-950 leading-none">
          Adaptive Smart <span className="text-blue-600">Autonomous Robot</span> <span className="text-slate-400 font-normal font-mono text-3xl">(ASAR)</span>
        </h1>
        
        <div className="flex flex-col items-center gap-2 mb-10">
          <div className="font-mono text-sm md:text-base text-teal-600 font-bold tracking-[0.2em] uppercase">
            BORG EL ARAB TECHNOLOGICAL UNIVERSITY
          </div>
          <div className="font-sans text-xs md:text-sm text-gray-500 font-medium tracking-wide uppercase">
            FACULTY OF INDUSTRY AND ENERGY TECHNOLOGY | IT DEPARTMENT
          </div>
        </div>
        
        {/* Credits Panel */}
        <div className="grid grid-cols-2 gap-8 w-full max-w-2xl bg-gray-50/90 border border-gray-200/60 p-6 rounded-xl select-text shadow-xs font-sans">
          <div className="text-center">
            <div className="text-xs font-mono text-blue-600 uppercase tracking-widest mb-1.5 font-bold">Project Supervisor</div>
            <div className="font-sans text-base font-extrabold text-slate-800">Eng. El-Houssein Tawfik</div>
          </div>
          <div className="text-center border-l border-gray-200">
            <div className="text-xs font-mono text-blue-600 uppercase tracking-widest mb-1.5 font-bold">Team Leader</div>
            <div className="font-sans text-base font-extrabold text-slate-800">Abdallah Allam</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========================================== SLIDE 2: ASAR TEAM ==========================================
export const TeamSlide: React.FC = () => {
  const TEAM_MEMBERS = [
    { name: "Abdelrahman M. Abdel-Fattah", id: "2520550", subTeam: "LiDAR Team", task: "Raw Data Reading & LiDAR Setup", grade: 12 },
    { name: "Mohamed H. Shaban", id: "2520780", subTeam: "LiDAR Team", task: "LiDAR Distance Processing", grade: 12 },
    { name: "Youssef Hammam Masoud", id: "2540299", subTeam: "IMU / MPU Team", task: "Emergency Stop Handling", grade: 4 },
    { name: "Youssef Wagdy El-Sayed", id: "2540300", subTeam: "IMU / MPU Team", task: "Gyro/Accel Data Fusion", grade: 8 },
    { name: "Assem Walid Khamis", id: "2560148", subTeam: "IMU / MPU Team", task: "Drift Correction & Angles", grade: 8 },
    { name: "Mohamed Farhat Nasr", id: "2540213", subTeam: "IMU / MPU Team", task: "IMU Calibration & Filter", grade: 8 },
    { name: "Mostafa Ahmed Sayed", id: "2540244", subTeam: "Core System", task: "System Bridge & Init", grade: 5 },
    { name: "Ezzat A. Ahmed Mbrok", id: "2520622", subTeam: "Core System", task: "Path Following Decision Logic", grade: 12 },
    { name: "Fares Ibrahim Mohamed", id: "2520673", subTeam: "Core System", task: "Obstacle Detection Algos", grade: 1 },
    { name: "Ibrahim Faraj Abdel-Mawgoud", id: "2520070", subTeam: "Core System", task: "Movement State Machine", grade: 12 },
    { name: "Ahmed Fathy Ahmed", id: "2520112", subTeam: "Core System", task: "Path Planning Algorithm", grade: 0 },
    { name: "Nour Yasser Zakaria", id: "2521059", subTeam: "Core System", task: "Noise Filtering & Cleaning", grade: 2 },
    { name: "Amani Bilal Abu Zeid", id: "2520186", subTeam: "Motion Control", task: "Forward/Backward PWM Tuning", grade: 12 },
    { name: "Shams Mohamed Abdel-Hakim", id: "2560129", subTeam: "Motion Control", task: "Left/Right Turning Logic", grade: 12 },
    { name: "Manar Moussa Saeed", id: "2520971", subTeam: "Motion Control", task: "L298N Code & PWM Mapping", grade: 9 },
    { name: "Malak Ahmed Mohamed", id: "2520959", subTeam: "Sensor Fusion", task: "Ultrasonic Driver & Distances", grade: 9 },
    { name: "Alaa Mohamed El-Hefny", id: "2520175", subTeam: "Sensor Fusion", task: "Multi-sensor Sync & Validation", grade: 12 },
    { name: "Samah Mahdy Salah", id: "2520486", subTeam: "Testing & Debug", task: "Logging & Optimization", grade: 9 },
    { name: "Yasmin Samir Abdessalam", id: "2521121", subTeam: "Testing & Debug", task: "Modules Unit Testing", grade: 9 },
    { name: "Asmaa Ashraf Attia", id: "2521242", subTeam: "Integration & Testing", task: "Full System Integration", grade: 12 },
    { name: "Shams Mohamed Jaber", id: "2550031", subTeam: "Integration & Testing", task: "Sub-module Debugging", grade: 12 },
    { name: "Shaymaa Emad Mohamed", id: "2520550", subTeam: "Integration & Testing", task: "Documentation & QA", grade: 9 }
  ];

  const leftColumnMembers = TEAM_MEMBERS.slice(0, 11);
  const rightColumnMembers = TEAM_MEMBERS.slice(11, 22);

  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      {/* Top-to-bottom sweeping line animation */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-blue-600 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">ASAR Team</h2>
        </div>
      </div>

      {/* Team Leader Highlight Card */}
      <div className="bg-gradient-to-r from-blue-50/70 to-indigo-50/70 border border-blue-200/60 p-3 rounded-xl flex items-center justify-between shadow-xs mb-3 mt-4 z-10 relative select-text">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-600 border border-white flex items-center justify-center text-white font-mono text-xs font-bold shadow animate-[pulse_2s_infinite]">
            TL
          </div>
          <div>
            <div className="text-[9px] font-mono text-blue-600 uppercase tracking-widest font-bold mb-0.5">Overall Team Leader</div>
            <h3 className="text-base font-extrabold text-slate-800 uppercase leading-none font-sans">Abdallah Allam</h3>
          </div>
        </div>
        <div className="text-right font-mono text-[9px] text-indigo-700 bg-indigo-50 border border-indigo-150 px-2.5 py-1 rounded font-bold uppercase tracking-wider animate-pulse">
          Core System Architecture & Strategy Coordinator
        </div>
      </div>

      {/* Roster Spreadsheet split columns */}
      <div className="grid grid-cols-2 gap-6 my-auto flex-grow z-10 relative py-1 text-[12px] select-text">
        {/* Left Column Table */}
        <div className="border border-gray-200/80 rounded-lg overflow-hidden bg-white/60 backdrop-blur-xs">
          <table className="w-full text-left border-collapse font-sans">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200 text-gray-500 font-mono text-[9.5px] font-bold uppercase">
                <th className="py-2.5 px-3">Name</th>
                <th className="py-2.5 px-3">Academic ID</th>
                <th className="py-2.5 px-3">Sub-Team</th>
              </tr>
            </thead>
            <tbody>
              {leftColumnMembers.map((member, idx) => (
                <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-slate-50 transition-colors">
                  <td className="py-2 px-3 font-extrabold text-slate-900 text-[13.5px] max-w-[200px] truncate">{member.name}</td>
                  <td className="py-2 px-3 font-mono text-slate-400 text-[11.5px] font-semibold">{member.id}</td>
                  <td className="py-2 px-3">
                    <span className="px-2.5 py-0.5 rounded text-[9.5px] font-mono font-bold bg-blue-50 text-blue-700 uppercase">{member.subTeam}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Column Table */}
        <div className="border border-gray-200/80 rounded-lg overflow-hidden bg-white/60 backdrop-blur-xs">
          <table className="w-full text-left border-collapse font-sans">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200 text-gray-500 font-mono text-[9.5px] font-bold uppercase">
                <th className="py-2.5 px-3">Name</th>
                <th className="py-2.5 px-3">Academic ID</th>
                <th className="py-2.5 px-3">Sub-Team</th>
              </tr>
            </thead>
            <tbody>
              {rightColumnMembers.map((member, idx) => (
                <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-slate-50 transition-colors">
                  <td className="py-2 px-3 font-extrabold text-slate-900 text-[13.5px] max-w-[200px] truncate">{member.name}</td>
                  <td className="py-2 px-3 font-mono text-slate-400 text-[11.5px] font-semibold">{member.id}</td>
                  <td className="py-2 px-3">
                    <span className="px-2.5 py-0.5 rounded text-[9.5px] font-mono font-bold bg-blue-50 text-blue-700 uppercase">{member.subTeam}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// ========================================== SLIDE 3: PROJECT INTRODUCTION ==========================================
export const IntroductionSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes comparator-pulse {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 4px rgba(239,68,68,0.1)); }
          50% { transform: scale(1.08); filter: drop-shadow(0 0 10px rgba(239,68,68,0.3)); }
        }
        @keyframes signal-flow {
          0% { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes text-blink {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1.0; }
        }
        @keyframes crawl-trajectory {
          0% { stroke-dashoffset: 350; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.3); opacity: 1.0; }
        }
        .error-node {
          animation: comparator-pulse 2.5s ease-in-out infinite;
          transform-origin: 75px 45px;
        }
        .loop-flow {
          stroke-dasharray: 6 3;
          animation: signal-flow 1.5s linear infinite;
        }
        .blink-txt {
          animation: text-blink 2s ease-in-out infinite;
        }
        .corrected-curve {
          stroke-dasharray: 350;
          stroke-dashoffset: 350;
          animation: crawl-trajectory 6s ease-in-out infinite;
        }
        .dot-pulse {
          animation: pulse-dot 2s infinite;
        }
      `}} />

      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-blue-600 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Project Introduction</h2>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-stretch z-10 relative py-2 select-text">
        {/* Left Column: Refructured 3 Sub-Areas with elevated text sizes */}
        <div className="col-span-7 flex flex-col justify-between text-left pl-2 py-1 gap-4">
          {/* Sub-Area 1: The Introduction Area */}
          <div className="bg-slate-50/30 p-4 rounded-xl border border-slate-200/40">
            <span className="font-mono text-[11px] text-blue-600 font-extrabold uppercase tracking-wider mb-1 block">01 / Introduction</span>
            <p className="text-[15.5px] text-slate-700 font-semibold leading-relaxed font-sans font-medium">
              The Adaptive Smart Autonomous Robot (ASAR) is a smart 4-wheeled robot that utilizes sensor fusion to consolidate environmental readings. It exposes this data to either AI or conventional control systems to achieve self-driving, self-adaptation, and self-avoidance capabilities.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 flex-grow">
            {/* Sub-Area 2: Project Idea */}
            <div className="bg-slate-50/50 border border-slate-200/50 p-4 rounded-xl flex flex-col justify-between">
              <div>
                <span className="font-mono text-[11.5px] text-blue-600 font-extrabold uppercase tracking-wider mb-2 block">02 / The Project Idea</span>
                <p className="text-[12px] text-slate-500 font-bold leading-relaxed mb-3">
                  ASAR operates as a closed-loop system, using live sensors to check if actual movements match commands:
                </p>
                <ul className="space-y-2 text-[11.5px] text-slate-800 font-bold font-mono uppercase leading-tight">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                    <span>Closed-Loop: Checks sensor feeds to verify correct movements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                    <span>Error Calculation: Computes drift in angles or distance on-the-fly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                    <span>Adaptive Math: Adjusts the next equation with + or - errors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                    <span>Exposes data: Outlines clean profiles for AI or manual override control</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sub-Area 3: Project Objectives */}
            <div className="bg-slate-50/50 border border-slate-200/50 p-4 rounded-xl flex flex-col justify-between">
              <div>
                <span className="font-mono text-[11.5px] text-blue-600 font-extrabold uppercase tracking-wider mb-2 block">03 / Project Objectives</span>
                <p className="text-[12px] text-slate-500 font-bold leading-relaxed mb-3">
                  We engineered the robot to achieve these key criteria:
                </p>
                <ul className="space-y-2 text-[11.5px] text-slate-800 font-bold font-mono uppercase leading-tight">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                    <span>Self-Drive: Map rooms and navigate on its own</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                    <span>Self-Adapt: Adjust to floors and correct gyro drift</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                    <span>Self-Avoid: Detect obstacles and brake safely</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                    <span>Real-Time Sync: Dual-MCU communications loop</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Splitted Diagram (White Background with active 60fps animations) */}
        <div className="col-span-5 h-full flex flex-col justify-between gap-4">
          {/* Top Panel: System Closed-Loop Flow */}
          <div className="bg-white border border-gray-200 rounded-xl flex-1 flex flex-col justify-between p-3.5 relative overflow-hidden text-gray-800 shadow-xs h-[48%]">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-100 pb-1 uppercase tracking-widest leading-none mb-1">
              SYSTEM_CLOSED_LOOP_MAP // FLOW_A
            </div>
            <div className="flex-grow flex items-center justify-center p-1 bg-gray-50/50 rounded-lg border border-gray-100 relative h-[80%]">
              <svg className="w-full h-full text-slate-400 overflow-visible" viewBox="0 0 300 90" fill="none">
                {/* Input Target */}
                <rect x="5" y="30" width="35" height="20" rx="2" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" />
                <text x="22.5" y="42" fill="#64748b" textAnchor="middle" className="font-mono text-[5.5px] font-bold">TARGET</text>
                
                {/* Comparator */}
                <g className="error-node">
                  <circle cx="75" cy="40" r="9" fill="#fef2f2" stroke="#ef4444" strokeWidth="1" />
                  <text x="75" y="43" fill="#ef4444" textAnchor="middle" className="font-mono text-[8px] font-bold blink-txt">±</text>
                </g>
                <path d="M 40,40 H 66" stroke="#3b82f6" strokeWidth="1.2" className="loop-flow" />

                {/* Controller Brain */}
                <rect x="105" y="20" width="65" height="30" rx="3" fill="#f8fafc" stroke="#2563eb" strokeWidth="1.2" />
                <text x="137.5" y="32" fill="#2563eb" textAnchor="middle" className="font-mono text-[6.5px] font-bold">BRAIN</text>
                <text x="137.5" y="42" fill="#475569" textAnchor="middle" className="font-mono text-[4.5px]">AI/CONTROL</text>
                <path d="M 84,40 H 105" stroke="#3b82f6" strokeWidth="1.2" className="loop-flow" />

                {/* 4-Wheel Actuation Output */}
                <rect x="205" y="25" width="55" height="25" rx="2" fill="#f8fafc" stroke="#10b981" strokeWidth="1.2" />
                <text x="232.5" y="36" fill="#10b981" textAnchor="middle" className="font-mono text-[5.5px] font-bold">4-WHEEL</text>
                <text x="232.5" y="44" fill="#64748b" textAnchor="middle" className="font-mono text-[4.5px]">MOTION</text>
                <path d="M 170,40 H 205" stroke="#3b82f6" strokeWidth="1.2" className="loop-flow" />

                {/* Feedback line and Sensor box */}
                <path d="M 232.5,50 V 75 H 75 V 49" stroke="#fbbf24" strokeWidth="1.2" className="loop-flow" />
                <rect x="110" y="65" width="65" height="20" rx="2" fill="#f8fafc" stroke="#fbbf24" strokeWidth="1.2" />
                <text x="142.5" y="77" fill="#d97706" textAnchor="middle" className="font-mono text-[5.5px] font-bold">SENSORS</text>
              </svg>
            </div>
          </div>

          {/* Bottom Panel: Motion Trajectory & Real-Time Adjustment Graph */}
          <div className="bg-white border border-gray-200 rounded-xl flex-1 flex flex-col justify-between p-3.5 relative overflow-hidden text-gray-800 shadow-xs h-[48%]">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-100 pb-1 uppercase tracking-widest leading-none mb-1">
              REAL_TIME_ERROR_CORRECTION_PLOT // FLOW_B
            </div>
            <div className="flex-grow flex items-center justify-center p-1 bg-gray-50/50 rounded-lg border border-gray-100 relative h-[80%]">
              <svg className="w-full h-full text-slate-400 overflow-visible" viewBox="0 0 300 90" fill="none">
                {/* Reference Coordinate Axes */}
                <line x1="20" y1="10" x2="20" y2="80" stroke="#cbd5e1" strokeWidth="1" />
                <line x1="20" y1="80" x2="290" y2="80" stroke="#cbd5e1" strokeWidth="1" />
                
                {/* Target Path - Straight Green Dashed Line */}
                <line x1="20" y1="45" x2="290" y2="45" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 3" />
                <text x="235" y="40" fill="#10b981" className="font-mono text-[6px] font-bold">TARGET PATH</text>

                {/* Raw Drift/Jitter - Red Curve (moving away from target!) */}
                <path d="M 20,45 Q 60,25 110,20 T 200,10 T 290,5" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="2 1" />
                <text x="210" y="20" fill="#ef4444" className="font-mono text-[6px] font-bold">DRIFT & JITTER</text>

                {/* Corrected Path - Blue Self-Correcting Curve (oscillates but converges to green target!) */}
                <path d="M 20,45 Q 60,65 110,48 T 200,45 H 290" stroke="#2563eb" strokeWidth="2" className="corrected-curve" />
                <text x="145" y="62" fill="#2563eb" className="font-mono text-[6px] font-bold">CLOSED-LOOP CORRECTED</text>

                {/* Real-time feedback point indicator */}
                <g className="dot-pulse">
                  <circle cx="200" cy="45" r="4.5" fill="#2563eb" stroke="white" strokeWidth="1" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========================================== SLIDE 4: PROBLEM STATEMENT ==========================================
export const ProblemStatementSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes traditional-crash {
          0% { transform: translateX(0px); opacity: 1; }
          40% { transform: translateX(55px); opacity: 1; }
          45% { transform: translateX(55px); }
          100% { transform: translateX(55px); }
        }
        @keyframes ai-bypass {
          0% { transform: translate(0px, 0px); }
          30% { transform: translate(35px, 0px); } /* Approaches obstacle, triggers API call */
          50% { transform: translate(55px, -22px); } /* Curves around barrier */
          75% { transform: translate(95px, 0px); } /* Restores path */
          100% { transform: translate(115px, 0px); }
        }
        @keyframes alert-flash {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 1.0; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.6); opacity: 0.9; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .crash-dot {
          animation: traditional-crash 4s ease-in-out infinite;
        }
        .bypass-dot {
          animation: ai-bypass 5s ease-in-out infinite;
        }
        .flash-alert {
          animation: alert-flash 1s step-end infinite;
        }
        .ping-ring {
          animation: pulse-ring 2s cubic-bezier(0.215, 0.610, 0.355, 1) infinite;
          transform-origin: 75px 40px;
        }
        .api-ring {
          animation: pulse-ring 2s cubic-bezier(0.215, 0.610, 0.355, 1) infinite;
          transform-origin: 55px 40px;
        }
      `}} />

      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-red-500 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Problem Statement</h2>
        </div>
      </div>

      {/* Grid Split */}
      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-stretch z-10 relative py-2 select-text">
        {/* Left Column: Traditional Problems vs. Our Agile AI solution in plain English */}
        <div className="col-span-7 flex flex-col justify-between text-left pl-2 py-1 gap-4">
          
          {/* Sub-Area 1: The Traditional System Problem */}
          <div className="bg-red-50/30 p-4 rounded-xl border border-red-150/40 flex-1 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[11px] text-red-600 font-extrabold uppercase tracking-wider mb-1 block">01 / Traditional Mobile Obstruction</span>
              <p className="text-[13.5px] text-slate-700 font-semibold leading-relaxed font-medium">
                Traditional autonomous systems are locked into the exact logic they were programmed with. If they face an unplanned situation or dynamic layout they do not recognize, they immediately get stuck, crash, or fail entirely. They cannot adapt on-the-fly.
              </p>
            </div>
            <div className="border-t border-red-100/50 pt-2 mt-2 font-mono text-[9px] text-red-500 font-bold uppercase">
              • CONSTRAINT: HARDCODED LOGIC & STATIC OBSTACLE BLIND SPOTS
            </div>
          </div>

          {/* Sub-Area 2: Our Agile Embedded AI Solution */}
          <div className="bg-blue-50/30 p-4 rounded-xl border border-blue-150/40 flex-1 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[11px] text-blue-600 font-extrabold uppercase tracking-wider mb-1 block">02 / Agile Embedded AI Resolution</span>
              <p className="text-[13.5px] text-slate-700 font-semibold leading-relaxed font-medium">
                Our robot uses an agile AI engine via on-board API calls. We do not run a heavy, power-hungry LLM model directly on-board our small car. Instead, our lightweight API setup communicates with cloud AI models in real-time, allowing the robot to dynamically generate entirely new maneuvers and bypass paths for limitless situations.
              </p>
            </div>
            <div className="border-t border-blue-100/50 pt-2 mt-2 font-mono text-[9px] text-blue-600 font-bold uppercase">
              • SOLUTION: LIGHTWEIGHT API INTELLIGENCE & REAL-TIME MANEUVERS
            </div>
          </div>

        </div>

        {/* Right Column: Split Dual-Visualizer (White Background) */}
        <div className="col-span-5 h-full flex flex-col justify-between gap-4">
          
          {/* Visualizer A: Traditional Rigid Logic Failure */}
          <div className="bg-white border border-gray-200 rounded-xl flex-1 flex flex-col justify-between p-3.5 relative overflow-hidden text-gray-800 shadow-xs h-[48%]">
            <div className="font-mono text-[8px] text-red-500 font-bold border-b border-gray-100 pb-1 uppercase tracking-widest leading-none mb-1">
              TRADITIONAL_RIGID_SYSTEM // CRASH_FAIL
            </div>
            <div className="flex-grow flex items-center justify-center p-1 bg-gray-50/50 rounded-lg border border-gray-100 relative h-[80%]">
              <svg className="w-full h-full text-slate-400 overflow-visible" viewBox="0 0 200 80" fill="none">
                {/* Path corridor */}
                <line x1="10" y1="40" x2="190" y2="40" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
                
                {/* Obstacle block */}
                <rect x="75" y="20" width="10" height="40" fill="#fca5a5" stroke="#ef4444" strokeWidth="1" />
                
                {/* Traditional Rigid Robot - Red Dot */}
                <circle cx="20" cy="40" r="4.5" fill="#ef4444" stroke="white" strokeWidth="1" className="crash-dot" />
                
                {/* Impact Alarm flash */}
                <circle cx="75" cy="40" r="8" stroke="#ef4444" strokeWidth="1.5" fill="none" className="ping-ring" />
                <rect x="95" y="30" width="45" height="20" rx="2" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1" className="flash-alert" />
                <text x="117.5" y="42" fill="#ef4444" textAnchor="middle" className="font-mono text-[5.5px] font-bold font-sans">STUCK / FAIL</text>
              </svg>
            </div>
          </div>

          {/* Visualizer B: Our Agile AI Recalculation Success */}
          <div className="bg-white border border-gray-200 rounded-xl flex-1 flex flex-col justify-between p-3.5 relative overflow-hidden text-gray-800 shadow-xs h-[48%]">
            <div className="font-mono text-[8px] text-blue-500 font-bold border-b border-gray-100 pb-1 uppercase tracking-widest leading-none mb-1">
              ASAR_EMBEDDED_AI_SYSTEM // RE-ROUTE_SUCCESS
            </div>
            <div className="flex-grow flex items-center justify-center p-1 bg-gray-50/50 rounded-lg border border-gray-100 relative h-[80%]">
              <svg className="w-full h-full text-slate-400 overflow-visible" viewBox="0 0 200 80" fill="none">
                {/* Target path line */}
                <line x1="10" y1="40" x2="190" y2="40" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
                
                {/* Obstacle block */}
                <rect x="75" y="25" width="10" height="30" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
                
                {/* Dynamic AI Bypass curved path overlay */}
                <path d="M 10,40 H 55 Q 75,18 95,40 H 190" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="4 2" />

                {/* Our Smart Robot - Blue Dot with API beam animation */}
                <circle cx="20" cy="40" r="4.5" fill="#2563eb" stroke="white" strokeWidth="1" className="bypass-dot" />
                
                {/* API Ingestion call rings */}
                <circle cx="55" cy="40" r="6" stroke="#3b82f6" strokeWidth="1.2" fill="none" className="api-ring" />

                <rect x="115" y="25" width="55" height="20" rx="2" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
                <text x="142.5" y="37" fill="#15803d" textAnchor="middle" className="font-mono text-[5px] font-bold font-sans">AI DECISION</text>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// ========================================== SLIDE 5: SYSTEM OVERVIEW ==========================================
export const SystemOverviewSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes core-pulse {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 4px rgba(37,99,235,0.15)); }
          50% { transform: scale(1.07); filter: drop-shadow(0 0 12px rgba(37,99,235,0.35)); }
        }
        @keyframes radial-current {
          0% { stroke-dashoffset: 32; }
          100% { stroke-dashoffset: 0; }
        }
        .pillar-core {
          animation: core-pulse 3s ease-in-out infinite;
          transform-origin: 150px 95px;
        }
        .current-path {
          stroke-dasharray: 8 4;
          animation: radial-current 1.5s linear infinite;
        }
      `}} />

      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-blue-600 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">System Overview</h2>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-stretch z-10 relative py-2 select-text">
        {/* Left Column: 3 Pillars with rich, clean plain-English text */}
        <div className="col-span-7 flex flex-col justify-between text-left pl-2 py-1 gap-3">
          
          {/* High-impact Intro Text highlighting the word "Pillars" */}
          <p className="text-[15px] text-slate-700 font-semibold leading-relaxed font-sans font-medium">
            The complete ASAR vehicle architecture is constructed on three main <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-extrabold font-sans">Pillars</span>, serving as the core blueprint that coordinates all hardware, power safety modules, and cloud decision APIs.
          </p>

          <div className="space-y-2 flex-grow mt-1">
            {/* Pillar 1 */}
            <div className="bg-slate-50/50 border border-slate-200/50 p-3 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <Compass className="w-4.5 h-4.5 text-blue-600" />
                <h4 className="font-extrabold text-[12.5px] uppercase text-slate-900 leading-none">01 / Mechanical Pillar</h4>
              </div>
              <ul className="space-y-1.5 font-mono text-[10.5px] text-slate-700 font-bold uppercase leading-tight pl-1.5 mt-1.5">
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                  <span>Dual-Deck Acrylic Chassis Structural frame</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                  <span>Power Train system with geared DC motors</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                  <span>Steering system with omni-directional motion</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-slate-50/50 border border-slate-200/50 p-3 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <Zap className="w-4.5 h-4.5 text-amber-500 animate-bounce" style={{ animationDuration: '4s' }} />
                <h4 className="font-extrabold text-[12.5px] uppercase text-slate-900 leading-none">02 / Electrical and Electronics Pillar</h4>
              </div>
              <ul className="space-y-1.5 font-mono text-[10.5px] text-slate-700 font-bold uppercase leading-tight pl-1.5 mt-1.5">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 animate-pulse" />
                  <span>Dual Brain co-processing (Arduino Mega & ESP32)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span>LM2596 Buck Regulators conditioning stable 5V & 9V lines</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span>3S Lithium Battery Pack guarded by active BMS protection</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-slate-50/50 border border-slate-200/50 p-3 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <Code className="w-4.5 h-4.5 text-emerald-500" />
                <h4 className="font-extrabold text-[12.5px] uppercase text-slate-900 leading-none">03 / Software Pillar</h4>
              </div>
              <ul className="space-y-1.5 font-mono text-[10.5px] text-slate-700 font-bold uppercase leading-tight pl-1.5 mt-1.5">
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                  <span>Closed-Loop movement error feedback calibration</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 mt-1 shrink-0" />
                  <span>Lightweight cloud API calls to decide dynamic maneuvers</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 mt-1 shrink-0" />
                  <span>360-degree LiDAR SLAM environmental mapping grid</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Right Column: Visual 3-Axis System Architecture Diagram (White Background) */}
        <div className="col-span-5 h-full">
          <div className="bg-white border border-gray-200 rounded-2xl h-full flex flex-col justify-between p-5 relative overflow-hidden text-gray-800 min-h-[350px] shadow-xs">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-200 pb-2 uppercase tracking-widest">
              SYSTEM_PILLARS_RADIAL_BLUEPRINT // VISUAL_V1
            </div>
            <div className="flex-grow flex items-center justify-center p-2 bg-gray-50/50 rounded-xl border border-gray-100 my-2 relative">
              <svg className="w-[95%] h-[95%] text-slate-400 overflow-visible" viewBox="0 0 300 190" fill="none">
                {/* Radial paths flowing outwards from Core */}
                <line x1="150" y1="95" x2="150" y2="35" stroke="#3b82f6" strokeWidth="2.5" className="current-path" />
                <line x1="150" y1="95" x2="65" y2="145" stroke="#fbbf24" strokeWidth="2.5" className="current-path" />
                <line x1="150" y1="95" x2="235" y2="145" stroke="#10b981" strokeWidth="2.5" className="current-path" />

                {/* Mechanical Pillar Node (Top-Center) */}
                <g className="animate-bounce" style={{ animationDuration: '4s', transformOrigin: '150px 35px' }}>
                  <rect x="110" y="20" width="80" height="25" rx="3" fill="#f8fafc" stroke="#2563eb" strokeWidth="1.5" />
                  <text x="150" y="35" fill="#2563eb" textAnchor="middle" className="font-mono text-[6px] font-bold font-sans">MECHANICAL</text>
                </g>

                {/* Electrical & Electronics Pillar Node (Bottom-Left) */}
                <g className="animate-bounce" style={{ animationDuration: '4.5s', transformOrigin: '65px 145px' }}>
                  <rect x="25" y="130" width="80" height="25" rx="3" fill="#f8fafc" stroke="#d97706" strokeWidth="1.5" />
                  <text x="65" y="145" fill="#d97706" textAnchor="middle" className="font-mono text-[6px] font-bold font-sans font-sans">ELECTRICAL</text>
                </g>

                {/* Software Pillar Node (Bottom-Right) */}
                <g className="animate-bounce" style={{ animationDuration: '5s', transformOrigin: '235px 145px' }}>
                  <rect x="195" y="130" width="80" height="25" rx="3" fill="#f8fafc" stroke="#059669" strokeWidth="1.5" />
                  <text x="235" y="145" fill="#059669" textAnchor="middle" className="font-mono text-[6px] font-bold font-sans">SOFTWARE</text>
                </g>

                {/* Central System Core Hub */}
                <g className="pillar-core">
                  <circle cx="150" cy="95" r="22" fill="#1e293b" stroke="white" strokeWidth="2" />
                  <text x="150" y="98" fill="white" textAnchor="middle" className="font-mono text-[7px] font-bold">ASAR CORE</text>
                </g>
              </svg>
            </div>
            <div className="font-mono text-[9px] text-gray-500 font-bold border-t border-gray-200 pt-2 text-center uppercase">
              Unified 3-axis blueprint connects mechanical, power, and AI loop networks.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========================================== SLIDE 6: MECHANICAL - CHASSIS & GEOMETRY ==========================================
export const MechChassisSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      {/* Localized style block for custom visual animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float3d {
          0%, 100% { transform: translateY(0px) rotateX(15deg) rotateY(-15deg); }
          50% { transform: translateY(-8px) rotateX(15deg) rotateY(-15deg); }
        }
        .chassis-float {
          animation: float3d 5s ease-in-out infinite;
          transform-style: preserve-3d;
        }
      `}} />

      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-blue-600 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-wider text-blue-600 font-bold uppercase">Mechanical Pillar</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Chassis Design & 3D Geometry</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column (col-span-6 to allow plenty of space for the Merit List) */}
        <div className="col-span-6 flex flex-col gap-4">
          <div className="bg-gray-50/80 border border-gray-200/60 p-5 rounded-2xl shadow-xs">
            <h3 className="font-mono text-[10.5px] text-blue-600 font-bold uppercase mb-2">Structural Acrylic Design</h3>
            <p className="text-[13.5px] text-slate-700 font-semibold mb-4 leading-relaxed font-sans font-medium">
              Our robot uses a rounded double-deck chassis. The dual-level layout separates logical compute elements from high-torque motor vibrations, keeping our delicate sensors stable.
            </p>
            
            <span className="font-mono text-[10px] text-blue-600 font-extrabold uppercase tracking-wider mb-2 block">System Advantages (Merits)</span>
            <ul className="space-y-2 font-mono text-[10.5px] text-slate-700 font-bold uppercase leading-tight pl-1">
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 shrink-0" />
                <span>Lightweight Build: Lowers motor power draw so our battery pack lasts much longer</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 shrink-0" />
                <span>Open for Diagnostics & Ventilation: Allows us to quickly check for overheated components</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 shrink-0" />
                <span>Easy Troubleshooting: Seamlessly inspect, repair, and patch our wiring connections</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 shrink-0" />
                <span>Durable Acrylic: Robust material that endures heat and collisions without fracturing</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right column: 3D CAD schematic with white background */}
        <div className="col-span-6 h-full">
          <div className="bg-white border border-gray-200 rounded-2xl h-full flex flex-col justify-between p-5 relative overflow-hidden text-gray-800 min-h-[350px] shadow-xs">
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes hover-chassis {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-6px); }
              }
              .chassis-3d-float {
                animation: hover-chassis 4s ease-in-out infinite;
              }
              @keyframes scan-laser {
                0%, 100% { transform: translateY(0px); opacity: 0.2; }
                50% { transform: translateY(110px); opacity: 0.9; }
              }
              .chassis-laser {
                animation: scan-laser 3s ease-in-out infinite;
              }
            `}} />

            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-200 pb-2 uppercase tracking-widest">
              ASAR_PHYSICAL_CHASSIS_LAYOUT // 3D_ISOMETRIC_VIEW
            </div>
            <div className="flex-grow flex items-center justify-center p-2 bg-gray-50/50 rounded-xl border border-gray-100 my-2 relative">
              {/* Sweeping Laser Scan line across the 3D layout */}
              <div className="absolute top-[30px] left-1/2 -translate-x-1/2 w-[85%] h-[2px] bg-blue-500 chassis-laser pointer-events-none z-10 shadow-[0_0_6px_rgba(59,130,246,0.7)]" />

              <svg className="w-[90%] h-[90%] text-slate-400 overflow-visible chassis-3d-float" viewBox="0 0 300 165" fill="none">
                {/* 1. Lower Deck Plate (Thick Isometric Blue Acrylic) */}
                {/* Side thickness faces */}
                <polygon points="80,105 150,135 150,140 80,110" fill="#1d4ed8" stroke="#1e40af" strokeWidth="1" />
                <polygon points="150,135 220,105 220,110 150,140" fill="#1d4ed8" stroke="#1e40af" strokeWidth="1" />
                {/* Top face */}
                <polygon points="80,105 150,135 220,105 150,75" fill="rgba(37,99,235,0.06)" stroke="#2563eb" strokeWidth="2.2" />

                {/* 2. Supporting Metal Pillars (Vertical cylinders) */}
                <line x1="100" y1="102" x2="100" y2="65" stroke="#94a3b8" strokeWidth="3" />
                <line x1="200" y1="102" x2="200" y2="65" stroke="#94a3b8" strokeWidth="3" />
                <line x1="150" y1="117" x2="150" y2="80" stroke="#64748b" strokeWidth="3.5" />

                {/* 3. Upper Deck Plate (Thick Isometric Cyan Acrylic) */}
                {/* Side thickness faces */}
                <polygon points="100,65 150,85 150,89 100,69" fill="#2563eb" stroke="#1d4ed8" strokeWidth="1" />
                <polygon points="150,85 200,65 200,69 150,89" fill="#2563eb" stroke="#1d4ed8" strokeWidth="1" />
                {/* Top face */}
                <polygon points="100,65 150,85 200,65 150,45" fill="rgba(96,165,250,0.12)" stroke="#60a5fa" strokeWidth="2.2" />

                {/* 4. Merit Pointer Labels */}
                {/* Merit A: Durable Acrylic */}
                <g>
                  <path d="M 80,105 L 45,95 H 10" stroke="#64748b" strokeWidth="0.8" />
                  <circle cx="80" cy="105" r="2.5" fill="#ef4444" />
                  <text x="10" y="90" fill="#334155" className="font-mono text-[5.5px] font-extrabold">DURABLE ACRYLIC</text>
                </g>

                {/* Merit B: Open Frame Diagnostics & Ventilation */}
                <g>
                  <path d="M 120,95 L 90,120 H 5" stroke="#64748b" strokeWidth="0.8" />
                  <circle cx="120" cy="95" r="2.5" fill="#fbbf24" />
                  <text x="5" y="115" fill="#d97706" className="font-mono text-[5.5px] font-extrabold">OPEN DIAGNOSIS & VENTILATION</text>
                </g>
              </svg>
            </div>
            <div className="font-mono text-[9px] text-gray-500 font-bold border-t border-gray-200 pt-2 text-center uppercase">
              Isometric double-deck profile optimizes sensor coordinates and computing isolation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========================================== SLIDE 7: POWER TRAIN SYSTEM & MOTORS ==========================================
export const MechPowertrainSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes signal-pwm {
          0% { stroke-dashoffset: 32; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes wheel-spin-slow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -12; }
        }
        .pwm-wire {
          stroke-dasharray: 6 3;
          animation: signal-pwm 1s linear infinite;
        }
        .wheel-thread-anim {
          stroke-dasharray: 4 2;
          animation: wheel-spin-slow 1s linear infinite;
        }
      `}} />

      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-blue-600 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-wider text-blue-600 font-bold uppercase">Mechanical Pillar</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Power Train System & Motors</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Specs (col-span-6 to allow plenty of space for the Merit List) */}
        <div className="col-span-6 flex flex-col gap-4">
          <div className="bg-gray-50/80 border border-gray-200/60 p-5 rounded-2xl shadow-xs">
            <h3 className="font-mono text-[10.5px] text-blue-600 font-bold uppercase mb-2">Independent Hub Actuation</h3>
            <p className="text-[13.5px] text-slate-700 font-semibold mb-4 leading-relaxed font-sans font-medium">
              ASAR utilizes a 4-wheeled power train where each wheel hub is driven by its own independent geared DC motor. This 4-wheel independent setup provides massive torque and lets us control each wheel separately for smart driving maneuvers.
            </p>
            
            <span className="font-mono text-[10px] text-blue-600 font-extrabold uppercase tracking-wider mb-2 block">Powertrain Merits (Advantages)</span>
            <ul className="space-y-2 font-mono text-[10.5px] text-slate-700 font-bold uppercase leading-tight pl-1">
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 shrink-0" />
                <span>4-Wheel Independence: Each wheel hub has its own motor, allowing us to control speeds individually</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 shrink-0" />
                <span>High Startup Torque: Generates immense physical torque to easily carry heavy computing boards and battery packs</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 shrink-0" />
                <span>Isolated Back-Up Safety: If one motor or gear fails, the remaining wheels can keep the robot moving</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 shrink-0" />
                <span>Zero-Radius Pivoting: Allows the robot to translate sideways or rotate on its center point without changing angle</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right column: 4-Wheel Independent Actuation Map with white background */}
        <div className="col-span-6 h-full">
          <div className="bg-white border border-gray-200 rounded-2xl h-full flex flex-col justify-between p-5 relative overflow-hidden text-gray-800 min-h-[350px] shadow-xs">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-200 pb-2 uppercase tracking-widest">
              INDEPENDENT_4WD_ACTUATION_MAP // CONTROL_BLUEPRINT
            </div>
            <div className="flex-grow flex items-center justify-center p-2 bg-gray-50/50 rounded-xl border border-gray-100 my-2 relative">
              <svg className="w-[85%] h-[85%] text-slate-400 overflow-visible" viewBox="0 0 300 160" fill="none">
                {/* 4 Corner Independent Motor Hubs */}
                {/* Front-Left Motor */}
                <rect x="35" y="15" width="20" height="30" rx="2" fill="#334155" stroke="#1e293b" strokeWidth="1" />
                <path d="M 37,17 L 53,22 M 37,25 L 53,30 M 37,33 L 53,38" stroke="#cbd5e1" strokeWidth="1" className="wheel-thread-anim" />
                <text x="45" y="55" fill="#475569" textAnchor="middle" className="font-mono text-[5.5px] font-bold">M1 (FL)</text>

                {/* Rear-Left Motor */}
                <rect x="35" y="105" width="20" height="30" rx="2" fill="#334155" stroke="#1e293b" strokeWidth="1" />
                <path d="M 37,107 L 53,112 M 37,115 L 53,120 M 37,123 L 53,128" stroke="#cbd5e1" strokeWidth="1" className="wheel-thread-anim" />
                <text x="45" y="145" fill="#475569" textAnchor="middle" className="font-mono text-[5.5px] font-bold">M3 (RL)</text>

                {/* Front-Right Motor */}
                <rect x="245" y="15" width="20" height="30" rx="2" fill="#334155" stroke="#1e293b" strokeWidth="1" />
                <path d="M 247,17 L 263,22 M 247,25 L 263,30 M 247,33 L 263,38" stroke="#cbd5e1" strokeWidth="1" className="wheel-thread-anim" />
                <text x="255" y="55" fill="#475569" textAnchor="middle" className="font-mono text-[5.5px] font-bold">M2 (FR)</text>

                {/* Rear-Right Motor */}
                <rect x="245" y="105" width="20" height="30" rx="2" fill="#334155" stroke="#1e293b" strokeWidth="1" />
                <path d="M 247,107 L 263,112 M 247,115 L 263,120 M 247,123 L 263,128" stroke="#cbd5e1" strokeWidth="1" className="wheel-thread-anim" />
                <text x="255" y="145" fill="#475569" textAnchor="middle" className="font-mono text-[5.5px] font-bold">M4 (RR)</text>

                {/* Central L298N Dual Motor Driver Block */}
                <rect x="120" y="60" width="60" height="40" rx="3" fill="#f8fafc" stroke="#2563eb" strokeWidth="1.5" />
                <text x="150" y="78" fill="#2563eb" textAnchor="middle" className="font-mono text-[7px] font-bold">L298N DRIVER</text>
                <text x="150" y="88" fill="#64748b" textAnchor="middle" className="font-mono text-[5px]">PWM CONTROLLERS</text>

                {/* Independent PWM signal lines flowing outward to corner motors */}
                <path d="M 120,70 L 55,30" stroke="#3b82f6" strokeWidth="1.5" className="pwm-wire" />
                <path d="M 120,90 L 55,120" stroke="#3b82f6" strokeWidth="1.5" className="pwm-wire" />
                <path d="M 180,70 L 245,30" stroke="#3b82f6" strokeWidth="1.5" className="pwm-wire" />
                <path d="M 180,90 L 245,120" stroke="#3b82f6" strokeWidth="1.5" className="pwm-wire" />
              </svg>
            </div>
            <div className="font-mono text-[9px] text-gray-500 font-bold border-t border-gray-200 pt-2 text-center uppercase">
              Geared motor hubs receive independent duty cycle signals to calibrate speed vectors.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========================================== SLIDE 8: STEERING KINEMATICS ==========================================
export const MechSteeringSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulsate-arrows {
          0%, 100% { transform: scale(1.0); opacity: 0.5; }
          50% { transform: scale(1.15); opacity: 1.0; }
        }
        @keyframes rotate-steer {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .kinetic-pulse {
          animation: pulsate-arrows 2s ease-in-out infinite;
          transform-origin: 150px 80px;
        }
        .steering-rotator {
          animation: rotate-steer 8s linear infinite;
          transform-origin: 150px 80px;
        }
      `}} />

      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-blue-600 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-wider text-blue-600 font-bold uppercase">Mechanical Pillar</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Steering System & Kinematics</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column (col-span-6 to allow plenty of space for the list) */}
        <div className="col-span-6 flex flex-col gap-4">
          <div className="bg-gray-50/80 border border-gray-200/60 p-5 rounded-2xl shadow-xs">
            <h3 className="font-mono text-[10.5px] text-blue-600 font-bold uppercase mb-2">Coordinated Wheel Kinematics</h3>
            <p className="text-[13.5px] text-slate-700 font-semibold mb-4 leading-relaxed font-sans font-medium">
              Our robot uses a coordinated differential system with four independent Mecanum wheels. By spinning each wheel in different directions, we can drive the robot in any direction without changing its angle.
            </p>
            
            <span className="font-mono text-[10px] text-blue-600 font-extrabold uppercase tracking-wider mb-2 block">System Advantages</span>
            <ul className="space-y-2 font-mono text-[10.5px] text-slate-700 font-bold uppercase leading-tight pl-1">
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 shrink-0" />
                <span>Omni-directional movement: The robot can drive in any direction instantly</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 shrink-0" />
                <span>Better maneuverability: Extremely easy to steer and turn in tight spaces</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 shrink-0" />
                <span>Ability to move sideways: Can drive directly left or right to align with targets</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 shrink-0" />
                <span>Precise indoor navigation: Perfect for navigating narrow corridors and rooms</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right column: 8-Directional Vector Map with white background */}
        <div className="col-span-6 h-full">
          <div className="bg-white border border-gray-200 rounded-2xl h-full flex flex-col justify-between p-5 relative overflow-hidden text-gray-800 min-h-[350px] shadow-xs">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-200 pb-2 uppercase tracking-widest">
              OMNI_DIRECTIONAL_STEERING_VECTORS // MOTION_MAP
            </div>
            <div className="flex-grow flex items-center justify-center p-2 bg-gray-50/50 rounded-xl border border-gray-100 my-2 relative">
              <svg className="w-[85%] h-[85%] text-slate-400 overflow-visible" viewBox="0 0 300 160" fill="none">
                {/* 2D Chassis Top-down Outline */}
                <rect x="100" y="45" width="100" height="70" rx="6" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3 2" fill="rgba(241,245,249,0.5)" />
                <rect x="90" y="40" width="10" height="20" rx="1" fill="#334155" />
                <rect x="90" y="100" width="10" height="20" rx="1" fill="#334155" />
                <rect x="200" y="40" width="10" height="20" rx="1" fill="#334155" />
                <rect x="200" y="100" width="10" height="20" rx="1" fill="#334155" />

                {/* Coordinated Rotating Steering Ring */}
                <circle cx="150" cy="80" r="42" stroke="rgba(37,99,235,0.15)" strokeWidth="1.5" strokeDasharray="6 4" className="steering-rotator" />

                {/* 8-Directional Kinematic Motion Vectors */}
                <g className="kinetic-pulse">
                  {/* Forward & Reverse */}
                  <path d="M 150,45 V 15 M 146,25 L 150,15 L 154,25" stroke="#2563eb" strokeWidth="1.8" />
                  <path d="M 150,115 V 145 M 146,135 L 150,145 L 154,135" stroke="#2563eb" strokeWidth="1.8" />
                  
                  {/* Sideways Left & Right */}
                  <path d="M 100,80 H 60 M 70,76 L 60,80 L 70,84" stroke="#ef4444" strokeWidth="2.2" />
                  <path d="M 200,80 H 240 M 230,76 L 240,80 L 230,84" stroke="#ef4444" strokeWidth="2.2" />

                  {/* Diagonals */}
                  <path d="M 115,55 L 90,30 M 102,32 L 90,30 L 98,42" stroke="#10b981" strokeWidth="1.5" />
                  <path d="M 185,55 L 210,30 M 198,32 L 210,30 L 202,42" stroke="#10b981" strokeWidth="1.5" />
                  <path d="M 115,105 L 90,130 M 102,128 L 90,130 L 98,118" stroke="#10b981" strokeWidth="1.5" />
                  <path d="M 185,105 L 210,130 M 198,128 L 210,130 L 202,118" stroke="#10b981" strokeWidth="1.5" />
                </g>
              </svg>
            </div>
            <div className="font-mono text-[9px] text-gray-500 font-bold border-t border-gray-200 pt-2 text-center uppercase">
              Independent wheel speed ratios translate diagonal forces into sideways and turn vectors.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========================================== ELECTRICAL SECTION ==========================================

// 11. EMBEDDED ELECTRONICS: LOGIC COMPONENT SELECTION
export const ElecComponentsSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin-dome {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes flow-databus {
          0% { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes wheel-rot {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -12; }
        }
        .lidar-sweep-spin {
          animation: spin-dome 3s linear infinite;
          transform-origin: 150px 80px;
        }
        .databus-flow-line {
          stroke-dasharray: 6 3;
          animation: flow-databus 1s linear infinite;
        }
        .wheel-thread-anim {
          stroke-dasharray: 4 2;
          animation: wheel-rot 1.5s linear infinite;
        }
      `}} />

      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-amber-500 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-wider text-amber-600 font-bold uppercase">Electric and electronics Pillar</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Component Selection</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column (col-span-6) */}
        <div className="col-span-6 flex flex-col gap-3.5">
          {/* Sibling Card 1: Selected Hardware List */}
          <div className="bg-gray-50/80 border border-gray-200/60 p-5 rounded-2xl shadow-xs">
            <h3 className="font-mono text-[10px] text-amber-600 font-bold uppercase mb-2">Selected Hardware List</h3>
            
            {/* Structured Dual Column Component list */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-[11.5px] text-slate-800 font-bold uppercase pl-1 leading-tight">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                <span>Arduino Mega 2560</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                <span>ESP32 DevKit V1</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                <span>L298N Motor Driver</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                <span>JGA25-370 DC Motors</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                <span>80mm Mecanum Wheels</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                <span>LiDAR Sensor</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                <span>4 Ultrasonic Sensors</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                <span>MPU6050 IMU</span>
              </div>
            </div>
          </div>

          {/* Sibling Card 2: Standalone Highlighted Selection Criteria Box */}
          <div className="bg-blue-50/50 border border-blue-200/50 p-4 rounded-xl shadow-xs">
            <span className="font-mono text-[10px] text-blue-600 font-extrabold uppercase tracking-wider mb-1.5 block">Selection Criteria</span>
            <p className="text-[12.5px] text-slate-700 font-semibold leading-relaxed font-sans font-medium">
              Every element has been strictly chosen for high reliability, stable clock timing, and low electrical noise ratios to guarantee safe, real-time indoor self-driving.
            </p>
          </div>
        </div>

        {/* Right column: Literal Top-Down Component-Mapped Robot Schematic */}
        <div className="col-span-6 h-full">
          <div className="bg-white border border-gray-200 rounded-2xl h-full flex flex-col justify-between p-5 relative overflow-hidden text-gray-800 min-h-[350px] shadow-xs">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-200 pb-2 uppercase tracking-widest">
              ASAR_HARDWARE_MAPPING_MODEL // COMPONENT_BLUEPRINT
            </div>
            <div className="flex-grow flex items-center justify-center p-2 bg-gray-50/50 rounded-xl border border-gray-100 my-2 relative">
              <svg className="w-[85%] h-[85%] text-slate-400 overflow-visible" viewBox="0 0 300 160" fill="none">
                {/* 1. Wheels underneath Lower Plate */}
                {/* Top-Left Wheel */}
                <rect x="65" y="25" width="22" height="32" rx="3" fill="#334155" stroke="#1e293b" strokeWidth="1" />
                <path d="M 67,27 L 83,32 M 67,35 L 83,40 M 67,43 L 83,48" stroke="#94a3b8" strokeWidth="1" className="wheel-thread-anim" />
                
                {/* Bottom-Left Wheel */}
                <rect x="65" y="103" width="22" height="32" rx="3" fill="#334155" stroke="#1e293b" strokeWidth="1" />
                <path d="M 67,105 L 83,110 M 67,113 L 83,118 M 67,121 L 83,126" stroke="#94a3b8" strokeWidth="1" className="wheel-thread-anim" />

                {/* Top-Right Wheel */}
                <rect x="213" y="25" width="22" height="32" rx="3" fill="#334155" stroke="#1e293b" strokeWidth="1" />
                <path d="M 215,27 L 233,32 M 215,35 L 233,40 M 215,43 L 233,48" stroke="#94a3b8" strokeWidth="1" className="wheel-thread-anim" />

                {/* Bottom-Right Wheel */}
                <rect x="213" y="103" width="22" height="32" rx="3" fill="#334155" stroke="#1e293b" strokeWidth="1" />
                <path d="M 215,105 L 233,110 M 215,113 L 233,118 M 215,121 L 233,126" stroke="#94a3b8" strokeWidth="1" className="wheel-thread-anim" />

                {/* Main Chassis Base Plate */}
                <rect x="87" y="32" width="126" height="96" rx="14" fill="rgba(37,99,235,0.04)" stroke="#2563eb" strokeWidth="2.5" />

                {/* Moving Data Flow Arrows between sensors, CPU core and motors */}
                <path d="M 150,55 V 80" stroke="#3b82f6" strokeWidth="1.5" className="databus-flow-line" />
                <path d="M 150,80 L 76,41" stroke="#3b82f6" strokeWidth="1.5" className="databus-flow-line" />
                <path d="M 150,80 L 76,119" stroke="#3b82f6" strokeWidth="1.5" className="databus-flow-line" />
                <path d="M 150,80 L 224,41" stroke="#3b82f6" strokeWidth="1.5" className="databus-flow-line" />
                <path d="M 150,80 L 224,119" stroke="#3b82f6" strokeWidth="1.5" className="databus-flow-line" />

                {/* Central Dual CPU Module (Arduino Mega + ESP32) */}
                <rect x="120" y="65" width="60" height="30" rx="2" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.5" />
                <text x="150" y="82" fill="#1d4ed8" textAnchor="middle" className="font-mono text-[6.5px] font-extrabold font-sans">DUAL CPU</text>

                {/* Central LiDAR Scanner Dome */}
                <circle cx="150" cy="80" r="18" fill="#f0fdf4" stroke="#10b981" strokeWidth="2" />
                <circle cx="150" cy="80" r="7" fill="#111827" />
                
                {/* Spinning LiDAR Laser beam indicator */}
                <line x1="150" y1="80" x2="166" y2="72" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" className="lidar-sweep-spin" />

                {/* Pointers and Component Labels */}
                {/* Pointer 1: Mecanum Wheels (Far Left) */}
                <g>
                  <path d="M 76,41 L 45,20 H 5" stroke="#64748b" strokeWidth="0.8" />
                  <circle cx="76" cy="41" r="2" fill="#475569" />
                  <text x="5" y="15" fill="#334155" textAnchor="start" className="font-mono text-[5.5px] font-extrabold font-sans">MECANUM WHEELS</text>
                </g>

                {/* Pointer 2: LiDAR Dome (Far Left) */}
                <g>
                  <path d="M 150,62 L 120,48 H 5" stroke="#64748b" strokeWidth="0.8" />
                  <circle cx="150" cy="62" r="2" fill="#047857" />
                  <text x="5" y="43" fill="#047857" textAnchor="start" className="font-mono text-[5.5px] font-extrabold font-sans">LIDAR SENSOR</text>
                </g>

                {/* Pointer 3: Arduino Mega 2560 (Far Left) */}
                <g>
                  <path d="M 135,85 L 115,100 H 5" stroke="#64748b" strokeWidth="0.8" />
                  <circle cx="135" cy="85" r="2" fill="#1d4ed8" />
                  <text x="5" y="95" fill="#1d4ed8" textAnchor="start" className="font-mono text-[5.5px] font-extrabold font-sans">MEGA 2560 MCU</text>
                </g>

                {/* Pointer 4: ESP32 co-processor (Far Right) */}
                <g>
                  <path d="M 165,85 L 185,100 H 215" stroke="#64748b" strokeWidth="0.8" />
                  <circle cx="165" cy="85" r="2" fill="#1d4ed8" />
                  <text x="215" y="95" fill="#1d4ed8" textAnchor="start" className="font-mono text-[5.5px] font-extrabold font-sans">ESP32 DEVKIT</text>
                </g>

                {/* Pointer 5: L298N driver (Far Left) */}
                <g>
                  <path d="M 150,95 L 130,115 H 5" stroke="#64748b" strokeWidth="0.8" />
                  <circle cx="150" cy="95" r="2" fill="#d97706" />
                  <text x="5" y="110" fill="#d97706" textAnchor="start" className="font-mono text-[5.5px] font-extrabold font-sans">L298N DRIVER</text>
                </g>

                {/* Pointer 6: JGA25 Motors (Far Right) */}
                <g>
                  <path d="M 224,119 L 254,135 H 215" stroke="#64748b" strokeWidth="0.8" />
                  <circle cx="224" cy="119" r="2" fill="#1e293b" />
                  <text x="215" y="130" fill="#475569" textAnchor="start" className="font-mono text-[5.5px] font-extrabold font-sans">JGA25 MOTORS</text>
                </g>

                {/* Pointer 7: MPU6050 Gyro (Far Left) */}
                <g>
                  <path d="M 135,75 L 105,60 H 5" stroke="#64748b" strokeWidth="0.8" />
                  <circle cx="135" cy="75" r="2" fill="#a78bfa" />
                  <text x="5" y="55" fill="#7c3aed" textAnchor="start" className="font-mono text-[5.5px] font-extrabold font-sans">MPU6050 IMU</text>
                </g>

                {/* Pointer 8: Front Sonar (Far Right) */}
                <g>
                  <path d="M 150,32 L 150,15 H 215" stroke="#64748b" strokeWidth="0.8" />
                  <circle cx="150" cy="32" r="2" fill="#2563eb" />
                  <text x="215" y="10" fill="#2563eb" textAnchor="start" className="font-mono text-[5.5px] font-extrabold font-sans">FRONT SONARS</text>
                </g>

                {/* Pointer 9: Rear Sonar (Far Right) */}
                <g>
                  <path d="M 150,128 L 150,145 H 215" stroke="#64748b" strokeWidth="0.8" />
                  <circle cx="150" cy="128" r="2" fill="#2563eb" />
                  <text x="215" y="140" fill="#2563eb" textAnchor="start" className="font-mono text-[5.5px] font-extrabold font-sans">REAR SONARS</text>
                </g>
              </svg>
            </div>
            <div className="font-mono text-[9px] text-gray-500 font-bold border-t border-gray-200 pt-2 text-center uppercase">
              Physical layout outlines positions and data feedback paths of the selected electronics.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========================================== SLIDE 12: DUAL-CONTROLLER TOPOLOGY ==========================================
export const ElecControllersSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes uart-burst {
          0% { stroke-dashoffset: 40; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes wifi-pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.9); }
          50% { opacity: 1.0; transform: scale(1.1); }
        }
        .uart-signal-line {
          stroke-dasharray: 6 3;
          animation: uart-burst 1s linear infinite;
        }
        .wifi-glowing {
          animation: wifi-pulse 2s ease-in-out infinite;
          transform-origin: 235px 50px;
        }
      `}} />

      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-blue-600 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-wider text-blue-600 font-bold uppercase">Electric and electronics Pillar</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Dual-Controller Topology</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column (col-span-6 to allow plenty of space) */}
        <div className="col-span-6 flex flex-col gap-4">
          <div className="bg-gray-50/80 border border-gray-200/60 p-5 rounded-2xl shadow-xs">
            <h3 className="font-mono text-[10.5px] text-blue-600 font-bold uppercase mb-2">Bifurcated Dual-Brain Computing</h3>
            <p className="text-[13.5px] text-slate-700 font-semibold mb-4 leading-relaxed font-sans font-medium">
              We separate low-level motor actuation from high-level mapping and decision algorithms by partitioning critical tasks onto separate microcontrollers. This bifurcated dual-brain topology eliminates computing lag and resolves latency bottlenecks.
            </p>
            
            <span className="font-mono text-[10px] text-blue-600 font-extrabold uppercase tracking-wider mb-2 block">Processing Division of Labor</span>
            <ul className="space-y-2 font-mono text-[10.5px] text-slate-700 font-bold uppercase leading-tight pl-1">
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 shrink-0" />
                <span>Arduino Mega 2560: Handles real-time motor PWM speed outputs and sonar poller interrupts</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 shrink-0" />
                <span>ESP32 Co-Processor: Executes SLAM environmental mapping and processes cloud AI API calls</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 shrink-0" />
                <span>UART communication: High-speed, CRC-8 validated serial packet bridge to prevent signal noise</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right column: High-Fidelity Co-Processor PCB Layout */}
        <div className="col-span-6 h-full">
          <div className="bg-white border border-gray-200 rounded-2xl h-full flex flex-col justify-between p-5 relative overflow-hidden text-gray-800 min-h-[350px] shadow-xs">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-200 pb-2 uppercase tracking-widest">
              DIVERGENT_CONTROLLER_TOPOLOGY // PCB_LAYOUT
            </div>
            <div className="flex-grow flex items-center justify-center p-2 bg-gray-50/50 rounded-xl border border-gray-100 my-2 relative">
              <svg className="w-[95%] h-[95%] text-slate-400 overflow-visible" viewBox="0 0 300 160" fill="none">
                {/* 1. Arduino Mega Block with pin headers along borders */}
                <g>
                  <rect x="15" y="20" width="100" height="120" rx="3" fill="#f8fafc" stroke="#2563eb" strokeWidth="1.5" />
                  <text x="65" y="40" fill="#2563eb" textAnchor="middle" className="font-mono text-[7px] font-extrabold">ARDUINO MEGA</text>
                  <text x="65" y="50" fill="#94a3b8" textAnchor="middle" className="font-mono text-[5px]">8-BIT ATMEGA2560</text>
                  <text x="65" y="80" fill="#475569" textAnchor="middle" className="font-mono text-[6px] font-bold font-sans">MOTOR PWM CORE</text>
                  <text x="65" y="90" fill="#64748b" textAnchor="middle" className="font-mono text-[5.5px]">INTERRUPT MANAGER</text>

                  {/* Pin headers row left */}
                  <rect x="20" y="10" width="90" height="4" fill="#334155" />
                  {/* Pin headers row right */}
                  <rect x="20" y="146" width="90" height="4" fill="#334155" />
                </g>

                {/* 2. ESP32 Co-Processor Block with Pin lines */}
                <g>
                  <rect x="185" y="40" width="100" height="80" rx="4" stroke="#10b981" strokeWidth="1.5" fill="#f8fafc" />
                  <text x="235" y="60" fill="#10b981" textAnchor="middle" className="font-mono text-[7px] font-extrabold">ESP32-WROOM</text>
                  <text x="235" y="70" fill="#94a3b8" textAnchor="middle" className="font-mono text-[5px]">32-BIT DUAL CORE</text>
                  <text x="235" y="95" fill="#047857" textAnchor="middle" className="font-mono text-[6px] font-bold font-sans">API CLOUD DECISION</text>
                  <text x="235" y="105" fill="#64748b" textAnchor="middle" className="font-mono text-[5.5px]">SLAM MAP PROCESSOR</text>

                  {/* Pulsing Wi-Fi signal indicator next to ESP32 */}
                  <g className="wifi-glowing" style={{ transformOrigin: '235px 35px' }}>
                    <path d="M 225,32 A 15,15 0 0,1 245,32" stroke="#10b981" strokeWidth="1" fill="none" />
                    <path d="M 220,27 A 22,22 0 0,1 250,27" stroke="#34d399" strokeWidth="1.2" fill="none" />
                  </g>
                </g>

                {/* 3. Bidirectional UART TX/RX Copper Bus Lines */}
                {/* TX Line (Mega to ESP32) */}
                <path d="M 115,65 H 185" stroke="#fbbf24" strokeWidth="1.5" className="uart-signal-line" />
                <circle cx="115" cy="65" r="2" fill="#fbbf24" />
                <text x="150" y="59" fill="#b45309" textAnchor="middle" className="font-mono text-[5px] font-extrabold">TX ➔ RX [115200 BAUD]</text>

                {/* RX Line (ESP32 to Mega) */}
                <path d="M 185,100 H 115" stroke="#f59e0b" strokeWidth="1.5" className="uart-signal-line" style={{ animationDirection: 'reverse' }} />
                <circle cx="185" cy="100" r="2" fill="#f59e0b" />
                <text x="150" y="111" fill="#b45309" textAnchor="middle" className="font-mono text-[5px] font-extrabold">RX ➔ TX [CRC-8 OK]</text>
              </svg>
            </div>
            <div className="font-mono text-[9px] text-gray-500 font-bold border-t border-gray-200 pt-2 text-center uppercase">
              Bidirectional UART lines provide robust real-time co-processor synchronization.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========================================== SLIDE 13: POWER STEP-DOWN REGULATORS ==========================================
export const ElecPowerSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes current-run {
          0% { stroke-dashoffset: 40; }
          100% { stroke-dashoffset: 0; }
        }
        .wire-flow {
          stroke-dasharray: 6 3;
          animation: current-run 1.5s linear infinite;
        }
      `}} />

      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-amber-500 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-wider text-amber-600 font-bold uppercase">Electric and electronics Pillar</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Power Step-Down Regulators</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column */}
        <div className="col-span-5 flex flex-col gap-4">
          <div className="bg-gray-50/80 border border-gray-200/60 p-5 rounded-2xl shadow-xs">
            <h3 className="font-mono text-[10px] text-amber-600 font-bold uppercase mb-2">Stable Power Conditioning</h3>
            <p className="text-[11px] text-gray-500 font-semibold mb-3 leading-relaxed font-sans">
              We step down the raw battery voltage (12.6V peak) to stable voltage lines via LM2596 high-efficiency switching buck converters.
            </p>
            <ul className="space-y-1.5 font-mono text-[9px] text-slate-600 font-bold leading-normal uppercase">
              <li>• INPUT: 12.6V DIRECT LITHIUM BMS CHANNEL</li>
              <li>• LINE 01: 5.0V STABILIZED FOR ARDUINO / SENSORS LOGIC</li>
              <li>• LINE 02: 9.0V REGULATED FOR L298N DRIVER LOGIC</li>
              <li>• COUPLING: PARALLEL ISOLATION PREVENTS MOTOR BACK-EMF</li>
            </ul>
          </div>
        </div>

        {/* Right column: White Background */}
        <div className="col-span-7 h-full">
          <div className="bg-white border border-gray-200 rounded-2xl h-full flex flex-col justify-between p-5 relative overflow-hidden text-gray-800 min-h-[350px] shadow-xs">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-200 pb-2 uppercase tracking-widest">
              POWER_DISTRIBUTION_SCHEMATIC // CAD_PCB
            </div>
            <div className="flex-grow flex items-center justify-center p-2 bg-gray-50/50 rounded-xl border border-gray-100 my-2">
              <svg className="w-[85%] h-[85%] text-slate-400 overflow-visible" viewBox="0 0 300 160" fill="none">
                <rect x="20" y="55" width="60" height="50" rx="3" fill="#f8fafc" stroke="#f59e0b" strokeWidth="1.5" />
                <rect x="160" y="20" width="100" height="40" rx="3" fill="#f8fafc" stroke="#3b82f6" strokeWidth="1.5" />
                <rect x="160" y="100" width="100" height="40" rx="3" fill="#f8fafc" stroke="#10b981" strokeWidth="1.5" />
                
                {/* Active electron flow */}
                <path d="M80 80 H120 V40 H160" stroke="#fbbf24" strokeWidth="2" className="wire-flow" />
                <path d="M120 40 V120 H160" stroke="#fbbf24" strokeWidth="2" className="wire-flow" />
                
                <text x="50" y="83" fill="#f59e0b" textAnchor="middle" className="font-mono text-[7px] font-bold">12.6V BATT</text>
                <text x="210" y="43" fill="#3b82f6" textAnchor="middle" className="font-mono text-[7px] font-bold">5V LM2596 BUCK</text>
                <text x="210" y="123" fill="#10b981" textAnchor="middle" className="font-mono text-[7px] font-bold">9V LM2596 BUCK</text>
              </svg>
            </div>
            <div className="font-mono text-[9px] text-gray-500 font-bold border-t border-gray-200 pt-2 text-center uppercase">
              Buck converters preserve stable logic voltages during high-current motor draws.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========================================== SLIDE 14: BMS BATTERY PROTECTION ==========================================
export const ElecBmsSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes balance-charge {
          0%, 100% { height: 10px; fill: #ef4444; }
          50% { height: 80px; fill: #10b981; }
        }
        .cell-charge {
          animation: balance-charge 6s ease-in-out infinite;
          transform-origin: bottom;
        }
      `}} />

      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-amber-500 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-wider text-amber-600 font-bold uppercase">Electric and electronics Pillar</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">BMS Battery Protection</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column */}
        <div className="col-span-5 flex flex-col gap-4">
          <div className="bg-gray-50/80 p-5 rounded-2xl shadow-xs border border-gray-200">
            <h3 className="font-mono text-[10px] text-amber-600 font-bold uppercase mb-2">Battery Management Safety</h3>
            <p className="text-[11px] text-gray-500 font-semibold mb-3 leading-relaxed font-sans">
              To prevent over-discharge and balance cell voltages, we integrate a hardware 3S Battery Management System (BMS) with active balancing circuits.
            </p>
            <ul className="space-y-1.5 font-mono text-[9px] text-slate-600 font-bold leading-normal uppercase">
              <li>• BALANCE: ACTIVE INDUCTIVE balancing (4.2V CELLS)</li>
              <li>• THRESHOLDS: OVERCURRENT LIMIT 20A COUPLING SHIELD</li>
              <li>• SAFETY: AUTOMATIC SHUTDOWN UPON CELL UNDERVOLTAGE (&lt;2.7V)</li>
            </ul>
          </div>
        </div>

        {/* Right column: White Background */}
        <div className="col-span-7 h-full">
          <div className="bg-white border border-gray-200 rounded-2xl h-full flex flex-col justify-between p-5 relative overflow-hidden text-gray-800 min-h-[350px] shadow-xs">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-200 pb-2 uppercase tracking-widest">
              BATTERY_BMS_CELL_MONITOR // SIGNAL_CONSOLE
            </div>
            <div className="flex-grow flex items-center justify-center p-2 bg-gray-50/50 rounded-xl border border-gray-100 my-2">
              <svg className="w-[85%] h-[85%] text-slate-400 overflow-visible" viewBox="0 0 300 160" fill="none">
                <rect x="30" y="30" width="50" height="100" rx="4" stroke="currentColor" strokeWidth="1.5" />
                <rect x="110" y="30" width="50" height="100" rx="4" stroke="currentColor" strokeWidth="1.5" />
                <rect x="190" y="30" width="50" height="100" rx="4" stroke="currentColor" strokeWidth="1.5" />
                
                {/* Dynamically charging columns */}
                <rect x="35" y="40" width="40" height="80" fill="#10b981" rx="2" className="cell-charge" style={{ animationDelay: '0s' }} />
                <rect x="115" y="40" width="40" height="80" fill="#10b981" rx="2" className="cell-charge" style={{ animationDelay: '1s' }} />
                <rect x="195" y="40" width="40" height="80" fill="#10b981" rx="2" className="cell-charge" style={{ animationDelay: '2s' }} />

                <path d="M80 80 H110 M160 80 H190" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="2 2" />
                <text x="55" y="83" fill="#ffffff" textAnchor="middle" className="font-mono text-[8px] font-bold z-10">CELL 1</text>
                <text x="135" y="83" fill="#ffffff" textAnchor="middle" className="font-mono text-[8px] font-bold z-10">CELL 2</text>
                <text x="215" y="83" fill="#ffffff" textAnchor="middle" className="font-mono text-[8px] font-bold z-10">CELL 3</text>
              </svg>
            </div>
            <div className="font-mono text-[9px] text-gray-500 font-bold border-t border-gray-200 pt-2 text-center uppercase">
              BMS provides auto-level cell balancing and short-circuit system cutoffs.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 15. EMBEDDED ELECTRONICS: SENSOR INTERFACING SCHEMATIC
export const ElecWiringSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes signal-bursts {
          0% { stroke-dashoffset: 40; }
          100% { stroke-dashoffset: 0; }
        }
        .wiring-signals {
          stroke-dasharray: 4 2;
          animation: signal-bursts 1s linear infinite;
        }
      `}} />

      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-amber-500 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-wider text-amber-600 font-bold uppercase">Electric and electronics Pillar</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Sensor Interfacing Schematic</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column */}
        <div className="col-span-5 flex flex-col gap-4">
          <div className="bg-gray-50/80 border border-gray-200/60 p-5 rounded-2xl shadow-xs">
            <h3 className="font-mono text-[10px] text-amber-600 font-bold uppercase mb-2">Interfacing Buses</h3>
            <p className="text-[11px] text-gray-500 font-semibold mb-3 leading-relaxed font-sans font-medium">
              Sensors connect directly to hardware buses: the MPU6050 gyroscope utilizes the I2C bus while the RPLIDAR A8 occupies a dedicated high-speed serial UART core.
            </p>
            <ul className="space-y-1.5 font-mono text-[9px] text-slate-600 font-bold leading-normal uppercase">
              <li>• IMU MPU6050: HIGH RATE SDA/SCL I2C PINS (ADDR 0X68)</li>
              <li>• LIDAR RANGE: DIRECT HARDWARE SERIAL BAUD AT 115200</li>
              <li>• SONAR HC-SR04: DIRECT PIN COUPLING WITH PWM CLK TRIGGER</li>
            </ul>
          </div>
        </div>

        {/* Right column: White Background */}
        <div className="col-span-7 h-full">
          <div className="bg-white border border-gray-200 rounded-2xl h-full flex flex-col justify-between p-5 relative overflow-hidden text-gray-800 min-h-[350px] shadow-xs">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-200 pb-2 uppercase tracking-widest">
              SENSOR_BUS_ROUTING_DIAGRAM // CAD_BOARD
            </div>
            <div className="flex-grow flex items-center justify-center p-2 bg-gray-50/50 rounded-xl border border-gray-100 my-2">
              <svg className="w-[85%] h-[85%] text-slate-400 overflow-visible" viewBox="0 0 300 160" fill="none">
                {/* Center Controller */}
                <rect x="100" y="55" width="100" height="50" rx="3" fill="#f8fafc" stroke="#fbbf24" strokeWidth="1.5" />
                <text x="150" y="83" fill="#f59e0b" textAnchor="middle" className="font-mono text-[8px] font-bold">ATMEGA2560</text>
                
                {/* Sonar */}
                <rect x="20" y="15" width="50" height="30" rx="2" fill="#f8fafc" stroke="#3b82f6" strokeWidth="1" />
                <path d="M70 30 H100" stroke="#3b82f6" strokeWidth="1.5" className="wiring-signals" />
                <text x="45" y="32" fill="#3b82f6" textAnchor="middle" className="font-mono text-[6.5px]">SONAR</text>
                
                {/* IMU */}
                <rect x="20" y="115" width="50" height="30" rx="2" fill="#f8fafc" stroke="#10b981" strokeWidth="1" />
                <path d="M70 130 H100" stroke="#10b981" strokeWidth="1.5" className="wiring-signals" />
                <text x="45" y="132" fill="#10b981" textAnchor="middle" className="font-mono text-[6.5px]">MPU6050</text>

                {/* LiDAR */}
                <rect x="230" y="55" width="50" height="50" rx="2" fill="#f8fafc" stroke="#a78bfa" strokeWidth="1.2" />
                <path d="M200 80 H230" stroke="#a78bfa" strokeWidth="2" strokeDasharray="3 3" className="wiring-signals" />
                <text x="255" y="83" fill="#a78bfa" textAnchor="middle" className="font-mono text-[7px] font-bold">LiDAR</text>
              </svg>
            </div>
            <div className="font-mono text-[9px] text-gray-500 font-bold border-t border-gray-200 pt-2 text-center uppercase">
              Independent hardware buses prevent high-frequency sensory signal cross-talk.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========================================== SOFTWARE SECTION ==========================================

// 16. SOFTWARE ALGORITHMS: STATIC SOFTWARE ARCHITECTURE
export const SoftStaticSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes link-pulse {
          0%, 100% { stroke-width: 1px; stroke: #94a3b8; }
          50% { stroke-width: 2px; stroke: #10b981; }
        }
        .static-link {
          animation: link-pulse 3s infinite;
        }
      `}} />

      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-emerald-500 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-wider text-emerald-600 font-bold uppercase">Software Pillar</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Static Software Architecture</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column */}
        <div className="col-span-5 flex flex-col gap-4">
          <div className="bg-gray-50/80 border border-gray-200/60 p-5 rounded-2xl shadow-xs">
            <h3 className="font-mono text-[10px] text-emerald-600 font-bold uppercase mb-2">Modular Static Setup</h3>
            <p className="text-[11px] text-gray-500 font-semibold mb-3 leading-relaxed font-sans">
              We deploy modular task schedulers. Code modules are encapsulated to prevent memory-leak thrashing and guarantee deterministic block timings.
            </p>
            <ul className="space-y-1.5 font-mono text-[9px] text-slate-600 font-bold leading-normal uppercase">
              <li>• SCHEDULER: NON-BLOCKING TICK MATRIX DRIVER (100HZ)</li>
              <li>• MODULES: SEPARATE HEADERS FOR LIDAR, SONAR, & STATE MACHINES</li>
              <li>• SECURITY: SANITIZED COMPONENT SCOPES WITH STATIC POINTERS</li>
            </ul>
          </div>
        </div>

        {/* Right column: White Background */}
        <div className="col-span-7 h-full">
          <div className="bg-white border border-gray-200 rounded-2xl h-full flex flex-col justify-between p-5 relative overflow-hidden text-gray-800 min-h-[350px] shadow-xs">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-200 pb-2 uppercase tracking-widest">
              STATIC_MODULAR_CLASS_DIAGRAM // BLOCK_LAYOUT
            </div>
            <div className="flex-grow flex items-center justify-center p-2 bg-gray-50/50 rounded-xl border border-gray-100 my-2">
              <svg className="w-[85%] h-[85%] text-slate-400 overflow-visible" viewBox="0 0 300 160" fill="none">
                <rect x="110" y="15" width="80" height="30" rx="3" fill="#f8fafc" stroke="#10b981" strokeWidth="1.5" />
                <text x="150" y="33" fill="#10b981" textAnchor="middle" className="font-mono text-[7px] font-bold">CORE_SCHEDULER</text>
                
                <rect x="20" y="95" width="70" height="35" rx="2" fill="#f8fafc" stroke="#3b82f6" strokeWidth="1" />
                <rect x="115" y="95" width="70" height="35" rx="2" fill="#f8fafc" stroke="#3b82f6" strokeWidth="1" />
                <rect x="210" y="95" width="70" height="35" rx="2" fill="#f8fafc" stroke="#3b82f6" strokeWidth="1" />
                <text x="55" y="115" fill="#2563eb" textAnchor="middle" className="font-mono text-[6.5px] font-bold">LIDAR_PARSER</text>
                <text x="150" y="115" fill="#2563eb" textAnchor="middle" className="font-mono text-[6.5px] font-bold">SONAR_POLLER</text>
                <text x="245" y="115" fill="#2563eb" textAnchor="middle" className="font-mono text-[6.5px] font-bold">MOTOR_ACTUATE</text>
                
                {/* Pulsing connections */}
                <path d="M150 45 V70 H55 V95 M150 70 V95 M150 70 H245 V95" stroke="#94a3b8" strokeWidth="1.2" className="static-link" />
              </svg>
            </div>
            <div className="font-mono text-[9px] text-gray-500 font-bold border-t border-gray-200 pt-2 text-center uppercase">
              Isolated class segments guarantee stable stack margins during execution.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========================================== SLIDE 17: DYNAMIC SERIAL HANDSHAKES ==========================================
export const SoftDynamicSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slide-checker {
          0% { transform: translateX(-40px); opacity: 0.1; }
          50% { opacity: 0.8; }
          100% { transform: translateX(240px); opacity: 0.1; }
        }
        .serial-checker {
          animation: slide-checker 3s linear infinite;
        }
      `}} />

      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-emerald-500 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-wider text-emerald-600 font-bold uppercase">Software Pillar</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Dynamic Serial Handshakes</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column */}
        <div className="col-span-5 flex flex-col gap-4">
          <div className="bg-gray-50/80 border border-gray-200/60 p-5 rounded-2xl shadow-xs">
            <h3 className="font-mono text-[10px] text-emerald-600 font-bold uppercase mb-2">Inter-Processor Communication</h3>
            <p className="text-[11px] text-gray-500 font-semibold mb-3 leading-relaxed font-sans">
              Controllers communicate via bi-directional UART, utilizing a strict CRC-validated packet struct to prevent data corruption.
            </p>
            <ul className="space-y-1.5 font-mono text-[9px] text-slate-600 font-bold leading-normal uppercase">
              <li>• PROTOCOL: ASYNC PACKET-BASED SERIAL UART CORE</li>
              <li>• BAUD RATE: 115200 HIGH STABILITY SPEED (UART2)</li>
              <li>• VALIDATION: 8-BIT CRC CHECK FOR SYSTEM NOISE CUTOFF</li>
            </ul>
          </div>
        </div>

        {/* Right column: White Background */}
        <div className="col-span-7 h-full">
          <div className="bg-white border border-gray-200 rounded-2xl h-full flex flex-col justify-between p-5 relative overflow-hidden text-gray-800 min-h-[350px] shadow-xs">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-200 pb-2 uppercase tracking-widest">
              SERIAL_PACKET_FRAME_STRUCTURE // TELEMETRY_GRID
            </div>
            <div className="flex-grow flex items-center justify-center p-2 bg-gray-50/50 rounded-xl border border-gray-100 my-2 relative">
              <svg className="w-[85%] h-[85%] text-slate-400 overflow-visible" viewBox="0 0 300 160" fill="none">
                {/* Packet Struct Block */}
                <rect x="20" y="60" width="40" height="40" stroke="#ef4444" strokeWidth="1.5" fill="#f8fafc" />
                <rect x="60" y="60" width="50" height="40" stroke="#2563eb" strokeWidth="1.5" fill="#f8fafc" />
                <rect x="110" y="60" width="110" height="40" stroke="#10b981" strokeWidth="1.5" fill="#f8fafc" />
                <rect x="220" y="60" width="60" height="40" stroke="#fbbf24" strokeWidth="1.5" fill="#f8fafc" />
                
                <text x="40" y="83" fill="#ef4444" textAnchor="middle" className="font-mono text-[8px] font-bold">START</text>
                <text x="85" y="83" fill="#2563eb" textAnchor="middle" className="font-mono text-[7px] font-bold">ID [1B]</text>
                <text x="165" y="83" fill="#10b981" textAnchor="middle" className="font-mono text-[8px] font-bold">DATA PAYLOAD [8B]</text>
                <text x="250" y="83" fill="#d97706" textAnchor="middle" className="font-mono text-[8px] font-bold">CRC [1B]</text>

                {/* Animated Scanner checkbar */}
                <line x1="20" y1="50" x2="20" y2="110" stroke="#10b981" strokeWidth="2" className="serial-checker" />
              </svg>
            </div>
            <div className="font-mono text-[9px] text-gray-500 font-bold border-t border-gray-200 pt-2 text-center uppercase">
              CRC-8 byte verification blocks serial frame corruption from EMF motor noise.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========================================== SLIDE 18: LiDAR SLAM OCCUPANCY MAPPING ==========================================
export const SoftSlamSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes rotating-laser {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .laser-rotate {
          animation: rotating-laser 5s linear infinite;
          transform-origin: 120px 100px;
        }
        @keyframes obstacle-flicker {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.5; }
        }
        .flicker-block {
          animation: obstacle-flicker 2s infinite;
        }
      `}} />

      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-emerald-500 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-wider text-emerald-600 font-bold uppercase">Software Pillar</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">LiDAR SLAM Occupancy Mapping</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column */}
        <div className="col-span-5 flex flex-col gap-4">
          <div className="bg-gray-50/80 border border-gray-200/60 p-5 rounded-2xl shadow-xs">
            <h3 className="font-mono text-[10px] text-emerald-600 font-bold uppercase mb-2">Simultaneous Localization</h3>
            <p className="text-[11px] text-gray-500 font-semibold mb-3 leading-relaxed font-sans font-medium">
              We process 360-degree point clouds from the RPLIDAR A8 scanner to build real-time 2D occupancy grid cell layouts inside the ESP32 memory stack.
            </p>
            <ul className="space-y-1.5 font-mono text-[9px] text-slate-600 font-bold leading-normal uppercase">
              <li>• SCANNER: RPLIDAR A8 CORE AT 10HZ ROTATION FREQUENCY</li>
              <li>• RESOLUTION: 100MM PER GRID CELL OCCUPANCY COUPLING</li>
              <li>• UPDATE RATE: 50MS SCAN CORRELATION LOOPS</li>
            </ul>
          </div>
        </div>

        {/* Right column: White Background */}
        <div className="col-span-7 h-full">
          <div className="bg-white border border-gray-200 rounded-2xl h-full flex flex-col justify-between p-5 relative overflow-hidden text-gray-800 min-h-[350px] shadow-xs">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-200 pb-2 uppercase tracking-widest">
              SLAM_GRID_CELL_MAPPING // DYNAMIC_COORDINATES
            </div>
            <div className="flex-grow flex items-center justify-center p-2 bg-gray-50/50 rounded-xl border border-gray-100 my-2 relative">
              <svg className="w-[85%] h-[85%] text-slate-400 overflow-visible" viewBox="0 0 300 160" fill="none">
                <path d="M 0,20 L 300,20 M 0,40 L 300,40 M 0,60 L 300,60 M 0,80 L 300,80 M 0,100 L 300,100 M 0,120 L 300,120" stroke="#cbd5e1" strokeWidth="0.5" />
                <path d="M 40,0 L 40,160 M 80,0 L 80,160 M 120,0 L 120,160 M 160,0 L 160,160 M 200,0 L 200,160 M 240,0 L 240,160" stroke="#cbd5e1" strokeWidth="0.5" />
                
                {/* Blinking obstacles */}
                <rect x="80" y="40" width="40" height="40" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" strokeWidth="1" className="flicker-block" />
                <rect x="160" y="80" width="40" height="40" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" strokeWidth="1" className="flicker-block" />
                
                <g className="laser-rotate">
                  {/* Sweep ray */}
                  <line x1="120" y1="100" x2="280" y2="100" stroke="rgba(37,99,235,0.3)" strokeWidth="1.5" />
                  <circle cx="280" cy="100" r="3" fill="#3b82f6" className="animate-ping" />
                </g>

                <circle cx="120" cy="100" r="8" fill="#10b981" stroke="#34d399" strokeWidth="1.5" />
                <line x1="120" y1="100" x2="135" y2="85" stroke="#34d399" strokeWidth="2" />
              </svg>
            </div>
            <div className="font-mono text-[9px] text-gray-500 font-bold border-t border-gray-200 pt-2 text-center uppercase">
              LiDAR scan matrices map obstacle boundary cells in real-time coordinates.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========================================== SLIDE 19: KALMAN SENSOR FUSION MATH ==========================================
export const SoftKalmanSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes noise-scroll {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 120; }
        }
        .scrolling-noise {
          stroke-dasharray: 6 3;
          animation: noise-scroll 1.5s linear infinite;
        }
        @keyframes k-gliders {
          0% { cx: 40; cy: 80; }
          50% { cx: 140; cy: 95; }
          100% { cx: 240; cy: 80; }
        }
        .k-tracer {
          animation: k-gliders 5s ease-in-out infinite;
        }
      `}} />

      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-emerald-500 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-wider text-emerald-600 font-bold uppercase">Software Pillar</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Kalman Attitude Math</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column */}
        <div className="col-span-5 flex flex-col gap-4">
          <div className="bg-gray-50/80 border border-gray-200/60 p-5 rounded-2xl shadow-xs">
            <h3 className="font-mono text-[10px] text-emerald-600 font-bold uppercase mb-2">Sensor Fusion Math</h3>
            <p className="text-[11px] text-gray-500 font-semibold mb-3 leading-relaxed font-sans">
              High-frequency motor oscillations corrupt accelerometer tilt readings. We implement a Kalman-inspired complementary fusion filter to obtain stable angles.
            </p>
            <div className="bg-slate-50 border border-gray-200 p-3.5 rounded-lg mb-2">
              <code className="font-mono text-[9.5px] text-slate-800 font-bold block">
                θ_n+1 = α * (θ_n + ω_gyro * dt) + (1 - α) * a_accel
              </code>
            </div>
            <span className="text-[8px] font-mono text-gray-400 block font-semibold">
              Where α (0.98) isolates low-frequency accelerometer gravity vectors and integrates high-frequency gyroscope angular rates.
            </span>
          </div>
        </div>

        {/* Right column: White Background */}
        <div className="col-span-7 h-full">
          <div className="bg-white border border-gray-200 rounded-2xl h-full flex flex-col justify-between p-5 relative overflow-hidden text-gray-800 min-h-[350px] shadow-xs">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-200 pb-2 uppercase tracking-widest">
              FILTER_RESONANCE_RESPONSE // GRAPH_PLOT
            </div>
            <div className="flex-grow flex items-center justify-center p-2 bg-gray-50/50 rounded-xl border border-gray-100 my-2">
              <svg className="w-[85%] h-[85%] text-slate-400 overflow-visible" viewBox="0 0 300 160" fill="none">
                <path d="M 40,20 L 40,140 L 280,140" stroke="currentColor" strokeWidth="1.5" />
                <path d="M 40,80 Q 90,140 140,80 T 240,80" stroke="#ef4444" strokeWidth="1.2" className="scrolling-noise" />
                <path d="M 40,80 Q 90,95 140,80 T 240,80" stroke="#10b981" strokeWidth="2.5" />
                
                {/* Rolling Tracer Dot */}
                <circle cx="140" cy="80" r="4.5" fill="#10b981" stroke="white" strokeWidth="1.5" className="k-tracer" />

                <text x="180" y="65" fill="#10b981" className="font-mono text-[7px] font-bold">FUSED KALMAN OUTPUT</text>
                <text x="180" y="115" fill="#ef4444" className="font-mono text-[7px] font-bold font-sans">ACCEL OSCILLATIONS</text>
              </svg>
            </div>
            <div className="font-mono text-[9px] text-gray-500 font-bold border-t border-gray-200 pt-2 text-center uppercase">
              Complementary filter algorithms efficiently eliminate gyroscope drift.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========================================== SLIDE 20: FSM OBSTACLE CONTROL ==========================================
export const SoftFsmSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes packets-transit {
          0% { stroke-dashoffset: 40; }
          100% { stroke-dashoffset: 0; }
        }
        .fsm-packets {
          stroke-dasharray: 6 3;
          animation: packets-transit 1.2s linear infinite;
        }
      `}} />

      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-emerald-500 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-wider text-emerald-600 font-bold uppercase">Software Pillar</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">FSM Obstacle Avoidance Loop</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column */}
        <div className="col-span-5 flex flex-col gap-4">
          <div className="bg-gray-50/80 border border-gray-200/60 p-5 rounded-2xl shadow-xs">
            <h3 className="font-mono text-[10px] text-emerald-600 font-bold uppercase mb-2">Finite State Machine</h3>
            <p className="text-[11px] text-gray-500 font-semibold mb-3 leading-relaxed font-sans font-medium">
              Low-level safety routines utilize a strict, synchronous Finite State Machine (FSM) to handle obstacle emergency brakes and pivot routines.
            </p>
            <ul className="space-y-1.5 font-mono text-[9px] text-slate-600 font-bold leading-normal uppercase">
              <li>• STATE_0: FORWARD_RUN (SENSORS &gt; 30CM DISTANCE)</li>
              <li>• STATE_1: BRAKE_AND_REVERSE (OBSTACLE &lt; 15CM ON SECTOR)</li>
              <li>• STATE_2: PIVOT_TURN_SWEEP (COMPASS HEADING ALIGN)</li>
            </ul>
          </div>
        </div>

        {/* Right column: White Background */}
        <div className="col-span-7 h-full">
          <div className="bg-white border border-gray-200 rounded-2xl h-full flex flex-col justify-between p-5 relative overflow-hidden text-gray-800 min-h-[350px] shadow-xs">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-200 pb-2 uppercase tracking-widest">
              STATE_MACHINE_FLOW_DIAGRAM // LOGIC_BOARD
            </div>
            <div className="flex-grow flex items-center justify-center p-2 bg-gray-50/50 rounded-xl border border-gray-100 my-2">
              <svg className="w-[85%] h-[85%] text-slate-400 overflow-visible" viewBox="0 0 300 160" fill="none">
                <circle cx="60" cy="80" r="22" fill="#f8fafc" stroke="#2563eb" strokeWidth="2.5" className="animate-pulse" style={{ animationDuration: '3s' }} />
                <circle cx="150" cy="40" r="22" fill="#f8fafc" stroke="#ef4444" strokeWidth="2.5" />
                <circle cx="240" cy="80" r="22" fill="#f8fafc" stroke="#fbbf24" strokeWidth="2.5" />
                
                <text x="60" y="83" fill="#2563eb" textAnchor="middle" className="font-mono text-[6.5px] font-bold">FORWARD</text>
                <text x="150" y="43" fill="#ef4444" textAnchor="middle" className="font-mono text-[6.5px] font-bold">EMERGENCY</text>
                <text x="240" y="83" fill="#d97706" textAnchor="middle" className="font-mono text-[6.5px] font-bold">PIVOTING</text>
                
                {/* Animated transitioning signals */}
                <path d="M 82,70 L 128,48" stroke="#cbd5e1" strokeWidth="1.5" className="fsm-packets" />
                <path d="M 172,48 L 218,70" stroke="#cbd5e1" strokeWidth="1.5" className="fsm-packets" />
                <path d="M 218,90 L 82,90" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
              </svg>
            </div>
            <div className="font-mono text-[9px] text-gray-500 font-bold border-t border-gray-200 pt-2 text-center uppercase">
              State transitions occur deterministically inside the Arduino 10ms loop interrupt.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========================================== SLIDE 21: GITHUB & MOBILE APP ==========================================
export const SoftGithubSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gauge-sweep {
          0%, 100% { transform: rotate(-45deg); }
          50% { transform: rotate(45deg); }
        }
        .needle-sweep {
          animation: gauge-sweep 4s ease-in-out infinite;
          transform-origin: 150px 105px;
        }
      `}} />

      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-emerald-500 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-wider text-emerald-600 font-bold uppercase">Software Pillar</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">VCS Integration & GitHub Hosting</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column */}
        <div className="col-span-5 flex flex-col gap-4">
          <div className="bg-gray-50/80 border border-gray-200/60 p-5 rounded-2xl shadow-xs">
            <h3 className="font-mono text-[10px] text-emerald-600 font-bold uppercase mb-2">Collaborative Development</h3>
            <p className="text-[11px] text-gray-500 font-semibold mb-3 leading-relaxed font-sans font-medium">
              The entire firmware stack and presentation studio code is hosted on a secure GitHub repository. We enforce strict branch protections and automated compile triggers.
            </p>
            <ul className="space-y-1.5 font-mono text-[9px] text-slate-600 font-bold leading-normal uppercase">
              <li>• VERSION CONTROL: DISTRIBUTED GIT WORKFLOW WITH PROTECTED MAIN</li>
              <li>• REPO HOSTING: SECURE PUBLIC PORTAL (MUHAMED-REFAAT/PRESENTATION-STUDIO)</li>
              <li>• CI ACTIONS: COMPILE TESTS TRIGGERED ON EVERY PULL HANDSHAKE</li>
            </ul>
          </div>
        </div>

        {/* Right column: White Background with split git/app diagrams */}
        <div className="col-span-7 h-full">
          <div className="bg-white border border-gray-200 rounded-2xl h-full flex flex-col justify-between p-5 relative overflow-hidden text-gray-800 min-h-[350px] shadow-xs">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-200 pb-2 uppercase tracking-widest">
              GITHUB_WORKFLOW_PORTAL // SECURE_PORTAL
            </div>
            
            {/* Split Right Content: Git branches above, Mobile App mock below */}
            <div className="flex flex-col h-full justify-between flex-grow">
              {/* Git diagram (upper) */}
              <div className="flex-grow flex items-center justify-center p-1 bg-gray-50/40 rounded-lg border border-gray-100 my-1 h-1/2">
                <svg className="w-[85%] h-[85%] text-slate-400 overflow-visible" viewBox="0 0 300 80" fill="none">
                  <circle cx="50" cy="40" r="5" fill="#2563eb" />
                  <circle cx="110" cy="40" r="5" fill="#2563eb" />
                  <circle cx="170" cy="40" r="5" fill="#2563eb" />
                  <circle cx="230" cy="40" r="7" fill="#10b981" stroke="#34d399" strokeWidth="1.5" />
                  <line x1="56" y1="40" x2="104" y2="40" stroke="#3b82f6" strokeWidth="1.5" />
                  <line x1="116" y1="40" x2="164" y2="40" stroke="#3b82f6" strokeWidth="1.5" />
                  <line x1="176" y1="40" x2="222" y2="40" stroke="#10b981" strokeWidth="2" strokeDasharray="3 2" />
                  <text x="230" y="25" fill="#10b981" className="font-mono text-[6px] font-bold">MAIN</text>
                </svg>
              </div>

              {/* Mobile App mockup (lower) with sweep needle */}
              <div className="flex items-center gap-4 bg-gray-50/60 p-2.5 rounded-xl border border-gray-200/50 h-1/2 relative">
                {/* Tiny speed dial widget */}
                <div className="w-16 h-12 bg-white border border-gray-250 rounded flex items-center justify-center shrink-0 shadow-xs">
                  <svg className="w-full h-full text-slate-300 overflow-visible" viewBox="0 0 300 120" fill="none">
                    <path d="M 100,105 A 60,60 0 0,1 200,105" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    {/* Sweeping analog needle */}
                    <line x1="150" y1="105" x2="150" y2="60" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" className="needle-sweep" />
                    <circle cx="150" cy="105" r="4" fill="#334155" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-extrabold text-[11px] text-slate-800 uppercase leading-none mb-1 font-sans">Mobile Telemetry App</h4>
                  <p className="text-[10px] text-gray-500 font-semibold leading-normal font-sans">
                    Provides remote-control overrides, active sensor logs, and SLAM map visualizations via WebSocket syncs.
                  </p>
                </div>
              </div>
            </div>

            <div className="font-mono text-[9px] text-gray-500 font-bold border-t border-gray-200 pt-2 text-center uppercase mt-2">
              Continuous integration pipelines ensure compilation sanity prior to code merging.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========================================== DISPATCHER SYSTEM ==========================================
export const DynamicSlide: React.FC<{
  slide: any;
  onStartPlay?: () => void;
  onEnterDesign?: () => void;
  isEditing?: boolean;
}> = ({ slide, onStartPlay, onEnterDesign, isEditing }) => {
  switch (slide.type) {
    case 'mission_control':
      return <MissionControlSlide onStartPlay={onStartPlay} onEnterDesign={onEnterDesign} isEditing={isEditing} />;
    case 'team':
      return <TeamSlide />;
    case 'introduction':
      return <IntroductionSlide />;
    case 'problem_statement':
      return <ProblemStatementSlide />;
    case 'system_overview':
      return <SystemOverviewSlide />;
    case 'mech_chassis':
      return <MechChassisSlide />;
    case 'mech_powertrain':
      return <MechPowertrainSlide />;
    case 'mech_steering':
      return <MechSteeringSlide />;
    case 'elec_components':
      return <ElecComponentsSlide />;
    case 'elec_controllers':
      return <ElecControllersSlide />;
    case 'elec_power':
      return <ElecPowerSlide />;
    case 'elec_bms':
      return <ElecBmsSlide />;
    case 'elec_wiring':
      return <ElecWiringSlide />;
    case 'soft_static':
      return <SoftStaticSlide />;
    case 'soft_dynamic':
      return <SoftDynamicSlide />;
    case 'soft_slam':
      return <SoftSlamSlide />;
    case 'soft_kalman':
      return <SoftKalmanSlide />;
    case 'soft_fsm':
      return <SoftFsmSlide />;
    case 'soft_github':
      return <SoftGithubSlide />;
    default:
      return null;
  }
};