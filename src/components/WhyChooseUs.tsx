import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Equipos de diagnóstico de última generación',
  'Tratamientos sin dolor con técnicas modernas',
  'Atención 100% personalizada para cada paciente',
  'Horarios flexibles incluidos fines de semana',
  'Presupuesto gratuito y sin compromiso',
];

export default function WhyChooseUs() {
  return (
    <section className="bg-lavender py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            <p className="font-dm text-xs font-semibold text-mint uppercase tracking-widest">
              Nuestra Diferencia
            </p>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-bold text-carbon leading-tight">
              ¿Por Qué Elegir a la<br />
              <span className="text-mint">Dra. Andrea Carrillo?</span>
            </h2>
            <p className="font-dm text-slate leading-relaxed">
              Cada detalle en nuestro consultorio está pensado para que tu experiencia sea
              cómoda, segura y transformadora. Combinamos ciencia avanzada con calidez humana.
            </p>

            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="font-dm text-carbon text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-mint hover:bg-mint-dark text-white font-dm font-medium text-sm transition-colors duration-200"
            >
              Agenda tu Consulta Gratuita
            </a>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500"
              alt="Consultorio dental moderno"
              className="rounded-2xl shadow-sm w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
