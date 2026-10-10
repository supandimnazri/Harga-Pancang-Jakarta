import React from 'react';
import { PricingSection } from '../components/PricingSection';
import { CostFactorsSection } from '../components/CostFactorsSection';
import { MethodsSection } from '../components/MethodsSection';
import { ContactSection } from '../components/ContactSection';
import { ShieldCheck, CheckCircle2, ArrowRight, Phone, HelpCircle } from 'lucide-react';

interface HargaPageProps {
  onOpenInquiry: (data?: { item?: string; dimension?: string; notes?: string }) => void;
  onNavigate: (page: string) => void;
}

export const HargaPage: React.FC<HargaPageProps> = ({ onOpenInquiry, onNavigate }) => {
  return (
    <div className="animate-fadeIn">
      {/* Page Hero Header */}
      <section className="bg-gradient-to-b from-orange-50/70 via-white to-white border-b border-slate-200 pt-12 pb-14 lg:pt-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100/80 text-orange-700 text-xs font-bold rounded-md">
              <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></span>
              Update RAB & Tarif Proyek Jakarta 2026
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Daftar Harga Tiang Pancang & Jasa Pancang Jakarta
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Panduan terlengkap harga material mini pile segitiga/kotak mutu K-450, spun pile silinder K-600, serta tarif borongan jasa pemancangan HSPD hidrolik bebas getaran untuk proyek konstruksi di wilayah DKI Jakarta dan Jabodetabek.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-600" /> Mutu SNI Teruji Laboratorium
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-600" /> Hitung RAB Akurat & Real-Time
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-600" /> Minimum Charge Terjangkau
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Interactive Section & Cost Estimator */}
      <PricingSection onOpenInquiry={onOpenInquiry} />

      {/* Factors influencing costs */}
      <CostFactorsSection onConsult={() => onOpenInquiry({ notes: 'Konsultasi faktor penentu anggaran tiang pancang.' })} />

      {/* Methods comparison overview */}
      <MethodsSection />

      {/* Contact & Request Quotation Form */}
      <ContactSection />
    </div>
  );
};
