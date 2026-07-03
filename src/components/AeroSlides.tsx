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

      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-amber-500 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-wider text-amber-600 font-bold uppercase">Electric and electronics Pillar</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Dual-Controller Topology</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column (col-span-6 to allow plenty of space) */}
        <div className="col-span-6 flex flex-col gap-4">
          <div className="bg-gray-50/80 border border-gray-200/60 p-5 rounded-2xl shadow-xs">
            <h3 className="font-mono text-[10.5px] text-amber-600 font-bold uppercase mb-2">Bifurcated Dual-Brain Computing</h3>
            <p className="text-[13.5px] text-slate-700 font-semibold mb-4 leading-relaxed font-sans font-medium">
              We separate low-level motor actuation from high-level mapping and decision algorithms by partitioning critical tasks onto separate microcontrollers. This bifurcated dual-brain topology eliminates computing lag and resolves latency bottlenecks.
            </p>
            
            <span className="font-mono text-[10px] text-amber-600 font-extrabold uppercase tracking-wider mb-2 block">Processing Division of Labor</span>
            <ul className="space-y-2 font-mono text-[10.5px] text-slate-700 font-bold uppercase leading-tight pl-1">
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 shrink-0" />
                <span>Arduino Mega 2560: Handles real-time motor PWM speed outputs and sonar poller interrupts</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 shrink-0" />
                <span>ESP32 Co-Processor: Executes SLAM environmental mapping and processes cloud AI API calls</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 shrink-0" />
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
        @keyframes pwm-scroll {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -40; }
        }
        .wire-flow {
          stroke-dasharray: 6 3;
          animation: current-run 1.5s linear infinite;
        }
        .pwm-wave-scroll {
          stroke-dasharray: 10 5;
          animation: pwm-scroll 1s linear infinite;
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
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Power & Motor Control</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column: Sibling cards (col-span-6) */}
        <div className="col-span-6 flex flex-col gap-3.5">
          {/* Card A: Power regulation */}
          <div className="bg-gray-50/80 border border-gray-200/60 p-4 rounded-xl shadow-xs">
            <h3 className="font-mono text-[10.5px] text-amber-600 font-bold uppercase mb-1 leading-none">01 / Stable Power Conditioning</h3>
            <p className="text-[12px] text-slate-500 font-bold mb-2">
              We step down the raw battery voltage (12.6V peak) to stable voltage lines via LM2596 switching buck converters.
            </p>
            <ul className="space-y-1 font-mono text-[10.5px] text-slate-700 font-bold uppercase leading-tight pl-1">
              <li>• Input: 12.6V Direct raw battery BMS feed</li>
              <li>• 5.0V Line: Feeds stable logic to Arduino Mega</li>
              <li>• 9.0V Line: Feeds stable logic to L298N driver gates</li>
            </ul>
          </div>

          {/* Card B: Motor Control handles by Arduino Mega */}
          <div className="bg-gray-50/80 border border-gray-200/60 p-4 rounded-xl shadow-xs">
            <h3 className="font-mono text-[10.5px] text-amber-600 font-bold uppercase mb-1 leading-none">02 / Arduino Mega Motor Control</h3>
            <p className="text-[12px] text-slate-500 font-bold mb-2">
              Our low-level deterministic motor actuation is managed completely by the processing core of the Arduino Mega.
            </p>
            <ul className="space-y-1 font-mono text-[10.5px] text-slate-700 font-bold uppercase leading-tight pl-1">
              <li>• Generate PWM signals to govern wheel speeds</li>
              <li>• Control motor direction dynamically inside loops</li>
              <li>• Synchronize four motors to match target speed</li>
              <li>• Handle movement commands streamed from ESP32</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Split Widescreen Visualizers (col-span-6) */}
        <div className="col-span-6 h-full flex flex-col justify-between gap-4">
          
          {/* Visualizer A: LM2596 Power Buck routing */}
          <div className="bg-white border border-gray-200 rounded-xl flex-1 flex flex-col justify-between p-3 relative overflow-hidden text-gray-800 shadow-xs h-[48%]">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-100 pb-1 uppercase tracking-widest leading-none mb-1">
              LM2596_BUCK_POWER_ROUTING // FLOW_A
            </div>
            <div className="flex-grow flex items-center justify-center p-1 bg-gray-50/50 rounded-lg border border-gray-100 relative h-[80%]">
              <svg className="w-full h-full text-slate-400 overflow-visible" viewBox="0 0 300 80" fill="none">
                <rect x="15" y="25" width="45" height="30" rx="2" fill="#f8fafc" stroke="#f59e0b" strokeWidth="1" />
                <rect x="160" y="10" width="100" height="22" rx="2" fill="#f8fafc" stroke="#3b82f6" strokeWidth="1" />
                <rect x="160" y="48" width="100" height="22" rx="2" fill="#f8fafc" stroke="#10b981" strokeWidth="1" />
                
                {/* Active current routes */}
                <path d="M 60,40 H 110 V 21 H 160" stroke="#fbbf24" strokeWidth="1.5" className="wire-flow" />
                <path d="M 110,21 V 59 H 160" stroke="#fbbf24" strokeWidth="1.5" className="wire-flow" />
                
                <text x="37.5" y="42" fill="#f59e0b" textAnchor="middle" className="font-mono text-[6.5px] font-bold">12.6V BATT</text>
                <text x="210" y="23" fill="#3b82f6" textAnchor="middle" className="font-mono text-[6px] font-bold">5V BUCK (CPU LOGIC)</text>
                <text x="210" y="61" fill="#10b981" textAnchor="middle" className="font-mono text-[6px] font-bold">9V BUCK (DRIVERS)</text>
              </svg>
            </div>
          </div>

          {/* Visualizer B: Synchronized Multi-Channel PWM Waves */}
          <div className="bg-white border border-gray-200 rounded-xl flex-1 flex flex-col justify-between p-3 relative overflow-hidden text-gray-800 shadow-xs h-[48%]">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-100 pb-1 uppercase tracking-widest leading-none mb-1">
              MEGA_PWM_SYNCHRONIZED_CHANNELS // FLOW_B
            </div>
            <div className="flex-grow flex items-center justify-center p-1 bg-gray-50/50 rounded-lg border border-gray-100 relative h-[80%]">
              <svg className="w-full h-full text-slate-400 overflow-visible" viewBox="0 0 300 80" fill="none">
                {/* Channel M1 Pulse */}
                <path d="M 15,11 H 285" stroke="#e2e8f0" strokeWidth="1" />
                <path d="M 20,11 H 280" stroke="#10b981" strokeWidth="1.5" className="pwm-wave-scroll" />
                <text x="20" y="8" fill="#047857" className="font-mono text-[5px] font-bold">CH1: M1 PWM SPEED SYNC</text>

                {/* Channel M2 Pulse */}
                <path d="M 15,29 H 285" stroke="#e2e8f0" strokeWidth="1" />
                <path d="M 20,29 H 280" stroke="#10b981" strokeWidth="1.5" className="pwm-wave-scroll" />
                <text x="20" y="26" fill="#047857" className="font-mono text-[5px] font-bold">CH2: M2 PWM SPEED SYNC</text>

                {/* Channel M3 Pulse */}
                <path d="M 15,47 H 285" stroke="#e2e8f0" strokeWidth="1" />
                <path d="M 20,47 H 280" stroke="#10b981" strokeWidth="1.5" className="pwm-wave-scroll" />
                <text x="20" y="44" fill="#047857" className="font-mono text-[5px] font-bold">CH3: M3 PWM SPEED SYNC</text>

                {/* Channel M4 Pulse */}
                <path d="M 15,65 H 285" stroke="#e2e8f0" strokeWidth="1" />
                <path d="M 20,65 H 280" stroke="#10b981" strokeWidth="1.5" className="pwm-wave-scroll" />
                <text x="20" y="62" fill="#047857" className="font-mono text-[5px] font-bold">CH4: M4 PWM SPEED SYNC</text>
              </svg>
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
        @keyframes bms-balance {
          0%, 100% { height: 10px; fill: #ef4444; }
          50% { height: 40px; fill: #10b981; }
        }
        @keyframes radar-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .bms-cell-level {
          animation: bms-balance 5s ease-in-out infinite;
          transform-origin: bottom;
        }
        .radar-sweep-spin {
          animation: radar-spin 4s linear infinite;
          transform-origin: 150px 40px;
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
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Power Source & LiDAR</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column: Sibling Cards (col-span-6) */}
        <div className="col-span-6 flex flex-col gap-3.5">
          {/* Sibling Card 1: Concise Battery Power */}
          <div className="bg-gray-50/80 border border-gray-200/60 p-4 rounded-xl shadow-xs">
            <h3 className="font-mono text-[10.5px] text-amber-600 font-bold uppercase mb-1 leading-none">01 / Battery & BMS Power Source</h3>
            <p className="text-[12.5px] text-slate-700 font-semibold mb-2">
              ASAR runs on a high-capacity 3S Lithium battery pack providing a stable 12.6V peak voltage, completely protected by a hardware BMS card.
            </p>
            <ul className="space-y-1 font-mono text-[10.5px] text-slate-700 font-bold uppercase leading-tight pl-1">
              <li>• Active Balancing: Keeps all three cells at equal voltages</li>
              <li>• Safety Cutoff: Cuts off power instantly if draw exceeds 20A</li>
              <li>• Low Voltage Alarm: Shuts down cores if cells drop below 2.7V</li>
            </ul>
          </div>

          {/* Sibling Card 2: LiDAR Power Interfacing */}
          <div className="bg-gray-50/80 border border-gray-200/60 p-4 rounded-xl shadow-xs">
            <h3 className="font-mono text-[10.5px] text-amber-600 font-bold uppercase mb-1 leading-none">02 / LiDAR Active Sensor Power</h3>
            <p className="text-[12.5px] text-slate-700 font-semibold mb-2">
              The high-speed LiDAR scanner rotates at 10Hz and draws a clean 5V logic line. We isolate its motor lanes to prevent electrical noise from leaking.
            </p>
            <ul className="space-y-1 font-mono text-[10.5px] text-slate-700 font-bold uppercase leading-tight pl-1">
              <li>• 5V Isolated Supply: Dedicated buck line blocks voltage drops</li>
              <li>• High-Rate Ingestion: Draws constant range data on UART</li>
              <li>• Opto-Isolators: Blocks motor ripples from compute cores</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Split Widescreen Visualizers (col-span-6) */}
        <div className="col-span-6 h-full flex flex-col justify-between gap-4">
          
          {/* Visualizer A: 3S Cells Active Balancer */}
          <div className="bg-white border border-gray-200 rounded-xl flex-1 flex flex-col justify-between p-3 relative overflow-hidden text-gray-800 shadow-xs h-[48%]">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-100 pb-1 uppercase tracking-widest leading-none mb-1">
              BATTERY_3S_CELL_BALANCER_LOG // FLOW_A
            </div>
            <div className="flex-grow flex items-center justify-center p-1 bg-gray-50/50 rounded-lg border border-gray-100 relative h-[80%]">
              <svg className="w-full h-full text-slate-400 overflow-visible" viewBox="0 0 300 80" fill="none">
                {/* 3S Lithium cell frames (Grouped Snugly) */}
                <rect x="65" y="15" width="45" height="50" rx="3" stroke="#cbd5e1" strokeWidth="1" />
                <rect x="127.5" y="15" width="45" height="50" rx="3" stroke="#cbd5e1" strokeWidth="1" />
                <rect x="190" y="15" width="45" height="50" rx="3" stroke="#cbd5e1" strokeWidth="1" />
                
                {/* Balancing charge level columns */}
                <rect x="68" y="20" width="39" height="40" fill="#10b981" rx="1.5" className="bms-cell-level" style={{ animationDelay: '0s' }} />
                <rect x="130.5" y="20" width="39" height="40" fill="#10b981" rx="1.5" className="bms-cell-level" style={{ animationDelay: '0.8s' }} />
                <rect x="193" y="20" width="39" height="40" fill="#10b981" rx="1.5" className="bms-cell-level" style={{ animationDelay: '1.6s' }} />

                <text x="87.5" y="43" fill="white" textAnchor="middle" className="font-mono text-[6px] font-bold z-10">CELL 1</text>
                <text x="150" y="43" fill="white" textAnchor="middle" className="font-mono text-[6px] font-bold z-10">CELL 2</text>
                <text x="212.5" y="43" fill="white" textAnchor="middle" className="font-mono text-[6px] font-bold z-10">CELL 3</text>
              </svg>
            </div>
          </div>

          {/* Visualizer B: Active LiDAR 360-Degree Point-Cloud Radar */}
          <div className="bg-white border border-gray-200 rounded-xl flex-1 flex flex-col justify-between p-3 relative overflow-hidden text-gray-800 shadow-xs h-[48%]">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-100 pb-1 uppercase tracking-widest leading-none mb-1">
              RPLIDAR_ACTIVE_360_SCANNER_RADAR // FLOW_B
            </div>
            <div className="flex-grow flex items-center justify-center p-1 bg-gray-50/50 rounded-lg border border-gray-100 relative h-[80%]">
              <svg className="w-full h-full text-slate-400 overflow-visible" viewBox="0 0 300 80" fill="none">
                {/* Concentric radar scan rings */}
                <circle cx="150" cy="40" r="30" stroke="#cbd5e1" strokeWidth="0.8" strokeDasharray="4 2" />
                <circle cx="150" cy="40" r="18" stroke="#cbd5e1" strokeWidth="0.5" />
                
                {/* Active radar sweeps */}
                <line x1="150" y1="40" x2="210" y2="20" stroke="#10b981" strokeWidth="1.5" className="radar-sweep-spin" />
                
                {/* Static target obstacle dot */}
                <circle cx="130" cy="28" r="3" fill="#ef4444" className="animate-ping" />
                <circle cx="130" cy="28" r="2.5" fill="#ef4444" />
                
                <text x="150" y="43" fill="#10b981" textAnchor="middle" className="font-mono text-[7px] font-bold">10Hz SCAN</text>
              </svg>
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
        @keyframes sonar-wave {
          0% { r: 5; opacity: 0.8; }
          100% { r: 25; opacity: 0; }
        }
        @keyframes raw-noise {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 120; }
        }
        @keyframes gyro-needle-osc {
          0%, 100% { transform: rotate(-25deg); }
          50% { transform: rotate(25deg); }
        }
        .sonar-pulse-beam {
          animation: sonar-wave 2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        }
        .noise-scroll {
          stroke-dasharray: 4 2;
          animation: raw-noise 1s linear infinite;
        }
        .gyro-needle {
          animation: gyro-needle-osc 3s ease-in-out infinite;
          transform-origin: 150px 27px;
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
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Sensor Interfacing & Fusion</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column: 3 Standalone Sibling Cards (col-span-6) */}
        <div className="col-span-6 flex flex-col gap-3">
          
          {/* Card 1: Ultrasonic */}
          <div className="bg-gray-50/80 border border-gray-200/60 p-3.5 rounded-xl shadow-xs">
            <h3 className="font-mono text-[10.5px] text-amber-600 font-bold uppercase mb-1 leading-none">01 / Ultrasonic Proximity Sensors</h3>
            <p className="text-[12.5px] text-slate-700 font-semibold leading-relaxed">
              Four HC-SR04 ultrasonic sensors are placed at the front, rear, left, and right. They measure close obstacle distances to build an instant safety shield around our robot.
            </p>
          </div>

          {/* Card 2: IMU Gyro */}
          <div className="bg-gray-50/80 border border-gray-200/60 p-3.5 rounded-xl shadow-xs">
            <h3 className="font-mono text-[10.5px] text-amber-600 font-bold uppercase mb-1 leading-none">02 / MPU6050 Gyroscope & IMU</h3>
            <p className="text-[12.5px] text-slate-700 font-semibold leading-relaxed">
              The 6-axis inertial measurement unit (IMU) tracks actual acceleration and rotation rates to measure the robot's physical heading and correct for driving slips.
            </p>
          </div>

          {/* Card 3: Sensor Fusion */}
          <div className="bg-gray-50/80 border border-gray-200/60 p-3.5 rounded-xl shadow-xs">
            <h3 className="font-mono text-[10.5px] text-amber-600 font-bold uppercase mb-1 leading-none">03 / Real-Time Sensor Fusion</h3>
            <p className="text-[12.5px] text-slate-700 font-semibold leading-relaxed">
              We fuse distance readings with gyro angles to calculate positional error. The next movement is dynamically corrected by adding or subtracting (+ or -) drift on-the-fly.
            </p>
          </div>

        </div>

        {/* Right Column: 3 Split Widescreen Visualizers (col-span-6) */}
        <div className="col-span-6 h-full flex flex-col justify-between gap-3">
          
          {/* Visualizer A: Ultrasonic Sonar Beams */}
          <div className="bg-white border border-gray-200 rounded-xl flex-1 flex flex-col justify-between p-2.5 relative overflow-hidden text-gray-800 shadow-xs h-[31%]">
            <div className="font-mono text-[7px] text-gray-400 font-bold border-b border-gray-100 pb-0.5 uppercase tracking-widest leading-none mb-1">
              4-WAY_ULTRASONIC_PROXIMITY_RADAR // FLOW_A
            </div>
            <div className="flex-grow flex items-center justify-center bg-gray-50/50 rounded-lg border border-gray-100 relative h-[70%]">
              <svg className="w-full h-full text-slate-400 overflow-visible" viewBox="0 0 300 55" fill="none">
                {/* Center Robot body */}
                <rect x="143" y="20" width="14" height="14" rx="2" stroke="#2563eb" fill="rgba(37,99,235,0.04)" strokeWidth="1.2" />
                
                {/* 4 pulsing sonar beams */}
                {/* Front beam */}
                <path d="M 141,10 Q 150,5 159,10" stroke="#10b981" strokeWidth="1.2" strokeLinecap="round" className="sonar-pulse-beam" style={{ transformOrigin: '150px 27px' }} />
                <circle cx="150" cy="5" r="2.5" fill="#ef4444" className="animate-ping" />
                <text x="150" y="4" fill="#ef4444" textAnchor="middle" className="font-mono text-[5px] font-bold">12cm [STOP]</text>

                {/* Left beam */}
                <path d="M 133,21 Q 128,27 133,33" stroke="#10b981" strokeWidth="1.2" strokeLinecap="round" className="sonar-pulse-beam" style={{ transformOrigin: '150px 27px', animationDelay: '0.4s' }} />
                <text x="105" y="30" fill="#10b981" textAnchor="end" className="font-mono text-[5px] font-bold">85cm</text>

                {/* Right beam */}
                <path d="M 167,21 Q 172,27 167,33" stroke="#10b981" strokeWidth="1.2" strokeLinecap="round" className="sonar-pulse-beam" style={{ transformOrigin: '150px 27px', animationDelay: '0.8s' }} />
                <text x="195" y="30" fill="#94a3b8" textAnchor="start" className="font-mono text-[5px]">OOR</text>

                {/* Rear beam */}
                <path d="M 141,44 Q 150,49 159,44" stroke="#10b981" strokeWidth="1.2" strokeLinecap="round" className="sonar-pulse-beam" style={{ transformOrigin: '150px 27px', animationDelay: '1.2s' }} />
                <text x="150" y="52" fill="#94a3b8" textAnchor="middle" className="font-mono text-[5px]">OOR</text>
              </svg>
            </div>
          </div>

          {/* Visualizer B: IMU Attitude Gyro Compass Dial */}
          <div className="bg-white border border-gray-200 rounded-xl flex-1 flex flex-col justify-between p-2.5 relative overflow-hidden text-gray-800 shadow-xs h-[31%]">
            <div className="font-mono text-[7px] text-gray-400 font-bold border-b border-gray-100 pb-0.5 uppercase tracking-widest leading-none mb-1">
              MPU6050_ATTITUDE_COMPASS_DIAL // FLOW_B
            </div>
            <div className="flex-grow flex items-center justify-center bg-gray-50/50 rounded-lg border border-gray-100 relative h-[70%]">
              <svg className="w-full h-full text-slate-400 overflow-visible" viewBox="0 0 300 55" fill="none">
                <circle cx="150" cy="27" r="18" fill="#f8fafc" stroke="#2563eb" strokeWidth="1.2" strokeDasharray="3 2" />
                {/* Oscillating compass needle pointer */}
                <line x1="150" y1="27" x2="150" y2="12" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" className="gyro-needle" />
                <circle cx="150" cy="27" r="3" fill="#334155" />
              </svg>
            </div>
          </div>

          {/* Visualizer C: Sensor Fusion Plot */}
          <div className="bg-white border border-gray-200 rounded-xl flex-1 flex flex-col justify-between p-2.5 relative overflow-hidden text-gray-800 shadow-xs h-[31%]">
            <div className="font-mono text-[7px] text-gray-400 font-bold border-b border-gray-100 pb-0.5 uppercase tracking-widest leading-none mb-1">
              SENSOR_FUSION_COMPLEMENTARY_SCHEMATIC // FLOW_C
            </div>
            <div className="flex-grow flex items-center justify-center bg-gray-50/50 rounded-lg border border-gray-100 relative h-[70%]">
              <svg className="w-full h-full text-slate-400 overflow-visible" viewBox="0 0 300 55" fill="none">
                {/* Input Channels */}
                <rect x="15" y="6" width="60" height="13" rx="2" fill="#f8fafc" stroke="#10b981" strokeWidth="0.8" />
                <text x="45" y="14" fill="#047857" textAnchor="middle" className="font-mono text-[4.5px] font-bold">SONAR TARGET</text>

                <rect x="15" y="28" width="60" height="13" rx="2" fill="#f8fafc" stroke="#a78bfa" strokeWidth="0.8" />
                <text x="45" y="36" fill="#7c3aed" textAnchor="middle" className="font-mono text-[4.5px] font-bold">GYRO HEADING</text>

                {/* Fusion core */}
                <circle cx="150" cy="24" r="14" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1.2" />
                <text x="150" y="23" fill="#1d4ed8" textAnchor="middle" className="font-mono text-[5px] font-extrabold">FUSION</text>
                <text x="150" y="29" fill="#2563eb" textAnchor="middle" className="font-mono text-[4px] font-bold">a = 0.98</text>

                {/* Flow lines with current */}
                <path d="M 75,12 H 110 V 24 H 136" stroke="#3b82f6" strokeWidth="1" className="noise-scroll" />
                <path d="M 75,34 H 110 V 24 H 136" stroke="#3b82f6" strokeWidth="1" className="noise-scroll" />
                <path d="M 164,24 H 220" stroke="#10b981" strokeWidth="1.2" className="noise-scroll" />

                {/* Output box */}
                <rect x="220" y="15" width="65" height="18" rx="2" fill="#f0fdf4" stroke="#10b981" strokeWidth="1" />
                <text x="252.5" y="23" fill="#15803d" textAnchor="middle" className="font-mono text-[4.5px] font-bold">± HEADING</text>
                <text x="252.5" y="29" fill="#15803d" textAnchor="middle" className="font-mono text-[4px] font-bold">CORRECTION</text>
              </svg>
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
        @keyframes flow-uart-packets {
          0% { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes core-breathe {
          0%, 100% { filter: drop-shadow(0 0 2px rgba(37,99,235,0.05)); }
          50% { filter: drop-shadow(0 0 8px rgba(37,99,235,0.15)); }
        }
        .uart-bridge-path {
          stroke-dasharray: 6 3;
          animation: flow-uart-packets 1.2s linear infinite;
        }
        .ecu-breathe {
          animation: core-breathe 4s ease-in-out infinite;
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
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Software Static Architecture</h2>
        </div>
      </div>

      {/* Main Full-Width Widescreen Layout (col-span-12) */}
      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-stretch z-10 relative py-2 select-text">
        <div className="col-span-12 h-full">
          <div className="bg-white border border-gray-200 rounded-2xl h-full flex flex-col justify-between p-4 relative overflow-hidden text-gray-800 min-h-[460px] shadow-xs">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-100 pb-1.5 uppercase tracking-widest leading-none mb-1">
              ASAR_FULL_SYSTEM_SOFTWARE_STACK_BLUEPRINT // END_TO_END_MAP
            </div>
            <div className="flex-grow flex items-center justify-center p-2 bg-gray-50/50 rounded-xl border border-gray-100 my-1 relative">
              <svg className="w-[100%] h-[100%] text-slate-400 overflow-visible" viewBox="0 0 1100 370" fill="none">
                
                {/* 1. ARDUINO MEGA 2560 (LEFT CORE SYSTEM) */}
                <g className="ecu-breathe">
                  {/* ECU 1 Container (Narrower: 270px) */}
                  <rect x="15" y="10" width="270" height="340" rx="10" fill="#f8fafc" stroke="#2563eb" strokeWidth="2" />
                  <rect x="25" y="18" width="250" height="28" rx="4" fill="#eff6ff" />
                  <text x="150" y="36" fill="#1d4ed8" textAnchor="middle" className="font-mono text-[10px] font-extrabold font-sans">ECU 1: ARDUINO MEGA (ACTUATION)</text>
                  
                  {/* Sub-module: Sonar Poller */}
                  <rect x="30" y="60" width="240" height="50" rx="6" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.2" />
                  <text x="150" y="78" fill="#2563eb" textAnchor="middle" className="font-mono text-[11px] font-extrabold font-sans">sonar_poller_interrupt 📡</text>
                  <text x="150" y="93" fill="#64748b" textAnchor="middle" className="font-mono text-[9px]">Gathers 4-Direction Sonar Ranges @ 50Hz</text>

                  {/* Sub-module: IMU gyro angles */}
                  <rect x="30" y="125" width="240" height="50" rx="6" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.2" />
                  <text x="150" y="143" fill="#2563eb" textAnchor="middle" className="font-mono text-[11px] font-extrabold font-sans">mpu6050_gyro_filter 🌀</text>
                  <text x="150" y="158" fill="#64748b" textAnchor="middle" className="font-mono text-[9px]">Calculates Complementary Gyro Heading</text>

                  {/* Sub-module: Motor Actuator L298N */}
                  <rect x="30" y="190" width="240" height="50" rx="6" fill="#ffffff" stroke="#fbbf24" strokeWidth="1.5" />
                  <text x="150" y="208" fill="#b45309" textAnchor="middle" className="font-mono text-[11px] font-extrabold font-sans">motor_actuator_driver ⚡</text>
                  <text x="150" y="223" fill="#64748b" textAnchor="middle" className="font-mono text-[9px]">Generates Synced PWM Speed Rates</text>

                  {/* Sub-module: Hardware Abstraction Layer (HAL) */}
                  <rect x="30" y="270" width="240" height="55" rx="6" fill="#fffbeb" stroke="#d97706" strokeWidth="2" />
                  <text x="150" y="288" fill="#b45309" textAnchor="middle" className="font-mono text-[11px] font-extrabold font-sans">hardware_abstraction_layer (HAL)</text>
                  <text x="150" y="303" fill="#d97706" textAnchor="middle" className="font-mono text-[9px] font-bold">Registers Direct Low-Level PWM / I2C Pin Gates</text>

                  {/* Internal Flow Arrows */}
                  <path d="M 150,110 V 125" stroke="#94a3b8" strokeWidth="1.2" />
                  <path d="M 150,175 V 190" stroke="#94a3b8" strokeWidth="1.2" />
                  <path d="M 150,240 V 270" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 2" />
                </g>

                {/* 2. ESP32-WROOM (MIDDLE EDGE COMPUTE CORE) */}
                <g className="ecu-breathe" style={{ animationDelay: '1.5s' }}>
                  {/* ECU 2 Container (Narrower: 270px) */}
                  <rect x="385" y="10" width="270" height="340" rx="10" fill="#f8fafc" stroke="#10b981" strokeWidth="2" />
                  <rect x="395" y="18" width="250" height="28" rx="4" fill="#f0fdf4" />
                  <text x="520" y="36" fill="#047857" textAnchor="middle" className="font-mono text-[10px] font-extrabold font-sans">ECU 2: ESP32-WROOM (EDGE & SLAM)</text>

                  {/* Sub-module: LiDAR slam mapper */}
                  <rect x="400" y="60" width="240" height="50" rx="6" fill="#ffffff" stroke="#10b981" strokeWidth="1.2" />
                  <text x="520" y="78" fill="#047857" textAnchor="middle" className="font-mono text-[11px] font-extrabold font-sans">lidar_slam_toolbox_engine 📦</text>
                  <text x="520" y="93" fill="#64748b" textAnchor="middle" className="font-mono text-[9px]">Maps 2D Cell Grid sweeps from RPLIDAR A8</text>

                  {/* Sub-module: Cloud AI Orchestrator */}
                  <rect x="400" y="125" width="240" height="50" rx="6" fill="#ffffff" stroke="#10b981" strokeWidth="1.2" />
                  <text x="520" y="143" fill="#047857" textAnchor="middle" className="font-mono text-[11px] font-extrabold font-sans">ai_cloud_orchestrator 💭</text>
                  <text x="520" y="158" fill="#64748b" textAnchor="middle" className="font-mono text-[9px]">Triggers cloud AI decision API JSON calls</text>

                  {/* Sub-module: Web App WebSocket Telemetry */}
                  <rect x="400" y="190" width="240" height="50" rx="6" fill="#ffffff" stroke="#3b82f6" strokeWidth="1.2" />
                  <text x="520" y="208" fill="#2563eb" textAnchor="middle" className="font-mono text-[11px] font-extrabold font-sans">web_app_telemetry_node 📡</text>
                  <text x="520" y="223" fill="#64748b" textAnchor="middle" className="font-mono text-[9px]">Hosts server for Web Joysticks & client logs</text>

                  {/* Sub-module: ESP32 HAL */}
                  <rect x="400" y="270" width="240" height="55" rx="6" fill="#fffbeb" stroke="#d97706" strokeWidth="2" />
                  <text x="520" y="288" fill="#b45309" textAnchor="middle" className="font-mono text-[11px] font-extrabold font-sans">hardware_abstraction_layer (HAL)</text>
                  <text x="520" y="303" fill="#d97706" textAnchor="middle" className="font-mono text-[9px] font-bold">Registers UART / SPI / Wi-Fi Socket Drivers</text>

                  {/* Internal Flow Arrows */}
                  <path d="M 520,110 V 125" stroke="#94a3b8" strokeWidth="1.2" />
                  <path d="M 520,175 V 190" stroke="#94a3b8" strokeWidth="1.2" />
                  <path d="M 520,240 V 270" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="3 2" />
                </g>

                {/* 3. WEB & MOBILE CLIENT STACK (RIGHT REMOTE CONTROL) */}
                <g className="ecu-breathe" style={{ animationDelay: '3s' }}>
                  {/* Client Stack Container (Compacted and Less Wide) */}
                  <rect x="805" y="10" width="280" height="260" rx="10" fill="#f8fafc" stroke="#a855f7" strokeWidth="2" />
                  <rect x="815" y="18" width="260" height="28" rx="4" fill="#faf5ff" />
                  <text x="945" y="36" fill="#7e22ce" textAnchor="middle" className="font-mono text-[10px] font-extrabold font-sans">REMOTE CONTROL (USER STACK)</text>

                  {/* Sub-module: React Leaflet UI */}
                  <rect x="820" y="60" width="250" height="50" rx="6" fill="#ffffff" stroke="#a855f7" strokeWidth="1.2" />
                  <text x="945" y="78" fill="#7e22ce" textAnchor="middle" className="font-mono text-[11px] font-extrabold font-sans">react_leaflet_canvas_ui 🌐</text>
                  <text x="945" y="93" fill="#64748b" textAnchor="middle" className="font-mono text-[9px]">Renders live 2D Grid & Slide HUD metrics</text>

                  {/* Sub-module: WebSocket Teleop Client */}
                  <rect x="820" y="125" width="250" height="50" rx="6" fill="#ffffff" stroke="#a855f7" strokeWidth="1.2" />
                  <text x="945" y="143" fill="#7e22ce" textAnchor="middle" className="font-mono text-[11px] font-extrabold font-sans">websocket_teleop_client 🎮</text>
                  <text x="945" y="158" fill="#64748b" textAnchor="middle" className="font-mono text-[9px]">Sends low-latency Virtual Joystick speed inputs</text>

                  {/* Sub-module: Runtime Mode Selector Dashboard */}
                  <rect x="820" y="190" width="250" height="60" rx="6" fill="#faf5ff" stroke="#a855f7" strokeWidth="1.5" />
                  <text x="945" y="205" fill="#7e22ce" textAnchor="middle" className="font-mono text-[10px] font-extrabold font-sans">runtime_mode_selector 🔘</text>
                  
                  {/* Selection pills (Manual highlighted) */}
                  <g>
                    {/* Manual (Active) */}
                    <rect x="826" y="215" width="70" height="15" rx="3" fill="#dcfce7" stroke="#10b981" strokeWidth="1.2" />
                    <text x="861" y="226" fill="#15803d" textAnchor="middle" className="font-mono text-[8px] font-extrabold font-sans">[MANUAL]</text>

                    {/* SLAM Logic */}
                    <rect x="902" y="215" width="82" height="15" rx="3" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />
                    <text x="943" y="226" fill="#64748b" textAnchor="middle" className="font-mono text-[8px] font-bold font-sans">[SLAM_LOG]</text>

                    {/* Cloud AI */}
                    <rect x="990" y="215" width="74" height="15" rx="3" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />
                    <text x="1027" y="226" fill="#64748b" textAnchor="middle" className="font-mono text-[8px] font-bold font-sans">[CLOUD_AI]</text>
                  </g>

                  {/* Internal Flow Arrows */}
                  <path d="M 945,110 V 125" stroke="#94a3b8" strokeWidth="1.2" />
                  <path d="M 945,175 V 190" stroke="#94a3b8" strokeWidth="1.2" />
                </g>

                {/* 4. COPROC COMMS CHANNELS (INTER-ECU BUSES - EXPANDED AREA) */}
                {/* Channel A: UART Serial between Arduino and ESP32 HALs */}
                <g>
                  <path d="M 285,297.5 H 385" stroke="#f59e0b" strokeWidth="3.5" className="uart-bridge-path" />
                  <rect x="295" y="285.5" width="80" height="24" rx="2" fill="#fffbeb" stroke="#d97706" strokeWidth="0.8" />
                  <text x="335" y="295" fill="#b45309" textAnchor="middle" className="font-mono text-[5.5px] font-extrabold">115200 UART</text>
                  <text x="335" y="302" fill="#d97706" textAnchor="middle" className="font-mono text-[5px]">SERIAL BRIDGE</text>
                </g>

                {/* Channel B: WebSockets between ESP32 Server Node and Web Client Teleop */}
                <g>
                  <path d="M 640,215 H 820" stroke="#a855f7" strokeWidth="3.5" className="uart-bridge-path" />
                  <rect x="670" y="203" width="120" height="24" rx="2" fill="#faf5ff" stroke="#a855f7" strokeWidth="0.8" />
                  <text x="730" y="212.5" fill="#7e22ce" textAnchor="middle" className="font-mono text-[6px] font-extrabold">WIFI WS CLIENT LINK</text>
                  <text x="730" y="219.5" fill="#a855f7" textAnchor="middle" className="font-mono text-[5.5px]">WEBSOCKET BYPASS</text>
                </g>

              </svg>
            </div>
            <div className="font-mono text-[9px] text-gray-500 font-bold border-t border-gray-100 pt-1.5 text-center uppercase leading-none mt-1">
              Isolated class segments and Hardware Abstraction Layers (HAL) guarantee robust execution, preventing memory thrashing and signal collisions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========================================== SLIDE 17: DYNAMIC CONTROL SEQUENCE ==========================================
export const SoftDynamicSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes flow-seq-packets {
          0% { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0; }
        }
        .seq-flow-path {
          stroke-dasharray: 6 4;
          animation: flow-seq-packets 1.5s linear infinite;
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
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">End-to-End Control Sequence</h2>
        </div>
      </div>

      {/* Main Full-Width Widescreen Layout (col-span-12) */}
      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-stretch z-10 relative py-2 select-text">
        <div className="col-span-12 h-full">
          <div className="bg-white border border-gray-200 rounded-2xl h-full flex flex-col justify-between p-4 relative overflow-hidden text-gray-800 min-h-[460px] shadow-xs">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-100 pb-1.5 uppercase tracking-widest leading-none mb-1">
              ASAR_SYSTEM_REAL_TIME_DATA_TRANSMISSION // SEQUENCE_DIAGRAM
            </div>
            <div className="flex-grow flex items-center justify-center p-2 bg-gray-50/50 rounded-xl border border-gray-100 my-1 relative">
              <svg className="w-[100%] h-[100%] text-slate-400 overflow-visible" viewBox="0 0 1100 320" fill="none">
                
                {/* Lifeline Headers (Swimlanes) */}
                {/* 1. Remote user client */}
                <g>
                  <rect x="50" y="10" width="180" height="30" rx="4" fill="#faf5ff" stroke="#a855f7" strokeWidth="1.5" />
                  <text x="140" y="29" fill="#7e22ce" textAnchor="middle" className="font-mono text-[10px] font-extrabold font-sans">USER APP (React Client)</text>
                  <line x1="140" y1="40" x2="140" y2="300" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="4 2" />
                  <rect x="135" y="60" width="10" height="230" fill="#a855f7" rx="2" />
                </g>

                {/* 2. ESP32 Co-processor */}
                <g>
                  <rect x="330" y="10" width="180" height="30" rx="4" fill="#f0fdf4" stroke="#10b981" strokeWidth="1.5" />
                  <text x="420" y="29" fill="#047857" textAnchor="middle" className="font-mono text-[10px] font-extrabold font-sans">ESP32 CO-PROCESSOR</text>
                  <line x1="420" y1="40" x2="420" y2="300" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="4 2" />
                  <rect x="415" y="80" width="10" height="200" fill="#10b981" rx="2" />
                </g>

                {/* 3. Arduino Mega Actuator */}
                <g>
                  <rect x="610" y="10" width="180" height="30" rx="4" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.5" />
                  <text x="700" y="29" fill="#1d4ed8" textAnchor="middle" className="font-mono text-[10px] font-extrabold font-sans">ARDUINO MEGA 2560</text>
                  <line x1="700" y1="40" x2="700" y2="300" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="4 2" />
                  <rect x="695" y="120" width="10" height="150" fill="#2563eb" rx="2" />
                </g>

                {/* 4. Motor Actuators L298N */}
                <g>
                  <rect x="890" y="10" width="180" height="30" rx="4" fill="#fffbeb" stroke="#d97706" strokeWidth="1.5" />
                  <text x="980" y="29" fill="#b45309" textAnchor="middle" className="font-mono text-[10px] font-extrabold font-sans">MOTOR ACTUATORS (L298N)</text>
                  <line x1="980" y1="40" x2="980" y2="300" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="4 2" />
                  <rect x="975" y="160" width="10" height="100" fill="#f59e0b" rx="2" />
                </g>

                {/* Sequence Message Arrows */}
                {/* Message 1: Client streams cmd_vel to ESP32 */}
                <g>
                  <path d="M 145,90 H 415" stroke="#a855f7" strokeWidth="1.5" className="seq-flow-path" />
                  <polygon points="415,90 409,86 409,94" fill="#a855f7" />
                  <text x="280" y="83" fill="#7e22ce" textAnchor="middle" className="font-mono text-[8.5px] font-bold font-sans">1. WiFi WebSockets: Speed Vector Commands (/cmd_vel) [10Hz]</text>
                </g>

                {/* Message 2: ESP32 dispatches binary UART packets to Arduino */}
                <g>
                  <path d="M 425,130 H 695" stroke="#10b981" strokeWidth="1.5" className="seq-flow-path" />
                  <polygon points="695,130 689,126 689,134" fill="#10b981" />
                  <text x="560" y="123" fill="#047857" textAnchor="middle" className="font-mono text-[8.5px] font-bold font-sans">2. Serial Comms: Binary Telemetry Frame [115200 Baud UART]</text>
                </g>

                {/* Message 3: Arduino Mega drives PWM to L298N */}
                <g>
                  <path d="M 705,170 H 975" stroke="#2563eb" strokeWidth="1.5" className="seq-flow-path" />
                  <polygon points="975,170 969,166 969,174" fill="#2563eb" />
                  <text x="840" y="163" fill="#1d4ed8" textAnchor="middle" className="font-mono text-[8.5px] font-bold font-sans">3. Analog PWM: Direct H-Bridge Gates [Independent Wheel Syncs]</text>
                </g>

                {/* Message 4: Encoder INT return to Arduino */}
                <g>
                  <path d="M 975,200 H 705" stroke="#d97706" strokeWidth="1.2" strokeDasharray="3 2" className="seq-flow-path" style={{ animationDirection: 'reverse' }} />
                  <polygon points="705,200 711,196 711,204" fill="#d97706" />
                  <text x="840" y="193" fill="#b45309" textAnchor="middle" className="font-mono text-[8.5px] font-bold font-sans">4. Async INT Ticks: Independent Motor Rotation Rates [Dual Ch]</text>
                </g>

                {/* Message 5: Arduino dispatches telemetry back to ESP32 */}
                <g>
                  <path d="M 695,235 H 425" stroke="#3b82f6" strokeWidth="1.2" strokeDasharray="3 2" className="seq-flow-path" style={{ animationDirection: 'reverse' }} />
                  <polygon points="425,235 431,231 431,239" fill="#3b82f6" />
                  <text x="560" y="228" fill="#1d4ed8" textAnchor="middle" className="font-mono text-[8.5px] font-bold font-sans">5. UART Feedback: Consolidated Sonar Range Buffers & IMU Heading</text>
                </g>

                {/* Message 6: ESP32 dispatches 2D grids/state logs back to Client UI */}
                <g>
                  <path d="M 415,270 H 145" stroke="#a855f7" strokeWidth="1.2" strokeDasharray="3 2" className="seq-flow-path" style={{ animationDirection: 'reverse' }} />
                  <polygon points="145,270 151,266 151,274" fill="#a855f7" />
                  <text x="280" y="263" fill="#7e22ce" textAnchor="middle" className="font-mono text-[8.5px] font-bold font-sans">6. WiFi WebSockets: 2D SLAM Occupancy Grids & State Logs [Live]</text>
                </g>

              </svg>
            </div>
            <div className="font-mono text-[9px] text-gray-500 font-bold border-t border-gray-100 pt-1.5 text-center uppercase leading-none mt-1">
              End-to-end data sequence routes high-level telemetry and low-level actuation on closed loops, preserving failsafe motor control states.
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
        @keyframes path-pulsing {
          0%, 100% { stroke-dashoffset: 0; opacity: 0.6; }
          50% { stroke-dashoffset: -10; opacity: 1; }
        }
        .laser-rotate {
          animation: rotating-laser 5s linear infinite;
          transform-origin: 150px 27px;
        }
        .local-path-pulse {
          stroke-dasharray: 4 2;
          animation: path-pulsing 1s linear infinite;
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
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">LiDAR SLAM & Navigation</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column: Sibling Cards (col-span-6) */}
        <div className="col-span-6 flex flex-col gap-3.5">
          
          {/* Card 1: LiDAR SLAM */}
          <div className="bg-gray-50/80 border border-gray-200/60 p-4 rounded-xl shadow-xs">
            <h3 className="font-mono text-[10.5px] text-emerald-600 font-bold uppercase mb-1 leading-none">01 / Real-Time Occupancy Grid Mapping</h3>
            <p className="text-[12.5px] text-slate-700 font-semibold mb-2 leading-relaxed">
              The robot deploys the slam_toolbox ROS2 engine to process 360-degree range rays. By matching laser shapes dynamically, it builds a high-contrast 2D cell occupancy map.
            </p>
            <ul className="space-y-1 font-mono text-[10.5px] text-slate-700 font-bold uppercase leading-tight pl-1">
              <li>• slam_toolbox Nodes: Executed on a concurrent FreeRTOS thread</li>
              <li>• Grid Resolution: Renders the environment in highly precise 5cm cells</li>
            </ul>
          </div>

          {/* Card 2: Path Planning / Navigation */}
          <div className="bg-gray-50/80 border border-gray-200/60 p-4 rounded-xl shadow-xs">
            <h3 className="font-mono text-[10.5px] text-emerald-600 font-bold uppercase mb-1 leading-none">02 / Dual-Layer Path Planning</h3>
            <p className="text-[12.5px] text-slate-700 font-semibold mb-2 leading-relaxed">
              Navigation is managed by combining global and local planning algorithms, allowing the robot to steer around obstacles dynamically.
            </p>
            <ul className="space-y-1 font-mono text-[10.5px] text-slate-700 font-bold uppercase leading-tight pl-1">
              <li>• Global A* Planner: Computes static shortest path from start to goal</li>
              <li>• Local TEB Planner: Calculates dynamic collision-free vectors at 20Hz</li>
            </ul>
          </div>

        </div>

        {/* Right Column: Split Widescreen Visualizers (col-span-6) */}
        <div className="col-span-6 h-full flex flex-col justify-between gap-4">
          
          {/* Visualizer A: Active 2D SLAM grid map */}
          <div className="bg-white border border-gray-200 rounded-xl flex-1 flex flex-col justify-between p-3 relative overflow-hidden text-gray-800 shadow-xs h-[48%]">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-100 pb-1 uppercase tracking-widest leading-none mb-1">
              SLAM_OCCUPANCY_GRID_COORDINATES // FLOW_A
            </div>
            <div className="flex-grow flex items-center justify-center p-1 bg-gray-50/50 rounded-lg border border-gray-100 relative h-[80%]">
              <svg className="w-full h-full text-slate-400 overflow-visible" viewBox="0 0 300 55" fill="none">
                {/* Grid matrix overlay */}
                <path d="M 0,10 H 300 M 0,20 H 300 M 0,30 H 300 M 0,40 H 300 M 0,50 H 300" stroke="#e2e8f0" strokeWidth="0.5" />
                <path d="M 50,0 V 55 M 100,0 V 55 M 150,0 V 55 M 200,0 V 55 M 250,0 V 55" stroke="#e2e8f0" strokeWidth="0.5" />
                
                {/* Flashing detected red obstacles */}
                <rect x="50" y="20" width="10" height="10" fill="#fee2e2" stroke="#ef4444" strokeWidth="0.8" />
                <rect x="200" y="10" width="10" height="10" fill="#fee2e2" stroke="#ef4444" strokeWidth="0.8" />

                {/* Rotating scanner laser sweep */}
                <g className="laser-rotate">
                  <line x1="150" y1="27" x2="260" y2="27" stroke="rgba(16,185,129,0.4)" strokeWidth="1.5" />
                  <circle cx="260" cy="27" r="2" fill="#10b981" />
                </g>

                {/* Center robot dot */}
                <circle cx="150" cy="27" r="5" fill="#3b82f6" stroke="#2563eb" strokeWidth="1" />
              </svg>
            </div>
          </div>

          {/* Visualizer B: Global and Local planning paths */}
          <div className="bg-white border border-gray-200 rounded-xl flex-1 flex flex-col justify-between p-3 relative overflow-hidden text-gray-800 shadow-xs h-[48%]">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-100 pb-1 uppercase tracking-widest leading-none mb-1">
              GLOBAL_VS_LOCAL_PATH_PLANNING_ALGORITHMS // FLOW_B
            </div>
            <div className="flex-grow flex items-center justify-center p-1 bg-gray-50/50 rounded-lg border border-gray-100 relative h-[80%]">
              <svg className="w-full h-full text-slate-400 overflow-visible" viewBox="0 0 300 55" fill="none">
                {/* Start node A and Target node B */}
                <circle cx="30" cy="27" r="4" fill="#2563eb" />
                <text x="30" y="23" fill="#2563eb" textAnchor="middle" className="font-mono text-[5px] font-bold">START (A)</text>

                <polygon points="270,27 274,31 278,27 274,23" fill="#10b981" />
                <text x="274" y="19" fill="#047857" textAnchor="middle" className="font-mono text-[5px] font-bold">GOAL (B)</text>

                {/* Static obstacle block in the center */}
                <rect x="135" y="13" width="30" height="28" fill="#f8fafc" stroke="#64748b" strokeWidth="1.5" rx="2" />
                <text x="150" y="30" fill="#475569" textAnchor="middle" className="font-mono text-[5px] font-bold">OBSTACLE</text>

                {/* Global Static Path (Dashed blue line straight through/under the map) */}
                <path d="M 34,27 H 266" stroke="#2563eb" strokeWidth="1" strokeDasharray="3 3" />
                <text x="75" y="23" fill="#2563eb" className="font-mono text-[4.5px] font-bold">GLOBAL path (A*)</text>

                {/* Local Dynamic Path (Symmetric, pulsing green arc wiggling over the obstacle) */}
                <path d="M 34,27 Q 150,-10 266,27" stroke="#10b981" strokeWidth="1.8" fill="none" className="local-path-pulse" />
                <text x="150" y="5" fill="#047857" textAnchor="middle" className="font-mono text-[5px] font-bold">LOCAL TEB PLANNED TRAJECTORY (ACTIVE)</text>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// ========================================== SLIDE 19: OBSTACLE AVOIDANCE & ADAPTIVE BEHAVIOR ==========================================
export const SoftFsmSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes laser-spin-sweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-collision-ring {
          0%, 100% { r: 23; stroke-width: 1.2px; opacity: 0.5; }
          50% { r: 27; stroke-width: 2.5px; opacity: 1; }
        }
        @keyframes path-ai-flow {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        .laser-sweep-line {
          animation: laser-spin-sweep 4s linear infinite;
          transform-origin: 150px 42px;
        }
        .collision-sonar-ring {
          animation: pulse-collision-ring 1.5s ease-in-out infinite;
        }
        .ai-path-pulse {
          stroke-dasharray: 5 3;
          animation: path-ai-flow 1.2s linear infinite;
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
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Obstacle Avoidance & Adaptive Behavior</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column: Sibling Cards (col-span-6) */}
        <div className="col-span-6 flex flex-col gap-3.5">
          
          {/* Card 1: Dual-Zone Avoidance */}
          <div className="bg-gray-50/80 border border-gray-200/60 p-4 rounded-xl shadow-xs">
            <h3 className="font-mono text-[10.5px] text-emerald-600 font-bold uppercase mb-1 leading-none">01 / Dual-Zone Obstacle Avoidance</h3>
            <p className="text-[12.5px] text-slate-700 font-semibold mb-2 leading-relaxed">
              Our avoidance algorithm splits protection into two spatial detection zones. By fusing long-range LiDAR array sweeps with close-proximity ultrasonic sonar echo lines, the robot guarantees a collision-free safe buffer.
            </p>
            <ul className="space-y-1 font-mono text-[10.5px] text-slate-700 font-bold uppercase leading-tight pl-1">
              <li>• Long-Range LiDAR Zone: Scans distant objects (&gt;30cm) to proactively map bottlenecks</li>
              <li>• Close-Range Sonar Zone: Scans immediate boundaries (&lt;15cm) to trigger failsafe brakes</li>
            </ul>
          </div>

          {/* Card 2: Adaptive AI Bypass */}
          <div className="bg-gray-50/80 border border-gray-200/60 p-4 rounded-xl shadow-xs">
            <h3 className="font-mono text-[10.5px] text-emerald-600 font-bold uppercase mb-1 leading-none">02 / Adaptive AI-Driven Bypass</h3>
            <p className="text-[12.5px] text-slate-700 font-semibold mb-2 leading-relaxed">
              When the robot gets stuck in unexpected dead-ends, it sends a quick status description to a Cloud AI model. The AI sends back smart steering commands to help the robot find its way out.
            </p>
            <ul className="space-y-1 font-mono text-[10.5px] text-slate-700 font-bold uppercase leading-tight pl-1">
              <li>• AI Fallback: Triggers automatically if the local planner is stuck for 3 seconds</li>
              <li>• Smart Escape Path: Uses Cloud AI to calculate creative steering angles and resolve deadlocks</li>
            </ul>
          </div>

        </div>

        {/* Right Column: Split Widescreen Visualizers (col-span-6) */}
        <div className="col-span-6 h-full flex flex-col justify-between gap-4">
          
          {/* Visualizer A: Concentric Dual-Zone Collision Shield (Enlarged Height: 85px) */}
          <div className="bg-white border border-gray-200 rounded-xl flex-1 flex flex-col justify-between p-3 relative overflow-hidden text-gray-800 shadow-xs h-[48%]">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-100 pb-1 uppercase tracking-widest leading-none mb-1">
              DUAL-ZONE_COLLISION_SHIELD_TOPOLOGY // FLOW_A
            </div>
            <div className="flex-grow flex items-center justify-center p-1 bg-gray-50/50 rounded-lg border border-gray-100 relative h-[80%]">
              <svg className="w-full h-full text-slate-400 overflow-visible" viewBox="0 0 300 85" fill="none">
                {/* Center Robot Chassis */}
                <rect x="143" y="36" width="14" height="12" rx="2" stroke="#2563eb" fill="rgba(37,99,235,0.04)" strokeWidth="1.2" />
                <circle cx="150" cy="42" r="1.8" fill="#334155" />

                {/* Inner Concentric Circle: Close-Range Sonar Brake Zone (Bigger: r=25) */}
                <circle cx="150" cy="42" r="25" fill="none" stroke="#ef4444" strokeWidth="1.8" className="collision-sonar-ring" />
                <text x="150" y="45" fill="#ef4444" textAnchor="middle" className="font-mono text-[5.5px] font-extrabold">SONAR SAFE ZONE (&lt;15cm)</text>

                {/* Outer Concentric Circle: Long-Range LiDAR Detection Zone (Bigger: r=42) */}
                <circle cx="150" cy="42" r="42" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="4 2" />
                <text x="150" y="78" fill="#047857" textAnchor="middle" className="font-mono text-[5.5px] font-extrabold">LIDAR DETECTION ZONE (&gt;30cm)</text>

                {/* Rotating LiDAR Laser Sweep */}
                <g className="laser-sweep-line">
                  <line x1="150" y1="42" x2="280" y2="42" stroke="rgba(16,185,129,0.35)" strokeWidth="1" />
                  <circle cx="280" cy="42" r="1.5" fill="#10b981" />
                </g>
              </svg>
            </div>
          </div>

          {/* Visualizer B: AI Fallback Dead-End Trap Bypass (Enlarged Height: 85px) */}
          <div className="bg-white border border-gray-200 rounded-xl flex-1 flex flex-col justify-between p-3 relative overflow-hidden text-gray-800 shadow-xs h-[48%]">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-100 pb-1 uppercase tracking-widest leading-none mb-1">
              CLOUD_AI_FALLBACK_DEAD-END_TRAP_BYPASS // FLOW_B
            </div>
            <div className="flex-grow flex items-center justify-center p-1 bg-gray-50/50 rounded-lg border border-gray-100 relative h-[80%]">
              <svg className="w-full h-full text-slate-400 overflow-visible" viewBox="0 0 300 85" fill="none">
                {/* Start node */}
                <circle cx="25" cy="55" r="4" fill="#2563eb" />
                <text x="25" y="48" fill="#2563eb" textAnchor="middle" className="font-mono text-[5.5px] font-bold">START (A)</text>

                {/* Dead-End Wall Traps (Detailed, Large U-shaped obstacle block in grey) */}
                <rect x="90" y="10" width="10" height="65" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="0.8" rx="1.5" />
                <rect x="100" y="10" width="85" height="10" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="0.8" rx="1.5" />
                <rect x="175" y="10" width="10" height="65" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="0.8" rx="1.5" />
                <text x="142.5" y="42" fill="#475569" textAnchor="middle" className="font-mono text-[6.5px] font-bold font-sans">DEAD-END TRAP</text>

                {/* Traditional Path (Solid blue line leading straight into dead-end) */}
                <path d="M 29,55 H 125" stroke="#2563eb" strokeWidth="1.2" />
                <circle cx="125" cy="55" r="3.5" fill="#ef4444" />
                <text x="125" y="55" fill="white" textAnchor="middle" className="font-mono text-[5.5px] font-extrabold" style={{ dominantBaseline: 'central' }}>X</text>
                <text x="125" y="46" fill="#ef4444" textAnchor="middle" className="font-mono text-[5px] font-bold leading-none">LOCAL STUCK</text>

                {/* Adaptive Cloud AI Bypass Path (Looping purple path leading backwards and around!) */}
                <path d="M 125,55 Q 60,65 50,30 T 142.5,-5 T 225,18 T 265,45" stroke="#a855f7" strokeWidth="1.8" fill="none" className="ai-path-pulse" />
                <circle cx="265" cy="45" r="1.5" fill="#10b981" />
                
                {/* Goal star */}
                <polygon points="265,45 268,49 273,45 268,41" fill="#10b981" />
                <text x="265" y="38" fill="#10b981" textAnchor="middle" className="font-mono text-[5.5px] font-bold">GOAL (B)</text>
                
                <text x="180" y="24" fill="#7e22ce" className="font-mono text-[5.5px] font-extrabold">CLOUD AI BYPASS TRAJECTORY</text>
              </svg>
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
        @keyframes flow-log-packets {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        .needle-sweep {
          animation: gauge-sweep 4s ease-in-out infinite;
          transform-origin: 215px 35px;
        }
        .log-flow-line {
          stroke-dasharray: 5 3;
          animation: flow-log-packets 1.2s linear infinite;
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
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Mobile & Web Interface</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column: Sibling Cards (col-span-6) */}
        <div className="col-span-6 flex flex-col gap-3.5">
          
          {/* Card 1: Teleop UI */}
          <div className="bg-gray-50/80 border border-gray-200/60 p-4 rounded-xl shadow-xs">
            <h3 className="font-mono text-[10.5px] text-emerald-600 font-bold uppercase mb-1 leading-none">01 / Live Teleop & Grid Visualization</h3>
            <p className="text-[12.5px] text-slate-700 font-semibold mb-2 leading-relaxed">
              Our custom mobile and web interface connects directly over on-board Wi-Fi. It allows users to control the robot with virtual joysticks, view active sensor status grids, and monitor mapping cells.
            </p>
            <ul className="space-y-1 font-mono text-[10.5px] text-slate-700 font-bold uppercase leading-tight pl-1">
              <li>• Low-Latency Control: Employs WebSocket streaming to achieve &lt;15ms joystick response times</li>
              <li>• Status Board HUD: Displays real-time battery voltages, sensor sweeps, and FSM states</li>
            </ul>
          </div>

          {/* Card 2: Logging & Cloud AI Training */}
          <div className="bg-gray-50/80 border border-gray-200/60 p-4 rounded-xl shadow-xs">
            <h3 className="font-mono text-[10.5px] text-emerald-600 font-bold uppercase mb-1 leading-none">02 / Motion Logs & Cloud AI Training</h3>
            <p className="text-[12.5px] text-slate-700 font-semibold mb-2 leading-relaxed">
              The app records detailed physical motion logs and trajectory files. These logs are telemeted directly to the cloud AI to challenge the model, refining navigation rules and making the autonomous behavior more accurate over time.
            </p>
            <ul className="space-y-1 font-mono text-[10.5px] text-slate-700 font-bold uppercase leading-tight pl-1">
              <li>• Trajectory Logs: Captures yaw rates, encoder ticks, and obstacle distance patterns</li>
              <li>• Cloud AI Analytics: Uploads dataset dumps to train the models and optimize steering decisions</li>
            </ul>
          </div>

        </div>

        {/* Right Column: Split Widescreen Visualizers (col-span-6) */}
        <div className="col-span-6 h-full flex flex-col justify-between gap-4">
          
          {/* Visualizer A: Mobile Dashboard cockpit HUD with wheel speeds */}
          <div className="bg-white border border-gray-200 rounded-xl flex-1 flex flex-col justify-between p-3 relative overflow-hidden text-gray-800 shadow-xs h-[48%]">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-100 pb-1 uppercase tracking-widest leading-none mb-1">
              MOBILE_COCKPIT_HUD_WIDGETS // FLOW_A
            </div>
            <div className="flex-grow flex items-center justify-center p-1 bg-gray-50/50 rounded-lg border border-gray-100 relative h-[80%]">
              <svg className="w-full h-full text-slate-400 overflow-visible" viewBox="0 0 300 85" fill="none">
                {/* Active Network status block */}
                <rect x="15" y="10" width="125" height="15" rx="2" fill="#faf5ff" stroke="#a855f7" strokeWidth="0.8" />
                <circle cx="23" cy="17.5" r="2.5" fill="#10b981" className="animate-pulse" />
                <text x="32" y="20" fill="#7e22ce" className="font-mono text-[5.5px] font-bold">WEBSOCKET: CONNECTED [L: 12ms]</text>

                {/* Speedometer Gauge in the center */}
                <circle cx="215" cy="35" r="24" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
                <path d="M 191,35 A 24,24 0 0,1 239,35" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
                {/* Sweeping speed indicator needle */}
                <line x1="215" y1="35" x2="215" y2="15" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" className="needle-sweep" />
                <circle cx="215" cy="35" r="4" fill="#334155" />
                <text x="215" y="47" fill="#475569" textAnchor="middle" className="font-mono text-[5px] font-bold">CURRENT: 8.5 rad/s</text>

                {/* Virtual Joystick Widget */}
                <circle cx="75" cy="45" r="16" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.2" />
                <circle cx="80" cy="40" r="6" fill="#3b82f6" stroke="#2563eb" strokeWidth="1.5" />

                {/* 4 Mecanum individual wheel speed progress indicators */}
                <g>
                  {/* FL Speed */}
                  <text x="15" y="62" fill="#15803d" className="font-mono text-[4.5px] font-bold">FL: 8.5 rad/s</text>
                  <rect x="15" y="65" width="55" height="5" rx="1.5" fill="#e2e8f0" />
                  <rect x="15" y="65" width="44" height="5" rx="1.5" fill="#10b981" />

                  {/* FR Speed */}
                  <text x="85" y="62" fill="#15803d" className="font-mono text-[4.5px] font-bold">FR: 8.5 rad/s</text>
                  <rect x="85" y="65" width="55" height="5" rx="1.5" fill="#e2e8f0" />
                  <rect x="85" y="65" width="44" height="5" rx="1.5" fill="#10b981" />

                  {/* RL Speed */}
                  <text x="155" y="62" fill="#15803d" className="font-mono text-[4.5px] font-bold">RL: 8.5 rad/s</text>
                  <rect x="155" y="65" width="55" height="5" rx="1.5" fill="#e2e8f0" />
                  <rect x="155" y="65" width="44" height="5" rx="1.5" fill="#10b981" />

                  {/* RR Speed */}
                  <text x="225" y="62" fill="#15803d" className="font-mono text-[4.5px] font-bold">RR: 8.5 rad/s</text>
                  <rect x="225" y="65" width="55" height="5" rx="1.5" fill="#e2e8f0" />
                  <rect x="225" y="65" width="44" height="5" rx="1.5" fill="#10b981" />
                </g>
              </svg>
            </div>
          </div>

          {/* Visualizer B: Telemetry ring-buffer & compaction upload pipeline */}
          <div className="bg-white border border-gray-200 rounded-xl flex-1 flex flex-col justify-between p-3 relative overflow-hidden text-gray-800 shadow-xs h-[48%]">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-100 pb-1 uppercase tracking-widest leading-none mb-1">
              LOG_BUFFER_COMPACTION_AI_PIPELINE // FLOW_B
            </div>
            <div className="flex-grow flex items-center justify-center p-1 bg-gray-50/50 rounded-lg border border-gray-100 relative h-[80%]">
              <svg className="w-full h-full text-slate-400 overflow-visible" viewBox="0 0 300 85" fill="none">
                {/* On-board logger block */}
                <rect x="10" y="27" width="50" height="30" rx="3" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.2" />
                <text x="35" y="40" fill="#475569" textAnchor="middle" className="font-mono text-[5.5px] font-bold">ON-BOARD</text>
                <text x="35" y="48" fill="#64748b" textAnchor="middle" className="font-mono text-[4.5px] font-bold">LOGS REC</text>

                {/* 20-Log Queue Ring Buffer */}
                <g>
                  {/* Log cells */}
                  <rect x="70" y="32" width="20" height="20" rx="1.5" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" />
                  <text x="80" y="44" fill="#64748b" textAnchor="middle" className="font-mono text-[4.5px] font-bold">Log17</text>

                  <rect x="94" y="32" width="20" height="20" rx="1.5" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" />
                  <text x="104" y="44" fill="#64748b" textAnchor="middle" className="font-mono text-[4.5px] font-bold">Log18</text>

                  <rect x="118" y="32" width="20" height="20" rx="1.5" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" />
                  <text x="128" y="44" fill="#64748b" textAnchor="middle" className="font-mono text-[4.5px] font-bold">Log19</text>

                  {/* Active latest cell */}
                  <rect x="142" y="32" width="20" height="20" rx="1.5" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.2" />
                  <text x="152" y="44" fill="#0369a1" textAnchor="middle" className="font-mono text-[4.5px] font-extrabold">Log20</text>

                  {/* Arrow pointing down to Disposed logs bin */}
                  <path d="M 80,52 V 65 H 105" stroke="#ef4444" strokeWidth="0.8" strokeLinecap="round" />
                  <polygon points="105,65 99,61 99,69" fill="#ef4444" />
                  <text x="110" y="68" fill="#ef4444" className="font-mono text-[4.5px] font-bold">DISPOSED LOGS 21+ [ROTATED]</text>
                </g>

                {/* Compact and Zip Block */}
                <g>
                  <rect x="172" y="32" width="32" height="20" rx="1.5" fill="#fef3c7" stroke="#d97706" strokeWidth="1" />
                  <text x="188" y="41" fill="#b45309" textAnchor="middle" className="font-mono text-[5px] font-bold">COMPACT</text>
                  <text x="188" y="49" fill="#b45309" textAnchor="middle" className="font-mono text-[4px] font-bold">&amp; EXPOSE</text>
                </g>

                {/* Cloud AI Server node block on the right */}
                <rect x="235" y="10" width="55" height="65" rx="3" fill="#faf5ff" stroke="#a855f7" strokeWidth="1.5" />
                <text x="262.5" y="28" fill="#7e22ce" textAnchor="middle" className="font-mono text-[6.5px] font-extrabold">CLOUD AI</text>
                <text x="262.5" y="42" fill="#a855f7" textAnchor="middle" className="font-mono text-[5px] font-bold">CHALLENGE</text>
                <text x="262.5" y="56" fill="#10b981" textAnchor="middle" className="font-mono text-[5px] font-extrabold">ACCURACY</text>

                {/* Animated data flow bridge */}
                <path d="M 60,42 H 70" stroke="#cbd5e1" strokeWidth="1" />
                <path d="M 162,42 H 172" stroke="#0284c7" strokeWidth="1" />
                <path d="M 204,42 H 235" stroke="#a855f7" strokeWidth="1.5" className="log-flow-line" />
                <polygon points="235,42 229,38 229,46" fill="#a855f7" />
              </svg>
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
    case 'soft_fsm':
      return <SoftFsmSlide />;
    case 'soft_github':
      return <SoftGithubSlide />;
    case 'soft_testing':
      return <SoftTestingSlide />;
    case 'soft_vcs':
      return <SoftVcsSlide />;
    case 'soft_apps':
      return <SoftAppsSlide />;
    case 'soft_thankyou':
      return <SoftThankYouSlide />;
    default:
      return null;
  }
};

// ========================================== SLIDE 22: TESTING & EVALUATION ==========================================
export const SoftTestingSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes test-stimulus-flow {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        .test-flow-line {
          stroke-dasharray: 4 3;
          animation: test-stimulus-flow 1.5s linear infinite;
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

// ========================================== SLIDE 23: VCS & PARALLEL INTEGRATION ==========================================
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

        {/* Right Column: User's custom compiled SVG Graph on a White Background (col-span-7) */}
        <div className="col-span-7 h-full flex items-center justify-center">
          <div className="bg-white border border-gray-200 rounded-xl w-full h-[375px] p-2 relative overflow-hidden text-gray-800 shadow-xs">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ backgroundColor: "#ffffff" }}>
  <defs>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#ff9b72" />
    </marker>
  </defs>

  <text x="500" y="45" text-anchor="middle" fill="#1e293b" font-family="system-ui, sans-serif" font-size="22" font-weight="bold" letter-spacing="1">
    GIT WORKFLOW & ROLLBACK LIFECYCLE
  </text>

  <g id="panel-developers">
    <rect x="40" y="90" width="320" height="470" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
    <text x="60" y="125" fill="#58a6ff" font-family="system-ui, sans-serif" font-size="15" font-weight="bold">1. Shared Local Workspace</text>
    
    <g transform="translate(0, 0)">
      <circle cx="110" cy="210" r="14" fill="#64748b" />
      <path d="M 85 245 C 85 225, 135 225, 135 245 Z" fill="#64748b" />
      <rect x="150" y="220" width="32" height="22" rx="3" fill="#ffffff" stroke="#3b82f6" stroke-width="1.5" />
      <path d="M 145 242 L 187 242 L 192 247 L 140 247 Z" fill="#f1f5f9" stroke="#3b82f6" stroke-width="1.5" />
      <line x1="155" y1="226" x2="167" y2="226" stroke="#2ea44f" stroke-width="2" />
      <line x1="155" y1="232" x2="174" y2="232" stroke="#58a6ff" stroke-width="2" />
      <text x="110" y="270" fill="#475569" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">Dev Alpha</text>
    </g>

    <g transform="translate(0, 180)">
      <circle cx="110" cy="210" r="14" fill="#64748b" />
      <path d="M 85 245 C 85 225, 135 225, 135 245 Z" fill="#64748b" />
      <rect x="150" y="220" width="32" height="22" rx="3" fill="#ffffff" stroke="#3b82f6" stroke-width="1.5" />
      <path d="M 145 242 L 187 242 L 192 247 L 140 247 Z" fill="#f1f5f9" stroke="#3b82f6" stroke-width="1.5" />
      <line x1="155" y1="226" x2="170" y2="226" stroke="#ff9b72" stroke-width="2" />
      <line x1="155" y1="232" x2="162" y2="232" stroke="#58a6ff" stroke-width="2" />
      <text x="110" y="270" fill="#475569" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">Dev Beta</text>
    </g>

    <text x="200" y="335" fill="#64748b" font-family="system-ui, sans-serif" font-size="13" font-style="italic" text-anchor="middle">Coding & Committing</text>
  </g>

  <g id="panel-github">
    <rect x="420" y="90" width="540" height="160" rx="12" fill="#faf5ff" stroke="#e9d5ff" stroke-width="1.5" />
    <text x="440" y="125" fill="#ff7b72" font-family="system-ui, sans-serif" font-size="15" font-weight="bold">2. GitHub Remote Code Hosting</text>
    
    <g id="github-server" transform="translate(640, 120)">
      <rect x="0" y="0" width="150" height="95" rx="6" fill="#ffffff" stroke="#ff7b72" stroke-width="1.5" />
      <rect x="15" y="15" width="120" height="15" rx="2" fill="#f1f5f9" />
      <circle cx="25" cy="22.5" r="3" fill="#2ea44f"><animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite"/></circle>
      <line x1="40" y1="22.5" x2="120" y2="22.5" stroke="#cbd5e1" stroke-width="1.5" />

      <rect x="15" y="40" width="120" height="15" rx="2" fill="#f1f5f9" />
      <circle cx="25" cy="47.5" r="3" fill="#58a6ff"><animate attributeName="opacity" values="0.2;1;0.2" dur="1.4s" repeatCount="indefinite"/></circle>
      <line x1="40" y1="47.5" x2="100" y2="47.5" stroke="#cbd5e1" stroke-width="1.5" />

      <rect x="15" y="65" width="120" height="15" rx="2" fill="#f1f5f9" />
      <circle cx="25" cy="72.5" r="3" fill="#f85149"><animate attributeName="opacity" values="1;0.3;1" dur="0.8s" repeatCount="indefinite"/></circle>
      <line x1="40" y1="72.5" x2="110" y2="72.5" stroke="#cbd5e1" stroke-width="1.5" />
      
      <text x="75" y="112" fill="#64748b" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle" font-weight="bold">origin/main</text>
    </g>
  </g>

  <path d="M 185 235 C 320 235, 450 165, 640 165" fill="none" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4 4" />
  <path d="M 185 415 C 320 415, 450 165, 640 165" fill="none" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4 4" />

  <circle r="6" fill="#58a6ff" >
    <animateMotion dur="4s" repeatCount="indefinite" path="M 185 235 C 320 235, 450 165, 640 165" />
  </circle>
  <circle r="6" fill="#2ea44f" >
    <animateMotion dur="5s" repeatCount="indefinite" path="M 185 415 C 320 415, 450 165, 640 165" />
  </circle>

  <text x="350" y="210" fill="#58a6ff" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" transform="rotate(-11, 350, 210)">git push</text>
  <text x="350" y="355" fill="#15803d" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" transform="rotate(14, 350, 355)">git push</text>

  <g id="panel-git-history">
    <rect x="420" y="280" width="540" height="280" rx="12" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5" />
    <text x="440" y="315" fill="#34d058" font-family="system-ui, sans-serif" font-size="15" font-weight="bold">3. Git Commit Graph Lifecycle</text>

    <path d="M 715 215 C 715 270, 460 290, 460 460" fill="none" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="4 4" />

    <path d="M 450 460 H 910" fill="none" stroke="#cbd5e1" stroke-width="3" />

    <g id="commit-c1">
      <circle cx="510" cy="460" r="16" fill="#f0fdf4" stroke="#10b981" stroke-width="3" />
      <text x="510" y="464" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">C1</text>
      <text x="510" y="495" fill="#64748b" font-family="monospace" font-size="11" text-anchor="middle">9a1b5c</text>
      <text x="510" y="430" fill="#15803d" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">STABLE</text>
    </g>

    <g id="commit-c2">
      <circle cx="690" cy="460" r="16" fill="#f0fdf4" stroke="#10b981" stroke-width="3" />
      <text x="690" y="464" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">C2</text>
      <text x="690" y="495" fill="#64748b" font-family="monospace" font-size="11" text-anchor="middle">e4f2a1</text>
      <text x="690" y="430" fill="#15803d" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">SAFE HEAD</text>
    </g>

    <g id="commit-c3">
      <circle cx="870" cy="460" r="16" fill="#fee2e2" stroke="#ef4444" stroke-width="3" />
      <text x="870" y="464" fill="#ffffff" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">C3</text>
      <text x="870" y="495" fill="#64748b" font-family="monospace" font-size="11" text-anchor="middle">7b0c9e</text>
      <text x="870" y="430" fill="#b91c1c" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">BROKEN</text>
      <path d="M 864 454 L 876 466 M 876 454 L 864 466" fill="none" stroke="#f85149" stroke-width="2.5" />
    </g>

    <path d="M 870 435 C 820 355, 740 355, 690 432" fill="none" stroke="#ff9b72" stroke-width="3" stroke-dasharray="6 4" marker-end="url(#arrow)" />
    
    <circle r="6" fill="#ff9b72" >
      <animateMotion dur="2.5s" repeatCount="indefinite" path="M 870 435 C 820 355, 740 355, 690 432" />
    </circle>

    <text x="780" y="350" fill="#ff9b72" font-family="monospace" font-size="13" font-weight="bold" text-anchor="middle">git reset --hard C2</text>
    <text x="780" y="370" fill="#ff9b72" font-family="system-ui, sans-serif" font-size="11" font-style="italic" text-anchor="middle">Destructive Rollback to Save Point</text>
  </g>
</svg>

          </div>
        </div>

      </div>
    </div>
  );
};

// ========================================== SLIDE 24: FUTURE INDUSTRY APPLICATIONS ==========================================
export const SoftAppsSlide: React.FC = () => {
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
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Future Industry Applications</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column: Sibling Cards (col-span-5) */}
        <div className="col-span-5 h-full flex flex-col justify-center">
          
          {/* Card 1: Widescreen bullet list of Applications */}
          <div className="bg-gray-50/80 border border-gray-200/60 p-6 rounded-xl shadow-xs">
            <h3 className="font-mono text-[11px] text-emerald-600 font-bold uppercase mb-4 leading-none">01 / High-Scale Industry Scalability</h3>
            <ul className="space-y-4 text-[18px] font-sans font-bold text-slate-800 uppercase tracking-tight pl-1">
              <li className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                Smart warehouses
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                Indoor delivery robots
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                Industrial automation
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                Rescue robots
              </li>
            </ul>
          </div>

        </div>

        {/* Right Column: Giant Real Robot Assembly Snapshot Visualizer (col-span-7) */}
        <div className="col-span-7 h-full flex items-center justify-center">
          <div className="bg-white border border-gray-200 rounded-xl w-full h-[400px] p-2 relative overflow-hidden text-gray-800 shadow-sm">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-100 pb-1.5 uppercase tracking-widest leading-none mb-1.5">
              ASAR_PHYSICAL_ROBOT_ASSEMBLY_RECORD // SNAPSHOT_STAGE
            </div>
            <div className="flex-grow flex items-center justify-center relative overflow-hidden h-[92%] rounded-lg">
              <img 
                src="assets/images/6c00895f-7e06-411d-8cb4-c7564bc116e4.jpg" 
                alt="ASAR Physical Robot Assembly" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// ========================================== SLIDE 25: THANK YOU / CLOSING SLIDE ==========================================
export const SoftThankYouSlide: React.FC = () => {
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
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Thank You</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column (col-span-5): Warm acknowledgement */}
        <div className="col-span-5 flex flex-col gap-4">
          <div className="bg-gray-50/80 border border-gray-200/60 p-5 rounded-2xl shadow-xs">
            <h3 className="font-mono text-[10.5px] text-emerald-600 font-bold uppercase mb-2">Borg El Arab Technological University</h3>
            <p className="text-[9.5px] text-gray-400 font-bold uppercase tracking-widest leading-none mb-3">FACULTY OF INDUSTRY & ENERGY | IT DEPT</p>
            <p className="text-[13.5px] text-slate-700 font-semibold leading-relaxed mb-4 font-sans font-medium">
              We express our deepest gratitude to our academic advisors, faculty mentors, and fellow peers for their unwavering guidance, technical reviews, and support throughout the design, construction, and software orchestration of the ASAR project.
            </p>
            <div className="border-t border-gray-200 pt-3">
              <span className="font-mono text-[10px] text-slate-800 font-bold uppercase">Presenter Team // Autonomous Vehicles Group</span>
            </div>
          </div>
        </div>

        {/* Right Column (col-span-7): Real team member JPG gallery grid! */}
        <div className="col-span-7 h-full">
          <div className="bg-white border border-gray-200 rounded-2xl h-full flex flex-col justify-between p-4 relative overflow-hidden text-gray-800 min-h-[350px] shadow-xs">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-100 pb-2 uppercase tracking-widest leading-none mb-2">
              ASAR_TEAM_MEMBERS_&_PHYSICAL_DIAGNOSTICS_RUNS // SNAPSHOT_GRID
            </div>
            
            <div className="grid grid-cols-2 gap-3 flex-grow relative overflow-hidden h-[85%]">
              {/* Image 1 */}
              <div className="relative overflow-hidden rounded-xl border border-gray-150 h-[125px]">
                <img 
                  src="assets/images/22e3adf3-9b7a-4f20-9bcc-cf8312519183.jpg" 
                  alt="Team Snapshot 1" 
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Image 2 */}
              <div className="relative overflow-hidden rounded-xl border border-gray-150 h-[125px]">
                <img 
                  src="assets/images/482cba27-50ef-4a95-932c-4c7767f2ccb5.jpg" 
                  alt="Team Snapshot 2" 
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Image 3 */}
              <div className="relative overflow-hidden rounded-xl border border-gray-150 h-[125px]">
                <img 
                  src="assets/images/498fbef9-dc16-48b4-9b79-9d2a9c671d6f.jpg" 
                  alt="Team Snapshot 3" 
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Image 4 */}
              <div className="relative overflow-hidden rounded-xl border border-gray-150 h-[125px]">
                <img 
                  src="assets/images/e9b51eb7-a033-468a-aaaf-41892472ebeb.jpg" 
                  alt="Team Snapshot 4" 
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="font-mono text-[9px] text-gray-500 font-bold border-t border-gray-100 pt-2 text-center uppercase leading-none mt-2">
              Developing smart solutions for real-world automated logistics and indoor navigation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};