import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS, FaqItem } from '../data/pancangData';

interface FaqSectionProps {
  onAskDirect: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onAskDirect }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1, 2]); // First 3 open by default

  const toggleIndex = (idx: number) => {
    if (openIndexes.includes(idx)) {
      setOpenIndexes(openIndexes.filter((i) => i !== idx));
    } else {
      setOpenIndexes([...openIndexes, idx]);
    }
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Tanya Jawab Terpopuler
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Pertanyaan Seputar Harga & Jasa Pancang Jakarta (FAQ)
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Jawaban lengkap atas pertanyaan yang paling sering diajukan seputar pemilihan tiang, estimasi biaya, alat hidrolik, dan teknis pekerjaan pemancangan.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-12 space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndexes.includes(idx);

            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-orange-600 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-orange-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Prompt */}
        <div className="mt-10 text-center space-y-3 p-6 bg-white rounded-2xl border border-slate-200">
          <h4 className="text-base font-bold text-slate-900">
            Punya Pertanyaan Spesifik Mengenai Proyek Anda?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Tim konsultan siap membantu menganalisis hasil sondir tanah atau denah kolom pondasi proyek Anda.
          </p>
          <div>
            <button
              onClick={onAskDirect}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Tanya Tim Teknis</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
