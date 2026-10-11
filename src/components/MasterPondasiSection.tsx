import React from 'react';
import { Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { GDRIVE_IMAGE_URL, onDriveImageError } from '../constants/images';

export const MasterPondasiSection: React.FC = () => {
  return (
    <section className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white shadow-lg border border-slate-700/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Photo from Google Drive */}
            <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-slate-700 group shadow-md">
              <img
                src={GDRIVE_IMAGE_URL}
                onError={onDriveImageError}
                alt="Dokumentasi proyek pekerjaan pemancangan tiang pancang di lapangan"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-56 sm:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400 block">
                  Dokumentasi Lapangan
                </span>
                <p className="text-xs text-slate-200 mt-0.5 font-medium">
                  Pelaksanaan pemancangan tiang beton proyek Jabodetabek
                </p>
              </div>
            </div>

            {/* Content & Action */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400">
                <Shield className="w-4 h-4" />
                <span>Rekomendasi Rekanan Spesialis</span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Rekomendasi Jasa Pancang Profesional
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Jika Anda sedang mencari penyedia jasa pemancangan untuk proyek di Jakarta dan sekitarnya, layanan{' '}
                <a
                  href="https://masterpondasi.com/layanan/jasa-pancang-jabodetabek/"
                  target="_blank"
                  rel="noopener"
                  className="font-bold text-white hover:text-orange-400 underline underline-offset-4 decoration-orange-500"
                >
                  Jasa Pancang Jabodetabek
                </a>{' '}
                dari Master Pondasi menyediakan solusi pekerjaan pondasi dan pemancangan presisi untuk berbagai skala konstruksi.
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

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <a
                  href="https://masterpondasi.com/layanan/jasa-pancang-jabodetabek/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-bold text-sm rounded-lg shadow-md transition-all group cursor-pointer"
                >
                  <span>Jasa Pancang Jabodetabek</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <span className="text-[11px] text-slate-400">
                  Penyedia Layanan Konstruksi Pondasi
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
