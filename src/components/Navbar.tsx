import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre Mí', href: '#sobre-mi' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
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
        <div className="flex items-center justify-between h-28 sm:h-28 lg:h-36">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <img
              src="/SaveClip.App_458621932_553600630569185_3755797432906446027_n.jpg"
              alt="Andrea Carrillo Odontología Especializada"
              className="h-24 sm:h-24 lg:h-32 w-auto object-contain"
            />
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
              href="https://www.instagram.com/ortodoncia_andreacarrillo?igsh=MTlkZW9odjhuMDBhZw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hidden sm:flex items-center gap-1.5 text-slate hover:text-mint transition-colors duration-200"
            >
              <InstagramIcon />
              <span className="font-dm text-xs font-medium hidden lg:inline">@ortodoncia_andreacarrillo</span>
            </a>
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
          <li>
            <a
              href="https://www.instagram.com/ortodoncia_andreacarrillo?igsh=MTlkZW9odjhuMDBhZw=="
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 py-2.5 font-dm text-sm text-slate hover:text-mint transition-colors duration-200"
            >
              <InstagramIcon />
              @ortodoncia_andreacarrillo
            </a>
          </li>
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
