import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { FaqSection } from '../components/FaqSection';
import { MasterPondasiSection } from '../components/MasterPondasiSection';
import { Phone, Mail, MapPin, MessageSquare, Clock, CheckCircle2 } from 'lucide-react';

interface KontakPageProps {
  initialData?: {
    item?: string;
    dimension?: string;
    notes?: string;
  };
}

export const KontakPage: React.FC<KontakPageProps> = ({ initialData }) => {
  return (
    <div className="animate-fadeIn">
      {/* Page Hero Header */}
      <section className="bg-gradient-to-b from-orange-50/70 via-white to-white border-b border-slate-200 pt-12 pb-14 lg:pt-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100/80 text-orange-700 text-xs font-bold rounded-md">
              <Phone className="w-3.5 h-3.5" />
              Layanan Konsultasi & Permintaan Penawaran RAB
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Hubungi Kami & Request Estimasi Biaya
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Dapatkan perhitungan estimasi biaya tiang pancang, survei lokasi proyek gratis untuk wilayah Jakarta, dan konsultasi teknis kebutuhan tiang mini pile maupun spun pile dari tim geoteknik kami.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-600" /> Respon Cepat Tim Teknis
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-600" /> WhatsApp Direct 0813-2222-156
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-600" /> Penawaran Resmi & Transparan
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <ContactSection initialData={initialData} />

      {/* Master Pondasi Partner Section */}
      <MasterPondasiSection />

      {/* FAQ Quick Questions */}
      <FaqSection onAskDirect={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />
    </div>
  );
};
