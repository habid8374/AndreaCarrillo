import { useState } from 'react';
import { CalendarDays, ArrowRight } from 'lucide-react';

const services = ['Blanqueamiento', 'Ortodoncia', 'Implantes', 'Limpieza', 'Consulta General'];

const stats = [
  { value: '8+',      label: 'Años de Experiencia' },
  { value: '2.000+',  label: 'Pacientes Atendidos' },
  { value: '⭐ 4.9',  label: 'Calificación' },
];

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
    <section id="inicio" className="relative overflow-hidden min-h-screen flex flex-col">

      {/* ── Foto de fondo — cubre toda la sección ── */}
      <img
        src="/SaveClip.App_549189014_18408857845115959_6729279725912701440_n.jpg"
        alt="Dra. Andrea Carrillo"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* ── Gradiente desktop: oscuro izquierda → transparente derecha ── */}
      <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-carbon/90 via-carbon/70 to-carbon/10" />

      {/* ── Gradiente mobile: oscuro arriba/abajo, suave en medio ── */}
      <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-carbon/80 via-carbon/50 to-carbon/75" />

      {/* ── Fade superior para el navbar en ambos viewports ── */}
      <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-carbon/60 to-transparent z-10 pointer-events-none" />

      {/* ── Contenido principal ── */}
      <div className="relative z-20 flex-1 flex items-center w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 pt-36 lg:pt-44 pb-8">
        <div className="w-full lg:max-w-[55%] space-y-6">

          {/* Pill */}
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/25 text-white text-sm font-dm font-medium backdrop-blur-sm">
            ✦ Odontología de Confianza
          </span>

          {/* H1 */}
          <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-sm">
            Sonrisas que<br />
            <span className="text-mint">Transforman</span> Vidas
          </h1>

          {/* Subtítulo */}
          <p className="font-dm text-lg text-white/80 leading-relaxed max-w-md drop-shadow-sm">
            Odontología moderna, trato humano y resultados que duran toda la vida.
          </p>

          {/* Botones */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-mint hover:bg-mint-dark text-white font-dm font-medium transition-colors duration-200 shadow-sm"
            >
              Agenda tu Cita
              <CalendarDays className="w-4 h-4" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/50 text-white hover:bg-white/10 font-dm font-medium transition-colors duration-200 backdrop-blur-sm"
            >
              Ver Servicios
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-2">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-8">
                <div className="text-center">
                  <p className="font-cormorant text-3xl font-bold text-white">{s.value}</p>
                  <p className="font-dm text-xs text-white/65 mt-0.5">{s.label}</p>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-px h-8 bg-white/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tarjeta de reserva ── */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-6 lg:p-8 border border-white/60">
          <div className="flex items-center gap-2 mb-4">
            <CalendarDays className="w-5 h-5 text-mint" />
            <h3 className="font-cormorant text-xl font-semibold text-carbon">Reservar Cita Rápida</h3>
          </div>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end"
          >
            <input
              type="text"
              placeholder="Nombre completo"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="px-4 py-2.5 rounded-xl border border-gray-200 font-dm text-sm text-carbon placeholder-slate focus:outline-none focus:border-mint transition-colors duration-200 bg-white"
            />
            <input
              type="tel"
              placeholder="Teléfono"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              className="px-4 py-2.5 rounded-xl border border-gray-200 font-dm text-sm text-carbon placeholder-slate focus:outline-none focus:border-mint transition-colors duration-200 bg-white"
            />
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              required
              className="px-4 py-2.5 rounded-xl border border-gray-200 font-dm text-sm text-carbon focus:outline-none focus:border-mint transition-colors duration-200 bg-white"
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
