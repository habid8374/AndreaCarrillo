import ServicePageLayout from '../../components/ServicePageLayout';
import type { ServiceData } from '../../components/ServicePageLayout';
import { Smile, Shield, Clock, Zap, CheckCircle, Star } from 'lucide-react';

const data: ServiceData = {
  tag: 'Corrección Dental',
  title: 'Ortodoncia',
  subtitle: 'Alineamos tu sonrisa con tecnología de planificación digital 3D. Brackets tradicionales o alineadores invisibles adaptados perfectamente a tu estilo de vida y necesidades.',
  heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1400&auto=format&fit=crop',
  introTitle: 'Una Sonrisa Alineada que Transforma tu Confianza',
  introText: [
    'La ortodoncia moderna va mucho más allá de alinear los dientes. Un tratamiento bien planificado mejora la función masticatoria, facilita la higiene oral, previene el desgaste prematuro del esmalte y tiene un impacto directo en la autoestima y la calidad de vida del paciente.',
    'En nuestro consultorio ofrecemos dos grandes alternativas: ortodoncia fija con brackets de última generación (metálicos, estéticos de cerámica o de zafiro) y alineadores termoformados transparentes para quienes buscan una opción completamente discreta. Ambas líneas utilizan planificación digital 3D desde el primer día.',
    'Gracias al escáner intraoral de alta resolución, eliminamos las incómodas impresiones de alginato. El tratamiento completo — desde el diagnóstico digital hasta la entrega de retenedores — está diseñado para que cada cita sea breve, eficiente y con el menor número posible de visitas al consultorio.',
  ],
  introImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop',
  benefits: [
    { icon: CheckCircle, title: 'Brackets metálicos, estéticos y de zafiro', desc: 'Opciones para todos los presupuestos y preferencias estéticas, con la misma eficacia clínica.' },
    { icon: Shield, title: 'Alineadores invisibles', desc: 'Transparentes, removibles y prácticamente imperceptibles. Come con libertad y mantén tu higiene sin restricciones.' },
    { icon: Smile, title: 'Planificación 3D desde el día 1', desc: 'Con el escáner intraoral y software especializado verás el resultado final antes de iniciar el tratamiento.' },
    { icon: Zap, title: 'Tecnología de bajo rozamiento', desc: 'Brackets de autoligado que reducen la fricción y aceleran el movimiento dental con mayor comodidad.' },
    { icon: Clock, title: 'Controles cada 4-6 semanas', desc: 'Citas cortas y eficientes. El tratamiento avanza entre visita y visita sin que debas estar siempre en el consultorio.' },
    { icon: Star, title: 'Retención garantizada', desc: 'Al finalizar entregamos retenedores fijos y removibles para que el resultado se mantenga de por vida.' },
  ],
  process: [
    { title: 'Diagnóstico integral y escáner 3D', desc: 'Tomamos fotografías clínicas, radiografías panorámica y lateral de cráneo, y un escáner digital de toda la dentición. Analizamos tu mordida, la posición de los huesos y la relación entre maxilar y mandíbula.' },
    { title: 'Plan de tratamiento digital', desc: 'Con el software de simulación proyectamos el movimiento diente por diente. Podrás ver en pantalla cómo quedará tu sonrisa antes de que coloquemos ningún aparato.' },
    { title: 'Colocación de brackets o entrega de alineadores', desc: 'La sesión de bondeo dura entre 45 y 90 minutos. Te explicamos en detalle el cuidado de los aparatos, la alimentación recomendada y cómo mantener una higiene oral perfecta durante el tratamiento.' },
    { title: 'Controles periódicos de activación', desc: 'Cada 4 a 6 semanas ajustamos el arco o entregamos la siguiente serie de alineadores. Monitoreamos el avance y hacemos los ajustes necesarios para mantener el plan original.' },
    { title: 'Fase de finalización', desc: 'Cuando los dientes alcanzan la posición ideal, retiramos los brackets y pulimos el esmalte. Tomamos un nuevo escáner para verificar el resultado versus la simulación inicial.' },
    { title: 'Retención y seguimiento', desc: 'Colocamos un retenedor fijo en la cara interna de los dientes y entregamos un retenedor removible para usar de noche. Programamos controles de retención cada 6 meses durante el primer año.' },
  ],
  gallery: [
    { src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&auto=format&fit=crop', alt: 'Consultorio de ortodoncia moderno' },
    { src: 'https://images.unsplash.com/photo-1588776814546-1ffbb3dcface?w=600&auto=format&fit=crop', alt: 'Revisión de ortodoncia' },
    { src: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=600&auto=format&fit=crop', alt: 'Resultado final sonrisa' },
    { src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop', alt: 'Doctora con paciente ortodoncia' },
    { src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop', alt: 'Control de brackets' },
    { src: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&auto=format&fit=crop', alt: 'Sonrisa perfecta tras tratamiento' },
  ],
  faq: [
    { q: '¿Cuánto dura el tratamiento de ortodoncia?', a: 'Depende de la complejidad del caso. La mayoría de tratamientos dura entre 12 y 24 meses. Casos simples pueden resolverse en 8-10 meses, mientras que discrepancias esqueléticas severas pueden requerir hasta 30 meses. En la primera cita te damos una estimación precisa.' },
    { q: '¿Hay edad límite para la ortodoncia?', a: 'No existe edad límite. La ortodoncia funciona correctamente en adultos de cualquier edad siempre que haya hueso sano. Lo ideal en niños es iniciar la evaluación alrededor de los 7 años, cuando comienzan a erupcionar los primeros dientes permanentes.' },
    { q: '¿Los alineadores invisibles son tan efectivos como los brackets?', a: 'Para la mayoría de los casos, sí. Los alineadores modernos pueden tratar desde maloclusiones leves hasta moderadas con excelentes resultados. Casos muy complejos o con movimientos de raíz profundos siguen siendo mejor manejados con brackets.' },
    { q: '¿Qué cuidados requieren los brackets?', a: 'Cepillado después de cada comida, uso de cepillo interproximal para limpiar entre los brackets, evitar alimentos duros o pegajosos y usar la cera dental cuando algún componente produzca rozaduras iniciales.' },
    { q: '¿El tratamiento es doloroso?', a: 'Los primeros 2-3 días después de cada activación puedes sentir una presión o molestia leve. Es completamente normal y pasa rápido. La gran mayoría de pacientes vive el tratamiento con total normalidad.' },
  ],
  price: 'Desde $800.000 COP',
  duration: '12 – 24 meses',
  relatedServices: [
    { name: 'Blanqueamiento Dental', href: '/servicios/blanqueamiento-dental' },
    { name: 'Estética Dental', href: '/servicios/estetica-dental' },
    { name: 'Odontopediatría', href: '/servicios/odontopediatria' },
  ],
};

export default function OrtodonciaPage() {
  return <ServicePageLayout data={data} />;
}
