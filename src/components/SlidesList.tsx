/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Slide, TransitionType } from '../types';
import { 
  Trash, Plus, Eye, MoveUp, MoveDown, 
  Settings2, ChevronLeft, ChevronRight, FileText
} from 'lucide-react';

interface SlidesListProps {
  slides: Slide[];
  activeSlideId: string;
  onSelectSlide: (id: string) => void;
  onAddSlide: (slide: Slide) => void;
  onDeleteSlide: (id: string) => void;
  onUpdateSlide: (slide: Slide) => void;
  onReorderSlides: (index: number, direction: 'up' | 'down') => void;
  globalTransition: TransitionType;
  onUpdateGlobalTransition: (type: TransitionType) => void;
}

export const SlidesList: React.FC<SlidesListProps> = ({
  slides,
  activeSlideId,
  onSelectSlide,
  onAddSlide,
  onDeleteSlide,
  onUpdateSlide,
  onReorderSlides,
  globalTransition,
  onUpdateGlobalTransition,
}) => {
  const activeSlide = slides.find(s => s.id === activeSlideId);
  const activeIndex = slides.findIndex(s => s.id === activeSlideId);

  // Quick state for custom slide input modal/form
  const [isAdding, setIsAdding] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newSubtitle, setNewSubtitle] = useState('');
  const [newBody, setNewBody] = useState('');

  const handleAddCustomSlide = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    // Position it relative to the last slide but offset slightly on canvas
    const lastSlide = slides[slides.length - 1];
    const newX = lastSlide ? lastSlide.coordinates.x + 800 : 0;
    const newY = lastSlide ? lastSlide.coordinates.y + 600 : 0;

    const newSlide: Slide = {
      id: `custom_${Date.now()}`,
      title: newTitle,
      subtitle: newSubtitle || 'Dynamically generated slide',
      type: 'custom',
      coordinates: {
        x: newX,
        y: newY,
        scale: 1.0,
        rotate: 0,
      },
      customData: {
        bodyText: newBody || 'Custom notes entered via presentation builder controls.',
        stats: [
          { label: 'STATUS', value: 'ACTIVE' },
          { label: 'SOURCE', value: 'SCRIPT' },
          { label: 'NODE', value: 'OK' }
        ]
      }
    };

    onAddSlide(newSlide);
    setIsAdding(false);
    setNewTitle('');
    setNewSubtitle('');
    setNewBody('');
    onSelectSlide(newSlide.id);
  };

  return (
    <div className="w-80 h-full bg-white border-r border-gray-200 flex flex-col justify-between overflow-hidden">
      {/* Sidebar Header */}
      <div className="p-4 border-b border-gray-200 bg-gray-50/50 flex justify-between items-center">
        <div>
          <h2 className="font-sans text-sm font-bold tracking-tight text-gray-900 uppercase flex items-center gap-2">
            <Settings2 className="w-4 h-4 text-blue-600" />
            Deck Architecture
          </h2>
          <p className="text-[10px] font-mono text-gray-400 uppercase mt-0.5">SLIDES & SPATIAL CONTROLS</p>
        </div>
        <button
          onClick={() => setIsAdding(true)}
          className="p-1.5 bg-blue-50 hover:bg-blue-100 border border-blue-200 hover:border-blue-300 text-blue-600 rounded transition-all active:scale-95"
          title="Create custom spatial slide"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Global Presentation Settings Card */}
      <div className="p-4 bg-blue-50/30 border-b border-gray-200 space-y-2 shrink-0">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
          <Settings2 className="w-3.5 h-3.5 text-blue-600" />
          <span>Deck Transition</span>
        </div>
        <select
          value={globalTransition}
          onChange={(e) => onUpdateGlobalTransition(e.target.value as TransitionType)}
          className="w-full bg-white border border-gray-200 hover:border-gray-300 rounded px-2.5 py-1.5 text-xs text-gray-800 font-sans focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors cursor-pointer"
        >
          <option value="zoom">🔍 Zoom In (Kinematic Immersive Zoom)</option>
          <option value="spring">🌀 Spring (Smooth & Natural)</option>
          <option value="smooth">✨ Smooth (Linear-Ease Tween)</option>
          <option value="snappy">⚡ Snappy (Fast & Agile Spring)</option>
          <option value="slow">🎥 Slow (Cinematic Dramatic)</option>
          <option value="bouncy">🦘 Bouncy (Playful Bounce)</option>
          <option value="linear">📏 Linear (Constant Speed)</option>
        </select>
      </div>

      {/* Slide List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50/25">
        {slides.map((slide, index) => {
          const isActive = slide.id === activeSlideId;
          return (
            <div 
              key={slide.id}
              onClick={() => onSelectSlide(slide.id)}
              className={`group flex items-center justify-between p-2.5 rounded border transition-all cursor-pointer ${
                isActive 
                  ? 'bg-blue-50/70 border-blue-600 shadow-sm' 
                  : 'bg-white border-gray-100 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                {/* Index marker */}
                <div className={`w-6 h-6 rounded flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                  isActive ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'
                }`}>
                  {index + 1}
                </div>
                
                <div className="min-w-0">
                  <div className={`text-xs font-bold truncate ${isActive ? 'text-blue-900' : 'text-gray-800'}`}>{slide.title}</div>
                  <div className="text-[9px] font-mono text-gray-400 truncate uppercase">{slide.type} MODULE</div>
                </div>
              </div>

              {/* Quick controls on hover or if active */}
              <div className={`flex items-center gap-1 shrink-0 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 transition-opacity'}`}>
                {/* Reordering */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onReorderSlides(index, 'up');
                  }}
                  disabled={index === 0}
                  className="p-1 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded disabled:opacity-20"
                >
                  <MoveUp className="w-3 h-3" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onReorderSlides(index, 'down');
                  }}
                  disabled={index === slides.length - 1}
                  className="p-1 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded disabled:opacity-20"
                >
                  <MoveDown className="w-3 h-3" />
                </button>
                
                {/* Delete button (block deleting cover slide for safety) */}
                {slide.id !== 'slide_1' && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteSlide(slide.id);
                    }}
                    className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded"
                    title="Delete slide"
                  >
                    <Trash className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide Coordinates Detail editor */}
      {activeSlide && (
        <div className="p-4 border-t border-gray-200 bg-gray-50 space-y-3">
          <div className="flex justify-between items-center pb-2 border-b border-gray-200">
            <span className="font-mono text-[10px] text-blue-600 font-bold uppercase">Precise Spatial Coordinate</span>
            <span className="font-mono text-[9px] text-gray-400">ID: {activeSlide.id}</span>
          </div>

          {/* Quick inline content editor */}
          <div className="space-y-2">
            <div>
              <label className="text-[9px] font-mono text-gray-500 uppercase block mb-1">Slide Title</label>
              <input
                type="text"
                value={activeSlide.title}
                onChange={(e) => onUpdateSlide({ ...activeSlide, title: e.target.value })}
                className="w-full bg-white border border-gray-200 rounded px-2.5 py-1 text-xs text-gray-800 font-sans focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>
            
            <div>
              <label className="text-[9px] font-mono text-gray-500 uppercase block mb-1">Slide Subtitle / Description</label>
              <textarea
                value={activeSlide.subtitle}
                onChange={(e) => onUpdateSlide({ ...activeSlide, subtitle: e.target.value })}
                rows={2}
                className="w-full bg-white border border-gray-200 rounded px-2.5 py-1 text-xs text-gray-800 font-sans focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-200">
            <div>
              <label className="text-[9px] font-mono text-gray-500 uppercase block mb-0.5">X Position</label>
              <input
                type="number"
                value={activeSlide.coordinates.x}
                onChange={(e) => onUpdateSlide({
                  ...activeSlide,
                  coordinates: { ...activeSlide.coordinates, x: parseInt(e.target.value) || 0 }
                })}
                className="w-full bg-white border border-gray-200 rounded px-2 py-0.5 font-mono text-xs text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-[9px] font-mono text-gray-500 uppercase block mb-0.5">Y Position</label>
              <input
                type="number"
                value={activeSlide.coordinates.y}
                onChange={(e) => onUpdateSlide({
                  ...activeSlide,
                  coordinates: { ...activeSlide.coordinates, y: parseInt(e.target.value) || 0 }
                })}
                className="w-full bg-white border border-gray-200 rounded px-2 py-0.5 font-mono text-xs text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-[9px] font-mono text-gray-500 uppercase block mb-0.5">Scale Vector</label>
              <input
                type="number"
                step="0.1"
                min="0.1"
                max="3.0"
                value={activeSlide.coordinates.scale}
                onChange={(e) => onUpdateSlide({
                  ...activeSlide,
                  coordinates: { ...activeSlide.coordinates, scale: parseFloat(e.target.value) || 1.0 }
                })}
                className="w-full bg-white border border-gray-200 rounded px-2 py-0.5 font-mono text-xs text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-[9px] font-mono text-gray-500 uppercase block mb-0.5">Rotate Vector</label>
              <input
                type="number"
                value={activeSlide.coordinates.rotate}
                onChange={(e) => onUpdateSlide({
                  ...activeSlide,
                  coordinates: { ...activeSlide.coordinates, rotate: parseInt(e.target.value) || 0 }
                })}
                className="w-full bg-white border border-gray-200 rounded px-2 py-0.5 font-mono text-xs text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* Add Custom Slide Modal Overlay */}
      {isAdding && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-[100] p-4">
          <div className="bg-white border border-gray-200 rounded-xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
              <h3 className="text-gray-950 font-bold text-sm uppercase flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" />
                Create Custom Spatial Slide
              </h3>
              <button onClick={() => setIsAdding(false)} className="text-gray-400 hover:text-gray-700 text-xs">Close</button>
            </div>

            <form onSubmit={handleAddCustomSlide} className="p-6 space-y-4">
              <div>
                <label className="text-[10px] font-mono text-blue-600 uppercase block mb-1">Slide Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. System Calibration Logs"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono text-blue-600 uppercase block mb-1">Slide Subtitle</label>
                <input
                  type="text"
                  placeholder="e.g. Diagnostic status check of the actuators."
                  value={newSubtitle}
                  onChange={(e) => setNewSubtitle(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono text-blue-600 uppercase block mb-1">Slide Body Text</label>
                <textarea
                  placeholder="Write slide description notes..."
                  value={newBody}
                  onChange={(e) => setNewBody(e.target.value)}
                  rows={4}
                  className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                />
              </div>

              <div className="flex gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="w-1/2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded font-mono text-xs uppercase font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-mono text-xs font-bold uppercase transition-all shadow-xs"
                >
                  Insert Node
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
