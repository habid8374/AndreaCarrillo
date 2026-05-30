import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  BlanqueamientoIcon,
  OrtodonciaIcon,
  ImplantesIcon,
  EndodonciaIcon,
  OdontopediatriaIcon,
  EsteticaIcon,
} from './ServiceIcons';

const services = [
  {
    Icon: BlanqueamientoIcon,
    name: 'Blanqueamiento Dental',
    desc: 'Recupera el brillo natural de tu sonrisa con nuestra tecnología LED de última generación, sin dañar el esmalte.',
    img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&h=360&q=80',
  },
  {
    Icon: OrtodonciaIcon,
    name: 'Ortodoncia',
    desc: 'Alineamos tu sonrisa con brackets tradicionales o alineadores invisibles adaptados a tu estilo de vida.',
    img: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&h=360&q=80',
  },
  {
    Icon: ImplantesIcon,
    name: 'Implantes Dentales',
    desc: 'Solución permanente y estética para la pérdida dental. Recupera la funcionalidad y confianza en tu sonrisa.',
    img: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&h=360&q=80',
  },
  {
    Icon: EndodonciaIcon,
    name: 'Endodoncia',
    desc: 'Salvamos tu diente natural con tratamientos de conducto modernos, indoloros y de alta precisión.',
    img: 'https://images.unsplash.com/photo-1588776814546-1ffedde5d1f4?auto=format&fit=crop&w=600&h=360&q=80',
  },
  {
    Icon: OdontopediatriaIcon,
    name: 'Odontopediatría',
    desc: 'Cuidamos la salud oral de los más pequeños en un ambiente amigable, divertido y libre de miedo.',
    img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=600&h=360&q=80',
  },
  {
    Icon: EsteticaIcon,
    name: 'Estética Dental',
    desc: 'Diseño de sonrisa digital, carillas de porcelana y tratamientos estéticos para una imagen impecable.',
    img: 'https://images.unsplash.com/photo-1581391569744-6e4d5d0b9e2e?auto=format&fit=crop&w=600&h=360&q=80',
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map(({ Icon, name, desc, img }, i) => (
            <div
              key={name}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="service-card group relative rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Imagen con zoom en hover */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay suave sobre la imagen */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Línea dorada animada al hover en el borde inferior de la imagen */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-mint to-gold transition-all duration-500 group-hover:w-full" />
              </div>

              {/* Ícono flotante entre imagen y contenido */}
              <div className="relative -mt-5 ml-5">
                <div className="w-10 h-10 rounded-xl bg-white shadow-md border border-gray-100 flex items-center justify-center transition-all duration-300 group-hover:bg-mint group-hover:scale-110 group-hover:shadow-lg">
                  <Icon
                    className="w-5 h-5 text-mint transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Contenido */}
              <div className="px-6 pt-3 pb-6 flex flex-col gap-3 transition-transform duration-300 group-hover:-translate-y-0.5">
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
                  Ver más
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              {/* Sombra dorada al hover */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_20px_40px_-12px_rgba(201,169,110,0.3)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
