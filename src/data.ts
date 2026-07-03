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
    title: 'Experimental Testing Metrics',
    subtitle: 'High-fidelity validation of autonomous protocols across synthetic environments.',
    type: 'metrics',
    coordinates: { x: 1800, y: 100, scale: 0.8, rotate: -15 },
    transitionType: 'smooth'
  },
  {
    id: 'slide_3',
    title: 'Project Team Distribution',
    subtitle: 'Mapping the cognitive architecture of AERO_BOTICS across 6 high-precision modules.',
    type: 'team',
    coordinates: { x: 1600, y: 1500, scale: 1.1, rotate: 45 },
    transitionType: 'bouncy'
  },
  {
    id: 'slide_4',
    title: 'Multi-Modal Perception',
    subtitle: 'Sensor Fusion and Modality Strategy for optical spatial awareness and kinetics.',
    type: 'perception',
    coordinates: { x: -200, y: 1800, scale: 0.7, rotate: 90 },
    transitionType: 'snappy'
  },
  {
    id: 'slide_5',
    title: 'Power & Mechanical Setup',
    subtitle: 'Power supply, independent actuation, and mechanical drivetrains.',
    type: 'power',
    coordinates: { x: -1600, y: 900, scale: 1.3, rotate: -30 },
    transitionType: 'slow'
  },
  {
    id: 'slide_6',
    title: 'System Architecture',
    subtitle: 'Deploying a redundant dual-controller framework to separate time-critical actuation.',
    type: 'architecture',
    coordinates: { x: -800, y: -1000, scale: 0.9, rotate: 135 },
    transitionType: 'linear'
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
