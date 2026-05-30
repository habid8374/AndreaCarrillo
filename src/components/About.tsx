import { Award, Users, Cpu } from 'lucide-react';

const stats = [
  { icon: Award, value: '8+', label: 'Años de Experiencia', desc: 'Desde 2018 transformando sonrisas' },
  { icon: Users, value: '2.000+', label: 'Pacientes Atendidos', desc: 'Sonrisas transformadas con éxito' },
  { icon: Cpu, value: 'SCO', label: 'Miembro Activo', desc: 'Sociedad Colombiana de Ortodoncia' },
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
              src="/SaveClip.App_673131529_18448816786115959_8478505524085684871_n.jpg"
              alt="Dra. Andrea Carrillo"
              className="rounded-2xl shadow-sm w-full object-cover aspect-[4/5] max-w-md mx-auto lg:mx-0"
            />
            {/* Badge SCO */}
            <div className="absolute bottom-6 left-1/2 lg:left-8 -translate-x-1/2 lg:translate-x-0 bg-white rounded-2xl shadow-sm px-5 py-3 flex items-center gap-2">
              <span className="text-xl">🦷</span>
              <div>
                <p className="font-dm text-xs font-semibold text-carbon">Miembro Activo SCO</p>
                <p className="font-dm text-xs text-slate">Seccional Atlántico</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-5">
            <p className="font-dm text-slate leading-relaxed">
              La Dra. Andrea Cristina Carrillo Molina es ortodoncista especializada con más de 8 años
              de trayectoria desde que inició su práctica en 2018. Es <strong className="text-carbon">Miembro Activo de la Sociedad
              Colombiana de Ortodoncia (SCO)</strong>, Seccional Atlántico, distinción que reafirma su
              compromiso con la calidad y la ética profesional.
            </p>
            <p className="font-dm text-slate leading-relaxed">
              Ser parte de la SCO significa mantener un compromiso permanente con la formación continua,
              buscando siempre brindar la mejor atención a sus pacientes. Cada tratamiento es una
              oportunidad de transformar no solo una sonrisa, sino la confianza y el bienestar de
              cada persona. 🦷✨
            </p>
            <p className="font-dm text-slate leading-relaxed">
              En su consultorio encontrarás tecnología de punta — desde diagnóstico digital hasta
              ortodoncia de última generación — siempre combinada con el trato humano y cercano
              que la distingue.
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
