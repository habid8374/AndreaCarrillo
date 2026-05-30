type IconProps = { className?: string };

export const BlanqueamientoIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Tooth */}
    <path d="M9 4C7 4 5.5 5.8 5.5 7.8c0 1.8.8 3.2 1.4 4.6L8.3 18c.4 1.3 1.1 2 2.1 2H11c.5 0 .8-1 1-1.8.2.8.5 1.8 1 1.8h.6c1 0 1.7-.7 2.1-2l1.4-5.6c.6-1.4 1.4-2.8 1.4-4.6C18.5 5.8 17 4 15 4c-1.3 0-1.9.9-3 .9S10.3 4 9 4z" />
    {/* Sparkles */}
    <path d="M20 2.5l.8-.8M22 5h1M20 7.5l.8.8" />
    {/* Shine dot */}
    <circle cx="10" cy="8" r=".6" fill="currentColor" stroke="none" />
  </svg>
);

export const OrtodonciaIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Tooth 1 */}
    <path d="M3.5 5.5C3.5 4.4 4.4 3.5 5.5 3.5S7.5 4.4 7.5 5.5V9.5L7 11.5H4L3.5 9.5V5.5z" />
    {/* Tooth 2 */}
    <path d="M9.5 5C9.5 3.9 10.4 3 11.5 3h1C13.6 3 14.5 3.9 14.5 5V9.5L14 11.5H10L9.5 9.5V5z" />
    {/* Tooth 3 */}
    <path d="M16.5 5.5C16.5 4.4 17.4 3.5 18.5 3.5S20.5 4.4 20.5 5.5V9.5L20 11.5H17L16.5 9.5V5.5z" />
    {/* Wire */}
    <path d="M5.5 7.5H18.5" strokeWidth="1.2" />
    {/* Brackets */}
    <rect x="4.3" y="6.6" width="2.4" height="1.8" rx="0.4" fill="currentColor" stroke="none" opacity="0.8" />
    <rect x="10.2" y="6.6" width="3.6" height="1.8" rx="0.4" fill="currentColor" stroke="none" opacity="0.8" />
    <rect x="17.3" y="6.6" width="2.4" height="1.8" rx="0.4" fill="currentColor" stroke="none" opacity="0.8" />
    {/* Roots */}
    <path d="M5 11.5L4.5 15M6 11.5L6.5 15M11 11.5L10.8 15M13 11.5L13.2 15M17.5 11.5L17 15M19.5 11.5L20 15" strokeWidth="1" />
  </svg>
);

export const ImplantesIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Crown top */}
    <path d="M7.5 9l1-6 1.5 3L12 3l2 3 1.5-3 1 6H7.5z" />
    {/* Crown bottom edge */}
    <path d="M8 9h8" />
    {/* Abutment */}
    <path d="M11 9h2v2.5h-2z" />
    {/* Implant body */}
    <rect x="10.5" y="11.5" width="3" height="8" rx="1.5" />
    {/* Thread lines */}
    <path d="M10.5 13.5h3M10.5 15.5h3M10.5 17.5h3" strokeWidth="1" />
    {/* Bone line */}
    <path d="M7.5 14.5C7.5 14.5 9 13.5 10.5 14.5" strokeWidth="1" strokeDasharray="1.5 1" />
    <path d="M13.5 14.5C13.5 14.5 15 13.5 16.5 14.5" strokeWidth="1" strokeDasharray="1.5 1" />
  </svg>
);

export const EndodonciaIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Tooth outline */}
    <path d="M9 4C7 4 5.5 5.8 5.5 7.8c0 1.8.8 3.2 1.4 4.6L8.3 18c.4 1.3 1.1 2 2.1 2H11c.5 0 .8-1 1-1.8.2.8.5 1.8 1 1.8h.6c1 0 1.7-.7 2.1-2l1.4-5.6c.6-1.4 1.4-2.8 1.4-4.6C18.5 5.8 17 4 15 4c-1.3 0-1.9.9-3 .9S10.3 4 9 4z" />
    {/* Pulp chamber */}
    <path d="M9.8 7.5c0 0 .8 2.5 2.2 2.5s2.2-2.5 2.2-2.5" strokeWidth="1.2" />
    {/* Root canals */}
    <path d="M10.5 10c-.2 2.5-.5 5.5-.5 8M13.5 10c.2 2.5.5 5.5.5 8" strokeWidth="1.2" />
    {/* File tool */}
    <path d="M17 3l2 2-6 6-2-2z" strokeWidth="1" />
    <path d="M18 2l1 1" strokeWidth="1" />
  </svg>
);

export const OdontopediatriaIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Small milk tooth (wider, shorter) */}
    <path d="M8.5 5C6.8 5 5.5 6.3 5.5 8c0 1.5.7 2.8 1.2 4L8 17c.3 1.1.9 1.8 1.8 1.8H10c.4 0 .7-.8.9-1.5.2.7.5 1.5.9 1.5h.2c.9 0 1.5-.7 1.8-1.8l1.3-5c.5-1.2 1.2-2.5 1.2-4 0-1.7-1.3-3-3-3-1 0-1.5.7-2.3.7S9.5 5 8.5 5z" />
    {/* Heart */}
    <path d="M12 11.5c0 0-1.8-1.8-1.8-2.8 0-.8.6-1.4 1.3-1.4.3 0 .5.2.5.2s.2-.2.5-.2c.7 0 1.3.6 1.3 1.4 0 1-1.8 2.8-1.8 2.8z" fill="currentColor" stroke="none" />
    {/* Stars around (child element) */}
    <path d="M3.5 4l.4 1.2L5 5l-1 .7.4 1.2-1-.7-1 .7.4-1.2-1-.7h1.2L3.5 4z" fill="currentColor" stroke="none" opacity="0.7" />
    <path d="M18.5 4l.3.9.9-.3-.7.6.3.9-.8-.5-.8.5.3-.9-.7-.6.9.3L18.5 4z" fill="currentColor" stroke="none" opacity="0.7" />
  </svg>
);

export const EsteticaIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Tooth */}
    <path d="M9 4C7 4 5.5 5.8 5.5 7.8c0 1.8.8 3.2 1.4 4.6L8.3 18c.4 1.3 1.1 2 2.1 2H11c.5 0 .8-1 1-1.8.2.8.5 1.8 1 1.8h.6c1 0 1.7-.7 2.1-2l1.4-5.6c.6-1.4 1.4-2.8 1.4-4.6C18.5 5.8 17 4 15 4c-1.3 0-1.9.9-3 .9S10.3 4 9 4z" />
    {/* Star inside tooth */}
    <path d="M12 7l.6 1.8H14.5l-1.5 1.1.6 1.8L12 10.6l-1.6 1.1.6-1.8-1.5-1.1h1.9L12 7z" fill="currentColor" stroke="none" />
    {/* Shine lines */}
    <path d="M17 2.5v1.5M17.8 3.2l-1 1" strokeWidth="1.2" />
  </svg>
);
