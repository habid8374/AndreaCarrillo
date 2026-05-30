import { Award, Users, Cpu } from 'lucide-react';

const stats = [
  { icon: Award, value: '10+', label: 'Años de Experiencia', desc: 'Formación continua y especialización' },
  { icon: Users, value: '2.000+', label: 'Pacientes Atendidos', desc: 'Sonrisas transformadas con éxito' },
  { icon: Cpu, value: 'Alta', label: 'Tecnología', desc: 'Equipos de diagnóstico de última generación' },
];

export default function About() {
  return (
    <section id="sobre-mi" className="bg-bone py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <p className="font-dm text-xs font-semibold text-mint uppercase tracking-widest mb-2">
          Sobre la Doctora
        </p>
        <h2 className="font-cormorant text-4xl lg:text-5xl font-bold text-carbon mb-12 max-w-xl leading-tight">
          Tecnología Avanzada con Atención Personalizada
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500"
              alt="Dra. Andrea Carrillo en su consultorio"
              className="rounded-2xl shadow-sm w-full object-cover aspect-[4/5] max-w-md mx-auto lg:mx-0"
            />
            {/* Badge */}
            <div className="absolute bottom-6 left-1/2 lg:left-8 -translate-x-1/2 lg:translate-x-0 bg-white rounded-2xl shadow-sm px-5 py-3 flex items-center gap-2">
              <span className="text-xl">🏆</span>
              <div>
                <p className="font-dm text-xs font-semibold text-carbon">Premio Excelencia</p>
                <p className="font-dm text-xs text-slate">Odontología 2023</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-5">
            <p className="font-dm text-slate leading-relaxed">
              La Dra. Andrea Carrillo es odontóloga titulada con más de 10 años de experiencia en
              odontología general y estética. Se graduó con honores de la Universidad Nacional y
              posteriormente realizó una especialización en Estética Dental en Barcelona, España.
            </p>
            <p className="font-dm text-slate leading-relaxed">
              Su filosofía de trabajo se centra en la escucha activa y el respeto por cada paciente.
              Cree firmemente que un tratamiento exitoso comienza por entender las necesidades, los
              miedos y los deseos de cada persona. Por eso, cada consulta es un espacio de confianza
              y empatía.
            </p>
            <p className="font-dm text-slate leading-relaxed">
              En su consultorio encontrarás tecnología de punta — desde radiografías digitales hasta
              diseño de sonrisa digital — siempre combinada con el toque humano que la distingue.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {stats.map(({ icon: Icon, value, label, desc }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
                >
                  <Icon className="w-6 h-6 text-mint mx-auto mb-2" strokeWidth={1.5} />
                  <p className="font-cormorant text-3xl font-bold text-mint">{value}</p>
                  <p className="font-dm text-xs font-semibold text-carbon mt-1">{label}</p>
                  <p className="font-dm text-xs text-slate mt-0.5">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
