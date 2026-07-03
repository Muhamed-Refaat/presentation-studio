/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Slide, TransitionType } from '../types';
import { 
  Trash, Eye, MoveUp, MoveDown, 
  Settings2, ChevronLeft, ChevronRight
} from 'lucide-react';

interface SlidesListProps {
  slides: Slide[];
  activeSlideId: string;
  onSelectSlide: (id: string) => void;
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
  onDeleteSlide,
  onUpdateSlide,
  onReorderSlides,
  globalTransition,
  onUpdateGlobalTransition,
}) => {
  const activeSlide = slides.find(s => s.id === activeSlideId);
  const activeIndex = slides.findIndex(s => s.id === activeSlideId);

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
    </div>
  );
};
