import React from 'react';
import { ServicesSection } from '../components/ServicesSection';
import { MethodsSection } from '../components/MethodsSection';
import { MasterPondasiSection } from '../components/MasterPondasiSection';
import { CostFactorsSection } from '../components/CostFactorsSection';
import { ContactSection } from '../components/ContactSection';
import { Wrench, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface JasaPancangPageProps {
  onOpenInquiry: (data?: { item?: string; dimension?: string; notes?: string }) => void;
  onNavigate: (page: string) => void;
}

export const JasaPancangPage: React.FC<JasaPancangPageProps> = ({ onOpenInquiry, onNavigate }) => {
  return (
    <div className="animate-fadeIn">
      {/* Page Hero Header */}
      <section className="bg-gradient-to-b from-orange-50/70 via-white to-white border-b border-slate-200 pt-12 pb-14 lg:pt-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100/80 text-orange-700 text-xs font-bold rounded-md">
              <Wrench className="w-3.5 h-3.5" />
              Kontraktor & Jasa Pemancangan Profesional
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Jasa Pancang Jakarta & Metode Pemancangan HSPD
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Layanan jasa pemancangan tiang pancang presisi untuk gedung perkantoran, ruko, gudang industri, perumahan cluster, dan infrastruktur dengan armada Hydraulic Static Pile Driver (HSPD) bebas getaran dan ramah lingkungan perkotaan.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-600" /> HSPD Tanpa Retak Lingkungan Sekitar
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-600" /> Operator Bersertifikasi & K3 Konstruksi
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-600" /> Uji PDA & Kalendering Berstandar
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown by Building Types */}
      <ServicesSection />

      {/* Methods Comparison: HSPD vs Drop Hammer vs Hydraulic Hammer */}
      <MethodsSection />

      {/* Recommended Contractor Master Pondasi */}
      <MasterPondasiSection />

      {/* Cost Factors & Considerations */}
      <CostFactorsSection onConsult={() => onOpenInquiry({ notes: 'Konsultasi estimasi jasa pemancangan.' })} />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};
