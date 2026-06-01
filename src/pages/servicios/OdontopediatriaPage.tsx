import ServicePageLayout from '../../components/ServicePageLayout';
import type { ServiceData } from '../../components/ServicePageLayout';
import { Heart, Shield, Star, Smile, Clock, CheckCircle } from 'lucide-react';

const data: ServiceData = {
  tag: 'Salud Oral Infantil',
  title: 'Odontopediatría',
  subtitle: 'Construimos sonrisas sanas desde los primeros meses de vida. Un ambiente amigable, sin estrés y con profesionales especializados en hacer que cada visita sea una experiencia positiva.',
  heroImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1400&auto=format&fit=crop',
  introTitle: 'Construimos Sonrisas Sanas desde la Infancia',
  introText: [
    'La odontopediatría es la especialidad de la odontología dedicada exclusivamente a la salud oral de bebés, niños y adolescentes. Más allá de tratar problemas dentales existentes, su mayor valor está en la prevención: detectar malos hábitos, corregir maloclusiones tempranas y establecer una rutina de higiene oral que acompañe al niño toda su vida.',
    'Nuestro consultorio está diseñado para que los niños se sientan seguros y en un entorno divertido. Utilizamos técnicas de comunicación adaptadas a la edad, el método de modelado (el niño observa antes de recibir tratamiento), distracción positiva y, cuando es necesario, sedación consciente con óxido nitroso para pacientes con alta ansiedad o necesidades especiales.',
    'La primera visita al dentista recomendamos realizarla entre los 6 y 12 meses, cuando aparece el primer diente de leche. Este primer contacto con el consultorio — sin tratamientos invasivos — crea una impresión positiva que puede marcar la relación del niño con el dentista para toda la vida. Los padres reciben además orientación sobre hábitos de succión, alimentación y flúor.',
  ],
  introImage: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=800&auto=format&fit=crop',
  benefits: [
    { icon: Heart, title: 'Ambiente 100% infantil y amigable', desc: 'Colores, decoración y una sala de espera diseñada para que los niños lleguen relajados y sin miedo al consultorio.' },
    { icon: Shield, title: 'Prevención como pilar principal', desc: 'Sellantes de fisuras, fluorización, educación en higiene y revisiones periódicas para evitar caries antes de que aparezcan.' },
    { icon: Smile, title: 'Técnicas de manejo del comportamiento', desc: 'Profesionales entrenados en comunicación pediátrica, modelado y control vocal para hacer la experiencia amena.' },
    { icon: Star, title: 'Sedación consciente con óxido nitroso', desc: 'Para niños muy ansiosos o con necesidades especiales. Seguro, de efecto inmediato y sin efectos secundarios.' },
    { icon: CheckCircle, title: 'Diagnóstico temprano de maloclusiones', desc: 'Detectamos problemas de mordida, hábitos de succión o espacio insuficiente a tiempo para intervenir de forma sencilla.' },
    { icon: Clock, title: 'Primera visita desde los 6 meses', desc: 'Orientamos a los padres sobre higiene del bebé, alimentación, flúor y establecemos la ruta de seguimiento dental.' },
  ],
  process: [
    { title: 'Primera visita de conocimiento (0-2 años)', desc: 'El bebé se sienta en el regazo del padre o madre. El dentista examina los dientes y encías de forma lúdica, da orientaciones sobre higiene y programamos el seguimiento.' },
    { title: 'Visita de adaptación (2-3 años)', desc: 'Presentamos el instrumental de forma no amenazante, mostramos cómo funciona el sillón y la luz, y realizamos un primer examen completo a ritmo del niño, sin prisa ni presión.' },
    { title: 'Revisión y diagnóstico completo', desc: 'Examen visual, exploración con sonda, radiografías pediátricas si es necesario, evaluación de la mordida y hábitos (succión digital, chupete). Fotografías de seguimiento.' },
    { title: 'Limpieza profiláctica y fluorización', desc: 'Limpieza suave con pasta de sabor afrutado. Aplicación de gel o barniz de flúor de alta concentración para proteger el esmalte de leche y permanente en desarrollo.' },
    { title: 'Sellantes de fisuras', desc: 'Aplicamos resina fluida en los surcos de los molares definitivos en cuanto erupcionan (alrededor de los 6-7 años) para sellar los puntos más vulnerables a las caries.' },
    { title: 'Plan preventivo personalizado y educación', desc: 'Entregamos a los padres un plan de higiene en casa adaptado a la edad: técnica de cepillado, hilo dental, dieta y próximas revisiones. El niño recibe instrucciones de forma divertida.' },
  ],
  gallery: [
    { src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop', alt: 'Doctora con paciente infantil' },
    { src: 'https://images.unsplash.com/photo-1588776814546-1ffbb3dcface?w=600&auto=format&fit=crop', alt: 'Revisión dental infantil' },
    { src: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=600&auto=format&fit=crop', alt: 'Niño sonriendo en consultorio' },
    { src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop', alt: 'Atención odontopediátrica' },
  ],
  faq: [
    { q: '¿A qué edad debo llevar a mi hijo al dentista por primera vez?', a: 'Recomendamos la primera visita cuando aparezca el primer diente de leche, generalmente entre los 6 y 12 meses. A más tardar al cumplir el primer año. La visita temprana es de orientación para los padres y adaptación del bebé.' },
    { q: '¿Los dientes de leche importan si se van a caer?', a: 'Absolutamente sí. Los dientes de leche mantienen el espacio para los dientes permanentes, permiten la alimentación y el habla correcta, e influyen en la autoestima del niño. Perder un diente de leche prematuramente puede generar problemas de espacio serios.' },
    { q: '¿Qué hago si mi hijo tiene miedo al dentista?', a: 'Es muy frecuente y totalmente manejable. Nuestros odontopediatras son expertos en manejo del comportamiento. Programamos visitas de adaptación antes de cualquier tratamiento. En casos de ansiedad alta, el óxido nitroso es una opción segura y muy efectiva.' },
    { q: '¿Cuándo debo preocuparme por la mordida de mi hijo?', a: 'A partir de los 4-5 años podemos evaluar hábitos que afecten la mordida (chupete prolongado, succión digital). A los 7 años, cuando erupcionan los primeros molares permanentes, es ideal hacer una evaluación ortodóntica preventiva.' },
    { q: '¿Cada cuánto tiempo deben ir los niños al dentista?', a: 'En general cada 6 meses. Niños con alto riesgo de caries o tratamientos activos pueden necesitar controles más frecuentes. En la primera evaluación te daremos la frecuencia personalizada para tu hijo.' },
  ],
  price: 'Desde $60.000 COP',
  duration: '30 – 45 min (primera visita)',
  relatedServices: [
    { name: 'Ortodoncia', href: '/servicios/ortodoncia' },
    { name: 'Blanqueamiento Dental', href: '/servicios/blanqueamiento-dental' },
    { name: 'Estética Dental', href: '/servicios/estetica-dental' },
  ],
};

export default function OdontopediatriaPage() {
  return <ServicePageLayout data={data} />;
}
