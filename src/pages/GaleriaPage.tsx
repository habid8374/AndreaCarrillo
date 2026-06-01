import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { X } from 'lucide-react';

const categories = [
  { key: 'todos', label: 'Todos' },
  { key: 'antes-despues', label: 'Antes & Después' },
  { key: 'instalaciones', label: 'Instalaciones' },
  { key: 'equipo', label: 'Nuestro Equipo' },
  { key: 'casos', label: 'Casos de Éxito' },
];

const photos = [
  { src: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=700&auto=format&fit=crop', alt: 'Resultado blanqueamiento dental', cat: 'antes-despues' },
  { src: 'https://images.unsplash.com/photo-1588776814546-1ffbb3dcface?w=700&auto=format&fit=crop', alt: 'Control dental profesional', cat: 'instalaciones' },
  { src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=700&auto=format&fit=crop', alt: 'Procedimiento implante', cat: 'casos' },
  { src: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=700&auto=format&fit=crop', alt: 'Sonrisa perfecta resultado', cat: 'antes-despues' },
  { src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&auto=format&fit=crop', alt: 'Dra. Andrea Carrillo', cat: 'equipo' },
  { src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&auto=format&fit=crop', alt: 'Atención personalizada', cat: 'instalaciones' },
  { src: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=700&auto=format&fit=crop', alt: 'Caso de estética dental', cat: 'casos' },
  { src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=700&auto=format&fit=crop', alt: 'Instalaciones del consultorio', cat: 'instalaciones' },
  { src: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=700&auto=format&fit=crop', alt: 'Dr. Sebastián Torres', cat: 'equipo' },
  { src: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=700&auto=format&fit=crop', alt: 'Dra. Valentina Ríos', cat: 'equipo' },
  { src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&auto=format&fit=crop', alt: 'Antes y después ortodoncia', cat: 'antes-despues' },
  { src: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=700&auto=format&fit=crop', alt: 'Higienista Laura Méndez', cat: 'equipo' },
];

export default function GaleriaPage() {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get('cat') || 'todos';
  const [active, setActive] = useState(initialCat);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === 'todos' ? photos : photos.filter(p => p.cat === active);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <div className="bg-bone py-16 lg:py-20 text-center">
        <p className="font-dm text-xs font-semibold text-mint uppercase tracking-widest mb-2">Galería</p>
        <h1 className="font-cormorant text-4xl lg:text-5xl font-bold text-carbon">
          Resultados que Hablan por Sí Solos
        </h1>
        <p className="font-dm text-slate mt-3 max-w-lg mx-auto">
          Transformaciones reales, instalaciones de primer nivel y el equipo que cuida de tu sonrisa.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="sticky top-16 lg:top-20 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <div className="flex gap-1 py-3 min-w-max">
            {categories.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`px-4 py-2 rounded-full font-dm text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                  active === key
                    ? 'bg-mint text-white'
                    : 'text-slate hover:text-carbon hover:bg-gray-50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="font-dm text-sm text-slate mb-6">{filtered.length} fotos</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(({ src, alt }) => (
            <div
              key={src}
              className="overflow-hidden rounded-2xl shadow-sm group cursor-pointer"
              onClick={() => setLightbox(src)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-carbon/0 group-hover:bg-carbon/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full px-4 py-1.5 font-dm text-xs text-carbon font-medium">
                    Ver foto
                  </span>
                </div>
              </div>
              <div className="bg-white px-4 py-3">
                <p className="font-dm text-xs text-slate">{alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-carbon/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
            onClick={() => setLightbox(null)}
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <img
            src={lightbox.replace('w=700', 'w=1200')}
            alt=""
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
