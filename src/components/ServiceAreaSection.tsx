import React, { useState } from 'react';
import { MapPin, Navigation, Compass, ChevronRight, Layers } from 'lucide-react';
import { SERVICE_AREAS, AreaInfo } from '../data/pancangData';

interface ServiceAreaSectionProps {
  onSelectAreaForQuote: (areaName: string) => void;
}

export const ServiceAreaSection: React.FC<ServiceAreaSectionProps> = ({ onSelectAreaForQuote }) => {
  const [selectedAreaIndex, setSelectedAreaIndex] = useState<number>(0);
  const activeArea = SERVICE_AREAS[selectedAreaIndex];

  return (
    <section id="area-layanan" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Jangkauan Mobilisasi & Wilayah
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Area Layanan Pancang Jakarta & Sekitarnya
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Menjangkau seluruh lima kota administrasi DKI Jakarta serta kawasan penyangga Bodetabek dengan analisis karakteristik geoteknik lokal untuk setiap wilayah.
          </p>
        </div>

        {/* Region Pills / Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {SERVICE_AREAS.map((area, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedAreaIndex(idx)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                selectedAreaIndex === idx
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200'
              }`}
            >
              {area.name}
            </button>
          ))}
        </div>

        {/* Selected Area Detail Card */}
        <div className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: General & Soil Info */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Wilayah {activeArea.name}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium">
                    Provinsi: {activeArea.region}
                  </div>
                </div>
              </div>

              {/* Karakteristik Tanah */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-orange-600" />
                  <span>Karakteristik Tanah Lokal:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {activeArea.soilCharacteristics}
                </p>
              </div>

              {/* Rekomendasi Metode */}
              <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-200/80 space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-orange-600 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-orange-600" />
                  <span>Rekomendasi Metode Pancang:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  {activeArea.recommendedMethod}
                </p>
              </div>

              {/* Tipe Proyek Populer */}
              <div className="text-xs text-slate-600">
                <span className="font-bold text-slate-900">Aplikasi Proyek Umum: </span>
                <span>{activeArea.commonProjects}</span>
              </div>
            </div>

            {/* Right: Coverage Subdistricts */}
            <div className="lg:col-span-5 bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-orange-600" />
                <span>Cakupan Area & Kecamatan:</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {activeArea.coverageSubdistricts.map((sub, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs font-medium text-slate-700 bg-white rounded-md border border-slate-200 shadow-2xs"
                  >
                    {sub}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-200">
                <button
                  onClick={() => onSelectAreaForQuote(activeArea.name)}
                  className="w-full py-2.5 px-4 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Cek Biaya Mobilisasi ke {activeArea.name}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 2 Regional Columns Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          
          {/* DKI Jakarta Column */}
          <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3">
            <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-600" />
              <span>5 Kota Administrasi DKI Jakarta</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Layanan mobilisasi armada trailer dan unit HSPD untuk Jakarta Pusat, Jakarta Barat, Jakarta Selatan, Jakarta Timur, dan Jakarta Utara dengan penyesuaian jam kerja malam hari sesuai aturan Dishub DKI.
            </p>
          </div>

          {/* Bodetabek Column */}
          <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-3">
            <h4 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span>Kawasan Penyangga (Bodetabek)</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Jangkauan proyek di Kota & Kabupaten Tangerang, Tangerang Selatan (BSD, Serpong, Bintaro), Bekasi & Cikarang, Kota & Kabupaten Depok, serta Bogor Kota dan Sentul.
            </p>
          </div>

        </div>

        {/* Natural Regional Recommendation */}
        <div className="mt-8 p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Rekomendasi Kontraktor Wilayah
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Untuk kebutuhan survei titik pancang, pengujian tanah sondir, dan mobilisasi alat berat ke lokasi proyek Anda di seluruh area Jakarta maupun Bodetabek, Anda dapat berkonsultasi dengan penyedia{' '}
              <a
                href="https://masterpondasi.com/layanan/jasa-pancang-jabodetabek/"
                target="_blank"
                rel="noopener"
                className="font-bold text-orange-600 hover:text-orange-700 underline underline-offset-4"
              >
                Jasa Pancang Jabodetabek
              </a>{' '}
              dari Master Pondasi.
            </p>
          </div>
          <a
            href="https://masterpondasi.com/layanan/jasa-pancang-jabodetabek/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <span>Jasa Pancang Jabodetabek</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
