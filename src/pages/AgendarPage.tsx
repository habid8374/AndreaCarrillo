import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Activity, Anchor, Zap, Heart, Star, CalendarDays, Clock, CheckCircle, ChevronLeft, ChevronRight, User, Mail, Phone, MessageSquare } from 'lucide-react';

// ── Data ──────────────────────────────────────────────────────
const services = [
  { id: 'blanqueamiento', icon: Sparkles, name: 'Blanqueamiento Dental', duration: '60-90 min', price: 'Desde $150.000' },
  { id: 'ortodoncia', icon: Activity, name: 'Ortodoncia', duration: 'Consulta 30 min', price: 'Desde $800.000' },
  { id: 'implantes', icon: Anchor, name: 'Implantes Dentales', duration: 'Consulta 45 min', price: 'Desde $1.200.000' },
  { id: 'endodoncia', icon: Zap, name: 'Endodoncia', duration: '60-90 min', price: 'Desde $280.000' },
  { id: 'odontopediatria', icon: Heart, name: 'Odontopediatría', duration: '30-45 min', price: 'Desde $60.000' },
  { id: 'estetica', icon: Star, name: 'Estética Dental', duration: 'Consulta 45 min', price: 'Desde $250.000' },
];

const SLOT_AM = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30'];
const SLOT_PM = ['14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'];
const ALL_SLOTS = [...SLOT_AM, ...SLOT_PM];

const MONTHS_ES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const DAYS_ES = ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];

function getNextWeekdays(count: number): Date[] {
  const days: Date[] = [];
  const cursor = new Date();
  cursor.setDate(cursor.getDate() + 1);
  while (days.length < count) {
    if (cursor.getDay() !== 0 && cursor.getDay() !== 6) days.push(new Date(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

function getOccupiedSlots(date: Date): string[] {
  const seed = date.getDate() * 3 + date.getMonth() * 7;
  return ALL_SLOTS.filter((_, i) => (i + seed) % 4 === 0);
}

function formatDate(d: Date) {
  return `${DAYS_ES[d.getDay()]} ${d.getDate()} ${MONTHS_ES[d.getMonth()]}`;
}

// ── Step indicator ────────────────────────────────────────────
function StepIndicator({ step }: { step: number }) {
  const steps = ['Servicio', 'Fecha y Hora', 'Tus Datos'];
  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {steps.map((label, i) => {
        const num = i + 1;
        const active = step === num;
        const done = step > num;
        return (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-dm font-semibold transition-colors duration-300 ${done ? 'bg-mint text-white' : active ? 'bg-mint text-white ring-4 ring-mint/20' : 'bg-gray-100 text-slate'}`}>
                {done ? <CheckCircle className="w-4 h-4" /> : num}
              </div>
              <span className={`font-dm text-xs mt-1 whitespace-nowrap ${active ? 'text-mint font-medium' : 'text-slate'}`}>{label}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={`w-16 sm:w-24 h-0.5 mb-4 mx-1 transition-colors duration-300 ${done ? 'bg-mint' : 'bg-gray-200'}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────
export default function AgendarPage() {
  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  // Step 1
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Step 2
  const weekdays = useRef(getNextWeekdays(14)).current;
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const occupiedSlots = selectedDay ? getOccupiedSlots(selectedDay) : [];

  // Step 3
  const [form, setForm] = useState({ name: '', email: '', phone: '', notes: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const serviceObj = services.find(s => s.id === selectedService);

  // ── Validation ────────────────────────────────────────────
  const validateStep3 = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'El nombre es requerido';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email inválido';
    if (!form.phone.trim()) e.phone = 'El teléfono es requerido';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleConfirm = () => {
    if (validateStep3()) setConfirmed(true);
  };

  // Fake reference
  const ref = `AC-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

  // ── Confirmation screen ───────────────────────────────────
  if (confirmed) {
    return (
      <div className="pt-16 lg:pt-20 min-h-screen bg-bone flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center space-y-5 bg-white rounded-2xl shadow-sm p-10">
          <div className="w-20 h-20 rounded-full bg-mint-pale flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-mint" strokeWidth={1.5} />
          </div>
          <h1 className="font-cormorant text-3xl font-bold text-carbon">¡Cita Confirmada!</h1>
          <p className="font-dm text-slate text-sm leading-relaxed">
            Hemos recibido tu solicitud de valoración. Te enviaremos una confirmación a{' '}
            <span className="font-semibold text-carbon">{form.email}</span> con todos los detalles.
          </p>
          <div className="bg-bone rounded-2xl p-5 text-left space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-dm text-xs text-slate w-24">Referencia:</span>
              <span className="font-dm text-sm font-semibold text-mint">{ref}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-dm text-xs text-slate w-24">Servicio:</span>
              <span className="font-dm text-sm text-carbon">{serviceObj?.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-dm text-xs text-slate w-24">Fecha:</span>
              <span className="font-dm text-sm text-carbon">{selectedDay ? formatDate(selectedDay) : ''}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-dm text-xs text-slate w-24">Hora:</span>
              <span className="font-dm text-sm text-carbon">{selectedSlot}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-dm text-xs text-slate w-24">Paciente:</span>
              <span className="font-dm text-sm text-carbon">{form.name}</span>
            </div>
          </div>
          <p className="font-dm text-xs text-slate">
            ¿Preguntas? Llámanos al{' '}
            <a href="tel:+573001234567" className="text-mint font-medium">+57 300 123 4567</a>
          </p>
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-mint hover:bg-mint-dark text-white font-dm font-medium text-sm transition-colors duration-200">
            Volver al Inicio
          </Link>
        </div>
      </div>
    );
  }

  // ── Main wizard ───────────────────────────────────────────
  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-bone">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <p className="font-dm text-xs font-semibold text-mint uppercase tracking-widest mb-2">Sin costo</p>
          <h1 className="font-cormorant text-3xl lg:text-4xl font-bold text-carbon">Agenda tu Valoración Inicial</h1>
          <p className="font-dm text-slate text-sm mt-2">Gratuita, sin compromiso y en 3 simples pasos</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <StepIndicator step={step} />

        {/* ── STEP 1: Servicio ── */}
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="font-cormorant text-2xl font-semibold text-carbon text-center mb-6">¿Qué servicio necesitas?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map(({ id, icon: Icon, name, duration, price }) => (
                <button
                  key={id}
                  onClick={() => setSelectedService(id)}
                  className={`flex items-start gap-4 p-4 rounded-2xl border-2 text-left transition-all duration-200 bg-white ${selectedService === id ? 'border-mint shadow-md' : 'border-gray-100 hover:border-mint-pale hover:shadow-sm'}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${selectedService === id ? 'bg-mint' : 'bg-mint-pale'}`}>
                    <Icon className={`w-5 h-5 ${selectedService === id ? 'text-white' : 'text-mint'}`} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-dm text-sm font-semibold text-carbon">{name}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="font-dm text-xs text-slate flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {duration}
                      </span>
                    </div>
                    <p className="font-dm text-xs text-mint mt-0.5">{price}</p>
                  </div>
                  {selectedService === id && <CheckCircle className="w-5 h-5 text-mint flex-shrink-0 mt-0.5" />}
                </button>
              ))}
            </div>

            <div className="flex justify-end pt-2">
              <button
                disabled={!selectedService}
                onClick={() => setStep(2)}
                className="flex items-center gap-2 px-7 py-3 rounded-full bg-mint hover:bg-mint-dark text-white font-dm font-medium text-sm transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continuar <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 2: Fecha y hora ── */}
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="font-cormorant text-2xl font-semibold text-carbon text-center mb-6">Selecciona Fecha y Hora</h2>

            {/* Day picker */}
            <div>
              <p className="font-dm text-xs font-semibold text-slate uppercase tracking-widest mb-3">Día disponible</p>
              <div className="overflow-x-auto pb-2">
                <div className="flex gap-2 min-w-max">
                  {weekdays.map((d) => {
                    const isSelected = selectedDay?.toDateString() === d.toDateString();
                    return (
                      <button
                        key={d.toISOString()}
                        onClick={() => { setSelectedDay(d); setSelectedSlot(null); }}
                        className={`flex flex-col items-center px-4 py-3 rounded-2xl border-2 min-w-[72px] transition-all duration-200 ${isSelected ? 'border-mint bg-mint text-white' : 'border-gray-100 bg-white text-carbon hover:border-mint-pale'}`}
                      >
                        <span className="font-dm text-xs">{DAYS_ES[d.getDay()]}</span>
                        <span className="font-cormorant text-2xl font-bold leading-tight">{d.getDate()}</span>
                        <span className="font-dm text-[10px] opacity-70">{MONTHS_ES[d.getMonth()].slice(0, 3)}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Time slots */}
            {selectedDay && (
              <div>
                <p className="font-dm text-xs font-semibold text-slate uppercase tracking-widest mb-3">Horario disponible — {formatDate(selectedDay)}</p>
                <div className="space-y-3">
                  <p className="font-dm text-xs text-slate">Mañana</p>
                  <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                    {SLOT_AM.map(slot => {
                      const taken = occupiedSlots.includes(slot);
                      const selected = selectedSlot === slot;
                      return (
                        <button
                          key={slot}
                          disabled={taken}
                          onClick={() => setSelectedSlot(slot)}
                          className={`py-2.5 rounded-xl border-2 font-dm text-xs font-medium transition-all duration-200 ${taken ? 'border-gray-100 text-gray-300 cursor-not-allowed bg-gray-50' : selected ? 'border-mint bg-mint text-white' : 'border-gray-200 text-carbon hover:border-mint'}`}
                        >
                          {taken ? '●' : slot}
                        </button>
                      );
                    })}
                  </div>
                  <p className="font-dm text-xs text-slate pt-1">Tarde</p>
                  <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                    {SLOT_PM.map(slot => {
                      const taken = occupiedSlots.includes(slot);
                      const selected = selectedSlot === slot;
                      return (
                        <button
                          key={slot}
                          disabled={taken}
                          onClick={() => setSelectedSlot(slot)}
                          className={`py-2.5 rounded-xl border-2 font-dm text-xs font-medium transition-all duration-200 ${taken ? 'border-gray-100 text-gray-300 cursor-not-allowed bg-gray-50' : selected ? 'border-mint bg-mint text-white' : 'border-gray-200 text-carbon hover:border-mint'}`}
                        >
                          {taken ? '●' : slot}
                        </button>
                      );
                    })}
                  </div>
                  <p className="font-dm text-xs text-slate flex items-center gap-1.5">
                    <span className="text-gray-300 text-base leading-none">●</span> Horario ocupado
                  </p>
                </div>
              </div>
            )}

            <div className="flex justify-between pt-2">
              <button onClick={() => setStep(1)} className="flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-gray-200 text-carbon font-dm text-sm hover:bg-gray-50 transition-colors duration-200">
                <ChevronLeft className="w-4 h-4" /> Atrás
              </button>
              <button
                disabled={!selectedDay || !selectedSlot}
                onClick={() => setStep(3)}
                className="flex items-center gap-2 px-7 py-3 rounded-full bg-mint hover:bg-mint-dark text-white font-dm font-medium text-sm transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continuar <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 3: Datos ── */}
        {step === 3 && (
          <div className="space-y-6">
            <h2 className="font-cormorant text-2xl font-semibold text-carbon text-center mb-6">Completa tus Datos</h2>

            <div className="grid lg:grid-cols-5 gap-6">
              {/* Form */}
              <div className="lg:col-span-3 space-y-4">
                <div>
                  <label className="font-dm text-xs font-semibold text-carbon uppercase tracking-wide block mb-1.5">Nombre completo *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate" />
                    <input
                      type="text"
                      placeholder="Tu nombre completo"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white font-dm text-sm text-carbon placeholder-slate focus:outline-none focus:border-mint transition-colors duration-200"
                    />
                  </div>
                  {errors.name && <p className="font-dm text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="font-dm text-xs font-semibold text-carbon uppercase tracking-wide block mb-1.5">Correo electrónico *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate" />
                    <input
                      type="email"
                      placeholder="tucorreo@ejemplo.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white font-dm text-sm text-carbon placeholder-slate focus:outline-none focus:border-mint transition-colors duration-200"
                    />
                  </div>
                  {errors.email && <p className="font-dm text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="font-dm text-xs font-semibold text-carbon uppercase tracking-wide block mb-1.5">Teléfono / WhatsApp *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate" />
                    <input
                      type="tel"
                      placeholder="+57 300 000 0000"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white font-dm text-sm text-carbon placeholder-slate focus:outline-none focus:border-mint transition-colors duration-200"
                    />
                  </div>
                  {errors.phone && <p className="font-dm text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="font-dm text-xs font-semibold text-carbon uppercase tracking-wide block mb-1.5">Notas adicionales (opcional)</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-slate" />
                    <textarea
                      rows={3}
                      placeholder="¿Tienes alguna condición médica, alergia o comentario especial?"
                      value={form.notes}
                      onChange={e => setForm({ ...form, notes: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white font-dm text-sm text-carbon placeholder-slate focus:outline-none focus:border-mint transition-colors duration-200 resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4 sticky top-28">
                  <p className="font-cormorant text-lg font-semibold text-carbon">Resumen de Cita</p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-mint-pale flex items-center justify-center flex-shrink-0 mt-0.5">
                        {serviceObj && <serviceObj.icon className="w-3.5 h-3.5 text-mint" strokeWidth={1.5} />}
                      </div>
                      <div>
                        <p className="font-dm text-xs text-slate">Servicio</p>
                        <p className="font-dm text-sm font-medium text-carbon">{serviceObj?.name}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-mint-pale flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CalendarDays className="w-3.5 h-3.5 text-mint" />
                      </div>
                      <div>
                        <p className="font-dm text-xs text-slate">Fecha</p>
                        <p className="font-dm text-sm font-medium text-carbon">{selectedDay ? formatDate(selectedDay) : '—'}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-mint-pale flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Clock className="w-3.5 h-3.5 text-mint" />
                      </div>
                      <div>
                        <p className="font-dm text-xs text-slate">Hora</p>
                        <p className="font-dm text-sm font-medium text-carbon">{selectedSlot ?? '—'}</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 pt-3">
                    <p className="font-dm text-xs text-slate">Valoración inicial</p>
                    <p className="font-cormorant text-2xl font-bold text-mint mt-0.5">Gratuita</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-2">
              <button onClick={() => setStep(2)} className="flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-gray-200 text-carbon font-dm text-sm hover:bg-gray-50 transition-colors duration-200">
                <ChevronLeft className="w-4 h-4" /> Atrás
              </button>
              <button
                onClick={handleConfirm}
                className="flex items-center gap-2 px-7 py-3 rounded-full bg-mint hover:bg-mint-dark text-white font-dm font-medium text-sm transition-colors duration-200"
              >
                <CalendarDays className="w-4 h-4" /> Confirmar Cita
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
