import { X } from 'lucide-react';

interface ModalProps {
  onClose: () => void;
}

export function PrivacyModal({ onClose }: ModalProps) {
  return (
    <LegalModal title="Política de Privacidad" onClose={onClose}>
      <p className="text-sm text-gray-600 mb-3">Última actualización: mayo 2025</p>

      <h3 className="font-semibold text-carbon mb-1">1. Responsable del tratamiento</h3>
      <p className="text-sm text-gray-600 mb-4">
        Dra. Andrea Cristina Carrillo Molina — Odontología Especializada, Seccional Atlántico,
        Colombia. Teléfono: +57 314 434 0594.
      </p>

      <h3 className="font-semibold text-carbon mb-1">2. Datos que recopilamos</h3>
      <p className="text-sm text-gray-600 mb-4">
        Recopilamos únicamente los datos que usted nos proporciona voluntariamente a través del
        formulario de contacto: nombre completo, correo electrónico, número de teléfono y el
        mensaje que nos envía. No recopilamos datos sensibles ni realizamos perfilamiento
        automatizado.
      </p>

      <h3 className="font-semibold text-carbon mb-1">3. Finalidad del tratamiento</h3>
      <p className="text-sm text-gray-600 mb-4">
        Los datos recopilados se utilizan exclusivamente para: (a) responder a su solicitud de
        cita o consulta, (b) brindarle información sobre nuestros servicios odontológicos, y
        (c) gestionar la relación con el paciente. No compartimos sus datos con terceros sin
        su consentimiento, salvo obligación legal.
      </p>

      <h3 className="font-semibold text-carbon mb-1">4. Base legal</h3>
      <p className="text-sm text-gray-600 mb-4">
        El tratamiento de sus datos se basa en el consentimiento que usted otorga al diligenciar
        el formulario de contacto, de conformidad con la Ley 1581 de 2012 (Ley de Protección de
        Datos Personales de Colombia) y el Decreto 1377 de 2013.
      </p>

      <h3 className="font-semibold text-carbon mb-1">5. Conservación de datos</h3>
      <p className="text-sm text-gray-600 mb-4">
        Sus datos se conservarán durante el tiempo necesario para atender su solicitud y, en
        caso de convertirse en paciente, durante el tiempo que exija la normativa sanitaria
        colombiana para la conservación de historias clínicas.
      </p>

      <h3 className="font-semibold text-carbon mb-1">6. Derechos del titular</h3>
      <p className="text-sm text-gray-600 mb-4">
        Usted tiene derecho a conocer, actualizar, rectificar y suprimir sus datos personales,
        así como a revocar su consentimiento. Para ejercer estos derechos contáctenos al correo
        o teléfono indicados arriba.
      </p>

      <h3 className="font-semibold text-carbon mb-1">7. Seguridad</h3>
      <p className="text-sm text-gray-600">
        Adoptamos medidas técnicas y organizativas razonables para proteger sus datos contra
        accesos no autorizados, pérdida o divulgación indebida.
      </p>
    </LegalModal>
  );
}

export function CookiesModal({ onClose }: ModalProps) {
  return (
    <LegalModal title="Política de Cookies" onClose={onClose}>
      <p className="text-sm text-gray-600 mb-3">Última actualización: mayo 2025</p>

      <h3 className="font-semibold text-carbon mb-1">¿Qué son las cookies?</h3>
      <p className="text-sm text-gray-600 mb-4">
        Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando
        visita un sitio web. Nos permiten recordar sus preferencias y mejorar su experiencia
        de navegación.
      </p>

      <h3 className="font-semibold text-carbon mb-1">Cookies que utilizamos</h3>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm text-gray-600 border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left px-3 py-2 border border-gray-200 font-semibold text-carbon">Tipo</th>
              <th className="text-left px-3 py-2 border border-gray-200 font-semibold text-carbon">Finalidad</th>
              <th className="text-left px-3 py-2 border border-gray-200 font-semibold text-carbon">Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-3 py-2 border border-gray-200">Técnicas / Sesión</td>
              <td className="px-3 py-2 border border-gray-200">Funcionamiento básico del sitio</td>
              <td className="px-3 py-2 border border-gray-200">Sesión</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-3 py-2 border border-gray-200">Analíticas</td>
              <td className="px-3 py-2 border border-gray-200">Medir visitas y comportamiento (anónimo)</td>
              <td className="px-3 py-2 border border-gray-200">13 meses</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-gray-200">Preferencias</td>
              <td className="px-3 py-2 border border-gray-200">Recordar sus preferencias de navegación</td>
              <td className="px-3 py-2 border border-gray-200">1 año</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="font-semibold text-carbon mb-1">Control de cookies</h3>
      <p className="text-sm text-gray-600 mb-4">
        Puede configurar su navegador para rechazar todas las cookies o para que le avise
        cuando se envíe una cookie. Tenga en cuenta que si rechaza las cookies, es posible
        que algunas partes del sitio no funcionen correctamente.
      </p>

      <h3 className="font-semibold text-carbon mb-1">Cookies de terceros</h3>
      <p className="text-sm text-gray-600">
        Este sitio puede incluir mapas de Google Maps, que utilizan sus propias cookies
        sujetas a la política de privacidad de Google. No tenemos control sobre esas cookies.
      </p>
    </LegalModal>
  );
}

export function TermsModal({ onClose }: ModalProps) {
  return (
    <LegalModal title="Términos y Condiciones" onClose={onClose}>
      <p className="text-sm text-gray-600 mb-3">Última actualización: mayo 2025</p>

      <h3 className="font-semibold text-carbon mb-1">1. Objeto</h3>
      <p className="text-sm text-gray-600 mb-4">
        Los presentes términos regulan el uso del sitio web de la Dra. Andrea Cristina Carrillo
        Molina — Odontología Especializada. Al navegar por este sitio usted acepta estos términos.
      </p>

      <h3 className="font-semibold text-carbon mb-1">2. Información del sitio</h3>
      <p className="text-sm text-gray-600 mb-4">
        El contenido de este sitio web tiene carácter informativo y no constituye una consulta
        médica ni odontológica. Para diagnóstico y tratamiento es necesario agendar una cita
        presencial con la profesional.
      </p>

      <h3 className="font-semibold text-carbon mb-1">3. Reserva de citas</h3>
      <p className="text-sm text-gray-600 mb-4">
        Las solicitudes de cita realizadas a través del formulario web son de carácter
        provisional y quedarán confirmadas únicamente mediante comunicación directa por
        parte de nuestro consultorio. La Dra. Carrillo se reserva el derecho de modificar
        horarios o disponibilidad.
      </p>

      <h3 className="font-semibold text-carbon mb-1">4. Propiedad intelectual</h3>
      <p className="text-sm text-gray-600 mb-4">
        Todos los contenidos de este sitio (textos, imágenes, logotipos, diseño) son
        propiedad de la Dra. Andrea Carrillo o de sus titulares correspondientes. Queda
        prohibida su reproducción total o parcial sin autorización expresa.
      </p>

      <h3 className="font-semibold text-carbon mb-1">5. Limitación de responsabilidad</h3>
      <p className="text-sm text-gray-600 mb-4">
        La Dra. Andrea Carrillo no se responsabiliza por daños derivados del uso indebido
        de la información publicada en este sitio, ni por la interrupción temporal del
        servicio por causas técnicas ajenas a su voluntad.
      </p>

      <h3 className="font-semibold text-carbon mb-1">6. Legislación aplicable</h3>
      <p className="text-sm text-gray-600">
        Estos términos se rigen por las leyes de la República de Colombia. Cualquier
        controversia se resolverá ante los tribunales competentes de la ciudad de
        Barranquilla, Atlántico.
      </p>
    </LegalModal>
  );
}

/* ---- Wrapper genérico ---- */
function LegalModal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="font-cormorant text-2xl font-bold text-carbon">{title}</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>
        {/* Body */}
        <div className="overflow-y-auto px-6 py-5 flex-1">
          {children}
        </div>
        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-mint hover:bg-mint-dark text-white font-dm text-sm font-medium transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
