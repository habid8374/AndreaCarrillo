import { ArrowRight, Calendar } from 'lucide-react';

const posts = [
  {
    img: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=400',
    category: 'Higiene Oral',
    title: '5 Hábitos para Mantener tus Dientes Blancos',
    date: '12 Jun 2025',
    excerpt: 'Descubre los secretos que los odontólogos usan en su vida diaria para mantener una sonrisa brillante y saludable durante años.',
  },
  {
    img: '/srv-ortodoncia.jpg',
    category: 'Ortodoncia',
    title: '¿Cuándo es el Momento Ideal para la Ortodoncia?',
    date: '5 Jun 2025',
    excerpt: 'La edad, la madurez dental y el estado de los huesos son factores clave para determinar el mejor momento de iniciar un tratamiento.',
  },
  {
    img: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400',
    category: 'Implantes',
    title: 'Mitos y Verdades sobre los Implantes Dentales',
    date: '28 May 2025',
    excerpt: 'Desmontamos los miedos más comunes sobre los implantes y te contamos por qué son la solución más duradera para la pérdida dental.',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-bone py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-dm text-xs font-semibold text-mint uppercase tracking-widest mb-2">
            Nuestro Blog
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-bold text-carbon">
            Consejos para Tu Salud Oral
          </h2>
          <p className="font-dm text-slate mt-3">Artículos escritos por nuestros especialistas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(({ img, category, title, date, excerpt }) => (
            <article key={title} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
              <div className="overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-mint-pale text-mint text-xs font-dm font-medium w-fit">
                  {category}
                </span>
                <h3 className="font-cormorant text-xl font-semibold text-carbon leading-snug">{title}</h3>
                <p className="font-dm text-sm text-slate leading-relaxed flex-1">{excerpt}</p>
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-slate">
                    <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
                    <span className="font-dm text-xs">{date}</span>
                  </div>
                  <a href="#" className="inline-flex items-center gap-1 font-dm text-sm font-medium text-mint hover:text-mint-dark transition-colors duration-200">
                    Leer más <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
