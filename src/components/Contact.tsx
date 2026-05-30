import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

const info = [
  { icon: MapPin, label: 'Dirección', value: 'Calle 45 #23-10, Consultorio 302' },
  { icon: Phone, label: 'Teléfono', value: '+57 300 123 4567' },
  { icon: Mail, label: 'Email', value: 'contacto@draandreacarrillo.com' },
  { icon: Clock, label: 'Horario', value: 'Lun–Vie 8:00am–6:00pm · Sáb 9:00am–1:00pm' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'El nombre es requerido';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email inválido';
    if (!form.message.trim()) e.message = 'El mensaje es requerido';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSent(true);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contacto" className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-dm text-xs font-semibold text-mint uppercase tracking-widest mb-2">
            Ponte en Contacto
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-bold text-carbon">
            Contáctanos
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-bone rounded-2xl p-8 shadow-sm">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12">
                <CheckCircle className="w-14 h-14 text-mint" strokeWidth={1.5} />
                <h3 className="font-cormorant text-2xl font-semibold text-carbon">¡Mensaje Enviado!</h3>
                <p className="font-dm text-sm text-slate text-center">
                  Gracias por contactarnos. Te responderemos en menos de 24 horas.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 font-dm text-sm text-mint hover:text-mint-dark transition-colors duration-200"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-cormorant text-2xl font-semibold text-carbon">Envíanos un Mensaje</h3>
                <div>
                  <input
                    type="text"
                    placeholder="Nombre completo *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 font-dm text-sm text-carbon placeholder-slate focus:outline-none focus:border-mint transition-colors duration-200 bg-white"
                  />
                  {errors.name && <p className="font-dm text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Correo electrónico *"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 font-dm text-sm text-carbon placeholder-slate focus:outline-none focus:border-mint transition-colors duration-200 bg-white"
                  />
                  {errors.email && <p className="font-dm text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
                <input
                  type="tel"
                  placeholder="Teléfono (opcional)"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 font-dm text-sm text-carbon placeholder-slate focus:outline-none focus:border-mint transition-colors duration-200 bg-white"
                />
                <div>
                  <textarea
                    rows={4}
                    placeholder="Tu mensaje *"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 font-dm text-sm text-carbon placeholder-slate focus:outline-none focus:border-mint transition-colors duration-200 bg-white resize-none"
                  />
                  {errors.message && <p className="font-dm text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-mint hover:bg-mint-dark text-white font-dm font-medium text-sm transition-colors duration-200"
                >
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-bone rounded-2xl p-8 shadow-sm space-y-5">
              <h3 className="font-cormorant text-2xl font-semibold text-carbon">Información de Contacto</h3>
              {info.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-mint-pale flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-mint" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-dm text-xs font-semibold text-slate uppercase tracking-wide">{label}</p>
                    <p className="font-dm text-sm text-carbon">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-sm h-56 bg-gray-100">
              <iframe
                title="Ubicación consultorio"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15908.24!2d-74.0721!3d4.7110!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zBDcxMCcwMC4wIk4gNzTCsDA0JzE5LjYiVw!5e0!3m2!1ses!2sco!4v1!5m2!1ses!2sco"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
