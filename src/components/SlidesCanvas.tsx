/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Slide, TransitionType } from '../types';
import { DynamicSlide } from './AeroSlides';
import { Move, RefreshCw, ZoomIn, ZoomOut, Compass, Sparkles, Settings } from 'lucide-react';
import { Background3D } from './Background3D';

interface SlidesCanvasProps {
  slides: Slide[];
  activeSlideId: string;
  isPresentationMode: boolean;
  onSelectSlide: (id: string) => void;
  onUpdateSlideCoordinates: (id: string, coords: { x: number; y: number; scale: number; rotate: number }) => void;
  onUpdateSlide: (slide: Slide) => void;
  globalTransition: TransitionType;
}

export const SlidesCanvas: React.FC<SlidesCanvasProps> = ({
  slides,
  activeSlideId,
  isPresentationMode,
  onSelectSlide,
  onUpdateSlideCoordinates,
  onUpdateSlide,
  globalTransition,
}) => {
  const activeSlide = slides.find(s => s.id === activeSlideId) || slides[0];

  // Track the previous active slide to compute cinematic swooping transitions
  const previousSlideRef = useRef<Slide | null>(activeSlide);

  useEffect(() => {
    if (activeSlide && activeSlide.id !== previousSlideRef.current?.id) {
      previousSlideRef.current = activeSlide;
    }
  }, [activeSlideId, slides]);

  // Design mode panning / zooming state
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(0.25); // zoom out in editor mode to see all
  const [isPanning, setIsPanning] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLDivElement>(null);

  // States to support custom glowing red-dot cursor in presentation mode
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseOver, setIsMouseOver] = useState(false);

  // Dragging individual slides in Design Mode
  const [draggingSlideId, setDraggingSlideId] = useState<string | null>(null);
  const slideDragOffset = useRef({ x: 0, y: 0 });

  // State to support rotational handles dragging on canvas
  const [rotatingSlideId, setRotatingSlideId] = useState<string | null>(null);

  // Handle native wheel listener to safely bypass passive scrolling checks on modern browsers
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleNativeWheel = (e: WheelEvent) => {
      if (isPresentationMode) return;
      e.preventDefault(); // prevent page background scroll in editor

      const zoomFactor = 0.03; // smooth zoom step
      const delta = e.deltaY < 0 ? zoomFactor : -zoomFactor;

      setZoom(prev => {
        const nextZoom = parseFloat((prev + delta).toFixed(2));
        return Math.min(Math.max(nextZoom, 0.05), 1.5); // restrict zoom between 5% and 150%
      });
    };

    canvas.addEventListener('wheel', handleNativeWheel, { passive: false });
    return () => {
      canvas.removeEventListener('wheel', handleNativeWheel);
    };
  }, [isPresentationMode]);

  // Handle manual panning on canvas in Design Mode
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isPresentationMode) return;
    
    // If we click on buttons or inputs, do not pan
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('input') || target.closest('.slide-card-inner')) return;

    setIsPanning(true);
    dragStartRef.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isPresentationMode) {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    } else if (isPanning) {
      setPan({
        x: e.clientX - dragStartRef.current.x,
        y: e.clientY - dragStartRef.current.y,
      });
    } else if (draggingSlideId) {
      // Find current slide and calculate new position based on drag coords relative to zoom
      const slideToMove = slides.find(s => s.id === draggingSlideId);
      if (slideToMove) {
        // Simple screen space delta to canvas space mapping
        const rect = canvasRef.current?.getBoundingClientRect();
        if (rect) {
          const mouseXOnCanvas = (e.clientX - rect.left - rect.width / 2 - pan.x) / zoom;
          const mouseYOnCanvas = (e.clientY - rect.top - rect.height / 2 - pan.y) / zoom;
          
          onUpdateSlideCoordinates(draggingSlideId, {
            ...slideToMove.coordinates,
            x: Math.round(mouseXOnCanvas),
            y: Math.round(mouseYOnCanvas),
          });
        }
      }
    } else if (rotatingSlideId) {
      const slideToRotate = slides.find(s => s.id === rotatingSlideId);
      if (slideToRotate) {
        const rect = canvasRef.current?.getBoundingClientRect();
        if (rect) {
          // Calculate screen center point of the slide card
          const cx = rect.left + rect.width / 2 + pan.x + slideToRotate.coordinates.x * zoom;
          const cy = rect.top + rect.height / 2 + pan.y + slideToRotate.coordinates.y * zoom;

          const dx = e.clientX - cx;
          const dy = e.clientY - cy;

          // Calculate angle in degrees
          let angleDeg = Math.round((Math.atan2(dy, dx) * 180) / Math.PI);
          
          // Add 90 degrees offset to compensate for the handle positioned above the center top
          let finalAngle = (angleDeg + 90) % 360;
          if (finalAngle < 0) finalAngle += 360;

          onUpdateSlideCoordinates(rotatingSlideId, {
            ...slideToRotate.coordinates,
            rotate: finalAngle,
          });
        }
      }
    }
  };

  const handleMouseUp = () => {
    setIsPanning(false);
    setDraggingSlideId(null);
    setRotatingSlideId(null);
  };

  // Center on active slide in Design Mode
  const handleCenterOnSlide = (slide: Slide) => {
    if (isPresentationMode) return;
    setPan({
      x: -slide.coordinates.x * zoom,
      y: -slide.coordinates.y * zoom,
    });
  };

  useEffect(() => {
    if (isPresentationMode) {
      // Reset custom pan in presentation
      setPan({ x: 0, y: 0 });
    } else {
      // Center editor around active slide on load
      handleCenterOnSlide(activeSlide);
    }
  }, [isPresentationMode, activeSlideId]);

  // Predefined transition styles mapped to Framer Motion specifications
  const TRANSITION_CONFIGS = {
    zoom: {
      type: 'tween',
      ease: [0.25, 1, 0.4, 1], // Cinematic cubic-bezier for responsive zoom momentum
      duration: 1.45,
    },
    spring: {
      type: 'spring',
      damping: 30,
      stiffness: 85,
      mass: 1.2,
    },
    smooth: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.9,
    },
    snappy: {
      type: 'spring',
      damping: 18,
      stiffness: 160,
      mass: 0.7,
    },
    slow: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 2.2,
    },
    bouncy: {
      type: 'spring',
      damping: 12,
      stiffness: 75,
      mass: 1.4,
    },
    linear: {
      type: 'tween',
      ease: 'linear',
      duration: 0.6,
    }
  };

  // Get active transition based on global presentation config
  const currentTransition = isPresentationMode 
    ? (TRANSITION_CONFIGS[globalTransition] || TRANSITION_CONFIGS.spring)
    : TRANSITION_CONFIGS.spring;

  // Build the camera transform values
  const cameraTransform = isPresentationMode
    ? {
        // Mode 1: Presentation (Prezi inverse positioning)
        x: 0,
        y: -32, // Shift center slightly up to make room for bottom controllers
        scale: (1 / activeSlide.coordinates.scale) * 0.97, // Scale down slightly so 100% of slide fits nicely
        rotate: -activeSlide.coordinates.rotate,
        translateX: -activeSlide.coordinates.x,
        translateY: -activeSlide.coordinates.y,
      }
    : {
        // Mode 2: Design Editor Canvas (User draggable pan & zoom)
        x: pan.x,
        y: pan.y,
        scale: zoom,
        rotate: 0,
        translateX: 0,
        translateY: 0,
      };

  const cameraX = isPresentationMode ? activeSlide.coordinates.x : -pan.x;
  const cameraY = isPresentationMode ? activeSlide.coordinates.y : -pan.y;
  const cameraZoom = isPresentationMode ? ((1 / activeSlide.coordinates.scale) * 0.97) : zoom;

  return (
    <div 
      ref={canvasRef}
      className={`relative w-full h-full overflow-hidden outline-none bg-[#f1f5f9] ${
        isPresentationMode ? 'cursor-none' : isPanning ? 'cursor-grabbing' : 'cursor-grab'
      }`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => {
        setIsMouseOver(false);
        handleMouseUp();
      }}
    >
      {/* 3D Responsive Background Animation with spatial depth */}
      <Background3D cameraX={cameraX} cameraY={cameraY} cameraZoom={cameraZoom} />

      {/* Outer Spatial Stage */}
      <motion.div
        className="absolute origin-center select-none"
        style={{
          width: 0,
          height: 0,
          left: '50%',
          top: '50%',
        }}
        animate={{
          x: cameraTransform.x,
          y: cameraTransform.y,
          scale: (isPresentationMode && globalTransition === 'zoom')
            ? [
                null, 
                (1 / (previousSlideRef.current?.coordinates.scale || 1)) * 2.35, 
                (1 / activeSlide.coordinates.scale) * 0.97
              ]
            : cameraTransform.scale,
          rotate: cameraTransform.rotate,
        }}
        transition={currentTransition}
      >
        <motion.div
          className="absolute"
          animate={{
            x: cameraTransform.translateX,
            y: cameraTransform.translateY,
          }}
          transition={currentTransition}
        >
          {/* SVG Connector Path Lines between slides (Prezi layout style) */}
          {!isPresentationMode && (
            <svg className="absolute top-0 left-0 pointer-events-none overflow-visible w-0 h-0 z-0 opacity-75">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#64748b" />
                </linearGradient>
              </defs>
              {slides.map((slide, i) => {
                if (i === slides.length - 1) return null;
                const nextSlide = slides[i + 1];
                return (
                  <g key={`path-${slide.id}`}>
                    <line
                      x1={slide.coordinates.x}
                      y1={slide.coordinates.y}
                      x2={nextSlide.coordinates.x}
                      y2={nextSlide.coordinates.y}
                      stroke="url(#lineGrad)"
                      strokeWidth="4"
                      strokeDasharray="10 6"
                    />
                    {/* Circle sequence indicator in center of line */}
                    <circle
                      cx={(slide.coordinates.x + nextSlide.coordinates.x) / 2}
                      cy={(slide.coordinates.y + nextSlide.coordinates.y) / 2}
                      r="16"
                      fill="white"
                      stroke="#2563eb"
                      strokeWidth="2.5"
                      className="shadow-xs"
                    />
                    <text
                      x={(slide.coordinates.x + nextSlide.coordinates.x) / 2}
                      y={(slide.coordinates.y + nextSlide.coordinates.y) / 2 + 3.5}
                      fill="#1e3a8a"
                      fontSize="9"
                      fontFamily="monospace"
                      textAnchor="middle"
                      fontWeight="bold"
                    >
                      {i + 1}→{i + 2}
                    </text>
                  </g>
                );
              })}
            </svg>
          )}

          {/* Render all presentation slide cards on the canvas */}
          {slides.map((slide) => {
            const isActive = slide.id === activeSlideId;
            return (
              <motion.div
                key={slide.id}
                id={`slide-node-${slide.id}`}
                className={`absolute origin-center ${
                  isActive ? 'z-30' : 'z-10'
                }`}
                style={{
                  left: slide.coordinates.x,
                  top: slide.coordinates.y,
                  width: 1200,
                  height: 675,
                  // Offset coordinate center
                  x: -600,
                  y: -337.5,
                }}
                animate={{
                  scale: isPresentationMode 
                    ? (isActive ? slide.coordinates.scale : slide.coordinates.scale * 0.7)
                    : slide.coordinates.scale,
                  rotate: slide.coordinates.rotate,
                  opacity: isPresentationMode 
                    ? (isActive ? 1.0 : 0.28) 
                    : 1.0,
                  filter: isPresentationMode 
                    ? (isActive ? 'none' : 'blur(5px) brightness(0.55)') 
                    : (!isActive ? 'blur(1.5px) brightness(0.85) saturate(0.8)' : 'none'),
                }}
                transition={currentTransition}
              >
                {/* Visual wrapper */}
                <div 
                  className={`slide-card-inner w-full h-full rounded-xl transition-all ${
                    !isPresentationMode && isActive
                      ? 'ring-4 ring-blue-500 shadow-[0_15px_45px_rgba(37,99,235,0.15)]'
                      : 'hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)]'
                  }`}
                  onClick={() => {
                    if (!isPresentationMode) {
                      onSelectSlide(slide.id);
                    }
                  }}
                >
                  <DynamicSlide 
                    slide={slide} 
                    onStartPlay={() => {
                      onSelectSlide(slide.id);
                      if (slide.type === 'mission_control') {
                        onSelectSlide(slides[1].id); // Proceed to slide 2
                      }
                    }}
                    onEnterDesign={() => {
                      onSelectSlide(slide.id);
                    }}
                  />
                </div>

                {/* Editor-mode Node Controls (Draggable title bar, Connected Rotation Handle, Floating Self-Positioning HUD) */}
                {!isPresentationMode && isActive && (
                  <>
                    {/* Draggable Command Header Bar */}
                    <div 
                      onMouseDown={(e) => {
                        const target = e.target as HTMLElement;
                        if (target.closest('input') || target.closest('button')) return; // let controls function
                        e.stopPropagation();
                        e.preventDefault();
                        setDraggingSlideId(slide.id);
                        onSelectSlide(slide.id);
                      }}
                      className="absolute -top-14 left-0 right-0 h-14 flex justify-between items-center bg-slate-900 text-white border border-slate-800 px-4 py-2 rounded-t-xl z-40 pointer-events-auto shadow-lg cursor-grab active:cursor-grabbing font-mono select-none"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center font-mono text-[10px] text-white font-bold">
                          {slides.indexOf(slide) + 1}
                        </span>
                        <span className="font-mono text-[10px] text-slate-100 font-bold max-w-[150px] truncate uppercase">{slide.title}</span>
                      </div>

                      <div className="flex gap-4 text-[9px] font-mono text-slate-400">
                        <span>X: {slide.coordinates.x}px</span>
                        <span>Y: {slide.coordinates.y}px</span>
                        <span>S: {slide.coordinates.scale}x</span>
                        <span>R: {slide.coordinates.rotate}°</span>
                      </div>

                      <button
                        className="p-1 bg-slate-800 hover:bg-slate-750 text-slate-300 rounded border border-slate-700 pointer-events-none"
                        title="Grab and drag anywhere on this dark header bar to move slide"
                      >
                        <Move className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Circular Connected Rotation Handle */}
                    <div className="absolute left-1/2 -translate-x-1/2 -top-14 w-[1px] h-12 bg-blue-500 z-30 pointer-events-none" />
                    <div 
                      onMouseDown={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setRotatingSlideId(slide.id);
                      }}
                      className="absolute left-1/2 -translate-x-1/2 -top-26 w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 border-2 border-white flex items-center justify-center cursor-alias shadow-lg text-white pointer-events-auto hover:scale-110 active:scale-95 transition-transform z-40"
                      title="Hold and drag circular handle around slide center to rotate"
                    >
                      <RefreshCw className="w-3.5 h-3.5 animate-pulse" />
                    </div>

                    {/* Self-Positioning floating dark HUD parameter board underneath card */}
                    <div 
                      className="absolute top-[700px] left-1/2 -translate-x-1/2 w-[760px] bg-slate-900/98 backdrop-blur border border-slate-800 p-5 rounded-xl shadow-2xl flex flex-col gap-4 text-white pointer-events-auto select-text z-40 font-sans"
                      onMouseDown={(e) => e.stopPropagation()} // stop canvas drag events while editing
                    >
                      <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                        <span className="font-mono text-xs text-blue-400 font-bold uppercase tracking-wider flex items-center gap-2">
                          <Settings className="w-4 h-4 animate-spin" style={{ animationDuration: '8s' }} />
                          Slide Spatial Coordinates & Content Controller
                        </span>
                        <span className="font-mono text-[10px] text-slate-500 uppercase">{slide.id}</span>
                      </div>

                      {/* Title / Subtitle Text Controls */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Slide Title</label>
                          <input
                            type="text"
                            value={slide.title}
                            onChange={(e) => onUpdateSlide({ ...slide, title: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-200 font-sans focus:outline-none focus:border-blue-500 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Slide Subtitle / Description</label>
                          <input
                            type="text"
                            value={slide.subtitle}
                            onChange={(e) => onUpdateSlide({ ...slide, subtitle: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-200 font-sans focus:outline-none focus:border-blue-500 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Precise Coordinate Inputs */}
                      <div className="grid grid-cols-4 gap-4 pt-1">
                        <div>
                          <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">X Coord (px)</label>
                          <input
                            type="number"
                            value={slide.coordinates.x}
                            onChange={(e) => onUpdateSlide({
                              ...slide,
                              coordinates: { ...slide.coordinates, x: parseInt(e.target.value) || 0 }
                            })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 font-mono focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Y Coord (px)</label>
                          <input
                            type="number"
                            value={slide.coordinates.y}
                            onChange={(e) => onUpdateSlide({
                              ...slide,
                              coordinates: { ...slide.coordinates, y: parseInt(e.target.value) || 0 }
                            })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 font-mono focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Scale Scale (1.0 = 100%)</label>
                          <input
                            type="number"
                            step="0.1"
                            min="0.1"
                            max="3.0"
                            value={slide.coordinates.scale}
                            onChange={(e) => onUpdateSlide({
                              ...slide,
                              coordinates: { ...slide.coordinates, scale: parseFloat(e.target.value) || 1.0 }
                            })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 font-mono focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Rotation Angle (deg)</label>
                          <input
                            type="number"
                            value={slide.coordinates.rotate}
                            onChange={(e) => onUpdateSlide({
                              ...slide,
                              coordinates: { ...slide.coordinates, rotate: parseInt(e.target.value) || 0 }
                            })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 font-mono focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Canvas view controls (Floating bottom right in Design Mode) */}
      {!isPresentationMode && (
        <div className="absolute bottom-6 right-6 z-40 flex items-center gap-2 bg-white border border-gray-200 p-2 rounded-lg shadow-lg">
          <button
            onClick={() => setZoom(prev => Math.min(prev + 0.05, 1.0))}
            className="p-1.5 hover:bg-gray-100 text-gray-500 hover:text-gray-950 rounded transition-colors"
            title="Zoom In Canvas"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoom(prev => Math.max(prev - 0.05, 0.05))}
            className="p-1.5 hover:bg-gray-100 text-gray-500 hover:text-gray-950 rounded transition-colors"
            title="Zoom Out Canvas"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-gray-200 font-mono text-xs">|</span>
          <div className="font-mono text-[10px] text-gray-600 px-1.5 py-0.5 bg-gray-100 border border-gray-200/50 rounded font-medium">
            Zoom: {Math.round(zoom * 100)}%
          </div>
          <button
            onClick={() => {
              setPan({ x: 0, y: 0 });
              setZoom(0.25);
            }}
            className="p-1.5 hover:bg-gray-100 text-gray-500 hover:text-gray-950 rounded transition-colors"
            title="Reset Canvas Position"
          >
            <Compass className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Custom Glowing Laser Pointer Cursor (visible in full presentation) */}
      {isPresentationMode && isMouseOver && (
        <div 
          className="absolute rounded-full bg-red-500 pointer-events-none z-50 shadow-[0_0_8px_#ef4444,0_0_15px_#ef4444,0_0_25px_#ef4444]"
          style={{
            left: 0,
            top: 0,
            width: '12px',
            height: '12px',
            transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) translate(-50%, -50%)`,
            border: '2px solid rgba(255,255,255,0.9)',
            willChange: 'transform',
          }}
        />
      )}
    </div>
  );
};
