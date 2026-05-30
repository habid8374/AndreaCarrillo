import { useState } from 'react';
import { Globe, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);
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
    <footer className="bg-white border-t border-gray-100">

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div className="space-y-4">
            <img
              src="/SaveClip.App_458621932_553600630569185_3755797432906446027_n.jpg"
              alt="Andrea Carrillo Odontología Especializada"
              className="h-28 w-auto object-contain"
            />
            <p className="font-dm text-sm text-slate leading-relaxed">
              Odontología moderna con trato humano. Tu salud oral es nuestra misión.
            </p>
            <div className="flex gap-3 pt-1">
              {[
                { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/ortodoncia_andreacarrillo?igsh=MTlkZW9odjhuMDBhZw==' },
                { icon: 'facebook', label: 'Facebook', href: '#' },
                { icon: 'whatsapp', label: 'WhatsApp', href: '#' },
              ].map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-mint hover:text-white flex items-center justify-center text-gray-500 transition-colors duration-200"
                >
                  {icon === 'instagram' && <InstagramIcon />}
                  {icon === 'facebook' && <Globe className="w-4 h-4" strokeWidth={1.5} />}
                  {icon === 'whatsapp' && <MessageCircle className="w-4 h-4" strokeWidth={1.5} />}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick links */}
          <div>
            <h5 className="font-dm text-sm font-semibold text-carbon mb-4">Links Rápidos</h5>
            <ul className="space-y-2.5">
              {quickLinks.map((l, i) => (
                <li key={l}>
                  <a href={quickHrefs[i]} className="font-dm text-sm text-slate hover:text-mint transition-colors duration-200">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h5 className="font-dm text-sm font-semibold text-carbon mb-4">Servicios</h5>
            <ul className="space-y-2.5">
              {servicesList.map((s) => (
                <li key={s}>
                  <a href="#servicios" className="font-dm text-sm text-slate hover:text-mint transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h5 className="font-dm text-sm font-semibold text-carbon mb-4">Contacto</h5>
            <ul className="space-y-3">
              {contactInfo.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Icon className="w-4 h-4 text-mint flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="font-dm text-sm text-slate">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-dm text-xs text-gray-400">
            © 2026 Dra. Andrea Carrillo · Todos los derechos reservados
          </p>
          <div className="flex items-center gap-4">
            <button onClick={() => setModal('privacy')} className="font-dm text-xs text-slate hover:text-mint transition-colors duration-200">
              Política de Privacidad
            </button>
            <span className="text-gray-300">·</span>
            <button onClick={() => setModal('cookies')} className="font-dm text-xs text-slate hover:text-mint transition-colors duration-200">
              Cookies
            </button>
            <span className="text-gray-300">·</span>
            <button onClick={() => setModal('terms')} className="font-dm text-xs text-slate hover:text-mint transition-colors duration-200">
              Términos y Condiciones
            </button>
          </div>
        </div>
        {/* Developer credit */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 flex items-center justify-center gap-2">
          <span className="font-dm text-xs text-gray-300">Desarrollado por</span>
          <img
            src="/axentia-logo.ico"
            alt="Axentia Technologies"
            className="h-5 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-200"
            onError={(e) => {
              const el = e.currentTarget;
              el.style.display = 'none';
              const next = el.nextElementSibling as HTMLElement | null;
              if (next) next.style.display = 'inline';
            }}
          />
          <span className="font-dm text-xs font-medium text-gray-400 hover:text-mint transition-colors duration-200 hidden">
            Axentia Technologies
          </span>
        </div>
      </div>
    </footer>
    </>
  );
}
