import ServicePageLayout from '../../components/ServicePageLayout';
import type { ServiceData } from '../../components/ServicePageLayout';
import { Sun, Shield, Zap, Clock, ThumbsUp, Star } from 'lucide-react';

const data: ServiceData = {
  tag: 'Estética Oral',
  title: 'Blanqueamiento Dental',
  subtitle: 'Recupera el brillo natural de tu sonrisa con nuestra tecnología LED de última generación. Hasta 8 tonos más blanco en una sola sesión de 60 minutos.',
  heroImage: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=1400&auto=format&fit=crop',
  introTitle: 'La Ciencia del Brillo Natural',
  introText: [
    'Nuestro blanqueamiento dental profesional combina geles de peróxido de hidrógeno de concentración clínica con activación por luz LED de alta potencia. Esta combinación acelera la oxidación de las moléculas de pigmento alojadas en el esmalte, logrando resultados visibles desde la primera sesión.',
    'A diferencia de los kits de uso doméstico, el tratamiento en consultorio es realizado por especialistas capacitados que controlan la concentración exacta del gel según la sensibilidad y el tono de partida de cada paciente, garantizando máximos resultados con el mínimo riesgo de sensibilidad.',
    'El procedimiento preserva completamente la integridad del esmalte. Utilizamos una barrera de protección gingival de alta precisión para aislar las encías y trabajamos en tres rondas de activación de 15 minutos cada una, lo que nos permite alcanzar hasta 8 tonos de diferencia en una sola cita.',
  ],
  introImage: 'https://images.unsplash.com/photo-1588776814546-1ffbb3dcface?w=800&auto=format&fit=crop',
  benefits: [
    { icon: Zap, title: 'Resultados desde la primera sesión', desc: 'Notarás la diferencia inmediatamente al terminar el tratamiento, sin esperar días ni semanas.' },
    { icon: Sun, title: 'Hasta 8 tonos más blanco', desc: 'Tecnología LED que activa el gel a la perfección, consiguiendo cambios de tono significativos y uniformes.' },
    { icon: Shield, title: 'Sin daño al esmalte', desc: 'Geles formulados para blanquear sin erosionar la estructura mineral del diente. Esmalte seguro y protegido.' },
    { icon: Clock, title: 'Solo 60-90 minutos', desc: 'En una sola cita en el consultorio transformas completamente el tono de tu sonrisa.' },
    { icon: ThumbsUp, title: 'Sin sensibilidad post-tratamiento', desc: 'Aplicamos un gel remineralizante al finalizar para minimizar cualquier sensibilidad transitoria.' },
    { icon: Star, title: 'Resultados que duran 1-2 años', desc: 'Con buenos hábitos de higiene y evitando alimentos pigmentantes, tu sonrisa brillará por años.' },
  ],
  process: [
    { title: 'Evaluación y profilaxis previa', desc: 'Revisamos el estado de tus encías y esmalte. Realizamos una limpieza para retirar el sarro y asegurar que el gel llegue a toda la superficie dental de manera uniforme.' },
    { title: 'Protección gingival', desc: 'Aplicamos una barrera fotopolimerizable sobre las encías para aislarlas completamente del gel blanqueador y protegerlas durante todo el procedimiento.' },
    { title: 'Aplicación del gel activo', desc: 'Aplicamos el gel de peróxido de hidrógeno de concentración controlada sobre todos los dientes anteriores. La cobertura es precisa y uniforme.' },
    { title: 'Activación con luz LED', desc: 'La lámpara LED de alta potencia activa el gel durante 15 minutos. Repetimos este ciclo 3 veces para maximizar el resultado de blanqueamiento.' },
    { title: 'Remineralización final', desc: 'Aplicamos un gel de flúor y calcio para cerrar los túbulos dentinarios, recuperar la dureza del esmalte y reducir la sensibilidad al mínimo.' },
    { title: 'Evaluación del resultado', desc: 'Comparamos el tono inicial con el resultado final usando una escala de colores estandarizada. Te entregamos recomendaciones para mantener tu nueva sonrisa.' },
  ],
  gallery: [
    { src: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=600&auto=format&fit=crop', alt: 'Resultado blanqueamiento dental' },
    { src: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&auto=format&fit=crop', alt: 'Sonrisa blanca profesional' },
    { src: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&auto=format&fit=crop', alt: 'Antes y después blanqueamiento' },
    { src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop', alt: 'Doctora aplicando tratamiento' },
    { src: 'https://images.unsplash.com/photo-1588776814546-1ffbb3dcface?w=600&auto=format&fit=crop', alt: 'Control dental profesional' },
    { src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&auto=format&fit=crop', alt: 'Proceso de blanqueamiento' },
  ],
  faq: [
    { q: '¿El blanqueamiento dental duele?', a: 'No. El tratamiento es completamente indoloro. Algunos pacientes experimentan una ligera sensibilidad durante las primeras 24-48 horas, que desaparece sola. Aplicamos un gel remineralizante al final para reducirla al máximo.' },
    { q: '¿Blanquea coronas, carillas o dientes con empastes?', a: 'El blanqueamiento actúa únicamente sobre el esmalte natural. Los trabajos de restauración (coronas, carillas, resinas) mantienen su tono original. Te lo explicaremos en la valoración para que tomes la mejor decisión.' },
    { q: '¿Cuánto tiempo dura el resultado?', a: 'Con buenos hábitos, entre 1 y 2 años. Evitar café, vino tinto, té y tabaco prolonga significativamente el resultado. También ofrecemos kits de mantenimiento domiciliarios para reforzarlo cada 6 meses.' },
    { q: '¿Hay restricciones alimentarias después?', a: 'Sí, durante las primeras 48 horas recomendamos evitar alimentos con pigmentos fuertes (café, vino, salsas oscuras, tabaco). Después puedes retomar tu dieta normal sin problema.' },
    { q: '¿Con qué frecuencia se puede repetir?', a: 'Lo recomendamos una vez al año o al año y medio. Realizarlo con más frecuencia no aporta beneficios adicionales y podría generar sensibilidad innecesaria.' },
  ],
  price: 'Desde $150.000 COP',
  duration: '60 – 90 minutos',
  relatedServices: [
    { name: 'Estética Dental', href: '/servicios/estetica-dental' },
    { name: 'Ortodoncia', href: '/servicios/ortodoncia' },
    { name: 'Limpieza Dental', href: '/#servicios' },
  ],
};

export default function BlanqueamientoPage() {
  return <ServicePageLayout data={data} />;
}
