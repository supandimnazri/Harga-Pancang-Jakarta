import React, { useState } from 'react';
import { Layers, ShieldCheck, CheckCircle2, Building2, HardHat, ChevronRight } from 'lucide-react';
import { PILE_TYPES, PileTypeInfo } from '../data/pancangData';
import miniPileImg from '../assets/images/mini_pile_concrete_1791517494957.jpg';
import spunPileImg from '../assets/images/spun_pile_cylindrical_1791517521542.jpg';

interface PileTypesSectionProps {
  onSelectTypeForInquiry: (pileName: string) => void;
}

export const PileTypesSection: React.FC<PileTypesSectionProps> = ({ onSelectTypeForInquiry }) => {
  const [selectedPileId, setSelectedPileId] = useState<string>('mini-pile');

  const selectedPile = PILE_TYPES.find(p => p.id === selectedPileId) || PILE_TYPES[0];

  return (
    <section id="jenis-tiang" className="py-16 lg:py-24 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Katalog Produk & Spesifikasi
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Jenis Tiang Pancang Beton untuk Pondasi
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Pahami karakteristik, kapasitas daya dukung, dan keunggulan masing-masing tipe tiang pancang pracetak agar sesuai dengan kebutuhan struktural bangunan Anda.
          </p>
        </div>

        {/* Pile Type Selector Tabs (Segmented Buttons) */}
        <div className="flex gap-2 overflow-x-auto pb-2 mt-8 border-b border-slate-200">
          {PILE_TYPES.map((pile) => (
            <button
              key={pile.id}
              onClick={() => setSelectedPileId(pile.id)}
              className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                selectedPileId === pile.id
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200'
              }`}
            >
              {pile.name}
            </button>
          ))}
        </div>

        {/* Selected Pile Feature Spotlight Box */}
        <div className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 bg-slate-900 relative min-h-[260px] lg:min-h-full">
              <img
                src={
                  selectedPile.id === 'spun-pile' 
                    ? spunPileImg 
                    : miniPileImg
                }
                alt={selectedPile.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover min-h-[260px] lg:min-h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                  Material Spesifikasi SNI
                </span>
                <p className="text-sm font-semibold text-slate-200 mt-0.5">
                  {selectedPile.specification}
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {selectedPile.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  <span className="font-semibold text-slate-900">Pengertian: </span>
                  {selectedPile.definition}
                </p>
              </div>

              {/* Fungsi */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold uppercase tracking-wider text-orange-600 flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Fungsi Utama Pondasi</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {selectedPile.function}
                </p>
              </div>

              {/* Grid: Kelebihan & Penggunaan Umum */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Kelebihan */}
                <div className="space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-600" />
                    <span>Kelebihan</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {selectedPile.advantages.map((adv, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-orange-600 font-bold">•</span>
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Penggunaan Umum */}
                <div className="space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-orange-600" />
                    <span>Penggunaan Umum</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {selectedPile.commonUses.map((use, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-slate-400 font-bold">›</span>
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                <div className="text-xs text-slate-500">
                  Konsultasikan spesifikasi tiang untuk proyek Anda
                </div>
                <button
                  onClick={() => onSelectTypeForInquiry(selectedPile.name)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Minta Penawaran {selectedPile.name}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* 5 Cards Overview for Quick Scan */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
          {PILE_TYPES.map((pile) => (
            <div
              key={pile.id}
              onClick={() => setSelectedPileId(pile.id)}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                selectedPileId === pile.id
                  ? 'border-orange-500 bg-orange-50/50 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="text-xs font-bold text-orange-600 mb-1">
                Tipe 0{PILE_TYPES.indexOf(pile) + 1}
              </div>
              <h4 className="text-sm font-extrabold text-slate-900 leading-snug">
                {pile.name}
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                {pile.definition}
              </p>
              <div className="mt-3 text-[11px] font-semibold text-orange-600 flex items-center gap-1">
                <span>Pelajari Detail</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
