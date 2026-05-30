const images = [
  { src: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=400', alt: 'Resultado blanqueamiento' },
  { src: 'https://images.unsplash.com/photo-1588776814546-1ffbb3dcface?w=400', alt: 'Sonrisa perfecta' },
  { src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400', alt: 'Antes y después' },
  { src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400', alt: 'Tratamiento dental' },
  { src: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=400', alt: 'Sonrisa natural' },
  { src: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400', alt: 'Resultado implante' },
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-dm text-xs font-semibold text-mint uppercase tracking-widest mb-2">
            Nuestros Resultados
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-bold text-carbon">
            Resultados que Hablan por Sí Solos
          </h2>
          <p className="font-dm text-slate mt-3">Transformaciones reales de nuestros pacientes</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map(({ src, alt }) => (
            <div key={src} className="overflow-hidden rounded-2xl">
              <img
                src={src}
                alt={alt}
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
