import { Link } from 'react-router-dom';
import { Check, X as XIcon, CalendarDays, Phone } from 'lucide-react';

const plans = [
  {
    name: 'Básico',
    price: '$80.000',
    period: 'COP / visita',
    desc: 'Ideal para tu primera visita o chequeo de rutina.',
    color: 'border-gray-200',
    badge: null,
    cta: 'border border-mint text-mint hover:bg-mint-pale',
    features: [
      { label: 'Consulta general', included: true },
      { label: 'Limpieza básica', included: true },
      { label: 'Diagnóstico por imágenes', included: true },
      { label: 'Blanqueamiento dental', included: false },
      { label: 'Radiografías incluidas', included: false },
      { label: 'Plan de tratamiento personalizado', included: false },
      { label: 'Ortodoncia invisible', included: false },
      { label: 'Seguimiento mensual', included: false },
      { label: 'Atención prioritaria', included: false },
    ],
  },
  {
    name: 'Estándar',
    price: '$150.000',
    period: 'COP / visita',
    desc: 'El plan más completo para mantener y mejorar tu sonrisa.',
    color: 'border-mint',
    badge: 'Más Popular',
    cta: 'bg-mint hover:bg-mint-dark text-white',
    features: [
      { label: 'Consulta general', included: true },
      { label: 'Limpieza básica', included: true },
      { label: 'Diagnóstico por imágenes', included: true },
      { label: 'Blanqueamiento dental', included: true },
      { label: 'Radiografías incluidas', included: true },
      { label: 'Plan de tratamiento personalizado', included: true },
      { label: 'Ortodoncia invisible', included: false },
      { label: 'Seguimiento mensual', included: false },
      { label: 'Atención prioritaria', included: false },
    ],
  },
  {
    name: 'Premium',
    price: '$280.000',
    period: 'COP / visita',
    desc: 'Acceso completo a todos nuestros servicios con atención prioritaria.',
    color: 'border-gold',
    badge: null,
    cta: 'border border-gold text-gold hover:bg-yellow-50',
    features: [
      { label: 'Consulta general', included: true },
      { label: 'Limpieza básica', included: true },
      { label: 'Diagnóstico por imágenes', included: true },
      { label: 'Blanqueamiento dental', included: true },
      { label: 'Radiografías incluidas', included: true },
      { label: 'Plan de tratamiento personalizado', included: true },
      { label: 'Ortodoncia invisible', included: true },
      { label: 'Seguimiento mensual', included: true },
      { label: 'Atención prioritaria', included: true },
    ],
  },
];

const serviceRates = [
  { service: 'Blanqueamiento dental (consultorio)', price: 'Desde $150.000 COP' },
  { service: 'Ortodoncia con brackets metálicos', price: 'Desde $800.000 COP' },
  { service: 'Ortodoncia con alineadores invisibles', price: 'Desde $2.500.000 COP' },
  { service: 'Implante dental (por pieza)', price: 'Desde $1.200.000 COP' },
  { service: 'Endodoncia (por diente)', price: 'Desde $280.000 COP' },
  { service: 'Carilla de porcelana (por diente)', price: 'Desde $250.000 COP' },
  { service: 'Diseño de sonrisa (DSD)', price: 'Desde $120.000 COP' },
  { service: 'Limpieza dental + fluorización', price: 'Desde $60.000 COP' },
  { service: 'Consulta de valoración inicial', price: 'Gratuita' },
];

export default function PreciosPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <div className="bg-bone py-16 lg:py-20 text-center">
        <p className="font-dm text-xs font-semibold text-mint uppercase tracking-widest mb-2">Inversión</p>
        <h1 className="font-cormorant text-4xl lg:text-5xl font-bold text-carbon">Planes Claros, Sin Sorpresas</h1>
        <p className="font-dm text-slate mt-3 max-w-lg mx-auto">
          Transparencia total en cada tratamiento. Presupuesto gratuito antes de comenzar, siempre.
        </p>
      </div>

      {/* Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div key={plan.name} className={`relative rounded-2xl bg-white border-2 ${plan.color} p-7 shadow-sm flex flex-col gap-5 ${plan.badge ? 'shadow-md' : ''}`}>
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-mint text-white text-xs font-dm font-semibold rounded-full whitespace-nowrap">
                    {plan.badge}
                  </span>
                )}
                <div>
                  <h3 className="font-cormorant text-2xl font-bold text-carbon">{plan.name}</h3>
                  <p className="font-dm text-xs text-slate mt-1">{plan.desc}</p>
                  <div className="flex items-end gap-1 mt-3">
                    <span className="font-cormorant text-4xl font-bold text-carbon">{plan.price}</span>
                    <span className="font-dm text-xs text-slate mb-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-2.5 flex-1">
                  {plan.features.map(({ label, included }) => (
                    <li key={label} className="flex items-center gap-2.5">
                      {included
                        ? <Check className="w-4 h-4 text-mint flex-shrink-0" strokeWidth={2.5} />
                        : <XIcon className="w-4 h-4 text-gray-300 flex-shrink-0" strokeWidth={2} />}
                      <span className={`font-dm text-xs ${included ? 'text-carbon' : 'text-gray-300'}`}>{label}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/agendar" className={`block text-center py-3 rounded-xl font-dm font-medium text-sm transition-colors duration-200 ${plan.cta}`}>
                  Reservar Ahora
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service rates */}
      <section className="py-20 bg-bone">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="font-dm text-xs font-semibold text-mint uppercase tracking-widest mb-2">Tarifas</p>
            <h2 className="font-cormorant text-3xl lg:text-4xl font-bold text-carbon">Precios por Servicio</h2>
            <p className="font-dm text-slate mt-3 text-sm">Los precios mostrados son orientativos. El presupuesto exacto se entrega en la valoración inicial gratuita.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden divide-y divide-gray-100">
            {serviceRates.map(({ service, price }) => (
              <div key={service} className="flex items-center justify-between px-6 py-4 hover:bg-bone transition-colors duration-200">
                <span className="font-dm text-sm text-carbon">{service}</span>
                <span className={`font-dm text-sm font-semibold flex-shrink-0 ml-4 ${price === 'Gratuita' ? 'text-mint' : 'text-carbon'}`}>{price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing */}
      <section className="py-20 bg-lavender">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="font-dm text-xs font-semibold text-mint uppercase tracking-widest">Financiación</p>
          <h2 className="font-cormorant text-3xl lg:text-4xl font-bold text-carbon">
            Tu Salud Oral No Puede Esperar
          </h2>
          <p className="font-dm text-slate leading-relaxed max-w-2xl mx-auto">
            Sabemos que la salud oral es una inversión importante. Por eso ofrecemos planes de pago flexibles
            sin intereses hasta 12 cuotas, aceptamos todas las tarjetas de crédito y débito, y tenemos convenios
            con los principales fondos de empleados.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-2xl mx-auto">
            {[
              { title: 'Hasta 12 cuotas', desc: 'Sin intereses en planes de tratamiento aprobados.' },
              { title: 'Todas las tarjetas', desc: 'Débito, crédito y transferencia bancaria.' },
              { title: 'Fondos de empleados', desc: 'Convenios con los principales fondos del país.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-5 shadow-sm">
                <p className="font-dm text-sm font-semibold text-carbon">{title}</p>
                <p className="font-dm text-xs text-slate mt-1">{desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link to="/agendar" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-mint hover:bg-mint-dark text-white font-dm font-medium text-sm transition-colors duration-200">
              <CalendarDays className="w-4 h-4" /> Agendar Valoración Gratuita
            </Link>
            <a href="tel:+573001234567" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-mint text-mint hover:bg-mint-pale font-dm font-medium text-sm transition-colors duration-200">
              <Phone className="w-4 h-4" /> Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
