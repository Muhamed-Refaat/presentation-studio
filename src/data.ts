/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Slide } from './types';

export const INITIAL_SLIDES: Slide[] = [
  {
    id: 'slide_1',
    title: 'Adaptive Smart Autonomous Robot (ASAR)',
    subtitle: 'BORG EL ARAB TECHNOLOGICAL UNIVERSITY | FACULTY OF INDUSTRY AND ENERGY TECHNOLOGY | IT DEPARTMENT',
    type: 'mission_control',
    coordinates: { x: 0, y: 0, scale: 1.0, rotate: 0 },
    transitionType: 'spring'
  },
  {
    id: 'slide_2',
    title: 'ASAR Team',
    subtitle: 'Comprehensive grading, sub-team assignments, and roles of the autonomous robot team.',
    type: 'team',
    coordinates: { x: 1800, y: 0, scale: 0.8, rotate: -15 },
    transitionType: 'smooth'
  },
  {
    id: 'slide_3',
    title: 'Project Introduction',
    subtitle: 'Core vision, institutional alignment, and academic goals of the autonomous robot initiative.',
    type: 'introduction',
    coordinates: { x: 3400, y: 350, scale: 0.9, rotate: 0 },
    transitionType: 'spring'
  },
  {
    id: 'slide_4',
    title: 'Problem Statement',
    subtitle: 'Analyzing the physical and computing limitations of traditional mobile robotic units.',
    type: 'problem_statement',
    coordinates: { x: 4800, y: 1500, scale: 1.1, rotate: 30 },
    transitionType: 'bouncy'
  },
  {
    id: 'slide_5',
    title: 'System Overview',
    subtitle: 'Dissecting the core multi-disciplinary engineering pillars of the ASAR framework.',
    type: 'system_overview',
    coordinates: { x: 3200, y: 2600, scale: 1.0, rotate: -45 },
    transitionType: 'snappy'
  },
  
  // ==================== MECHANICAL SECTION ====================
  {
    id: 'slide_6',
    title: 'Chassis Design & 3D Geometry',
    subtitle: 'Structural mechanics: Dual-level rounded design plate layout and supportive frames.',
    type: 'mech_chassis',
    coordinates: { x: 1200, y: 3800, scale: 0.85, rotate: 90 },
    transitionType: 'slow'
  },
  {
    id: 'slide_7',
    title: 'Power Train System & Motors',
    subtitle: 'Locomotion dynamics: Geared DC motors and PWM torque curves.',
    type: 'mech_powertrain',
    coordinates: { x: 2400, y: 3800, scale: 0.85, rotate: 90 },
    transitionType: 'smooth'
  },
  {
    id: 'slide_8',
    title: 'Steering System & Kinematics',
    subtitle: 'Differential drive equations: Velocity ratios, zero-radius spins, and angular pivot curves.',
    type: 'mech_steering',
    coordinates: { x: 3600, y: 3800, scale: 0.85, rotate: 90 },
    transitionType: 'spring'
  },
  {
    id: 'slide_9',
    title: 'Wheel Selection & Ground Traction',
    subtitle: 'Surface friction: Wheel metrics and tile-floor traction coefficients.',
    type: 'mech_traction',
    coordinates: { x: 4800, y: 3800, scale: 0.85, rotate: 90 },
    transitionType: 'snappy'
  },
  {
    id: 'slide_10',
    title: 'Stress Analysis & Vibrations',
    subtitle: 'Structural safety: Support pillar stress calculations and motor vibration dampening.',
    type: 'mech_structure',
    coordinates: { x: 6000, y: 3800, scale: 0.85, rotate: 90 },
    transitionType: 'slow'
  },

  // ==================== ELECTRICAL SECTION ====================
  {
    id: 'slide_11',
    title: 'Logic Component Selection',
    subtitle: 'Component selection: Deciding processing chips, motor gates, and sensory arrays.',
    type: 'elec_components',
    coordinates: { x: 5500, y: 5200, scale: 1.0, rotate: -30 },
    transitionType: 'spring'
  },
  {
    id: 'slide_12',
    title: 'Dual-Controller Topology',
    subtitle: 'Computing separation: Arduino Mega 2560 and ESP32-WROOM task delegation schedules.',
    type: 'elec_controllers',
    coordinates: { x: 4100, y: 5200, scale: 1.0, rotate: -30 },
    transitionType: 'smooth'
  },
  {
    id: 'slide_13',
    title: 'Power Step-Down Regulators',
    subtitle: 'Stable voltage lines: LM2596 buck Step-down routing (12.6V down to 5V and 9V).',
    type: 'elec_power',
    coordinates: { x: 2700, y: 5200, scale: 1.0, rotate: -30 },
    transitionType: 'snappy'
  },
  {
    id: 'slide_14',
    title: 'BMS Battery Protection',
    subtitle: 'High-current protection: Lithium cell balanced charging and overcurrent safety thresholds.',
    type: 'elec_bms',
    coordinates: { x: 1300, y: 5200, scale: 1.0, rotate: -30 },
    transitionType: 'slow'
  },
  {
    id: 'slide_15',
    title: 'Sensor Interfacing Schematic',
    subtitle: 'Wiring connections: Multi-modal sensor mapping to dedicated microcontroller buses.',
    type: 'elec_wiring',
    coordinates: { x: -100, y: 5200, scale: 1.0, rotate: -30 },
    transitionType: 'spring'
  },

  // ==================== SOFTWARE SECTION ====================
  {
    id: 'slide_16',
    title: 'Static Software Architecture',
    subtitle: 'Structured task loops: Core modular scheduling and state definition blocks.',
    type: 'soft_static',
    coordinates: { x: -1500, y: 3800, scale: 0.9, rotate: 180 },
    transitionType: 'linear'
  },
  {
    id: 'slide_17',
    title: 'Dynamic Serial Handshakes',
    subtitle: 'Bi-directional protocols: Arduino Mega and ESP32 serial packet transmission contracts.',
    type: 'soft_dynamic',
    coordinates: { x: -2700, y: 3800, scale: 0.9, rotate: 180 },
    transitionType: 'smooth'
  },
  {
    id: 'slide_18',
    title: 'LiDAR SLAM Occupancy Mapping',
    subtitle: 'Spatial grid representation: Real-time range measurements and 2D grid cell values.',
    type: 'soft_slam',
    coordinates: { x: -3900, y: 3800, scale: 0.9, rotate: 180 },
    transitionType: 'snappy'
  },
  {
    id: 'slide_19',
    title: 'Kalman Attitude Math',
    subtitle: '6-Axis sensor fusion: Noise filtering equations and real-time gyro calibration.',
    type: 'soft_kalman',
    coordinates: { x: -3900, y: 2400, scale: 0.9, rotate: 180 },
    transitionType: 'spring'
  },
  {
    id: 'slide_20',
    title: 'FSM Obstacle Avoidance Loop',
    subtitle: 'Finite State Machine: Sensor feedback driving obstacle state control routines.',
    type: 'soft_fsm',
    coordinates: { x: -2700, y: 2400, scale: 0.9, rotate: 180 },
    transitionType: 'smooth'
  },
  {
    id: 'slide_21',
    title: 'VCS Integration & GitHub Hosting',
    subtitle: 'Collaborative pipeline: Hosting version control, tests, and CI/CD compiler triggers.',
    type: 'soft_github',
    coordinates: { x: -1500, y: 2400, scale: 0.9, rotate: 180 },
    transitionType: 'spring'
  }
];

export const GOOGLE_APPS_SCRIPT_TEMPLATES = [
  {
    id: 'spiral',
    name: 'Spiral Auto-Layout',
    description: 'Arranges all slides on the infinite canvas in an Archimedean spiral pattern.',
    code: `function spiralLayout() {
  const deck = SlidesApp.getActivePresentation();
  const slides = deck.getSlides();
  Logger.log("Arranging " + slides.length + " slides in a spiral layout...");
  
  const a = 350; // starting radius
  const b = 250; // spiral tight factor
  
  for (let i = 0; i < slides.length; i++) {
    const angle = i * 1.1; // offset angle
    const r = a + b * angle;
    const x = Math.round(r * Math.cos(angle));
    const y = Math.round(r * Math.sin(angle));
    const rotate = Math.round((angle * 180 / Math.PI) - 45);
    const scale = 0.6 + (i * 0.25);
    
    slides[i].setCoordinates({
      x: x,
      y: y,
      scale: parseFloat(scale.toFixed(2)),
      rotate: rotate
    });
    Logger.log("✓ Slide '" + slides[i].getTitle() + "' -> x: " + x + ", y: " + y + ", rotate: " + rotate + "°");
  }
  
  Logger.log("Spiral layout applied successfully!");
}`
  },
  {
    id: 'grid',
    name: 'Dynamic Grid Layout',
    description: 'Arranges all presentation slides in a perfectly aligned 2x3 grid with zero rotation.',
    code: `function gridLayout() {
  const deck = SlidesApp.getActivePresentation();
  const slides = deck.getSlides();
  Logger.log("Aligning slides in a 2-column grid...");
  
  const cols = 2;
  const colSpacing = 1600;
  const rowSpacing = 1100;
  
  for (let i = 0; i < slides.length; i++) {
    const row = Math.floor(i / cols);
    const col = i % cols;
    const x = col * colSpacing - colSpacing / 2;
    const y = row * rowSpacing - rowSpacing / 2;
    
    slides[i].setCoordinates({
      x: x,
      y: y,
      scale: 0.9,
      rotate: 0
    });
    Logger.log("✓ Slide " + (i+1) + " grid pos: col " + col + ", row " + row);
  }
  Logger.log("Grid layout finalized.");
}`
  },
  {
    id: 'carousel',
    name: 'Carousel Circle Layout',
    description: 'Places slides along a circle, orienting them outwards for a spinning carousel zoom effect.',
    code: `function carouselLayout() {
  const deck = SlidesApp.getActivePresentation();
  const slides = deck.getSlides();
  const count = slides.length;
  Logger.log("Creating spatial circular carousel...");
  
  const radius = 1500;
  
  for (let i = 0; i < count; i++) {
    const angle = (i * 2 * Math.PI) / count;
    const x = Math.round(radius * Math.cos(angle));
    const y = Math.round(radius * Math.sin(angle));
    const rotate = Math.round((angle * 180 / Math.PI) + 90);
    
    slides[i].setCoordinates({
      x: x,
      y: y,
      scale: 0.8,
      rotate: rotate
    });
    Logger.log("✓ Positioned Slide #" + (i+1) + " on circle at " + rotate + "°");
  }
  Logger.log("Carousel circle setup completed!");
}`
  },
  {
    id: 'randomize',
    name: 'Cosmic Chaos Layout',
    description: 'Scatters slides with random distances, dramatic scales, and wild rotations.',
    code: `function randomizeLayout() {
  const deck = SlidesApp.getActivePresentation();
  const slides = deck.getSlides();
  Logger.log("Applying Cosmic Chaos randomizer...");
  
  for (let i = 0; i < slides.length; i++) {
    // Exclude the title slide from wild coordinates to keep an anchor point
    if (i === 0) {
      slides[i].setCoordinates({ x: 0, y: 0, scale: 1, rotate: 0 });
      continue;
    }
    
    const distance = 800 + Math.random() * 1400;
    const angle = Math.random() * 2 * Math.PI;
    const x = Math.round(distance * Math.cos(angle));
    const y = Math.round(distance * Math.sin(angle));
    const scale = parseFloat((0.4 + Math.random() * 1.2).toFixed(2));
    const rotate = Math.round(-180 + Math.random() * 360);
    
    slides[i].setCoordinates({
      x: x,
      y: y,
      scale: scale,
      rotate: rotate
    });
    Logger.log("Scatter slide: " + slides[i].getTitle() + " (scale=" + scale + ", rotate=" + rotate + "°)");
  }
  Logger.log("Chaos layout generated!");
}`
  }
];
