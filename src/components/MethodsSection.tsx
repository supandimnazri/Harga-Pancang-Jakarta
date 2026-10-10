import React from 'react';
import { METHODS } from '../data/pancangData';
import { VolumeX, Activity, Zap, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export const MethodsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Teknologi & Metode Pelaksanaan
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Metode Pemancangan yang Umum Digunakan
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Mengetahui metode pemancangan tiang sangat krusial untuk memastikan kelancaran izin lingkungan, keselamatan gedung sebelah, dan efisiensi biaya proyek di Jakarta.
          </p>
        </div>

        {/* 4 Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {METHODS.map((method, idx) => {
            const isHspd = method.id === 'hspd';

            return (
              <div
                key={method.id}
                className={`rounded-2xl p-6 sm:p-7 border transition-all flex flex-col justify-between ${
                  isHspd
                    ? 'border-orange-500/40 bg-gradient-to-b from-orange-50/40 to-white shadow-md ring-1 ring-orange-500/20'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="space-y-4">
                  
                  {/* Top Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-orange-600">0{idx + 1}.</span>
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                          {method.name}
                        </h3>
                      </div>
                      <div className="text-xs text-slate-500 font-medium mt-0.5">
                        {method.fullName}
                      </div>
                    </div>

                    {isHspd && (
                      <span className="px-2.5 py-1 text-[11px] font-bold text-orange-700 bg-orange-100 rounded-md border border-orange-200 whitespace-nowrap shrink-0">
                        Pilihan Utama Jakarta
                      </span>
                    )}
                  </div>

                  {/* Noise & Vibration Level Metrics */}
                  <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                    <div>
                      <span className="text-slate-500 block">Tingkat Kebisingan:</span>
                      <span className="font-bold text-slate-900">{method.noiseLevel}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Tingkat Getaran:</span>
                      <span className="font-bold text-slate-900">{method.vibrationLevel}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {method.description}
                  </p>

                  {/* Kelebihan */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Kelebihan Utama:</span>
                    </div>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {method.advantages.map((adv, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Catatan / Keterbatasan */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-slate-500" />
                      <span>Pertimbangan Lokasi:</span>
                    </div>
                    <ul className="space-y-1 text-xs text-slate-500">
                      {method.disadvantages.map((dis, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-slate-400 font-bold">•</span>
                          <span>{dis}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Suitability Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-700 bg-slate-50/70 p-3 rounded-lg">
                  <span className="font-bold text-slate-900">Kesesuaian di Jakarta: </span>
                  <span>{method.urbanJakartaSuitability}</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Informative Summary Kicker */}
        <div className="mt-10 p-5 rounded-xl bg-slate-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">
              Mengapa HSPD Sangat Dianjurkan di DKI Jakarta?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Kepadatan bangunan dan pemukiman di Jakarta menjadikan getaran hammer konvensional berisiko tinggi terhadap retak dinding tetangga. Mesin HSPD bekerja dengan gaya jepit dan tekan hidrolik statis tanpa getaran sama sekali.
            </p>
          </div>
          <a
            href="#kontak"
            className="px-5 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-bold text-xs sm:text-sm whitespace-nowrap shrink-0 transition-colors self-start md:self-auto"
          >
            Konsultasi Metode Proyek
          </a>
        </div>

      </div>
    </section>
  );
};
