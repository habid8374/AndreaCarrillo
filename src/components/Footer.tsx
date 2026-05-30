import { useState } from 'react';
import { Stethoscope, AtSign, Globe, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

const quickLinks = ['Inicio', 'Sobre Mí', 'Servicios', 'Blog', 'Contacto'];
const quickHrefs = ['#inicio', '#sobre-mi', '#servicios', '#blog', '#contacto'];
const servicesList = ['Blanqueamiento', 'Ortodoncia', 'Implantes', 'Endodoncia', 'Estética Dental'];
const contactInfo = [
  { icon: MapPin, text: 'Calle 45 #23-10, Consultorio 302' },
  { icon: Phone, text: '+57 300 123 4567' },
  { icon: Mail, text: 'contacto@draandreacarrillo.com' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) { setSubscribed(true); setEmail(''); }
  };

  return (
    <footer className="bg-footer text-white">
      {/* Newsletter stripe */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-cormorant text-xl font-semibold">Suscríbete a Nuestra Newsletter</h4>
              <p className="font-dm text-sm text-gray-400 mt-0.5">Consejos de salud oral directamente en tu correo</p>
            </div>
            {subscribed ? (
              <p className="font-dm text-sm text-mint">¡Gracias por suscribirte! ✓</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="tucorreo@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 sm:w-64 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 font-dm text-sm text-white placeholder-gray-400 focus:outline-none focus:border-mint transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-mint hover:bg-mint-dark text-white font-dm text-sm font-medium transition-colors duration-200 whitespace-nowrap"
                >
                  Suscribirme
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-6 h-6 text-mint" strokeWidth={1.5} />
              <span className="font-cormorant text-xl font-semibold">Dra. Andrea Carrillo</span>
            </div>
            <p className="font-dm text-sm text-gray-400 leading-relaxed">
              Odontología moderna con trato humano. Tu salud oral es nuestra misión.
            </p>
            <div className="flex gap-3 pt-1">
              {[
                { icon: AtSign, label: 'Instagram' },
                { icon: Globe, label: 'Facebook' },
                { icon: MessageCircle, label: 'WhatsApp' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-mint flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick links */}
          <div>
            <h5 className="font-dm text-sm font-semibold text-white mb-4">Links Rápidos</h5>
            <ul className="space-y-2.5">
              {quickLinks.map((l, i) => (
                <li key={l}>
                  <a href={quickHrefs[i]} className="font-dm text-sm text-gray-400 hover:text-mint transition-colors duration-200">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h5 className="font-dm text-sm font-semibold text-white mb-4">Servicios</h5>
            <ul className="space-y-2.5">
              {servicesList.map((s) => (
                <li key={s}>
                  <a href="#servicios" className="font-dm text-sm text-gray-400 hover:text-mint transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h5 className="font-dm text-sm font-semibold text-white mb-4">Contacto</h5>
            <ul className="space-y-3">
              {contactInfo.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Icon className="w-4 h-4 text-mint flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="font-dm text-sm text-gray-400">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-dm text-xs text-gray-500">
            © 2025 Dra. Andrea Carrillo · Todos los derechos reservados
          </p>
          <p className="font-dm text-xs text-gray-500">
            Desarrollado con ♥ por{' '}
            <span className="text-mint">Axentia Technologies</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
