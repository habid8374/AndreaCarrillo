import { Star } from 'lucide-react';

const testimonials = [
  {
    text: 'Me daba mucho miedo el dentista, pero la Dra. Andrea me hizo sentir tranquila desde el primer momento. ¡Mi sonrisa cambió por completo! Nunca pensé que ir al dentista pudiera ser tan agradable.',
    name: 'María González',
    role: 'Paciente — Blanqueamiento',
    avatar: 'https://i.pravatar.cc/80?img=5',
  },
  {
    text: 'Excelente servicio, muy profesional y las instalaciones son modernas. El blanqueamiento quedó perfecto. Lo recomiendo totalmente a amigos y familia sin dudarlo.',
    name: 'Carlos Restrepo',
    role: 'Paciente — Ortodoncia',
    avatar: 'https://i.pravatar.cc/80?img=11',
  },
  {
    text: 'Llevé a mis hijos y fue una experiencia maravillosa. Los niños salieron felices y sin miedo. Totalmente recomendada. Es la mejor doctora que hemos tenido en familia.',
    name: 'Sofía Martínez',
    role: 'Paciente — Odontopediatría',
    avatar: 'https://i.pravatar.cc/80?img=9',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-bone py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-dm text-xs font-semibold text-mint uppercase tracking-widest mb-2">
            Testimonios
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-bold text-carbon">
            Lo Que Dicen Nuestros Pacientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ text, name, role, avatar }) => (
            <div key={name} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
              {/* Decorative quote */}
              <span className="font-cormorant text-6xl leading-none text-mint-pale select-none">
                "
              </span>
              <p className="font-dm text-sm text-slate leading-relaxed -mt-8">{text}</p>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" strokeWidth={0} />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-1 border-t border-gray-100">
                <img
                  src={avatar}
                  alt={name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-dm text-sm font-semibold text-carbon">{name}</p>
                  <p className="font-dm text-xs text-slate">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
