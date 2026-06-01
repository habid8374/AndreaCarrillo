import ServicePageLayout from '../../components/ServicePageLayout';
import type { ServiceData } from '../../components/ServicePageLayout';
import { Zap, Shield, Clock, CheckCircle, Eye, Star } from 'lucide-react';

const data: ServiceData = {
  tag: 'Tratamiento de Conductos',
  title: 'Endodoncia',
  subtitle: 'Salvamos tu diente natural eliminando la infección desde la raíz. Tratamiento moderno, completamente indoloro y con una tasa de éxito del 95% en una sola sesión.',
  heroImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1400&auto=format&fit=crop',
  introTitle: 'Salvamos tu Diente, Eliminamos el Dolor',
  introText: [
    'La endodoncia — popularmente conocida como "matar el nervio" — es el tratamiento mediante el cual eliminamos el tejido pulpar infectado o necrótico del interior del diente y los conductos radiculares, desinfectamos el sistema de conductos y los sellamos herméticamente. El objetivo es preservar el diente natural evitando su extracción.',
    'En nuestro consultorio realizamos endodoncia con limas rotatorias de níquel-titanio de última generación y localizador apical electrónico, lo que nos permite trabajar con una precisión máxima dentro del conducto sin riesgo de sobreinstrumentación. Complementamos el procedimiento con un microscopio dental que ilumina y amplifica la zona de trabajo para detectar conductos adicionales invisibles a simple vista.',
    'Contrariamente a la creencia popular, la endodoncia no es un tratamiento doloroso. Con anestesia local correctamente administrada, el paciente no siente dolor durante el procedimiento. De hecho, la endodoncia es precisamente el tratamiento que elimina el dolor provocado por la infección. En la mayoría de casos completamos el tratamiento en una sola sesión de 60-90 minutos.',
  ],
  introImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop',
  benefits: [
    { icon: CheckCircle, title: 'Preserva tu diente natural', desc: 'Evitar la extracción es siempre la mejor opción. El diente natural mastica mejor, es más estético y no requiere implante.' },
    { icon: Zap, title: 'Sin dolor durante el tratamiento', desc: 'Anestesia local precisa y técnicas modernas hacen que el procedimiento sea completamente cómodo para el paciente.' },
    { icon: Eye, title: 'Microscopio dental de alta definición', desc: 'Detectamos y tratamos conductos adicionales ocultos que serían imposibles de ver a simple vista, evitando recidivas.' },
    { icon: Shield, title: 'Tasa de éxito del 95%', desc: 'Con las técnicas actuales, la endodoncia tiene una de las tasas de éxito más altas de todos los procedimientos odontológicos.' },
    { icon: Clock, title: 'Sesión única en la mayoría de casos', desc: 'Completamos el tratamiento completo — limpieza, conformación, irrigación y obturación — en una sola cita de 60-90 minutos.' },
    { icon: Star, title: 'Sin medicación antibiótica innecesaria', desc: 'Eliminamos la infección mecánicamente. Solo recetamos antibióticos cuando el cuadro clínico lo requiere realmente.' },
  ],
  process: [
    { title: 'Diagnóstico y radiografía periapical', desc: 'Tomamos una radiografía digital para medir la longitud de los conductos, evaluar la extensión de la lesión periapical y planificar el acceso. Aplicamos anestesia local con técnica infiltrativa o troncular según el diente.' },
    { title: 'Aislamiento con dique de goma', desc: 'Colocamos un dique de goma que aísla el diente del resto de la boca creando un campo estéril, protege la garganta de los líquidos de irrigación y mejora la visibilidad de trabajo.' },
    { title: 'Apertura de la cámara pulpar', desc: 'Con fresas de alta velocidad abrimos acceso a la cámara pulpar. Retiramos el tejido pulpar de la corona del diente y localizamos todos los orificios de entrada a los conductos.' },
    { title: 'Instrumentación rotatoria y localización apical', desc: 'Con limas rotatorias de níquel-titanio y el localizador apical electrónico conformamos el conducto hasta la constricción apical exacta. Irrigamos con hipoclorito de sodio y EDTA para disolver tejido orgánico e inorgánico.' },
    { title: 'Obturación tridimensional con gutapercha', desc: 'Secamos perfectamente el conducto y lo sellamos con gutapercha termoplastificada y cemento sellador, rellenando tridimensionalmente todo el sistema de conductos para impedir la reinfección.' },
    { title: 'Restauración coronaria definitiva', desc: 'Un diente tratado endodónticamente necesita una restauración coronaria que lo proteja. Colocamos una resina o, cuando la destrucción es mayor, una corona de cerámica que restituye forma, función y estética.' },
  ],
  gallery: [
    { src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop', alt: 'Especialista en endodoncia' },
    { src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&auto=format&fit=crop', alt: 'Consultorio endodoncia' },
    { src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&auto=format&fit=crop', alt: 'Procedimiento endodóncico' },
    { src: 'https://images.unsplash.com/photo-1588776814546-1ffbb3dcface?w=600&auto=format&fit=crop', alt: 'Revisión posterior' },
  ],
  faq: [
    { q: '¿La endodoncia duele?', a: 'No. Es uno de los mitos más extendidos. Con anestesia local correctamente administrada el procedimiento es indoloro. El dolor que sientes antes del tratamiento es el de la infección; la endodoncia lo elimina.' },
    { q: '¿Cuántas sesiones se necesitan?', a: 'En la gran mayoría de casos completamos el tratamiento en una sola sesión de 60-90 minutos. Casos muy complejos, con infección activa o conductos calcificados, pueden requerir dos sesiones.' },
    { q: '¿El diente queda débil después?', a: 'Un diente tratado endodónticamente pierde hidratación y puede volverse más frágil. Por eso siempre recomendamos colocar una corona de cerámica que lo proteja y le devuelva resistencia plena.' },
    { q: '¿Cuánto tiempo dura el resultado?', a: 'Un diente bien tratado endodónticamente y correctamente restaurado puede durar toda la vida. El mantenimiento con higiene oral adecuada y controles periódicos es clave para su longevidad.' },
    { q: '¿Es mejor extraer el diente que hacerle endodoncia?', a: 'Siempre es preferible conservar el diente natural. La extracción tiene consecuencias: migración de los dientes vecinos, pérdida ósea, necesidad de implante o prótesis. La endodoncia, cuando está indicada, es la primera opción.' },
  ],
  price: 'Desde $280.000 COP',
  duration: '1 – 2 sesiones (60-90 min c/u)',
  relatedServices: [
    { name: 'Implantes Dentales', href: '/servicios/implantes-dentales' },
    { name: 'Estética Dental', href: '/servicios/estetica-dental' },
    { name: 'Blanqueamiento', href: '/servicios/blanqueamiento-dental' },
  ],
};

export default function EndodonciaPage() {
  return <ServicePageLayout data={data} />;
}
