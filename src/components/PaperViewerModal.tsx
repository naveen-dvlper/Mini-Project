import React, { useState } from 'react';
import { PAPER_SECTIONS } from '../data/projectData';
import { X, BookOpen, GraduationCap, ArrowLeft, ArrowRight, Copy, Check } from 'lucide-react';

interface PaperViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PaperViewerModal({ isOpen, onClose }: PaperViewerModalProps) {
  const [activeSectionId, setActiveSectionId] = useState<string>('abstract');
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentSection = PAPER_SECTIONS.find(s => s.id === activeSectionId) || PAPER_SECTIONS[0];
  const currentIndex = PAPER_SECTIONS.findIndex(s => s.id === activeSectionId);

  const handleCopySection = () => {
    const text = `${currentSection.chapter}: ${currentSection.title}\n\n${currentSection.content.join('\n\n')}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="w-full max-w-4xl max-h-[90vh] rounded-xl border flex flex-col shadow-2xl transition-colors bg-white dark:bg-[#161b22] border-slate-200 dark:border-[#30363d] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b flex items-center justify-between bg-slate-50 dark:bg-[#0d1117] border-slate-200 dark:border-[#30363d]">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <div>
              <div className="text-xs font-mono text-slate-500 dark:text-[#8b949e]">GNIOT Department of CSE</div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Project Research Report Explorer</h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySection}
              className="px-2.5 py-1 text-xs font-mono rounded border flex items-center gap-1.5 text-slate-700 dark:text-[#c9d1d9] bg-white dark:bg-[#161f2c] border-slate-300 dark:border-[#30363d] hover:border-slate-400 dark:hover:border-[#484f58] transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-[#212836] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Sidebar navigation + Document View */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-[#30363d]">
          {/* Chapter Selector Sidebar */}
          <div className="md:col-span-4 p-4 overflow-y-auto max-h-[30vh] md:max-h-[70vh] bg-slate-50/50 dark:bg-[#0d1117]/50 space-y-1">
            <div className="text-[11px] font-mono text-slate-400 dark:text-[#7d8590] uppercase tracking-wider px-2 py-1 mb-1">
              Table of Contents
            </div>
            {PAPER_SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setActiveSectionId(sec.id)}
                className={`w-full text-left p-2.5 rounded-md text-xs transition-colors cursor-pointer ${
                  activeSectionId === sec.id
                    ? 'bg-blue-600 text-white font-medium shadow-xs'
                    : 'text-slate-700 dark:text-[#c9d1d9] hover:bg-slate-100 dark:hover:bg-[#161f2c]'
                }`}
              >
                <div className={`font-mono text-[10px] ${activeSectionId === sec.id ? 'text-blue-100' : 'text-slate-500 dark:text-[#8b949e]'}`}>
                  {sec.chapter}
                </div>
                <div className="font-semibold truncate">{sec.title}</div>
              </button>
            ))}
          </div>

          {/* Section Reader Content */}
          <div className="md:col-span-8 p-6 sm:p-8 overflow-y-auto max-h-[50vh] md:max-h-[70vh] space-y-4">
            <div className="pb-3 border-b border-slate-200 dark:border-[#212836]">
              <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">
                {currentSection.chapter}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                {currentSection.title}
              </h2>
              <p className="text-xs text-slate-500 dark:text-[#8b949e] mt-1 font-mono">
                {currentSection.summary}
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-700 dark:text-[#c9d1d9] leading-relaxed">
              {currentSection.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="pt-6 mt-6 border-t border-slate-200 dark:border-[#212836] flex items-center justify-between">
              <button
                disabled={currentIndex === 0}
                onClick={() => setActiveSectionId(PAPER_SECTIONS[currentIndex - 1].id)}
                className={`text-xs font-medium flex items-center gap-1.5 cursor-pointer ${
                  currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'text-blue-600 dark:text-blue-400 hover:underline'
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous Section</span>
              </button>

              <button
                disabled={currentIndex === PAPER_SECTIONS.length - 1}
                onClick={() => setActiveSectionId(PAPER_SECTIONS[currentIndex + 1].id)}
                className={`text-xs font-medium flex items-center gap-1.5 cursor-pointer ${
                  currentIndex === PAPER_SECTIONS.length - 1 ? 'opacity-30 cursor-not-allowed' : 'text-blue-600 dark:text-blue-400 hover:underline'
                }`}
              >
                <span>Next Section</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
