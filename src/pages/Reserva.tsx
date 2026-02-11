import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';
import PageTransition from '@/components/PageTransition';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { CalendarIcon, Send } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

const timeSlots = [
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00',
];

const Reserva = () => {
  const { lang, t } = useLanguage();
  const [form, setForm] = useState({
    name: '', email: '', phone: '', guests: '',
    time: '', tipo: '', message: '',
  });
  const [date, setDate] = useState<Date>();

  const handleSubmit = () => {
    const dateStr = date ? format(date, 'dd/MM/yyyy') : '';
    const tipoLabels: Record<string, string> = {
      ligero: t('reserva.ligero'),
      medio: t('reserva.medio'),
      alto: t('reserva.alto'),
      degustacion: t('reserva.degustacion'),
    };

    const text = lang === 'es'
      ? `Hola Chef Paz, quisiera hacer una reserva:\n\n` +
        `👤 Nombre: ${form.name}\n` +
        `📧 Email: ${form.email}\n` +
        `📞 Teléfono: ${form.phone}\n` +
        `👥 Personas: ${form.guests}\n` +
        `📅 Fecha: ${dateStr}\n` +
        `🕐 Hora: ${form.time}\n` +
        `🍽️ Tipo de consumo: ${tipoLabels[form.tipo] || ''}\n` +
        (form.message ? `💬 Mensaje: ${form.message}` : '')
      : `Hello Chef Paz, I would like to make a reservation:\n\n` +
        `👤 Name: ${form.name}\n` +
        `📧 Email: ${form.email}\n` +
        `📞 Phone: ${form.phone}\n` +
        `👥 Guests: ${form.guests}\n` +
        `📅 Date: ${dateStr}\n` +
        `🕐 Time: ${form.time}\n` +
        `🍽️ Dining type: ${tipoLabels[form.tipo] || ''}\n` +
        (form.message ? `💬 Message: ${form.message}` : '');

    window.open(`https://wa.me/51990512048?text=${encodeURIComponent(text)}`, '_blank');
  };

  const inputClass = "w-full bg-background border border-border rounded-md px-4 py-3 font-sans-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow";
  const labelClass = "font-sans-body text-sm font-medium text-foreground block mb-2";

  return (
    <PageTransition>
    <main className="pt-24 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 max-w-2xl">
        <AnimatedSection>
          <div className="text-center mb-12 pt-12">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4">
              {t('reserva.title')}
            </h1>
            <p className="font-sans-body text-muted-foreground text-lg">
              {t('reserva.subtitle')}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-card rounded-xl p-8 md:p-12 shadow-xl">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className={labelClass}>{t('reserva.nombre')}</label>
                <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className={inputClass} />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>{t('reserva.email')}</label>
                  <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>{t('reserva.telefono')}</label>
                  <div className="flex">
                    <span className="bg-muted border border-border border-r-0 rounded-l-md px-3 py-3 text-sm font-sans-body text-muted-foreground flex items-center">🇵🇪 +51</span>
                    <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className={cn(inputClass, "rounded-l-none")} />
                  </div>
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className={labelClass}>{t('reserva.personas')}</label>
                <select
                  value={form.guests}
                  onChange={e => setForm({ ...form, guests: e.target.value })}
                  className={inputClass}
                >
                  <option value="">{t('reserva.pick.guests')}</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={String(i + 1)}>{i + 1}</option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>{t('reserva.fecha')}</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className={cn(inputClass, "text-left flex items-center justify-between", !date && "text-muted-foreground")}>
                        {date ? format(date, 'PPP', { locale: lang === 'es' ? es : undefined }) : t('reserva.pick.date')}
                        <CalendarIcon size={16} className="text-muted-foreground" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(d) => d < new Date()}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <label className={labelClass}>{t('reserva.hora')}</label>
                  <select
                    value={form.time}
                    onChange={e => setForm({ ...form, time: e.target.value })}
                    className={inputClass}
                  >
                    <option value="">{t('reserva.pick.time')}</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Tipo */}
              <div>
                <label className={labelClass}>{t('reserva.tipo')}</label>
                <select
                  value={form.tipo}
                  onChange={e => setForm({ ...form, tipo: e.target.value })}
                  className={inputClass}
                >
                  <option value="">{t('reserva.pick.type')}</option>
                  <option value="ligero">{t('reserva.ligero')}</option>
                  <option value="medio">{t('reserva.medio')}</option>
                  <option value="alto">{t('reserva.alto')}</option>
                  <option value="degustacion">{t('reserva.degustacion')}</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className={labelClass}>{t('reserva.mensaje')}</label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className={cn(inputClass, "resize-none")}
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                className="w-full bg-cta text-cta-foreground py-4 rounded-md font-sans-body font-semibold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Send size={18} />
                {t('reserva.enviar')}
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
    </PageTransition>
  );
};

export default Reserva;
