import ServicePageLayout from '../../components/ServicePageLayout';
import type { ServiceData } from '../../components/ServicePageLayout';
import { Anchor, Shield, Clock, Star, CheckCircle, Zap } from 'lucide-react';

const data: ServiceData = {
  tag: 'Rehabilitación Oral',
  title: 'Implantes Dentales',
  subtitle: 'La solución definitiva, permanente y más natural para recuperar tu sonrisa completa. Titanio de grado quirúrgico con una tasa de éxito superior al 98%.',
  heroImage: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1400&auto=format&fit=crop',
  introTitle: 'Tu Propio Diente, Para Siempre',
  introText: [
    'Un implante dental es una raíz artificial de titanio que se ancla al hueso maxilar o mandibular para soportar una corona, puente o prótesis. Gracias al proceso de oseointegración — la fusión biológica entre el titanio y el hueso vivo — el implante se convierte en una parte permanente de tu anatomía, indistinguible de un diente natural en función y apariencia.',
    'En nuestro consultorio trabajamos con sistemas de implantes de nivel hospitalario, con superficie tratada con nanotecnología que acelera la oseointegración y reduce los tiempos de espera. Cada caso comienza con una tomografía computarizada dental (CBCT) que nos permite planificar la cirugía en tres dimensiones con precisión milimétrica, minimizando el riesgo quirúrgico y optimizando la posición del implante.',
    'El procedimiento es ambulatorio, se realiza bajo anestesia local y la mayoría de los pacientes regresa a su vida normal al día siguiente. La fase quirúrgica dura entre 45 y 90 minutos según el número de implantes. Posteriormente colocamos una corona provisional mientras el implante oseointegra, de modo que nunca estarás sin diente durante el proceso.',
  ],
  introImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop',
  benefits: [
    { icon: Anchor, title: 'Titanio grado quirúrgico', desc: 'Material biocompatible al 100%, idéntico al usado en cirugías ortopédicas. Sin alergias, sin rechazo en la inmensa mayoría de casos.' },
    { icon: Shield, title: 'Duración de por vida', desc: 'Con cuidados básicos de higiene y controles periódicos, un implante está diseñado para durar toda la vida sin necesidad de reemplazarlo.' },
    { icon: Star, title: 'Función y estética iguales al natural', desc: 'Puedes morder, masticar, reír y hablar con total naturalidad. La corona sobre el implante es indistinguible de un diente real.' },
    { icon: CheckCircle, title: 'Protege el hueso mandibular', desc: 'La presión del implante al masticar estimula el hueso y previene la reabsorción ósea que ocurre cuando falta un diente.' },
    { icon: Zap, title: 'Planificación 3D de la cirugía', desc: 'Escáner CBCT y guías quirúrgicas digitales para posicionar el implante con precisión submilimétrica y máxima seguridad.' },
    { icon: Clock, title: 'Sin afectar dientes vecinos', desc: 'A diferencia de los puentes, el implante es independiente. No necesitamos tallar ni desgastar los dientes adyacentes sanos.' },
  ],
  process: [
    { title: 'Diagnóstico 3D y plan quirúrgico', desc: 'Tomamos una tomografía CBCT de la zona edéntula para medir con exactitud el volumen óseo disponible, la distancia a estructuras nerviosas y la inclinación óptima del implante. Diseñamos la guía quirúrgica digital.' },
    { title: 'Preparación del lecho óseo (cirugía)', desc: 'Bajo anestesia local, realizamos una pequeña incisión en la encía y fresamos el hueso con precisión milimétrica siguiendo la guía digital. Insertamos el implante de titanio y suturamos con puntos reabsorbibles.' },
    { title: 'Corona provisional y oseointegración', desc: 'En muchos casos colocamos una corona provisional el mismo día para que salgas del consultorio con diente. Durante los siguientes 3-6 meses el implante se fusiona al hueso en el proceso de oseointegración.' },
    { title: 'Descubierta y colocación del pilar', desc: 'Una vez completada la oseointegración, realizamos una pequeña cirugía de descubierta para conectar el pilar o abutment que soportará la corona definitiva.' },
    { title: 'Toma de impresión y fabricación de la corona', desc: 'Tomamos una impresión digital de alta precisión que envían al laboratorio dental. En 7-10 días tenemos lista la corona de circonio o porcelana con el color exacto de tus dientes naturales.' },
    { title: 'Colocación de la corona definitiva y seguimiento', desc: 'Cementamos o atornillamos la corona definitiva, verificamos la oclusión y realizamos ajustes finos. Programamos revisiones a los 3 meses, 6 meses y luego anualmente.' },
  ],
  gallery: [
    { src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&auto=format&fit=crop', alt: 'Implante dental proceso' },
    { src: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&auto=format&fit=crop', alt: 'Resultado implante dental' },
    { src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop', alt: 'Consulta implantes' },
    { src: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=600&auto=format&fit=crop', alt: 'Sonrisa con implante' },
    { src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop', alt: 'Doctora especialista en implantes' },
    { src: 'https://images.unsplash.com/photo-1588776814546-1ffbb3dcface?w=600&auto=format&fit=crop', alt: 'Revisión post-implante' },
  ],
  faq: [
    { q: '¿La cirugía de implante es dolorosa?', a: 'No. Se realiza bajo anestesia local y el paciente no siente dolor durante el procedimiento. El postoperatorio es leve: molestia e inflamación moderada los primeros 2-3 días, manejable con analgésicos comunes. La mayoría regresa al trabajo al día siguiente.' },
    { q: '¿Cuánto tiempo dura todo el proceso?', a: 'Desde la cirugía hasta la corona definitiva: entre 3 y 8 meses, dependiendo del tiempo de oseointegración. Con técnicas de carga inmediata, en algunos casos puedes tener la corona provisional el mismo día de la cirugía.' },
    { q: '¿Tengo suficiente hueso para un implante?', a: 'Lo determinamos con la tomografía 3D. Si hay pérdida ósea, podemos realizar injertos óseos o técnicas de regeneración guiada previas a la colocación del implante. Hoy en día casi cualquier paciente es candidato.' },
    { q: '¿Cuánto tiempo dura un implante?', a: 'Con buena higiene oral y controles periódicos, los implantes están diseñados para durar toda la vida. Estudios a largo plazo muestran tasas de supervivencia superiores al 95% a los 15 años.' },
    { q: '¿Los implantes tienen garantía?', a: 'Sí. Los componentes del implante (fixture y pilar) tienen garantía del fabricante de por vida contra defectos de fabricación. La corona, al ser una prótesis cerámica, tiene una garantía clínica de 5 años en nuestro consultorio.' },
  ],
  price: 'Desde $1.200.000 COP',
  duration: '3 – 8 meses (proceso completo)',
  relatedServices: [
    { name: 'Estética Dental', href: '/servicios/estetica-dental' },
    { name: 'Endodoncia', href: '/servicios/endodoncia' },
    { name: 'Blanqueamiento', href: '/servicios/blanqueamiento-dental' },
  ],
};

export default function ImplantesPage() {
  return <ServicePageLayout data={data} />;
}
