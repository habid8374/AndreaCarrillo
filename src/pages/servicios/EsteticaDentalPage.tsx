import ServicePageLayout from '../../components/ServicePageLayout';
import type { ServiceData } from '../../components/ServicePageLayout';
import { Star, Eye, Shield, Zap, Sparkles, CheckCircle } from 'lucide-react';

const data: ServiceData = {
  tag: 'Diseño de Sonrisa',
  title: 'Estética Dental',
  subtitle: 'Diseñamos la sonrisa que siempre soñaste con Diseño Digital de Sonrisa (DSD), carillas de porcelana y composite de alta estética. Resultados naturales, personalizados y de larga duración.',
  heroImage: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=1400&auto=format&fit=crop',
  introTitle: 'Tu Sonrisa Ideal, Diseñada Digitalmente Antes de Empezar',
  introText: [
    'La estética dental moderna no consiste en poner carillas o blanquear dientes de forma aislada. Es un proceso integral de planificación donde analizamos la relación entre tus dientes, encías, labios y rostro para diseñar una sonrisa que sea armónica, natural y completamente tuya. Nada genérico: todo personalizado.',
    'Utilizamos el protocolo DSD (Digital Smile Design), que nos permite crear una simulación digital de tu nueva sonrisa antes de realizar cualquier procedimiento. Ves el resultado en pantalla, opinas, ajustamos, y solo entonces comenzamos el tratamiento. Además, fabricamos un mockup en resina — una prueba en tu boca — para que apruebes el diseño de forma táctil y visual en tiempo real.',
    'Nuestros tratamientos estéticos van desde el blanqueamiento profesional y el pulido de irregularidades con composite, hasta carillas de porcelana ultrafinas (0,3 mm de grosor) que no requieren reducción del diente, y rehabilitaciones completas con coronas de circonio. Cada material se elige en función de tu caso, tu presupuesto y el resultado que buscas.',
  ],
  introImage: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&auto=format&fit=crop',
  benefits: [
    { icon: Eye, title: 'Diseño Digital de Sonrisa (DSD)', desc: 'Previsualización del resultado final en pantalla y en boca antes de iniciar. Apruebas el diseño antes de comprometerte.' },
    { icon: Sparkles, title: 'Carillas de porcelana ultrafinas', desc: 'Solo 0,3 mm de grosor. En muchos casos sin necesidad de reducir el diente. Resultado natural, brillante y duradero.' },
    { icon: Shield, title: 'Composite de alta estética', desc: 'Resinas de última generación con propiedades ópticas similares al esmalte natural. Resultado inmediato en una sola sesión.' },
    { icon: Star, title: 'Resultado 100% natural', desc: 'El arte está en que nadie sepa que te hiciste algo. Elegimos el tono, la translucidez y la morfología perfecta para tu rostro.' },
    { icon: Zap, title: 'Mínimamente invasivo', desc: 'Preservamos la máxima cantidad de esmalte natural posible. Las técnicas modernas permiten grandes cambios con mínima intervención.' },
    { icon: CheckCircle, title: 'Durabilidad garantizada', desc: 'Las carillas de porcelana duran entre 10 y 20 años. El composite, entre 5 y 8 años con buenos cuidados. Garantía clínica incluida.' },
  ],
  process: [
    { title: 'Análisis estético y fotográfico completo', desc: 'Tomamos fotografías clínicas estandarizadas del rostro y la sonrisa en distintos planos. Analizamos la línea de la sonrisa, el contorno gingival, las proporciones de los dientes y la relación con los labios.' },
    { title: 'Diseño Digital de Sonrisa (DSD)', desc: 'Importamos las fotografías al software DSD y diseñamos tu nueva sonrisa digitalmente. En la siguiente cita te mostramos el resultado en pantalla, lo ajustamos según tus preferencias y generamos las guías para el laboratorio.' },
    { title: 'Mockup de aprobación en boca', desc: 'Fabricamos una prueba en resina de baja resistencia que se coloca directamente sobre tus dientes sin ningún desgaste. Puedes mirarte al espejo, sonreír, hablar y dar tu aprobación final antes de comenzar.' },
    { title: 'Preparación mínimamente invasiva', desc: 'Si el diseño lo requiere, realizamos una preparación mínima del esmalte (0,3-0,5 mm) con fresas de alta precisión bajo anestesia local. En muchos casos no es necesaria ninguna preparación.' },
    { title: 'Impresión digital y fabricación en laboratorio', desc: 'Tomamos un escáner de alta precisión y enviamos los datos al laboratorio dental especializado en cerámica. En 7-14 días recibimos las carillas o coronas definitivas.' },
    { title: 'Prueba, ajuste y cementado definitivo', desc: 'Realizamos una prueba en seco para verificar ajuste, color y morfología. Una vez aprobadas, las cementamos con adhesivo de última generación y hacemos el ajuste final de oclusión.' },
  ],
  gallery: [
    { src: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&auto=format&fit=crop', alt: 'Sonrisa diseño digital' },
    { src: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=600&auto=format&fit=crop', alt: 'Resultado carillas porcelana' },
    { src: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&auto=format&fit=crop', alt: 'Antes y después estética' },
    { src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop', alt: 'Doctora especialista estética' },
    { src: 'https://images.unsplash.com/photo-1588776814546-1ffbb3dcface?w=600&auto=format&fit=crop', alt: 'Proceso diseño sonrisa' },
    { src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop', alt: 'Consulta estética dental' },
  ],
  faq: [
    { q: '¿Las carillas de porcelana dañan los dientes?', a: 'Con las técnicas modernas, la preparación del diente es mínima (0,3 mm) o incluso nula en el caso de carillas de contact lens. El esmalte se preserva al máximo y el resultado es reversible en muchos casos.' },
    { q: '¿Cuánto tiempo duran las carillas?', a: 'Las carillas de porcelana tienen una durabilidad de entre 10 y 20 años con los cuidados adecuados. Evitar morder objetos duros, usar protector nocturno si hay bruxismo y acudir a controles periódicos son las claves del mantenimiento.' },
    { q: '¿Puedo ver cómo quedaré antes de comenzar?', a: 'Sí, siempre. El protocolo DSD nos permite mostrarte el resultado en pantalla y con un mockup físico en tu boca antes de hacer nada definitivo. Aprobas el diseño antes de comprometerte con el tratamiento.' },
    { q: '¿Cuántas carillas necesito?', a: 'Depende de tu sonrisa. Generalmente trabajamos con 8 o 10 dientes (los que se muestran al sonreír). También hacemos tratamientos parciales de 4 o 6 piezas cuando el caso lo permite. En la valoración te damos la recomendación personalizada.' },
    { q: '¿El composite es tan bueno como la porcelana?', a: 'Son opciones diferentes para distintas necesidades. El composite es más accesible, reversible y de resultado inmediato, pero requiere pulidos periódicos y tiene menor durabilidad. La porcelana es más duradera, no se mancha y tiene una estética superior. En la valoración te explicamos cuál es la mejor opción para tu caso.' },
  ],
  price: 'Desde $250.000 COP / diente',
  duration: '2 – 3 semanas (proceso completo)',
  relatedServices: [
    { name: 'Blanqueamiento Dental', href: '/servicios/blanqueamiento-dental' },
    { name: 'Ortodoncia', href: '/servicios/ortodoncia' },
    { name: 'Implantes Dentales', href: '/servicios/implantes-dentales' },
  ],
};

export default function EsteticaDentalPage() {
  return <ServicePageLayout data={data} />;
}
