import React from 'react';
import { ArrowUpRight, ShieldCheck, MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-orange-600 flex items-center justify-center text-white font-extrabold text-sm">
                HP
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Harga Pancang Jakarta
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Pusat informasi harga tiang pancang beton, mini pile, spun pile, dan jasa pemancangan terpercaya untuk berbagai skala konstruksi di wilayah DKI Jakarta dan Jabodetabek.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div>Standar Mutu Beton SNI Pracetak K-450 s/d K-600</div>
              <div>Spesialis Metode HSPD Hidrolik Ramah Lingkungan Perkotaan</div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Menu Navigasi
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('beranda');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="/harga-pancang-jakarta/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('harga');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Harga Pancang
                </a>
              </li>
              <li>
                <a
                  href="/jasa-pancang-jakarta/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('jasa-pancang');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Jasa Pancang
                </a>
              </li>
              <li>
                <a
                  href="/jenis-tiang-pancang/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('jenis-tiang');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Jenis Tiang
                </a>
              </li>
              <li>
                <a
                  href="/area-layanan/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('area-layanan');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Area Layanan
                </a>
              </li>
              <li>
                <a
                  href="/artikel/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('artikel');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Artikel & Panduan
                </a>
              </li>
              <li>
                <a
                  href="/kontak/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('kontak');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Kontak & Estimasi
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: External Partner & Official Service */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Partner Pelaksanaan Resmi
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
              <div className="text-xs font-bold text-orange-400">
                Penyedia Jasa Rekomendasi:
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Untuk pelaksanaan proyek pondasi dan pemancangan di lapangan, kunjungi rekanan profesional kami:
              </p>
              <div className="pt-1">
                <a
                  href="https://masterpondasi.com/layanan/jasa-pancang-jabodetabek/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-orange-600 hover:bg-orange-500 px-3.5 py-2 rounded-lg transition-colors"
                >
                  <span>Jasa Pancang Jabodetabek</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="text-[11px] text-slate-400">
              Melayani pengujian sondir, boring SPT, PDA test, dan pemancangan HSPD di seluruh Jakarta & Jabodetabek.
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Harga Pancang Jakarta. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Standar Konstruksi Indonesia (SNI)</span>
            <span>·</span>
            <a
              href="https://masterpondasi.com/layanan/jasa-pancang-jabodetabek/"
              target="_blank"
              rel="noopener"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Jasa Pancang Jabodetabek
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
