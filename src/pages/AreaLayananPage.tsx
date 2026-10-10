import React from 'react';
import { ServiceAreaSection } from '../components/ServiceAreaSection';
import { ContactSection } from '../components/ContactSection';
import { MapPin, Navigation, CheckCircle2, Truck } from 'lucide-react';

interface AreaLayananPageProps {
  onOpenInquiry: (data?: { item?: string; dimension?: string; notes?: string }) => void;
  onNavigate: (page: string) => void;
}

export const AreaLayananPage: React.FC<AreaLayananPageProps> = ({ onOpenInquiry, onNavigate }) => {
  return (
    <div className="animate-fadeIn">
      {/* Page Hero Header */}
      <section className="bg-gradient-to-b from-orange-50/70 via-white to-white border-b border-slate-200 pt-12 pb-14 lg:pt-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100/80 text-orange-700 text-xs font-bold rounded-md">
              <MapPin className="w-3.5 h-3.5" />
              Cakupan Wilayah Proyek Jabodetabek
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Area Layanan Tiang Pancang Jakarta & Bodetabek
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Dukungan pengiriman tiang pancang cepat dan mobilisasi armada alat pancang HSPD ke seluruh 5 wilayah DKI Jakarta (Jakarta Pusat, Barat, Selatan, Timur, Utara) serta Tangerang, Bekasi, Depok, dan Bogor.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-600" /> Mobilisasi Cepat Armada Trailer & Tronton
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-600" /> Analisis Geoteknik Kondisi Tanah Lokal
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-600" /> Koordinasi Perizinan Lingkungan Terpadu
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Area Interactive Component with Soil Conditions */}
      <ServiceAreaSection
        onSelectAreaForQuote={(areaName) => {
          onOpenInquiry({
            notes: `Konsultasi ketersediaan armada dan estimasi mob-demob ke ${areaName}.`
          });
        }}
      />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};
