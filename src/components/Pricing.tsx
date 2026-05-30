import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Básico',
    price: '$80.000',
    period: 'COP / visita',
    features: ['Consulta general', 'Limpieza básica', 'Diagnóstico por imágenes'],
    cta: 'Reservar Ahora',
    highlight: false,
    ctaStyle: 'border border-mint text-mint hover:bg-mint-pale',
  },
  {
    name: 'Estándar',
    price: '$150.000',
    period: 'COP / visita',
    features: [
      'Todo lo del plan Básico',
      'Blanqueamiento dental',
      'Radiografías incluidas',
      'Plan de tratamiento personalizado',
    ],
    cta: 'Reservar Ahora',
    highlight: true,
    ctaStyle: 'bg-mint hover:bg-mint-dark text-white',
  },
  {
    name: 'Premium',
    price: '$280.000',
    period: 'COP / visita',
    features: [
      'Todo lo del plan Estándar',
      'Ortodoncia invisible',
      'Seguimiento mensual',
      'Atención prioritaria',
    ],
    cta: 'Reservar Ahora',
    highlight: false,
    ctaStyle: 'border border-gold text-gold hover:bg-yellow-50',
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="bg-lavender py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-dm text-xs font-semibold text-mint uppercase tracking-widest mb-2">
            Planes y Precios
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-bold text-carbon">
            Planes Claros, Sin Sorpresas
          </h2>
          <p className="font-dm text-slate mt-3">Invierte en tu salud oral con transparencia</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl bg-white p-8 shadow-sm flex flex-col gap-6 ${
                plan.highlight ? 'border-2 border-mint shadow-md' : 'border border-gray-100'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-mint text-white text-xs font-dm font-semibold rounded-full">
                  Más Popular
                </span>
              )}

              <div>
                <h3 className="font-cormorant text-2xl font-bold text-carbon">{plan.name}</h3>
                <div className="mt-2 flex items-end gap-1">
                  <span className="font-cormorant text-4xl font-bold text-carbon">{plan.price}</span>
                  <span className="font-dm text-xs text-slate mb-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-mint flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="font-dm text-sm text-slate">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`block text-center py-3 rounded-xl font-dm font-medium text-sm transition-colors duration-200 ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
