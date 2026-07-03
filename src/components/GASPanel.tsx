/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { GOOGLE_APPS_SCRIPT_TEMPLATES } from '../data';
import { Slide, ExecutionLog } from '../types';
import { 
  Play, Code, FileText, ChevronRight, Check, AlertCircle,
  Terminal as TermIcon, FileCode, Cpu, Sparkles
} from 'lucide-react';

interface GASPanelProps {
  slides: Slide[];
  onApplyLayout: (layoutType: 'spiral' | 'grid' | 'carousel' | 'randomize') => void;
}

export const GASPanel: React.FC<GASPanelProps> = ({ slides, onApplyLayout }) => {
  const [selectedTemplateId, setSelectedTemplateId] = useState('spiral');
  const [codeText, setCodeText] = useState('');
  const [logs, setLogs] = useState<ExecutionLog[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const selectedTemplate = GOOGLE_APPS_SCRIPT_TEMPLATES.find(t => t.id === selectedTemplateId) || GOOGLE_APPS_SCRIPT_TEMPLATES[0];

  useEffect(() => {
    // Set code whenever template changes
    setCodeText(selectedTemplate.code);
  }, [selectedTemplateId]);

  // Simulated Apps Script Run Trigger
  const handleRunScript = () => {
    if (isRunning) return;
    setIsRunning(true);
    setLogs([]);

    const timestamp = () => new Date().toLocaleTimeString();

    // Add initial logs
    const initialLogs: ExecutionLog[] = [
      { timestamp: timestamp(), type: 'info', message: 'Initializing Google Apps Script environment...' },
      { timestamp: timestamp(), type: 'info', message: `Found active document: "AERO_BOTICS Presentation Deck"` },
      { timestamp: timestamp(), type: 'info', message: `Executing function: ${selectedTemplateId === 'spiral' ? 'spiralLayout' : selectedTemplateId === 'grid' ? 'gridLayout' : selectedTemplateId === 'carousel' ? 'carouselLayout' : 'randomizeLayout'}()` }
    ];

    setLogs(initialLogs);

    // Step-by-step sequential logs to simulate a real running GAS macro
    setTimeout(() => {
      setLogs(prev => [
        ...prev,
        { timestamp: timestamp(), type: 'info', message: 'Fetching SlidesApp coordinate collection API...' }
      ]);
    }, 400);

    setTimeout(() => {
      setLogs(prev => [
        ...prev,
        { timestamp: timestamp(), type: 'info', message: `Translating coordinate transform matrices for ${slides.length} slides...` }
      ]);
      // Trigger the actual visual coordinates movement
      onApplyLayout(selectedTemplateId as any);
    }, 900);

    // Sequential itemized coordinates logs
    slides.forEach((slide, idx) => {
      setTimeout(() => {
        setLogs(prev => [
          ...prev,
          { 
            timestamp: timestamp(), 
            type: 'info', 
            message: `✓ slide[${idx}].setCoordinates() applied to "${slide.title.substring(0, 18)}..."` 
          }
        ]);
      }, 1200 + idx * 250);
    });

    // Final finish log
    const finishDelay = 1200 + slides.length * 250 + 200;
    setTimeout(() => {
      setLogs(prev => [
        ...prev,
        { timestamp: timestamp(), type: 'success', message: 'Script completed successfully! Coordinate canvas synchronized.' },
        { timestamp: timestamp(), type: 'info', message: `Execution time: 1.48s. Memory footprint: 4.8MB.` }
      ]);
      setIsRunning(false);
    }, finishDelay);
  };

  return (
    <div className="w-96 h-full bg-white border-l border-gray-200 flex flex-col overflow-hidden">
      {/* Script Panel Header */}
      <div className="p-4 border-b border-gray-200 bg-gray-50/50">
        <h2 className="font-sans text-sm font-bold tracking-tight text-gray-900 uppercase flex items-center gap-2">
          <Code className="w-4 h-4 text-blue-600" />
          Automation Script Editor
        </h2>
        <p className="text-[10px] font-mono text-gray-400 uppercase mt-0.5">Google Apps Script Web App Simulation</p>
      </div>

      {/* Select layout macro */}
      <div className="p-4 bg-gray-50/20 border-b border-gray-100 space-y-2">
        <label className="text-[10px] font-mono text-blue-600 uppercase block font-bold">Choose Canvas Layout Macro</label>
        <select
          value={selectedTemplateId}
          onChange={(e) => setSelectedTemplateId(e.target.value)}
          className="w-full bg-white border border-gray-200 rounded px-2 py-1.5 text-xs text-gray-800 font-sans focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer transition-colors shadow-xs"
        >
          {GOOGLE_APPS_SCRIPT_TEMPLATES.map(t => (
            <option key={t.id} value={t.id}>{t.name}</option>
          ))}
        </select>
        <p className="text-[10px] text-gray-500 italic leading-relaxed font-sans">{selectedTemplate.description}</p>
      </div>

      {/* Script code editor */}
      <div className="flex-1 flex flex-col overflow-hidden relative font-mono text-xs text-gray-700">
        <div className="absolute right-4 top-4 z-10 flex gap-2">
          <button
            onClick={handleRunScript}
            disabled={isRunning}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-wider transition-all shadow-xs ${
              isRunning 
                ? 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer active:scale-95 shadow-sm'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            {isRunning ? 'Running...' : 'Run macro'}
          </button>
        </div>

        {/* Mock Editor Window */}
        <div className="flex-grow overflow-auto bg-gray-50 p-4 leading-normal select-text flex">
          {/* Line Numbers */}
          <div className="text-gray-300 text-right pr-3 border-r border-gray-200 select-none font-mono text-[10px]">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          {/* Syntax Highlight Code block representation */}
          <pre className="pl-3 text-gray-750 font-mono text-[11px] select-text w-full overflow-x-auto whitespace-pre">
            {codeText.split('\n').map((line, idx) => {
              // Quick mock regex parsing for editor look & feel
              let lineHtml = line;
              if (line.includes('function')) {
                lineHtml = line.replace('function', '<span class="text-indigo-600 font-semibold">function</span>');
              }
              if (line.includes('Logger.log')) {
                lineHtml = lineHtml.replace('Logger.log', '<span class="text-blue-600">Logger</span>.<span class="text-emerald-600 font-medium">log</span>');
              }
              if (line.includes('const ') || line.includes('let ')) {
                lineHtml = lineHtml.replace('const ', '<span class="text-indigo-600 font-semibold">const </span>').replace('let ', '<span class="text-indigo-600 font-semibold">let </span>');
              }
              if (line.includes('for ')) {
                lineHtml = lineHtml.replace('for ', '<span class="text-indigo-600 font-semibold">for </span>');
              }
              // color strings
              lineHtml = lineHtml.replace(/"([^"]*)"/g, '<span class="text-teal-600">"$1"</span>');
              
              return (
                <div 
                  key={idx} 
                  dangerouslySetInnerHTML={{ __html: lineHtml || ' ' }}
                  className="font-mono text-[11px]"
                />
              );
            })}
          </pre>
        </div>
      </div>

      {/* Execution logs console */}
      <div className="h-48 bg-white border-t border-gray-200 flex flex-col font-mono text-[10px]">
        <div className="px-4 py-1.5 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
          <span className="text-gray-700 font-bold flex items-center gap-1.5 uppercase">
            <TermIcon className="w-3.5 h-3.5 text-gray-400" />
            Logger Output
          </span>
          <span className="text-gray-300 text-[9px]">CONSOLE_LOG v1.0</span>
        </div>

        <div className="flex-grow overflow-y-auto p-3 space-y-1.5 scrollbar-thin select-text">
          {logs.length === 0 ? (
            <div className="text-gray-400 italic">Logger console idle. Select a layout macro above and click "Run macro" to automate presentation slide placements.</div>
          ) : (
            logs.map((log, i) => (
              <div key={i} className={`flex gap-2 items-start leading-relaxed ${
                log.type === 'success' ? 'text-emerald-600 font-bold' : log.type === 'error' ? 'text-red-600' : 'text-blue-600'
              }`}>
                <span className="text-gray-400 shrink-0 font-mono">[{log.timestamp}]</span>
                <span className="font-mono">{log.message}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
