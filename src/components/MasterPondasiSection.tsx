import React from 'react';
import { Shield, ArrowRight, CheckCircle2, Wrench, HardHat } from 'lucide-react';

export const MasterPondasiSection: React.FC = () => {
  return (
    <section className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-lg border border-slate-700/80">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400">
                <Shield className="w-4 h-4" />
                <span>Rekomendasi Rekanan Spesialis</span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Rekomendasi Jasa Pancang Profesional
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Jika Anda sedang mencari penyedia jasa pemancangan untuk proyek di Jakarta dan sekitarnya,{' '}
                <a
                  href="https://masterpondasi.com/"
                  rel="dofollow"
                  className="font-bold text-white hover:text-orange-400 underline underline-offset-4 decoration-orange-500"
                >
                  Master Pondasi
                </a>{' '}
                menyediakan layanan pekerjaan pondasi dan pemancangan untuk berbagai kebutuhan konstruksi.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Didukung tim operator & teknisi berpengalaman</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>Kesiapan armada mesin pancang hidrolik</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col items-start md:items-end justify-center">
              <a
                href="https://masterpondasi.com/"
                rel="dofollow"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-bold text-sm rounded-lg shadow-md transition-all group"
              >
                <span>Lihat Profil Master Pondasi</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-[11px] text-slate-400 mt-2 text-left md:text-right">
                Penyedia Layanan Konstruksi Pondasi
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
