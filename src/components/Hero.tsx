import { useState } from 'react';
import { CalendarDays, ArrowRight } from 'lucide-react';

const services = ['Blanqueamiento', 'Ortodoncia', 'Implantes', 'Limpieza', 'Consulta General'];

export default function Hero() {
  const [form, setForm] = useState({ name: '', phone: '', date: '', service: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', phone: '', date: '', service: '' });
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-white pt-20 lg:pt-32 pb-32">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-mint-pale rounded-bl-[120px] -z-0 opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-mint-pale text-mint text-sm font-dm font-medium">
              ✦ Odontología de Confianza
            </span>

            <h1 className="font-cormorant text-5xl lg:text-6xl font-bold leading-tight text-carbon">
              Sonrisas que<br />
              <span className="text-mint">Transforman</span> Vidas
            </h1>

            <p className="font-dm text-lg text-slate leading-relaxed max-w-md">
              Odontología moderna, trato humano y resultados que duran toda la vida.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-mint hover:bg-mint-dark text-white font-dm font-medium transition-colors duration-200"
              >
                Agenda tu Cita
                <CalendarDays className="w-4 h-4" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-mint text-mint hover:bg-mint-pale font-dm font-medium transition-colors duration-200"
              >
                Ver Servicios
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mini stats */}
            <div className="flex flex-wrap gap-6 pt-2">
              {[
                { value: '8+', label: 'Años de Experiencia' },
                { value: '2.000+', label: 'Pacientes' },
                { value: '⭐ 4.9/5', label: 'Calificación' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-cormorant text-2xl font-bold text-carbon">{s.value}</p>
                  <p className="font-dm text-xs text-slate">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — image + logo */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="/hero_consultorio.jpg"
              alt="Dra. Andrea Carrillo"
              className="rounded-3xl shadow-sm w-full max-w-md object-cover aspect-[4/5]"
            />
          </div>
        </div>

        {/* Floating booking card */}
        <div className="relative mt-10 lg:-mt-16 bg-white rounded-2xl shadow-md p-6 lg:p-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <CalendarDays className="w-5 h-5 text-mint" />
            <h3 className="font-cormorant text-xl font-semibold text-carbon">Reservar Cita Rápida</h3>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end">
            <input
              type="text"
              placeholder="Nombre completo"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="col-span-1 lg:col-span-1 px-4 py-2.5 rounded-xl border border-gray-200 font-dm text-sm text-carbon placeholder-slate focus:outline-none focus:border-mint transition-colors duration-200"
            />
            <input
              type="tel"
              placeholder="Teléfono"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              className="px-4 py-2.5 rounded-xl border border-gray-200 font-dm text-sm text-carbon placeholder-slate focus:outline-none focus:border-mint transition-colors duration-200"
            />
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              required
              className="px-4 py-2.5 rounded-xl border border-gray-200 font-dm text-sm text-carbon focus:outline-none focus:border-mint transition-colors duration-200"
            />
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              required
              className="px-4 py-2.5 rounded-xl border border-gray-200 font-dm text-sm text-carbon focus:outline-none focus:border-mint transition-colors duration-200 bg-white"
            >
              <option value="">Servicio</option>
              {services.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <button
              type="submit"
              className="w-full px-5 py-2.5 rounded-xl bg-mint hover:bg-mint-dark text-white font-dm font-medium text-sm transition-colors duration-200"
            >
              {sent ? '¡Cita Confirmada!' : 'Confirmar Cita'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
