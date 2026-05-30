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
    <section id="inicio" className="relative overflow-hidden min-h-screen flex flex-col bg-white">

      {/* ── MÓVIL: foto como fondo de pantalla completa ── */}
      <img
        src="/SaveClip.App_549189014_18408857845115959_6729279725912701440_n.jpg"
        alt="Dra. Andrea Carrillo"
        className="lg:hidden absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Overlay móvil */}
      <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-white/75 via-white/30 to-transparent" />
      {/* Fade superior móvil — oculta símbolos del fondo bajo el navbar */}
      <div className="lg:hidden absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white to-transparent z-10" />

      {/* ── CONTENIDO ── */}
      <div className="relative z-20 flex-1 flex items-center w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 pt-32 lg:pt-36 pb-8">

        {/* Desktop: dos columnas | Móvil: una columna */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Columna izquierda — texto */}
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

          {/* Columna derecha — foto (solo desktop) */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <img
              src="/SaveClip.App_549189014_18408857845115959_6729279725912701440_n.jpg"
              alt="Dra. Andrea Carrillo"
              className="rounded-3xl shadow-md w-full max-w-sm xl:max-w-md object-cover object-top aspect-[3/4]"
            />
          </div>

        </div>
      </div>

      {/* ── Tarjeta de reserva ── */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-md p-6 lg:p-8">
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
              className="px-4 py-2.5 rounded-xl border border-gray-200 font-dm text-sm text-carbon placeholder-slate focus:outline-none focus:border-mint transition-colors duration-200"
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
