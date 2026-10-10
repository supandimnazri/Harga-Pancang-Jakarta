import React from 'react';
import { ArrowDown, MessageSquare, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import heroImage from '../assets/images/hero_pancang_jakarta_1791517475722.jpg';

interface HeroProps {
  onCheckPrice: () => void;
  onConsult: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCheckPrice, onConsult }) => {
  return (
    <section id="beranda" className="relative overflow-hidden bg-slate-900 text-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800">
      {/* Background Accent Grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Context Breadcrumb / Unboxed Topic Indicator */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-orange-400 uppercase">
              <span>Spesialis Pondasi Dalam</span>
              <span aria-hidden="true">·</span>
              <span>DKI Jakarta & Jabodetabek</span>
              <span aria-hidden="true">·</span>
              <span>Update 2026</span>
            </div>

            {/* H1 Primary SEO Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              Harga Pancang Jakarta Terbaru & Jasa Pemancangan Profesional
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Informasi harga tiang pancang, biaya jasa pemancangan, mini pile, spun pile, HSPD, dan kebutuhan pondasi untuk proyek konstruksi di Jakarta.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Tiang Beton Mutu K-450 s/d K-600 SNI</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Metode HSPD Hidrolik Tanpa Bising & Getaran</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Transparan Berdasarkan Hasil Sondir Tanah</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Akses Proyek 5 Wilayah DKI & Jabodetabek</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onCheckPrice}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-lg shadow-lg hover:shadow-orange-950/40 transition-all cursor-pointer"
              >
                <span>CEK HARGA PANCANG</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              <button
                onClick={onConsult}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-slate-100 bg-slate-800 hover:bg-slate-700 active:bg-slate-900 border border-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-orange-400" />
                <span>KONSULTASI JASA PANCANG</span>
              </button>
            </div>

            {/* Quick Navigation to External Partner */}
            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0" />
              <span>
                Pelaksanaan jasa pemancangan resmi didukung oleh partner tepercaya{' '}
                <a
                  href="https://masterpondasi.com/"
                  className="text-orange-400 hover:text-orange-300 font-medium underline underline-offset-2"
                >
                  Master Pondasi
                </a>.
              </span>
            </div>
          </div>

          {/* Right Column: High-Fidelity Construction Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 shadow-2xl group">
              <img
                src={heroImage}
                alt="Tiang pancang beton dan alat pancang hidrolik HSPD di proyek pondasi Jakarta"
                loading="eager"
                referrerPolicy="no-referrer"
                className="w-full h-72 sm:h-96 lg:h-[430px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Subtle gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

              {/* Informative Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/80 text-white">
                <div className="flex items-center justify-between text-xs text-slate-300 pb-1">
                  <span className="font-semibold text-orange-400">Teknologi Modern</span>
                  <span>Standar SNI & SKBI</span>
                </div>
                <p className="text-sm font-bold text-white leading-snug">
                  Hydraulic Static Pile Driver (HSPD) & Mini Pile Pracetak Presisi
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Solusi pemancangan aman untuk gedung, ruko, gudang & perumahan tanpa merusak bangunan sekitar di Jakarta.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Item Proof & Trust Metric Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-800/80">
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <div className="text-2xl font-extrabold text-orange-400 tabular-nums">K-450 / K-600</div>
            <div className="text-xs text-slate-400 mt-0.5">Mutu Beton SNI Pracetak</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <div className="text-2xl font-extrabold text-white tabular-nums">0 dB & 0 mm</div>
            <div className="text-xs text-slate-400 mt-0.5">Bebas Bising & Getaran (HSPD)</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <div className="text-2xl font-extrabold text-white tabular-nums">100%</div>
            <div className="text-xs text-slate-400 mt-0.5">Jangkauan Jabodetabek</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <div className="text-2xl font-extrabold text-orange-400 tabular-nums">15 - 25 Titik</div>
            <div className="text-xs text-slate-400 mt-0.5">Kapasitas Harian per Unit Mesin</div>
          </div>
        </div>

      </div>
    </section>
  );
};
