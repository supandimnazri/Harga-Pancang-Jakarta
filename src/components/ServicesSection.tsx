import React from 'react';
import { 
  Building, 
  Store, 
  Warehouse, 
  Factory, 
  Home, 
  Building2, 
  Briefcase, 
  Network, 
  ShoppingBag,
  ExternalLink,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const projectTypes = [
    {
      title: 'Gedung Bertingkat',
      icon: Building,
      description: 'Pondasi spun pile dan square pile berdaya dukung tinggi untuk gedung bertingkat 4-12 lantai di Jakarta.'
    },
    {
      title: 'Ruko & Rukan',
      icon: Store,
      description: 'Mini pile 25x25 cm dengan metode HSPD untuk komplek ruko komersial tanpa merusak bangunan sekitar.'
    },
    {
      title: 'Gudang Logistik',
      icon: Warehouse,
      description: 'Pondasi lantai beban berat (heavy-duty floor) untuk pusat pergudangan di Cakung, Cengkareng, dan Marunda.'
    },
    {
      title: 'Pabrik & Industri',
      icon: Factory,
      description: 'Pondasi presisi untuk workshop, boiler, dan mesin industri getaran tinggi di Jabodetabek.'
    },
    {
      title: 'Rumah Tinggal Mewah',
      icon: Home,
      description: 'Mini pile penampang 20x20 cm atau segitiga 28x28 cm untuk hunian residensial 2 hingga 4 lantai.'
    },
    {
      title: 'Apartemen & Hunian Vertikal',
      icon: Building2,
      description: 'Kombinasi spun pile mutu K-600 dan pengujian PDA menyeluruh untuk towers hunian modern.'
    },
    {
      title: 'Perkantoran Swasta & BUMN',
      icon: Briefcase,
      description: 'Solusi pondasi rapi dan aman dengan pengawasan K3 ketat di koridor bisnis perkantoran ibukota.'
    },
    {
      title: 'Infrastruktur & Jembatan',
      icon: Network,
      description: 'Pondasi abutment jembatan jalan lingkungan, box culvert, dan retaining wall penahan tanah.'
    },
    {
      title: 'Proyek Komersial & Mall',
      icon: ShoppingBag,
      description: 'Pemancangan skala besar dengan manajemen logistik pengiriman tiang terjadwal siang dan malam.'
    }
  ];

  return (
    <section id="jasa-pancang" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-orange-600">
            Cakupan Layanan Pemancangan
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Jasa Pancang Jakarta untuk Berbagai Kebutuhan Proyek
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Menyediakan panduan dan informasi pelaksanaan pondasi tiang pancang untuk beragam tipologi konstruksi dari hunian residensial hingga fasilitas industri berat.
          </p>
        </div>

        {/* 9 Project Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {projectTypes.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-orange-600 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Dukungan Standar K3 Konstruksi</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contextual Natural External Linking Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Pelaksanaan Lapangan Profesional
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Untuk kebutuhan pelaksanaan pekerjaan pemancangan, Anda dapat melihat informasi layanan{' '}
              <a
                href="https://masterpondasi.com/"
                rel="dofollow"
                className="font-bold text-orange-600 hover:text-orange-500 underline underline-offset-4"
              >
                Jasa Pancang
              </a>{' '}
              dari Master Pondasi.
            </p>
          </div>

          <a
            href="https://masterpondasi.com/"
            rel="dofollow"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white font-semibold text-xs rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <span>Kunjungi Master Pondasi</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
