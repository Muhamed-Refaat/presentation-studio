/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Slide, TransitionType } from './types';
import { INITIAL_SLIDES } from './data';
import { SlidesCanvas } from './components/SlidesCanvas';
import { SlidesList } from './components/SlidesList';
import { GASPanel } from './components/GASPanel';
import { 
  Play, Pause, ArrowLeft, ArrowRight, Code, 
  Sparkles, Maximize2, Minimize2, Eye, Layers, 
  Activity, Settings, HelpCircle, Laptop, RotateCcw
} from 'lucide-react';

export default function App() {
  const [slides, setSlides] = useState<Slide[]>(INITIAL_SLIDES);
  const [globalTransition, setGlobalTransition] = useState<TransitionType>('zoom');
  const [activeSlideId, setActiveSlideId] = useState<string>('slide_1');
  const [isPresentationMode, setIsPresentationMode] = useState<boolean>(false);
  const [isScriptPanelOpen, setIsScriptPanelOpen] = useState<boolean>(true);

  // Auto-play slideshow slideshow settings
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const activeIndex = slides.findIndex(s => s.id === activeSlideId);

  // Select a slide securely and safely
  const handleSelectSlide = (id: string) => {
    setActiveSlideId(id);
  };

  // Move to next slide
  const handleNextSlide = () => {
    if (activeIndex < slides.length - 1) {
      setActiveSlideId(slides[activeIndex + 1].id);
    } else {
      // Loop back to slide 1
      setActiveSlideId(slides[0].id);
    }
  };

  // Move to previous slide
  const handlePrevSlide = () => {
    if (activeIndex > 0) {
      setActiveSlideId(slides[activeIndex - 1].id);
    } else {
      // Loop to last slide
      setActiveSlideId(slides[slides.length - 1].id);
    }
  };

  // Auto Play sequence logic
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        handleNextSlide();
      }, 5500); // 5.5 seconds transition
    } else {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
        autoPlayTimerRef.current = null;
      }
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isAutoPlaying, activeIndex, slides]);

  // Handle slide CRUD operations
  const handleAddSlide = (newSlide: Slide) => {
    setSlides(prev => [...prev, newSlide]);
  };

  const handleDeleteSlide = (id: string) => {
    if (id === 'slide_1') return; // protect introduction cover slide
    setSlides(prev => prev.filter(s => s.id !== id));
    if (activeSlideId === id) {
      setActiveSlideId('slide_1');
    }
  };

  const handleUpdateSlide = (updatedSlide: Slide) => {
    setSlides(prev => prev.map(s => s.id === updatedSlide.id ? updatedSlide : s));
  };

  const handleUpdateSlideCoordinates = (id: string, coords: { x: number; y: number; scale: number; rotate: number }) => {
    setSlides(prev => prev.map(s => s.id === id ? { ...s, coordinates: coords } : s));
  };

  const handleReorderSlides = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === slides.length - 1) return;

    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    const reordered = [...slides];
    const temp = reordered[index];
    reordered[index] = reordered[targetIndex];
    reordered[targetIndex] = temp;

    setSlides(reordered);
  };

  const handleResetCoordinates = () => {
    setSlides(INITIAL_SLIDES);
    setActiveSlideId('slide_1');
  };

  // Process Apps Script layout coordinate automations
  const handleApplyLayout = (layoutType: 'spiral' | 'grid' | 'carousel' | 'randomize') => {
    setSlides(prevSlides => {
      return prevSlides.map((slide, i) => {
        if (layoutType === 'spiral') {
          const a = 400; // start radius
          const b = 280; // spiral spacing factor
          const angle = i * 1.15;
          const r = a + b * angle;
          const x = Math.round(r * Math.cos(angle));
          const y = Math.round(r * Math.sin(angle));
          const rotate = Math.round((angle * 180 / Math.PI) - 45);
          const scale = parseFloat((0.6 + i * 0.25).toFixed(2));
          return {
            ...slide,
            coordinates: { x, y, scale, rotate }
          };
        } else if (layoutType === 'grid') {
          const cols = 2;
          const colSpacing = 1750;
          const rowSpacing = 1000;
          const row = Math.floor(i / cols);
          const col = i % cols;
          const x = col * colSpacing - colSpacing / 2;
          const y = row * rowSpacing - rowSpacing / 2;
          return {
            ...slide,
            coordinates: { x, y, scale: 0.9, rotate: 0 }
          };
        } else if (layoutType === 'carousel') {
          const radius = 1600;
          const angle = (i * 2 * Math.PI) / prevSlides.length;
          const x = Math.round(radius * Math.cos(angle));
          const y = Math.round(radius * Math.sin(angle));
          const rotate = Math.round((angle * 180 / Math.PI) + 90);
          return {
            ...slide,
            coordinates: { x, y, scale: 0.8, rotate }
          };
        } else if (layoutType === 'randomize') {
          if (i === 0) {
            return { ...slide, coordinates: { x: 0, y: 0, scale: 1.0, rotate: 0 } };
          }
          const distance = 900 + Math.random() * 1600;
          const angle = Math.random() * 2 * Math.PI;
          const x = Math.round(distance * Math.cos(angle));
          const y = Math.round(distance * Math.sin(angle));
          const scale = parseFloat((0.45 + Math.random() * 1.1).toFixed(2));
          const rotate = Math.round(-180 + Math.random() * 360);
          return {
            ...slide,
            coordinates: { x, y, scale, rotate }
          };
        }
        return slide;
      });
    });
  };

  // Capture standard keyboard listeners for presentation navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleNextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
        e.preventDefault();
        handlePrevSlide();
      } else if (e.key === 'Escape') {
        setIsPresentationMode(false);
        setIsAutoPlaying(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, slides, isPresentationMode]);

  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden bg-[#f3f4f6] text-slate-800 font-sans">
      {/* Top Application Header bar */}
      {!isPresentationMode && (
        <header className="flex justify-between items-center px-6 py-3 border-b border-gray-200 bg-white z-50 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-blue-50 rounded border border-blue-100">
                <Laptop className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h1 className="text-sm font-bold tracking-tight text-gray-900 uppercase">ASAR Workspace</h1>
                <p className="text-[9px] font-mono text-gray-400 uppercase tracking-widest leading-none font-medium">Prezi Zoom presentation studio</p>
              </div>
            </div>
          </div>

          {/* Core mode switch controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setIsPresentationMode(true);
                setIsAutoPlaying(false);
              }}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-mono text-xs font-bold uppercase transition-all tracking-wider shadow-sm hover:shadow active:scale-95"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              Present Show
            </button>

            <span className="text-gray-300">|</span>

            {/* Toggle right Automation script side bar */}
            <button
              onClick={() => setIsScriptPanelOpen(!isScriptPanelOpen)}
              className={`flex items-center gap-2 px-3 py-2 rounded font-mono text-xs border transition-all active:scale-95 ${
                isScriptPanelOpen 
                  ? 'bg-blue-50 border-blue-200 text-blue-600 font-semibold' 
                  : 'bg-white border-gray-200 text-gray-500 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              {isScriptPanelOpen ? 'Hide Panel' : 'GAS Script Panel'}
            </button>

            {/* Reset initial coordinates layout */}
            <button
              onClick={handleResetCoordinates}
              className="p-2 bg-white hover:bg-gray-50 border border-gray-200 text-gray-500 hover:text-gray-800 rounded transition-colors shadow-xs"
              title="Reset slide node coordinates to original template layout"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </header>
      )}

      {/* Main Workspace Frame */}
      <div className="flex-grow flex w-full overflow-hidden relative">
        {/* Left slide list tree (hidden in full play presentation) */}
        {!isPresentationMode && (
          <SlidesList
            slides={slides}
            activeSlideId={activeSlideId}
            onSelectSlide={handleSelectSlide}
            onAddSlide={handleAddSlide}
            onDeleteSlide={handleDeleteSlide}
            onUpdateSlide={handleUpdateSlide}
            onReorderSlides={handleReorderSlides}
            globalTransition={globalTransition}
            onUpdateGlobalTransition={setGlobalTransition}
          />
        )}

        {/* Spatial 3D Panning Zoom Canvas */}
        <div className="flex-1 h-full relative">
          <SlidesCanvas
            slides={slides}
            activeSlideId={activeSlideId}
            isPresentationMode={isPresentationMode}
            onSelectSlide={handleSelectSlide}
            onUpdateSlideCoordinates={handleUpdateSlideCoordinates}
            globalTransition={globalTransition}
          />
        </div>

        {/* Right automatic Google Apps Script editor (hidden in full presentation) */}
        {!isPresentationMode && isScriptPanelOpen && (
          <GASPanel
            slides={slides}
            onApplyLayout={handleApplyLayout}
          />
        )}
      </div>

      {/* Bottom Floating Play Controller in Presentation Mode / Kiosk mode */}
      <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isPresentationMode ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="bg-white/95 backdrop-blur-md border border-gray-200/80 p-3 rounded-full flex items-center gap-4 shadow-xl">
          {/* Back to workspace */}
          <button
            onClick={() => {
              setIsPresentationMode(false);
              setIsAutoPlaying(false);
            }}
            className="flex items-center gap-1.5 px-4 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-200 text-xs text-gray-700 hover:text-gray-950 rounded-full transition-colors font-mono font-medium"
          >
            <Minimize2 className="w-3.5 h-3.5" />
            Workspace
          </button>

          <span className="text-gray-200">|</span>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevSlide}
              className="p-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-full transition-colors active:scale-95 border border-gray-200"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <span className="font-mono text-xs text-blue-600 font-bold px-2">
              {activeIndex + 1} / {slides.length}
            </span>

            <button
              onClick={handleNextSlide}
              className="p-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-full transition-colors active:scale-95 border border-gray-200"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <span className="text-gray-200">|</span>

          {/* Auto slideshow kiosk autoplay */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-mono text-xs font-bold transition-all active:scale-95 ${
              isAutoPlaying 
                ? 'bg-blue-50 text-blue-600 border border-blue-200 shadow-xs' 
                : 'bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-gray-800 border border-gray-200'
            }`}
          >
            {isAutoPlaying ? <Pause className="w-3.5 h-3.5 text-blue-600 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            {isAutoPlaying ? 'Kiosk On (5s)' : 'Auto Kiosk'}
          </button>
        </div>
      </div>
    </div>
  );
}
