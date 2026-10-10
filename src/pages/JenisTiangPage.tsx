import React from 'react';
import { PileTypesSection } from '../components/PileTypesSection';
import { PricingSection } from '../components/PricingSection';
import { ContactSection } from '../components/ContactSection';
import { Layers, ShieldCheck, CheckCircle2, Ruler, Sparkles } from 'lucide-react';

interface JenisTiangPageProps {
  onOpenInquiry: (data?: { item?: string; dimension?: string; notes?: string }) => void;
  onNavigate: (page: string) => void;
}

export const JenisTiangPage: React.FC<JenisTiangPageProps> = ({ onOpenInquiry, onNavigate }) => {
  return (
    <div className="animate-fadeIn">
      {/* Page Hero Header */}
      <section className="bg-gradient-to-b from-orange-50/70 via-white to-white border-b border-slate-200 pt-12 pb-14 lg:pt-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100/80 text-orange-700 text-xs font-bold rounded-md">
              <Layers className="w-3.5 h-3.5" />
              Spesifikasi Material Beton Pracetak
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Katalog Lengkap Jenis Tiang Pancang Beton
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Pelajari karakteristik penampang mini pile segitiga 28x28, kotak 20x20 hingga 30x30 cm mutu K-450, spun pile silinder sentrifugal K-600, hingga sheet pile turap penahan tanah untuk gedung, ruko, gudang, dan jembatan.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-600" /> Mini Pile Kotak & Segitiga
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-600" /> Spun Pile Prategang Silinder
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-600" /> Corrugated Sheet Pile Turap
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pile Types Details Component */}
      <PileTypesSection
        onSelectTypeForInquiry={(pileName) => {
          onOpenInquiry({
            item: pileName,
            notes: `Permintaan penawaran spesifikasi untuk ${pileName}.`
          });
        }}
      />

      {/* Comparative Price Overview */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Ingin Melihat Simulasi Biaya Berdasarkan Jenis Tiang?</h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto mb-6">
            Gunakan kalkulator estimasi biaya tiang pancang interaktif kami untuk menghitung perkiraan total kebutuhan material proyek Anda.
          </p>
          <button
            onClick={() => onNavigate('harga')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg text-sm shadow transition-colors cursor-pointer"
          >
            Buka Kalkulator & Harga Pancang
          </button>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};
