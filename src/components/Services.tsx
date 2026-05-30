import { Sparkles, Activity, Anchor, Zap, Heart, Star, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    name: 'Blanqueamiento Dental',
    desc: 'Recupera el brillo natural de tu sonrisa con nuestra tecnología LED de última generación, sin dañar el esmalte.',
  },
  {
    icon: Activity,
    name: 'Ortodoncia',
    desc: 'Alineamos tu sonrisa con brackets tradicionales o alineadores invisibles adaptados a tu estilo de vida.',
  },
  {
    icon: Anchor,
    name: 'Implantes Dentales',
    desc: 'Solución permanente y estética para la pérdida dental. Recupera la funcionalidad y confianza en tu sonrisa.',
  },
  {
    icon: Zap,
    name: 'Endodoncia',
    desc: 'Salvamos tu diente natural con tratamientos de conducto modernos, indoloros y de alta precisión.',
  },
  {
    icon: Heart,
    name: 'Odontopediatría',
    desc: 'Cuidamos la salud oral de los más pequeños en un ambiente amigable, divertido y libre de miedo.',
  },
  {
    icon: Star,
    name: 'Estética Dental',
    desc: 'Diseño de sonrisa digital, carillas de porcelana y tratamientos estéticos para una imagen impecable.',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-dm text-xs font-semibold text-mint uppercase tracking-widest mb-2">
            Lo que ofrecemos
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-bold text-carbon">
            Nuestros Servicios Odontológicos
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, name, desc }) => (
            <div
              key={name}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-mint-pale flex items-center justify-center">
                <Icon className="w-6 h-6 text-mint" strokeWidth={1.5} />
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-carbon">{name}</h3>
              <p className="font-dm text-sm text-slate leading-relaxed flex-1">{desc}</p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-1 font-dm text-sm font-medium text-mint hover:text-mint-dark transition-colors duration-200"
              >
                Ver más <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
