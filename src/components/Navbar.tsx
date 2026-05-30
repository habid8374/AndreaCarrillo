import { useState, useEffect } from 'react';
import { Stethoscope, Menu, X } from 'lucide-react';

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Mí', href: '#sobre-mi' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Precios', href: '#precios' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <Stethoscope className="w-6 h-6 text-mint" strokeWidth={1.5} />
            <span>
              <span className="font-cormorant text-xl font-semibold text-carbon">
                Dra. Andrea Carrillo
              </span>
              <span className="hidden sm:inline font-dm text-xs text-slate ml-2">
                | Odontología
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-dm text-sm text-slate hover:text-carbon transition-colors duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contacto"
              className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full bg-mint hover:bg-mint-dark text-white text-sm font-dm font-medium transition-colors duration-200"
            >
              Reservar Cita
            </a>
            <button
              className="lg:hidden p-2 text-carbon"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Abrir menú"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${
          menuOpen ? 'max-h-screen pb-4' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-4 pt-2 gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 font-dm text-sm text-carbon hover:text-mint transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="block text-center py-2.5 rounded-full bg-mint hover:bg-mint-dark text-white text-sm font-dm font-medium transition-colors duration-200"
            >
              Reservar Cita
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
