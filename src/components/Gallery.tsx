import { useRef, useState } from 'react';

const videos = [
  { src: '/resultado1.mp4', label: 'Transformación de Sonrisa' },
  { src: '/resultado2.mp4', label: 'Blanqueamiento Dental' },
  { src: '/resultado3.mp4', label: 'Ortodoncia' },
  { src: '/resultado4.mp4', label: 'Estética Dental' },
];

export default function Gallery() {
  const [playing, setPlaying] = useState<number | null>(null);
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleClick = (i: number) => {
    const video = refs.current[i];
    if (!video) return;

    if (playing === i) {
      video.pause();
      setPlaying(null);
    } else {
      // Pause any other playing video
      refs.current.forEach((v, idx) => {
        if (v && idx !== i) { v.pause(); v.currentTime = 0; }
      });
      video.play();
      setPlaying(i);
    }
  };

  const handleEnded = () => setPlaying(null);

  return (
    <section id="galeria" className="bg-bone py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <p className="font-dm text-xs font-semibold text-mint uppercase tracking-widest mb-2">
            Nuestros Resultados
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-bold text-carbon">
            Resultados que Hablan por Sí Solos
          </h2>
          <p className="font-dm text-slate mt-3">Transformaciones reales de nuestros pacientes</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {videos.map(({ src, label }, i) => (
            <div
              key={src}
              onClick={() => handleClick(i)}
              className="group relative rounded-2xl overflow-hidden shadow-sm bg-black aspect-[9/16] cursor-pointer"
            >
              <video
                ref={(el) => { refs.current[i] = el; }}
                src={src}
                loop
                playsInline
                preload="metadata"
                onEnded={handleEnded}
                className="w-full h-full object-cover"
              />

              {/* Overlay degradado inferior */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Ícono play/pause */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${playing === i ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  {playing === i ? (
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Label */}
              <p className="absolute bottom-3 left-0 right-0 text-center font-dm text-xs text-white font-medium px-2 pointer-events-none">
                {label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
