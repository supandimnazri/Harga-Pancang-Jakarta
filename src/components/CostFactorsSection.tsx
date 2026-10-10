import React from 'react';
import { COST_FACTORS } from '../data/pancangData';
import { HelpCircle, FileText, ChevronRight } from 'lucide-react';

interface CostFactorsSectionProps {
  onConsult: () => void;
}

export const CostFactorsSection: React.FC<CostFactorsSectionProps> = ({ onConsult }) => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Transparansi Rencana Anggaran Biaya (RAB)
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Faktor yang Mempengaruhi Harga Pancang
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Estimasi biaya pemancangan bersifat modular dan dipengaruhi oleh 10 faktor geoteknik serta operasional lapangan berikut ini.
          </p>
        </div>

        {/* 10 Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-12">
          {COST_FACTORS.map((factor) => (
            <div
              key={factor.number}
              className="p-5 sm:p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 font-black text-sm flex items-center justify-center shrink-0 tabular-nums border border-orange-100">
                {factor.number}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-slate-900">
                  {factor.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {factor.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Card */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900">
              Sudah Memiliki Data Uji Sondir atau Gambar Denah Pondasi?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Kirimkan dokumen teknis proyek Anda untuk mendapatkan perhitungan RAB resmi yang transparan dan akurat.
            </p>
          </div>
          <button
            onClick={onConsult}
            className="px-6 py-3 bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-bold text-xs sm:text-sm rounded-lg transition-colors whitespace-nowrap shrink-0 shadow cursor-pointer flex items-center gap-1.5"
          >
            <FileText className="w-4 h-4" />
            <span>Kirim Dokumen Proyek</span>
          </button>
        </div>

      </div>
    </section>
  );
};
