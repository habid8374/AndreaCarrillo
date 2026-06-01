import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Menu, X, ChevronDown, CalendarDays,
  Sparkles, Activity, Anchor, Zap, Heart, Star,
  Image, Users, LayoutGrid, Camera,
  MapPin, Phone, Clock,
} from 'lucide-react';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

type MenuKey = 'servicios' | 'galeria' | 'precios' | 'contacto' | null;

const servicesMenu = [
  { icon: Sparkles, name: 'Blanqueamiento Dental', desc: 'Hasta 8 tonos más blanco en 1h', href: '/servicios/blanqueamiento-dental' },
  { icon: Activity, name: 'Ortodoncia', desc: 'Brackets e invisible aligners', href: '/servicios/ortodoncia' },
  { icon: Anchor, name: 'Implantes Dentales', desc: 'Solución definitiva y permanente', href: '/servicios/implantes-dentales' },
  { icon: Zap, name: 'Endodoncia', desc: 'Tratamiento de conducto sin dolor', href: '/servicios/endodoncia' },
  { icon: Heart, name: 'Odontopediatría', desc: 'Cuidado dental para los pequeños', href: '/servicios/odontopediatria' },
  { icon: Star, name: 'Estética Dental', desc: 'Diseño de sonrisa y carillas', href: '/servicios/estetica-dental' },
];

const galeriaMenu = [
  { icon: Camera, name: 'Antes & Después', slug: 'antes-despues' },
  { icon: LayoutGrid, name: 'Instalaciones', slug: 'instalaciones' },
  { icon: Users, name: 'Nuestro Equipo', slug: 'equipo' },
  { icon: Image, name: 'Casos de Éxito', slug: 'casos' },
];

const preciosMenu = [
  { name: 'Plan Básico', price: '$80.000 COP', desc: 'Consulta + limpieza + diagnóstico' },
  { name: 'Plan Estándar', price: '$150.000 COP', desc: 'Básico + blanqueamiento + radiografías', popular: true },
  { name: 'Plan Premium', price: '$280.000 COP', desc: 'Estándar + ortodoncia + seguimiento' },
];

const contactMenu = [
  { icon: MapPin, text: 'Calle 45 #23-10, Consultorio 302' },
  { icon: Phone, text: '+57 314 434 0594' },
  { icon: Clock, text: 'Lun–Vie 8am–6pm · Sáb 9am–1pm' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openMenu = (key: MenuKey) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveMenu(key);
  };

  const scheduleClose = () => {
    timerRef.current = setTimeout(() => setActiveMenu(null), 120);
  };

  const handleAnchorNav = (hash: string) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28 sm:h-28 lg:h-36">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/SaveClip.App_458621932_553600630569185_3755797432906446027_n.jpg"
              alt="Andrea Carrillo Odontología Especializada"
              className="h-24 sm:h-24 lg:h-32 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">

            <li>
              <button onClick={() => handleAnchorNav('#inicio')} className="px-3 py-2 font-dm text-sm text-slate hover:text-carbon transition-colors duration-200 rounded-lg hover:bg-gray-50">
                Inicio
              </button>
            </li>
            <li>
              <button onClick={() => handleAnchorNav('#sobre-mi')} className="px-3 py-2 font-dm text-sm text-slate hover:text-carbon transition-colors duration-200 rounded-lg hover:bg-gray-50">
                Sobre Mí
              </button>
            </li>

            {/* Servicios dropdown */}
            <li className="relative" onMouseEnter={() => openMenu('servicios')} onMouseLeave={scheduleClose}>
              <button className={`flex items-center gap-1 px-3 py-2 font-dm text-sm transition-colors duration-200 rounded-lg hover:bg-gray-50 ${activeMenu === 'servicios' ? 'text-carbon' : 'text-slate'}`}>
                Servicios <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'servicios' ? 'rotate-180 text-mint' : ''}`} />
              </button>
              <div
                onMouseEnter={() => openMenu('servicios')}
                onMouseLeave={scheduleClose}
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[580px] bg-white rounded-2xl shadow-lg border border-gray-100 p-5 transition-all duration-200 ${activeMenu === 'servicios' ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
              >
                <div className="flex justify-between items-center mb-4">
                  <p className="font-cormorant text-xl font-semibold text-carbon">Nuestros Servicios</p>
                  <Link to="/agendar" onClick={() => setActiveMenu(null)} className="font-dm text-xs text-mint hover:text-mint-dark flex items-center gap-1">
                    <CalendarDays className="w-3.5 h-3.5" /> Agendar cita gratis
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {servicesMenu.map(({ icon: Icon, name, desc, href }) => (
                    <Link key={href} to={href} onClick={() => setActiveMenu(null)} className="flex items-start gap-3 p-3 rounded-xl hover:bg-mint-pale group transition-colors duration-200">
                      <div className="w-8 h-8 rounded-lg bg-mint-pale group-hover:bg-white flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                        <Icon className="w-4 h-4 text-mint" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="font-dm text-sm font-medium text-carbon group-hover:text-mint transition-colors duration-200">{name}</p>
                        <p className="font-dm text-xs text-slate mt-0.5">{desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {/* Galería dropdown */}
            <li className="relative" onMouseEnter={() => openMenu('galeria')} onMouseLeave={scheduleClose}>
              <button className={`flex items-center gap-1 px-3 py-2 font-dm text-sm transition-colors duration-200 rounded-lg hover:bg-gray-50 ${activeMenu === 'galeria' ? 'text-carbon' : 'text-slate'}`}>
                Galería <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'galeria' ? 'rotate-180 text-mint' : ''}`} />
              </button>
              <div
                onMouseEnter={() => openMenu('galeria')}
                onMouseLeave={scheduleClose}
                className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-2xl shadow-lg border border-gray-100 p-3 transition-all duration-200 ${activeMenu === 'galeria' ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
              >
                <p className="font-cormorant text-base font-semibold text-carbon px-2 mb-2">Galería</p>
                {galeriaMenu.map(({ icon: Icon, name, slug }) => (
                  <Link key={slug} to={`/galeria?cat=${slug}`} onClick={() => setActiveMenu(null)} className="flex items-center gap-2.5 px-2 py-2.5 rounded-xl hover:bg-mint-pale group transition-colors duration-200">
                    <Icon className="w-4 h-4 text-mint flex-shrink-0" strokeWidth={1.5} />
                    <span className="font-dm text-sm text-carbon group-hover:text-mint transition-colors duration-200">{name}</span>
                  </Link>
                ))}
                <Link to="/galeria" onClick={() => setActiveMenu(null)} className="block mt-1 pt-2 border-t border-gray-100 text-center font-dm text-xs text-mint hover:text-mint-dark px-2 py-1.5">
                  Ver galería completa →
                </Link>
              </div>
            </li>

            {/* Precios dropdown */}
            <li className="relative" onMouseEnter={() => openMenu('precios')} onMouseLeave={scheduleClose}>
              <button className={`flex items-center gap-1 px-3 py-2 font-dm text-sm transition-colors duration-200 rounded-lg hover:bg-gray-50 ${activeMenu === 'precios' ? 'text-carbon' : 'text-slate'}`}>
                Precios <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'precios' ? 'rotate-180 text-mint' : ''}`} />
              </button>
              <div
                onMouseEnter={() => openMenu('precios')}
                onMouseLeave={scheduleClose}
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-80 bg-white rounded-2xl shadow-lg border border-gray-100 p-4 transition-all duration-200 ${activeMenu === 'precios' ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
              >
                <p className="font-cormorant text-base font-semibold text-carbon mb-3">Planes Disponibles</p>
                <div className="space-y-1.5">
                  {preciosMenu.map(({ name, price, desc, popular }) => (
                    <Link key={name} to="/precios" onClick={() => setActiveMenu(null)} className="flex items-center justify-between p-3 rounded-xl hover:bg-mint-pale group transition-colors duration-200">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-dm text-sm font-medium text-carbon group-hover:text-mint transition-colors duration-200">{name}</span>
                          {popular && <span className="px-2 py-0.5 bg-mint text-white text-[10px] font-dm rounded-full">Popular</span>}
                        </div>
                        <span className="font-dm text-xs text-slate">{desc}</span>
                      </div>
                      <span className="font-dm text-sm font-semibold text-mint flex-shrink-0 ml-2">{price}</span>
                    </Link>
                  ))}
                </div>
                <Link to="/precios" onClick={() => setActiveMenu(null)} className="block mt-2 pt-2 border-t border-gray-100 text-center font-dm text-xs text-mint hover:text-mint-dark py-1">
                  Ver comparativa completa →
                </Link>
              </div>
            </li>

            <li>
              <button onClick={() => handleAnchorNav('#blog')} className="px-3 py-2 font-dm text-sm text-slate hover:text-carbon transition-colors duration-200 rounded-lg hover:bg-gray-50">
                Blog
              </button>
            </li>

            {/* Contacto dropdown */}
            <li className="relative" onMouseEnter={() => openMenu('contacto')} onMouseLeave={scheduleClose}>
              <button className={`flex items-center gap-1 px-3 py-2 font-dm text-sm transition-colors duration-200 rounded-lg hover:bg-gray-50 ${activeMenu === 'contacto' ? 'text-carbon' : 'text-slate'}`}>
                Contacto <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'contacto' ? 'rotate-180 text-mint' : ''}`} />
              </button>
              <div
                onMouseEnter={() => openMenu('contacto')}
                onMouseLeave={scheduleClose}
                className={`absolute top-full right-0 mt-1 w-72 bg-white rounded-2xl shadow-lg border border-gray-100 p-4 transition-all duration-200 ${activeMenu === 'contacto' ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
              >
                <p className="font-cormorant text-base font-semibold text-carbon mb-3">Información de Contacto</p>
                <div className="space-y-2.5">
                  {contactMenu.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-mint-pale flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-3.5 h-3.5 text-mint" strokeWidth={1.5} />
                      </div>
                      <span className="font-dm text-xs text-slate leading-snug">{text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 space-y-2">
                  <Link to="/agendar" onClick={() => setActiveMenu(null)} className="flex items-center justify-center gap-2 w-full py-2.5 bg-mint hover:bg-mint-dark text-white text-sm font-dm rounded-xl transition-colors duration-200">
                    <CalendarDays className="w-4 h-4" /> Agendar Valoración
                  </Link>
                  <button onClick={() => { setActiveMenu(null); handleAnchorNav('#contacto'); }} className="w-full py-2 border border-gray-200 text-carbon text-sm font-dm rounded-xl hover:bg-gray-50 transition-colors duration-200">
                    Enviar mensaje
                  </button>
                </div>
              </div>
            </li>
          </ul>

          {/* CTA right side */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/ortodoncia_andreacarrillo?igsh=MTlkZW9odjhuMDBhZw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hidden sm:flex items-center gap-1.5 text-slate hover:text-mint transition-colors duration-200"
            >
              <InstagramIcon />
              <span className="font-dm text-xs font-medium hidden xl:inline">@ortodoncia_andreacarrillo</span>
            </a>
            <Link to="/agendar" className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-mint hover:bg-mint-dark text-white text-sm font-dm font-medium transition-colors duration-200">
              <CalendarDays className="w-4 h-4" />
              Reservar Cita
            </Link>
            <button className="lg:hidden p-2 text-carbon" onClick={() => setMenuOpen(o => !o)} aria-label="Abrir menú">
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${menuOpen ? 'max-h-[80vh] overflow-y-auto pb-4' : 'max-h-0'}`}>
        <div className="px-4 pt-2 space-y-1">
          {[{ label: 'Inicio', hash: '#inicio' }, { label: 'Sobre Mí', hash: '#sobre-mi' }, { label: 'Blog', hash: '#blog' }].map(({ label, hash }) => (
            <button key={hash} onClick={() => handleAnchorNav(hash)} className="block w-full text-left py-2.5 px-2 font-dm text-sm text-carbon hover:text-mint">
              {label}
            </button>
          ))}

          {/* Mobile Servicios */}
          <div>
            <button onClick={() => setMobileExpanded(e => e === 'servicios' ? null : 'servicios')} className="flex items-center justify-between w-full py-2.5 px-2 font-dm text-sm text-carbon">
              Servicios <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === 'servicios' ? 'rotate-180 text-mint' : ''}`} />
            </button>
            {mobileExpanded === 'servicios' && (
              <div className="pl-4 space-y-1 pb-1">
                {servicesMenu.map(({ name, href }) => (
                  <Link key={href} to={href} onClick={() => setMenuOpen(false)} className="block py-2 font-dm text-sm text-slate hover:text-mint">
                    {name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/galeria" onClick={() => setMenuOpen(false)} className="block py-2.5 px-2 font-dm text-sm text-carbon hover:text-mint">Galería</Link>
          <Link to="/precios" onClick={() => setMenuOpen(false)} className="block py-2.5 px-2 font-dm text-sm text-carbon hover:text-mint">Precios</Link>
          <button onClick={() => handleAnchorNav('#contacto')} className="block w-full text-left py-2.5 px-2 font-dm text-sm text-carbon hover:text-mint">Contacto</button>

          <a href="https://www.instagram.com/ortodoncia_andreacarrillo?igsh=MTlkZW9odjhuMDBhZw==" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 py-2.5 px-2 font-dm text-sm text-slate hover:text-mint">
            <InstagramIcon /> @ortodoncia_andreacarrillo
          </a>

          <div className="pt-2">
            <Link to="/agendar" onClick={() => setMenuOpen(false)} className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-mint hover:bg-mint-dark text-white text-sm font-dm font-medium transition-colors duration-200">
              <CalendarDays className="w-4 h-4" /> Reservar Cita
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
