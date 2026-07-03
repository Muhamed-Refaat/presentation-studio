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
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-blue-600 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-wider text-blue-600 font-bold uppercase">ASAR_DOCUMENTATION // ACADEMIC_VISION</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Project Introduction</h2>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column: Vision Statement */}
        <div className="col-span-7 flex flex-col justify-center items-start text-left pl-2">
          <span className="font-mono text-[10px] text-blue-600 font-bold uppercase tracking-wider mb-2">Executive Summary</span>
          <p className="text-base text-gray-600 font-semibold leading-relaxed mb-6 font-sans font-medium">
            Autonomous robots are becoming an important part of modern smart environments. The Adaptive Smart Autonomous Robot (ASAR) represents a pioneering development in modern autonomous ground vehicle (AGV) systems. Designed and implemented at Borg El Arab Technological University, it bridges raw robotic kinematics with high-level software orchestration.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed font-sans font-medium">
            The platform’s core objective is to deliver an adaptive, resilient, and cost-effective mobile robotics framework capable of: understanding its surroundings, detecting obstacles, making navigation decisions, and moving independently in dynamic indoor workspaces.
          </p>
        </div>

        {/* Right Column: Visual Academic Goals Grid */}
        <div className="col-span-5 h-full flex flex-col justify-center gap-4">
          <div className="bg-gray-50/80 border border-gray-200/60 p-4 rounded-xl flex items-center gap-4 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5 text-blue-600 animate-pulse" />
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase text-slate-800 mb-0.5 font-sans">Multi-Modal Integration</h4>
              <p className="text-[10.5px] text-gray-500 font-medium leading-normal">Coordinating LiDAR arrays, gyro sensors, and ultrasonic modules in real time.</p>
            </div>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/60 p-4 rounded-xl flex items-center gap-4 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase text-slate-800 mb-0.5 font-sans">Spatially-Aware Navigation</h4>
              <p className="text-[10.5px] text-gray-500 font-medium leading-normal font-sans">Simultaneous localization and mapping (SLAM) in unstructured environments.</p>
            </div>
          </div>

          <div className="bg-gray-50/80 border border-gray-200/60 p-4 rounded-xl flex items-center gap-4 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h4 className="font-bold text-xs uppercase text-slate-800 mb-0.5 font-sans">Bifurcated Fail-Safes</h4>
              <p className="text-[10.5px] text-gray-500 font-medium leading-normal">Dual-core computing separation prevents processor overload and lockups.</p>
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
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-red-500 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-wider text-red-600 font-bold uppercase">SYSTEM_RESTRICTION_LOG // COLLISION_DANGER</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Problem Statement</h2>
        </div>
      </div>

      {/* Grid Split */}
      <div className="grid grid-cols-12 gap-6 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left: Traditional Mobile Robot Problems */}
        <div className="col-span-7 flex flex-col gap-4">
          <span className="font-mono text-[10px] text-red-600 font-bold uppercase tracking-wider pl-1 font-semibold">Traditional Mobile Robots Pitfalls</span>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50/45 border border-red-100 p-4 rounded-xl shadow-xs relative">
              <div className="flex items-center gap-2 mb-1.5">
                <Radio className="w-4 h-4 text-red-500 animate-pulse" />
                <h4 className="font-bold text-[11.5px] uppercase text-slate-900 leading-none font-sans">Limited Sensor Coverage</h4>
              </div>
              <p className="text-[10.5px] text-gray-500 font-medium leading-relaxed">Traditional platforms use single-axis rangers, resulting in severe spatial data gaps.</p>
            </div>

            <div className="bg-red-50/45 border border-red-100 p-4 rounded-xl shadow-xs relative">
              <div className="flex items-center gap-2 mb-1.5">
                <Compass className="w-4 h-4 text-red-500" />
                <h4 className="font-bold text-[11.5px] uppercase text-slate-900 leading-none font-sans">Kinematic Blind Spots</h4>
              </div>
              <p className="text-[10.5px] text-gray-500 font-medium leading-relaxed">Static scan planes cannot detect overhanging or floor obstacles, triggering collisions.</p>
            </div>

            <div className="bg-red-50/45 border border-red-100 p-4 rounded-xl shadow-xs relative">
              <div className="flex items-center gap-2 mb-1.5">
                <Cpu className="w-4 h-4 text-red-500 animate-pulse" />
                <h4 className="font-bold text-[11.5px] uppercase text-slate-900 leading-none font-sans">High Controller Overhead</h4>
              </div>
              <p className="text-[10.5px] text-gray-500 font-medium leading-relaxed">One processor handling motor actuation and SLAM mapping triggers CPU choke/timeouts.</p>
            </div>

            <div className="bg-red-50/45 border border-red-100 p-4 rounded-xl shadow-xs relative">
              <div className="flex items-center gap-2 mb-1.5">
                <Activity className="w-4 h-4 text-red-500" />
                <h4 className="font-bold text-[11.5px] uppercase text-slate-900 leading-none font-sans">Dynamic Obstructions</h4>
              </div>
              <p className="text-[10.5px] text-gray-500 font-medium leading-relaxed">Rigid hardcoded logic fails in unstructured, moving human-occupied indoor workspaces.</p>
            </div>
          </div>
        </div>

        {/* Right: ASAR Integrated Solution */}
        <div className="col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between shadow-2xl relative h-full min-h-[340px] text-white">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
          
          <div>
            <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded w-fit mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="font-mono text-[8px] tracking-wider text-blue-300 font-bold uppercase">ASAR CORE_RESOLUTION</span>
            </div>
            <h3 className="text-xl font-extrabold uppercase mb-3 text-slate-100 font-sans">Our Solution</h3>
            <p className="text-[11.5px] text-slate-400 leading-relaxed font-sans font-medium">
              ASAR deploys a <strong>bifurcated dual-controller topology</strong> (Arduino Mega 2560 + ESP32) synchronized with <strong>multi-modal sensor fusion</strong> (LiDAR, Sonar, and IMU).
            </p>
            <p className="text-[11.5px] text-slate-400 leading-relaxed font-sans font-medium mt-3">
              By isolating low-level real-time motor actuation from high-level mapping and cognitive algorithms, we resolve computing lag and eliminate blind spots entirely.
            </p>
          </div>

          <div className="border-t border-slate-800 pt-3 mt-4 flex items-center justify-between text-[9px] font-mono text-slate-500">
            <span>FUSION: ENABLED</span>
            <span className="text-emerald-500 font-bold animate-pulse">● SYSTEMS SECURE</span>
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
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-blue-600 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-wider text-blue-600 font-bold uppercase">ASAR_PILLARS // THREE-AXIS_ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">System Overview</h2>
        </div>
      </div>

      {/* 3 Pillars Content Layout */}
      <div className="grid grid-cols-3 gap-6 my-auto flex-grow items-stretch z-10 relative py-4 select-text">
        {/* Pillar 1: Mechanical */}
        <div className="bg-slate-50/80 hover:bg-slate-50 border border-gray-200 p-5 rounded-2xl flex flex-col justify-between shadow-xs border-t-4 border-t-blue-500 transition-all">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                <Compass className="w-4.5 h-4.5" />
              </div>
              <h3 className="font-extrabold text-sm uppercase text-slate-800 tracking-tight font-sans">Mechanical Pillar</h3>
            </div>
            
            <p className="text-[11px] text-gray-500 font-semibold leading-relaxed mb-4 font-sans font-medium">
              Structural design providing stable physical foundations and reliable locomotion vectors.
            </p>
            
            <ul className="space-y-2 font-mono text-[9px] text-gray-500 font-bold uppercase leading-normal">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1 shrink-0"></span>
                <span>Chassis Geometry: Dual-deck acrylic chassis frame</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1 shrink-0"></span>
                <span>Power Train: 4-Wheel independent DC drive</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1 shrink-0"></span>
                <span>Steering: Differential pivot rotation</span>
              </li>
            </ul>
          </div>
          <div className="font-mono text-[8px] text-blue-600 font-bold mt-4">AXIS_01 // PHYSICAL_CORE</div>
        </div>

        {/* Pillar 2: Electrical */}
        <div className="bg-slate-50/80 hover:bg-slate-50 border border-gray-200 p-5 rounded-2xl flex flex-col justify-between shadow-xs border-t-4 border-t-amber-500 transition-all">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
                <Zap className="w-4.5 h-4.5" />
              </div>
              <h3 className="font-extrabold text-sm uppercase text-slate-800 tracking-tight font-sans">Electrical Pillar</h3>
            </div>
            
            <p className="text-[11px] text-gray-500 font-semibold leading-relaxed mb-4 font-sans font-medium">
              Power conditioning, dual controller topology, and sensory hardware interfaces.
            </p>
            
            <ul className="space-y-2 font-mono text-[9px] text-gray-500 font-bold uppercase leading-normal">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1 shrink-0"></span>
                <span>Controllers: Dedicated Arduino Mega & ESP32-WROOM</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1 shrink-0"></span>
                <span>BMS Power: High-capacity 3S 12.6V Lithium pack</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1 shrink-0"></span>
                <span>Circuit Design: Regulated voltage lines</span>
              </li>
            </ul>
          </div>
          <div className="font-mono text-[8px] text-amber-600 font-bold mt-4">AXIS_02 // HARDWARE_ROUTING</div>
        </div>

        {/* Pillar 3: Software */}
        <div className="bg-slate-50/80 hover:bg-slate-50 border border-gray-200 p-5 rounded-2xl flex flex-col justify-between shadow-xs border-t-4 border-t-emerald-500 transition-all">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                <Code className="w-4.5 h-4.5" />
              </div>
              <h3 className="font-extrabold text-sm uppercase text-slate-800 tracking-tight font-sans font-medium">Software Pillar</h3>
            </div>
            
            <p className="text-[11px] text-gray-500 font-semibold leading-relaxed mb-4 font-sans font-medium">
              Spatial tracking algorithms, data cleaning, communication bridges, and hosting.
            </p>
            
            <ul className="space-y-2 font-mono text-[9px] text-gray-500 font-bold uppercase leading-normal">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1 shrink-0"></span>
                <span>Core Logic: Static & Dynamic architectural code</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1 shrink-0"></span>
                <span>SLAM algorithms: Noise filtering & LiDAR mapping</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1 shrink-0"></span>
                <span>VCS Hosting: Continuous Integration on GitHub</span>
              </li>
            </ul>
          </div>
          <div className="font-mono text-[8px] text-emerald-600 font-bold mt-4">AXIS_03 // CODE_CORE</div>
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
            <span className="font-mono text-[9px] tracking-wider text-blue-600 font-bold uppercase">ASAR_MECHANICS // MODULE_01</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Chassis Design & 3D Geometry</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column */}
        <div className="col-span-5 flex flex-col gap-4">
          <div className="bg-gray-50/80 border border-gray-200/60 p-5 rounded-2xl shadow-xs">
            <h3 className="font-mono text-[10px] text-blue-600 font-bold uppercase mb-2">Structural Acrylic Design</h3>
            <p className="text-[11px] text-gray-500 font-semibold mb-3 leading-relaxed font-sans">
              Our 3D geometry utilizes a rounded double-deck chassis configuration. The dual-level layout separates logical compute elements from high-torque motor vibrations.
            </p>
            <ul className="space-y-1.5 font-mono text-[9px] text-slate-600 font-bold leading-normal uppercase">
              <li>• SHAPE: AERODYNAMIC ROUNDED CORNER CORRIDOR DESIGN</li>
              <li>• LEVELS: TWIN PLATE COMPACT STACK (BASE + COMPUTER LEVEL)</li>
              <li>• PROFILE: LOW VERTICAL CENTER OF GRAVITY IN LOCOMOTION</li>
            </ul>
          </div>
        </div>

        {/* Right column: 3D CAD schematic with white background */}
        <div className="col-span-7 h-full">
          <div className="bg-white border border-gray-200 rounded-2xl h-full flex flex-col justify-between p-5 relative overflow-hidden text-gray-800 min-h-[350px] shadow-xs">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-200 pb-2 uppercase tracking-widest">
              CHASSIS_CAD_WIRE_V4 // ISOMETRIC_TOPOLOGY
            </div>
            <div className="flex-grow flex items-center justify-center p-2 bg-gray-50/50 rounded-xl border border-gray-100 my-2">
              <svg className="w-[85%] h-[85%] text-slate-400 overflow-visible chassis-float" viewBox="0 0 300 160" fill="none">
                <polygon points="150,130 220,105 220,65 150,90 80,105 80,65" stroke="#2563eb" strokeWidth="2.5" fill="rgba(37,99,235,0.03)" />
                <polygon points="150,95 220,70 220,30 150,55 80,70 80,30" stroke="#60a5fa" strokeWidth="2.5" fill="rgba(96,165,250,0.08)" />
                <line x1="80" y1="105" x2="80" y2="70" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3 3" />
                <line x1="220" y1="105" x2="220" y2="70" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3 3" />
                <line x1="150" y1="130" x2="150" y2="95" stroke="#94a3b8" strokeWidth="2" />
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
        @keyframes trace-glow {
          0% { stroke-dashoffset: 240; }
          100% { stroke-dashoffset: 0; }
        }
        .curve-trace {
          stroke-dasharray: 240;
          stroke-dashoffset: 240;
          animation: trace-glow 4s linear infinite;
        }
        @keyframes gliders {
          0% { cx: 40; cy: 140; }
          100% { cx: 260; cy: 30; }
        }
        .tracer-dot {
          animation: gliders 4s ease-in-out infinite;
        }
      `}} />

      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-blue-600 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-wider text-blue-600 font-bold uppercase">ASAR_MECHANICS // MODULE_02</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Power Train System & Motors</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Specs */}
        <div className="col-span-5 flex flex-col gap-4">
          <div className="bg-gray-50/80 border border-gray-200/60 p-5 rounded-2xl shadow-xs">
            <h3 className="font-mono text-[10px] text-blue-600 font-bold uppercase mb-2">Locomotion Actuators</h3>
            <p className="text-[11px] text-gray-500 font-semibold mb-3 leading-relaxed font-sans font-medium">
              The robot is powered by four **JGA25-370 DC Geared Motors** integrated with 1:48 gear boxes, providing robust low-end torque profiles.
            </p>
            <ul className="space-y-1.5 font-mono text-[9px] text-slate-600 font-bold leading-normal uppercase">
              <li>• TYPE: JGA25-370 HIGH-TORQUE BRUSHED GEARED MOTORS</li>
              <li>• GEAR RATIO: 1:48 COUPLING TO 80MM MECANUMS</li>
              <li>• SYNC LOOP: INDEPENDENT FOUR-WHEEL ENCODER ALIGNMENT</li>
            </ul>
          </div>
        </div>

        {/* Right chart: White Background */}
        <div className="col-span-7 h-full">
          <div className="bg-white border border-gray-200 rounded-2xl h-full flex flex-col justify-between p-5 relative overflow-hidden text-gray-800 min-h-[350px] shadow-xs">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-200 pb-2 uppercase tracking-widest">
              MOTOR_TORQUE_PWM_CURVE // DATA_INTEGRITY
            </div>
            <div className="flex-grow flex items-center justify-center p-2 bg-gray-50/50 rounded-xl border border-gray-100 my-2">
              <svg className="w-[85%] h-[85%] text-slate-400 overflow-visible" viewBox="0 0 300 160" fill="none">
                <path d="M 40,20 L 40,140 L 280,140" stroke="#94a3b8" strokeWidth="1.5" />
                {/* Secondary guide lines */}
                <line x1="40" y1="85" x2="280" y2="85" stroke="#e2e8f0" strokeWidth="1" />
                <line x1="160" y1="20" x2="160" y2="140" stroke="#e2e8f0" strokeWidth="1" />
                
                {/* Moving Graph Curve line */}
                <path d="M 40,140 Q 140,80 260,30" stroke="#2563eb" strokeWidth="2.5" className="curve-trace" />
                
                {/* Gliding target point indicator */}
                <circle cx="260" cy="30" r="5" fill="#10b981" stroke="white" strokeWidth="1.5" className="tracer-dot" />
                
                <text x="230" y="25" fill="#2563eb" className="font-mono text-[8.5px] font-extrabold">TORQUE (N·m)</text>
                <text x="210" y="152" fill="#475569" className="font-mono text-[8px] font-bold">PWM DUTY CYCLE</text>
              </svg>
            </div>
            <div className="font-mono text-[9px] text-gray-500 font-bold border-t border-gray-200 pt-2 text-center uppercase">
              High-torque output is managed dynamically via linear PWM voltage increments.
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
          0%, 100% { transform: scale(1.0); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 1.0; }
        }
        .kinetic-pulse {
          animation: pulsate-arrows 3s ease-in-out infinite;
          transform-origin: center;
        }
      `}} />

      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-blue-600 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-wider text-blue-600 font-bold uppercase">ASAR_MECHANICS // MODULE_03</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Steering System & Kinematics</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column */}
        <div className="col-span-5 flex flex-col gap-4">
          <div className="bg-gray-50/80 border border-gray-200/60 p-5 rounded-2xl shadow-xs">
            <h3 className="font-mono text-[10px] text-blue-600 font-bold uppercase mb-2">Mecanum Drive Kinematics</h3>
            <p className="text-[11px] text-gray-500 font-semibold mb-3 leading-relaxed font-sans">
              Our 80mm Mecanum wheels enable omni-directional motion. Angled rollers translate diagonal force vectors, allowing the chassis to move sideways without changing rotation.
            </p>
            <div className="bg-slate-50 border border-gray-200 p-3 rounded-lg mb-2">
              <code className="font-mono text-[9.5px] text-slate-800 font-bold block leading-relaxed">
                Vx = R/4 * (w1 + w2 + w3 + w4) <br />
                Vy = R/4 * (-w1 + w2 - w3 + w4)
              </code>
            </div>
            <span className="text-[8px] font-mono text-gray-400 block font-semibold">Where w represents individual motor angular speeds.</span>
          </div>
        </div>

        {/* Right column: White Background */}
        <div className="col-span-7 h-full">
          <div className="bg-white border border-gray-200 rounded-2xl h-full flex flex-col justify-between p-5 relative overflow-hidden text-gray-800 min-h-[350px] shadow-xs">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-200 pb-2 uppercase tracking-widest">
              DIFFERENTIAL_MECANUM_VECTORS // VECTOR_GRID
            </div>
            <div className="flex-grow flex items-center justify-center p-2 bg-gray-50/50 rounded-xl border border-gray-100 my-2">
              <svg className="w-[85%] h-[85%] text-slate-400 overflow-visible" viewBox="0 0 300 160" fill="none">
                <rect x="80" y="30" width="140" height="100" rx="4" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
                <rect x="65" y="20" width="15" height="40" rx="2" fill="#e2e8f0" stroke="#2563eb" strokeWidth="1.5" />
                <rect x="220" y="20" width="15" height="40" rx="2" fill="#e2e8f0" stroke="#2563eb" strokeWidth="1.5" />
                <rect x="65" y="100" width="15" height="40" rx="2" fill="#e2e8f0" stroke="#2563eb" strokeWidth="1.5" />
                <rect x="220" y="100" width="15" height="40" rx="2" fill="#e2e8f0" stroke="#2563eb" strokeWidth="1.5" />
                
                {/* Slanted lines on wheels simulating mecanum rollers */}
                <line x1="65" y1="30" x2="80" y2="40" stroke="#2563eb" strokeWidth="1" />
                <line x1="65" y1="40" x2="80" y2="50" stroke="#2563eb" strokeWidth="1" />
                <line x1="220" y1="30" x2="235" y2="40" stroke="#2563eb" strokeWidth="1" />
                <line x1="220" y1="40" x2="235" y2="50" stroke="#2563eb" strokeWidth="1" />
                
                {/* Pulsing kinetic forces */}
                <g className="kinetic-pulse" style={{ transformOrigin: '150px 80px' }}>
                  <path d="M72.5 10 L72.5 35 M68 20 L72.5 10 L77 20" stroke="#10b981" strokeWidth="2" />
                  <path d="M227.5 150 L227.5 125 M223 140 L227.5 150 L232 140" stroke="#ef4444" strokeWidth="2" />
                </g>
              </svg>
            </div>
            <div className="font-mono text-[9px] text-gray-500 font-bold border-t border-gray-200 pt-2 text-center uppercase">
              Counter-rotation of wheel clusters enables tight, obstacle-free zero-turn pivots.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========================================== SLIDE 9: WHEELS & TRACTION ==========================================
export const MechTractionSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spins {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .tire-spin {
          animation: spins 8s linear infinite;
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
            <span className="font-mono text-[9px] tracking-wider text-blue-600 font-bold uppercase">ASAR_MECHANICS // MODULE_04</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Wheel Selection & Ground Traction</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column */}
        <div className="col-span-5 flex flex-col gap-4">
          <div className="bg-gray-50/80 border border-gray-200/60 p-5 rounded-2xl shadow-xs">
            <h3 className="font-mono text-[10px] text-blue-600 font-bold uppercase mb-2">Traction & Ground Dynamics</h3>
            <p className="text-[11px] text-gray-500 font-semibold mb-3 leading-relaxed font-sans">
              We selected high-grip synthetic rubber tires on 80mm hubs to maximize friction and prevent rotational drift on smooth laboratory tiled surfaces.
            </p>
            <ul className="space-y-1.5 font-mono text-[9px] text-slate-600 font-bold leading-normal uppercase">
              <li>• MATERIAL: FLEXIBLE HIGH-FRICTION RUBBER CONSOLE</li>
              <li>• PROFILE: LATERAL RIBBED FOR ZERO DRIFT ON TURN</li>
              <li>• SURFACE EXP: LABORATORY TILES / SMOOTH WORKING SPACES</li>
            </ul>
          </div>
        </div>

        {/* Right column: White Background */}
        <div className="col-span-7 h-full">
          <div className="bg-white border border-gray-200 rounded-2xl h-full flex flex-col justify-between p-5 relative overflow-hidden text-gray-800 min-h-[350px] shadow-xs">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-200 pb-2 uppercase tracking-widest">
              WHEEL_COEFFICIENT_GRID // FRICTION_ANALYSIS
            </div>
            <div className="flex-grow flex items-center justify-center p-2 bg-gray-50/50 rounded-xl border border-gray-100 my-2">
              <svg className="w-[85%] h-[85%] text-slate-400 overflow-visible" viewBox="0 0 300 160" fill="none">
                <g className="tire-spin">
                  <circle cx="150" cy="80" r="45" stroke="#2563eb" strokeWidth="2.5" />
                  <circle cx="150" cy="80" r="15" stroke="#94a3b8" strokeWidth="1.5" />
                  <path d="M150 35 V125 M105 80 H195" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
                </g>
                <text x="156" y="55" fill="#2563eb" className="font-mono text-[8px] font-bold">MECANUM_ROLLER_TREAD</text>
              </svg>
            </div>
            <div className="font-mono text-[9px] text-gray-500 font-bold border-t border-gray-200 pt-2 text-center uppercase">
              Lateral grip configurations minimize angle slips and positional odometry drift.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========================================== SLIDE 10: STRESS & VIBRATIONS ==========================================
export const MechStructureSlide: React.FC = () => {
  return (
    <div className="w-[1200px] h-[675px] bg-white text-gray-800 p-10 rounded-xl border border-gray-200 relative flex flex-col justify-between overflow-hidden shadow-lg select-none">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-feed {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -120; }
        }
        .feed-scroll {
          stroke-dasharray: 12 6;
          animation: scroll-feed 3s linear infinite;
        }
      `}} />

      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-blue-600 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-wider text-blue-600 font-bold uppercase">ASAR_MECHANICS // MODULE_05</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Stress Analysis & Vibrations</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column */}
        <div className="col-span-5 flex flex-col gap-4">
          <div className="bg-gray-50/80 border border-gray-200/60 p-5 rounded-2xl shadow-xs">
            <h3 className="font-mono text-[10px] text-blue-600 font-bold uppercase mb-2">Vibration Dampening</h3>
            <p className="text-[11px] text-gray-500 font-semibold mb-3 leading-relaxed font-sans">
              We calculated the stress loads of structural columns. The upper acrylic plate is isolated via synthetic rubber washers to prevent motor vibrations from causing gyroscope drift inside the IMU.
            </p>
            <ul className="space-y-1.5 font-mono text-[9px] text-slate-600 font-bold leading-normal uppercase">
              <li>• STRESS MARGIN: HIGH FACTOR OF SAFETY (&gt; 3.0)</li>
              <li>• DAMPENING: RUBBER ISOLATION SLEEVES ON SCREWS</li>
              <li>• FREQUENCY RESONANCE: COMPLETELY FILTERED COUPLING</li>
            </ul>
          </div>
        </div>

        {/* Right column: White Background */}
        <div className="col-span-7 h-full">
          <div className="bg-white border border-gray-200 rounded-2xl h-full flex flex-col justify-between p-5 relative overflow-hidden text-gray-800 min-h-[350px] shadow-xs">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-200 pb-2 uppercase tracking-widest">
              VIBRATION_RESONANCE_ANALYSIS // DATA_GRAPH
            </div>
            <div className="flex-grow flex items-center justify-center p-2 bg-gray-50/50 rounded-xl border border-gray-100 my-2">
              <svg className="w-[85%] h-[85%] text-slate-400 overflow-visible" viewBox="0 0 300 160" fill="none">
                <path d="M 40,20 L 40,140 L 280,140" stroke="currentColor" strokeWidth="1.5" />
                <path d="M 40,80 Q 90,140 140,80 T 240,80" stroke="#f59e0b" strokeWidth="1.5" className="feed-scroll" />
                <path d="M 40,80 Q 90,90 140,80 T 240,80" stroke="#10b981" strokeWidth="2.5" className="animate-pulse" />
                <text x="200" y="60" fill="#10b981" className="font-mono text-[7px] font-bold">DAMPED FREQ</text>
                <text x="200" y="115" fill="#f59e0b" className="font-mono text-[7px] font-bold">RAW RESONANCE</text>
              </svg>
            </div>
            <div className="font-mono text-[9px] text-gray-500 font-bold border-t border-gray-200 pt-2 text-center uppercase">
              Passive isolation washers successfully filter high-frequency structural resonances.
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
        @keyframes pulse-signal {
          0%, 100% { stroke-width: 1.5px; opacity: 0.5; }
          50% { stroke-width: 3.5px; opacity: 1.0; }
        }
        .signal-pulse {
          animation: pulse-signal 2.5s ease-in-out infinite;
        }
      `}} />

      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-amber-500 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-wider text-amber-600 font-bold uppercase">ASAR_CIRCUITS // MODULE_01</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Logic Component Selection</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column */}
        <div className="col-span-5 flex flex-col gap-4">
          <div className="bg-gray-50/80 border border-gray-200/60 p-5 rounded-2xl shadow-xs">
            <h3 className="font-mono text-[10px] text-amber-600 font-bold uppercase mb-2">Electronic Component Matrix</h3>
            <p className="text-[11px] text-gray-500 font-semibold mb-3 leading-relaxed font-sans">
              Selection criteria were strictly tailored for high reliability, stable clock timing, and low electrical noise ratios.
            </p>
            <ul className="space-y-1.5 font-mono text-[9px] text-slate-600 font-bold leading-normal uppercase">
              <li>• DUAL CHIPS: ATMEGA2560 (8-BIT) & ESP32 (32-BIT DUAL CORE)</li>
              <li>• SWITCHING: H-BRIDGE L298N BIPOLAR TORQUE MOTOR DRIVER</li>
              <li>• SIGNAL SHIELDS: ELECTROSTATIC NOISE ISOLATION COVERS</li>
            </ul>
          </div>
        </div>

        {/* Right column: White Background */}
        <div className="col-span-7 h-full">
          <div className="bg-white border border-gray-200 rounded-2xl h-full flex flex-col justify-between p-5 relative overflow-hidden text-gray-800 min-h-[350px] shadow-xs">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-200 pb-2 uppercase tracking-widest">
              HARDWARE_LOGIC_INTEGRATION_MAP // SCHEMATIC
            </div>
            <div className="flex-grow flex items-center justify-center p-2 bg-gray-50/50 rounded-xl border border-gray-100 my-2">
              <svg className="w-[85%] h-[85%] text-slate-400 overflow-visible" viewBox="0 0 300 160" fill="none">
                <rect x="30" y="30" width="80" height="100" rx="3" fill="#f8fafc" stroke="#2563eb" strokeWidth="1.5" />
                <rect x="190" y="30" width="80" height="100" rx="3" fill="#f8fafc" stroke="#10b981" strokeWidth="1.5" />
                <line x1="110" y1="80" x2="190" y2="80" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" className="signal-pulse" />
                <text x="70" y="83" fill="#2563eb" textAnchor="middle" className="font-mono text-[8px] font-bold font-sans">ATMEGA2560</text>
                <text x="230" y="83" fill="#10b981" textAnchor="middle" className="font-mono text-[8px] font-bold font-sans">ESP32-WROOM</text>
              </svg>
            </div>
            <div className="font-mono text-[9px] text-gray-500 font-bold border-t border-gray-200 pt-2 text-center uppercase">
              Combining 8-bit deterministic speed with 32-bit dual-core computing power.
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
        @keyframes flow-packets {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
        .uart-flow {
          stroke-dasharray: 8 4;
          animation: flow-packets 2s linear infinite;
        }
      `}} />

      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent animate-[scan_4s_linear_infinite] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none z-0" />

      {/* Slide Header */}
      <div className="border-l-4 border-amber-500 pl-4 py-1 flex justify-between items-center z-10">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="font-mono text-[9px] tracking-wider text-amber-600 font-bold uppercase">ASAR_CIRCUITS // MODULE_02</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Dual-Controller Topology</h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 my-auto flex-grow items-center z-10 relative py-2 select-text">
        {/* Left Column */}
        <div className="col-span-5 flex flex-col gap-4">
          <div className="bg-gray-50/80 border border-gray-200/60 p-5 rounded-2xl shadow-xs">
            <h3 className="font-mono text-[10px] text-amber-600 font-bold uppercase mb-2">Bifurcated Computing separation</h3>
            <p className="text-[11px] text-gray-500 font-semibold mb-3 leading-relaxed font-sans font-medium">
              We separate high-frequency motor actuation from mathematical SLAM computations by partitioning critical tasks onto separate microcontrollers.
            </p>
            <ul className="space-y-1.5 font-mono text-[9px] text-slate-600 font-bold leading-normal uppercase">
              <li>• ARDUINO MEGA: HANDLES DETERMINISTIC Real-time PWM & SONARS</li>
              <li>• ESP32 CORE: EXECUTES ASYNC SLAM, WI-FI API, & CLOUD ROUTING</li>
              <li>• SYNC PROTOCOL: HIGH-RATE BI-DIRECTIONAL HARDWARE UART</li>
            </ul>
          </div>
        </div>

        {/* Right column: White Background */}
        <div className="col-span-7 h-full">
          <div className="bg-white border border-gray-200 rounded-2xl h-full flex flex-col justify-between p-5 relative overflow-hidden text-gray-800 min-h-[350px] shadow-xs">
            <div className="font-mono text-[8px] text-gray-400 font-bold border-b border-gray-200 pb-2 uppercase tracking-widest">
              DIVERGENT_CONTROLLER_TOPOLOGY // ARCHITECTURE
            </div>
            <div className="flex-grow flex items-center justify-center p-2 bg-gray-50/50 rounded-xl border border-gray-100 my-2">
              <svg className="w-[85%] h-[85%] text-slate-400 overflow-visible" viewBox="0 0 300 160" fill="none">
                <rect x="20" y="30" width="105" height="100" rx="4" stroke="#2563eb" strokeWidth="1.5" fill="#f8fafc" />
                <rect x="175" y="30" width="105" height="100" rx="4" stroke="#10b981" strokeWidth="1.5" fill="#f8fafc" />
                <text x="72.5" y="50" fill="#2563eb" textAnchor="middle" className="font-mono text-[8px] font-bold">MEGA 2560 (8-BIT)</text>
                <text x="72.5" y="80" fill="#334155" textAnchor="middle" className="font-mono text-[7px] font-semibold">REAL-TIME DRIVERS</text>
                <text x="72.5" y="100" fill="#334155" textAnchor="middle" className="font-mono text-[7px] font-semibold">PWM MOTOR AXIS</text>
                
                <text x="227.5" y="50" fill="#10b981" textAnchor="middle" className="font-mono text-[8px] font-bold">ESP32 (32-BIT)</text>
                <text x="227.5" y="80" fill="#334155" textAnchor="middle" className="font-mono text-[7px] font-semibold">SLAM PARSING</text>
                <text x="227.5" y="100" fill="#334155" textAnchor="middle" className="font-mono text-[7px] font-semibold">MQTT / WI-FI STACK</text>
                
                {/* Active packet flow */}
                <path d="M125 80 H175" stroke="#a78bfa" strokeWidth="2.5" className="uart-flow" />
              </svg>
            </div>
            <div className="font-mono text-[9px] text-gray-500 font-bold border-t border-gray-200 pt-2 text-center uppercase">
              Isolating motor drivers from compute cores removes latency overheads.
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
            <span className="font-mono text-[9px] tracking-wider text-amber-600 font-bold uppercase">ASAR_CIRCUITS // MODULE_03</span>
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
            <span className="font-mono text-[9px] tracking-wider text-amber-600 font-bold uppercase">ASAR_CIRCUITS // MODULE_04</span>
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
            <span className="font-mono text-[9px] tracking-wider text-amber-600 font-bold uppercase">ASAR_CIRCUITS // MODULE_05</span>
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
            <span className="font-mono text-[9px] tracking-wider text-emerald-600 font-bold uppercase">ASAR_ALGORITHMS // MODULE_01</span>
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
            <span className="font-mono text-[9px] tracking-wider text-emerald-600 font-bold uppercase">ASAR_ALGORITHMS // MODULE_02</span>
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
            <span className="font-mono text-[9px] tracking-wider text-emerald-600 font-bold uppercase">ASAR_ALGORITHMS // MODULE_03</span>
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
            <span className="font-mono text-[9px] tracking-wider text-emerald-600 font-bold uppercase">ASAR_ALGORITHMS // MODULE_04</span>
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
            <span className="font-mono text-[9px] tracking-wider text-emerald-600 font-bold uppercase">ASAR_ALGORITHMS // MODULE_05</span>
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
            <span className="font-mono text-[9px] tracking-wider text-emerald-600 font-bold uppercase">ASAR_ALGORITHMS // MODULE_06</span>
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
    case 'mech_traction':
      return <MechTractionSlide />;
    case 'mech_structure':
      return <MechStructureSlide />;
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