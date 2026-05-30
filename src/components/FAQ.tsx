import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: '¿El blanqueamiento dental duele?',
    a: 'No, el blanqueamiento dental que realizamos es completamente indoloro. Utilizamos geles de alta calidad aprobados clínicamente que respetan la sensibilidad del esmalte. Algunos pacientes pueden sentir una ligera sensibilidad pasajera, que desaparece en pocas horas.',
  },
  {
    q: '¿Cuánto tiempo dura un implante dental?',
    a: 'Con los cuidados adecuados, un implante dental puede durar toda la vida. La clave está en mantener una buena higiene oral, acudir a controles periódicos y evitar hábitos como el tabaco. Nuestros implantes son de titanio de grado quirúrgico con garantía de por vida.',
  },
  {
    q: '¿A partir de qué edad pueden venir los niños?',
    a: 'Recomendamos la primera visita odontológica cuando aparece el primer diente de leche, generalmente entre los 6 y 12 meses. Nuestro consultorio está adaptado para recibir a los pequeños en un ambiente amigable y divertido, haciendo que la experiencia sea positiva desde el inicio.',
  },
  {
    q: '¿Aceptan seguros médicos o pólizas?',
    a: 'Sí, trabajamos con las principales aseguradoras del país. Te recomendamos traer tu póliza en la primera consulta para verificar la cobertura específica de tu plan. También ofrecemos facilidades de pago para tratamientos que no estén cubiertos por tu seguro.',
  },
  {
    q: '¿Cuántas sesiones necesito para ortodoncia?',
    a: 'El número de sesiones varía según cada caso. En promedio, los controles de ortodoncia se realizan cada 4 a 6 semanas. La duración total del tratamiento puede ir de 12 a 30 meses dependiendo de la complejidad. En la consulta inicial hacemos una evaluación completa y te damos un plan detallado.',
  },
  {
    q: '¿Ofrecen facilidades de pago?',
    a: 'Absolutamente. Entendemos que la salud oral es una inversión importante. Ofrecemos planes de financiación sin intereses hasta 12 cuotas, aceptamos tarjetas de crédito y débito, y tenemos convenios con fondos de empleados. ¡Pregúntanos por la opción que mejor se adapte a tu presupuesto!',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-dm text-xs font-semibold text-mint uppercase tracking-widest mb-2">
            Dudas Frecuentes
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-bold text-carbon">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-bone transition-colors duration-200"
              >
                <span className="font-dm text-sm font-medium text-carbon">{q}</span>
                {open === i ? (
                  <Minus className="w-4 h-4 text-mint flex-shrink-0" strokeWidth={2} />
                ) : (
                  <Plus className="w-4 h-4 text-mint flex-shrink-0" strokeWidth={2} />
                )}
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  open === i ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 font-dm text-sm text-slate leading-relaxed">{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
