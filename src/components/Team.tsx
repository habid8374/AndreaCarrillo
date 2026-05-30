import { AtSign, Globe } from 'lucide-react';

const team = [
  {
    name: 'Dra. Andrea Carrillo',
    role: 'Odontóloga General y Estética',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300',
  },
  {
    name: 'Dr. Sebastián Torres',
    role: 'Ortodoncista',
    img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300',
  },
  {
    name: 'Dra. Valentina Ríos',
    role: 'Endodoncista',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300',
  },
  {
    name: 'Laura Méndez',
    role: 'Higiene y Prevención',
    img: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=300',
  },
];

export default function Team() {
  return (
    <section id="equipo" className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-dm text-xs font-semibold text-mint uppercase tracking-widest mb-2">
            Nuestro Equipo
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-bold text-carbon">
            Nuestro Equipo de Especialistas
          </h2>
          <p className="font-dm text-slate mt-3 max-w-lg mx-auto">
            Profesionales apasionados comprometidos con tu salud oral y bienestar
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map(({ name, role, img }) => (
            <div key={name} className="text-center rounded-2xl bg-bone p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <img
                src={img}
                alt={name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4 ring-4 ring-mint-pale"
              />
              <h3 className="font-cormorant text-xl font-semibold text-carbon">{name}</h3>
              <p className="font-dm text-sm text-mint font-medium mt-1">{role}</p>
              <div className="flex justify-center gap-3 mt-4">
                <a href="#" aria-label="Instagram" className="text-slate hover:text-mint transition-colors duration-200">
                  <AtSign className="w-4 h-4" strokeWidth={1.5} />
                </a>
                <a href="#" aria-label="LinkedIn" className="text-slate hover:text-mint transition-colors duration-200">
                  <Globe className="w-4 h-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
