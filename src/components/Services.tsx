import { useEffect, useRef } from 'react';
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
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicios" className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p className="font-dm text-xs font-semibold text-mint uppercase tracking-widest mb-2">
            Lo que ofrecemos
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-bold text-carbon">
            Nuestros Servicios Odontológicos
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, name, desc }, i) => (
            <div
              key={name}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="service-card group relative rounded-2xl bg-white border border-gray-100 p-7 shadow-sm cursor-pointer overflow-hidden"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Línea dorada animada en la parte superior */}
              <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-mint to-gold rounded-t-2xl transition-all duration-500 group-hover:w-full" />

              {/* Fondo suave al hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-mint-pale/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl" />

              <div className="relative z-10 flex flex-col gap-4 h-full transition-transform duration-300 group-hover:-translate-y-1">

                {/* Icono con animación de scale */}
                <div className="w-12 h-12 rounded-xl bg-mint-pale flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-mint group-hover:shadow-md">
                  <Icon
                    className="w-6 h-6 text-mint transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="font-cormorant text-xl font-semibold text-carbon group-hover:text-mint transition-colors duration-300">
                  {name}
                </h3>

                <p className="font-dm text-sm text-slate leading-relaxed flex-1">
                  {desc}
                </p>

                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1 font-dm text-sm font-medium text-mint hover:text-mint-dark transition-all duration-200 group-hover:gap-2"
                >
                  Ver más <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              {/* Sombra elevada al hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_20px_40px_-12px_rgba(201,169,110,0.25)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
