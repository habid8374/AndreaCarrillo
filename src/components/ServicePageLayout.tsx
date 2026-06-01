import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Tag, ChevronDown, ChevronUp, CalendarDays, ArrowRight } from 'lucide-react';
import type { ElementType } from 'react';

export interface BenefitItem {
  icon: ElementType;
  title: string;
  desc: string;
}

export interface ProcessStep {
  title: string;
  desc: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
}

export interface ServiceData {
  tag: string;
  title: string;
  subtitle: string;
  heroImage: string;
  introTitle: string;
  introText: string[];
  introImage: string;
  benefits: BenefitItem[];
  process: ProcessStep[];
  gallery: GalleryItem[];
  faq: FAQItem[];
  price: string;
  duration: string;
  relatedServices?: { name: string; href: string }[];
}

export default function ServicePageLayout({ data }: { data: ServiceData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-16 lg:pt-20">

      {/* ── Hero ── */}
      <div className="relative h-[65vh] min-h-[440px] overflow-hidden">
        <img src={data.heroImage} alt={data.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon/85 via-carbon/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <Link to="/#servicios" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-dm mb-6 transition-colors duration-200 w-fit">
            <ArrowLeft className="w-4 h-4" /> Todos los Servicios
          </Link>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mint/20 border border-mint/50 text-mint text-xs font-dm font-medium mb-4 w-fit">
            {data.tag}
          </span>
          <h1 className="font-cormorant text-4xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
            {data.title}
          </h1>
          <p className="font-dm text-white/75 text-lg leading-relaxed max-w-xl mt-4">
            {data.subtitle}
          </p>
          <div className="flex flex-wrap gap-5 mt-5">
            <div className="flex items-center gap-1.5 text-white/60 text-sm font-dm">
              <Clock className="w-4 h-4 text-mint" /> {data.duration}
            </div>
            <div className="flex items-center gap-1.5 text-white/60 text-sm font-dm">
              <Tag className="w-4 h-4 text-mint" /> {data.price}
            </div>
          </div>
          <Link
            to="/agendar"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-mint hover:bg-mint-dark text-white font-dm font-medium text-sm transition-colors duration-200 mt-6 w-fit"
          >
            <CalendarDays className="w-4 h-4" /> Agendar Valoración Gratuita
          </Link>
        </div>
      </div>

      {/* ── Intro ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-5">
            <p className="font-dm text-xs font-semibold text-mint uppercase tracking-widest">¿En qué consiste?</p>
            <h2 className="font-cormorant text-3xl lg:text-4xl font-bold text-carbon leading-tight">
              {data.introTitle}
            </h2>
            {data.introText.map((p, i) => (
              <p key={i} className="font-dm text-slate leading-relaxed">{p}</p>
            ))}
            <Link to="/agendar" className="inline-flex items-center gap-1.5 font-dm text-sm font-medium text-mint hover:text-mint-dark transition-colors duration-200">
              Solicitar información <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative">
            <img src={data.introImage} alt={data.introTitle} className="rounded-2xl shadow-sm w-full object-cover aspect-[4/3]" />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-sm px-5 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-mint flex items-center justify-center">
                <CalendarDays className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-dm text-xs font-semibold text-carbon">Valoración Gratuita</p>
                <p className="font-dm text-xs text-slate">Sin compromiso</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-20 bg-bone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-dm text-xs font-semibold text-mint uppercase tracking-widest mb-2">Ventajas</p>
            <h2 className="font-cormorant text-3xl lg:text-4xl font-bold text-carbon">Beneficios del Tratamiento</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-mint-pale flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-mint" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-dm text-sm font-semibold text-carbon">{title}</h3>
                  <p className="font-dm text-xs text-slate leading-relaxed mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-dm text-xs font-semibold text-mint uppercase tracking-widest mb-2">Paso a Paso</p>
            <h2 className="font-cormorant text-3xl lg:text-4xl font-bold text-carbon">¿Cómo es el Proceso?</h2>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-100" />
            <div className="space-y-8">
              {data.process.map(({ title, desc }, i) => (
                <div key={i} className="flex gap-6 items-start relative">
                  <div className="w-10 h-10 rounded-full bg-mint flex-shrink-0 flex items-center justify-center shadow-sm z-10">
                    <span className="font-cormorant text-white font-bold text-base">{i + 1}</span>
                  </div>
                  <div className="bg-bone rounded-2xl p-5 flex-1 shadow-sm">
                    <h3 className="font-dm text-sm font-semibold text-carbon">{title}</h3>
                    <p className="font-dm text-sm text-slate mt-1.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      {data.gallery.length > 0 && (
        <section className="py-20 bg-bone">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="font-dm text-xs font-semibold text-mint uppercase tracking-widest mb-2">Resultados</p>
              <h2 className="font-cormorant text-3xl lg:text-4xl font-bold text-carbon">Galería del Tratamiento</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {data.gallery.map(({ src, alt }) => (
                <div key={src} className="overflow-hidden rounded-2xl shadow-sm group">
                  <img src={src} alt={alt} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-dm text-xs font-semibold text-mint uppercase tracking-widest mb-2">Dudas</p>
            <h2 className="font-cormorant text-3xl lg:text-4xl font-bold text-carbon">Preguntas Frecuentes</h2>
          </div>
          <div className="space-y-3">
            {data.faq.map(({ q, a }, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-bone transition-colors duration-200">
                  <span className="font-dm text-sm font-medium text-carbon">{q}</span>
                  {openFaq === i
                    ? <ChevronUp className="w-4 h-4 text-mint flex-shrink-0" />
                    : <ChevronDown className="w-4 h-4 text-mint flex-shrink-0" />}
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openFaq === i ? 'max-h-48' : 'max-h-0'}`}>
                  <p className="px-6 pb-5 font-dm text-sm text-slate leading-relaxed">{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Services ── */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <section className="py-16 bg-lavender">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="font-cormorant text-2xl font-semibold text-carbon text-center mb-8">También podría interesarte</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {data.relatedServices.map(({ name, href }) => (
                <Link key={href} to={href} className="px-5 py-2.5 rounded-full border border-mint text-mint hover:bg-mint hover:text-white font-dm text-sm transition-colors duration-200">
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA Banner ── */}
      <section className="py-20 bg-mint">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="font-cormorant text-4xl lg:text-5xl font-bold text-white">¿Listo para transformar tu sonrisa?</h2>
          <p className="font-dm text-white/80 leading-relaxed">
            Agenda tu valoración inicial completamente gratuita y sin ningún compromiso. Te esperamos.
          </p>
          <Link
            to="/agendar"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-mint hover:bg-bone font-dm font-semibold transition-colors duration-200 shadow-sm"
          >
            <CalendarDays className="w-5 h-5" /> Agendar Mi Valoración Gratis
          </Link>
        </div>
      </section>
    </div>
  );
}
