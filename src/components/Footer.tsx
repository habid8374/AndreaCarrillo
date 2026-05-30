import { useState } from 'react';
import { AtSign, Globe, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import { PrivacyModal, CookiesModal, TermsModal } from './LegalModals';

const quickLinks = ['Inicio', 'Sobre Mí', 'Servicios', 'Blog', 'Contacto'];
const quickHrefs = ['#inicio', '#sobre-mi', '#servicios', '#blog', '#contacto'];
const servicesList = ['Blanqueamiento', 'Ortodoncia', 'Implantes', 'Endodoncia', 'Estética Dental'];
const contactInfo = [
  { icon: MapPin, text: 'Calle 45 #23-10, Consultorio 302' },
  { icon: Phone, text: '+57 314 434 0594' },
  { icon: Mail, text: 'contacto@draandreacarrillo.com' },
];

export default function Footer() {
  const [modal, setModal] = useState<'privacy' | 'cookies' | 'terms' | null>(null);

  return (
    <>
    {modal === 'privacy' && <PrivacyModal onClose={() => setModal(null)} />}
    {modal === 'cookies' && <CookiesModal onClose={() => setModal(null)} />}
    {modal === 'terms'   && <TermsModal   onClose={() => setModal(null)} />}
    <footer className="bg-footer text-white">

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 inline-block">
              <img
                src="/SaveClip.App_458621932_553600630569185_3755797432906446027_n.jpg"
                alt="Andrea Carrillo Odontología Especializada"
                className="h-40 w-auto object-contain"
              />
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-dm text-xs text-gray-500">
            © 2025 Dra. Andrea Carrillo · Todos los derechos reservados
          </p>
          <div className="flex items-center gap-4">
            <button onClick={() => setModal('privacy')} className="font-dm text-xs text-gray-400 hover:text-mint transition-colors duration-200">
              Política de Privacidad
            </button>
            <span className="text-gray-600">·</span>
            <button onClick={() => setModal('cookies')} className="font-dm text-xs text-gray-400 hover:text-mint transition-colors duration-200">
              Cookies
            </button>
            <span className="text-gray-600">·</span>
            <button onClick={() => setModal('terms')} className="font-dm text-xs text-gray-400 hover:text-mint transition-colors duration-200">
              Términos y Condiciones
            </button>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
