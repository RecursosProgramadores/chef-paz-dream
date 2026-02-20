import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageTransition from '@/components/PageTransition';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { CalendarIcon, Users, Clock, ArrowRight, ArrowLeft, ChevronRight, Check } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import restaurantImg from '@/assets/restaurant-interior.jpg';
import fondoHero from '@/assets/fondohero.png';

const timeSlots = [
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30'
];

type Step = 'hero' | 'date' | 'guests' | 'time' | 'form' | 'success';

const Reserva = () => {
  const { lang, t } = useLanguage();
  const [step, setStep] = useState<Step>('hero');
  const [date, setDate] = useState<Date>();
  const [guests, setGuests] = useState<number>(2);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const nextStep = () => {
    if (step === 'hero') setStep('date');
    else if (step === 'date' && date) setStep('guests');
    else if (step === 'guests') setStep('time');
    else if (step === 'time' && selectedTime) setStep('form');
  };

  const prevStep = () => {
    if (step === 'date') setStep('hero');
    else if (step === 'guests') setStep('date');
    else if (step === 'time') setStep('guests');
    else if (step === 'form') setStep('time');
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    const dateStr = date ? format(date, 'dd/MM/yyyy') : '';

    const text = lang === 'es'
      ? `Reserva Visite 2026\n\n` +
      `👤 Nombre: ${form.name}\n` +
      `📧 Email: ${form.email}\n` +
      `📞 Teléfono: ${form.phone}\n` +
      `👥 Comensales: ${guests}\n` +
      `📅 Fecha: ${dateStr}\n` +
      `🕐 Hora: ${selectedTime}\n\n` +
      `Confirmado vía Web.`
      : `Visite Reservation 2026\n\n` +
      `👤 Name: ${form.name}\n` +
      `📧 Email: ${form.email}\n` +
      `📞 Phone: ${form.phone}\n` +
      `👥 Guests: ${guests}\n` +
      `📅 Date: ${dateStr}\n` +
      `🕐 Time: ${selectedTime}\n\n` +
      `Confirmed via Web.`;

    setTimeout(() => {
      window.open(`https://wa.me/51990512048?text=${encodeURIComponent(text)}`, '_blank');
      setStep('success');
      setIsSubmitting(false);
    }, 1500);
  };

  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <PageTransition>
      <main className="min-h-screen relative overflow-hidden selection:bg-primary/30 selection:text-black">

        <AnimatePresence mode="wait">
          {step === 'hero' && (
            <motion.section
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative h-screen flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 z-0">
                <img src={fondoHero} alt="" className="w-full h-full object-cover opacity-100" />
                <div className="absolute inset-0 bg-white/20" />
              </div>

              <div className="relative z-10 text-center px-6">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="block font-serif italic text-[#d4af37] text-xl mb-4"
                >
                  {t('reserva.paris.hero.brand')}
                </motion.span>
                <motion.h1
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-12 tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                >
                  {t('reserva.paris.hero.title')}
                </motion.h1>
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 175, 55, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextStep}
                  className="bg-primary text-black px-12 py-5 rounded-full font-bold text-lg uppercase tracking-widest shadow-xl transition-all"
                >
                  {t('reserva.paris.hero.cta')}
                </motion.button>
              </div>
            </motion.section>
          )}

          {step !== 'hero' && step !== 'success' && (
            <motion.section
              key="booking"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen flex flex-col"
            >
              {/* Progress & Back */}
              <div className="flex items-center justify-between mb-16">
                <button
                  onClick={prevStep}
                  className="flex items-center gap-2 text-black hover:text-primary transition-colors drop-shadow-sm font-bold"
                >
                  <ArrowLeft size={20} />
                  <span className="font-bold uppercase tracking-widest text-xs">{t('reserva.paris.back')}</span>
                </button>
                <div className="font-serif italic text-2xl text-primary drop-shadow-md">
                  {step === 'date' && '01'}
                  {step === 'guests' && '02'}
                  {step === 'time' && '03'}
                  {step === 'form' && '04'}
                  <span className="text-black/20 mx-2">/</span>
                  <span className="text-black/40">04</span>
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-grow">
                <AnimatePresence mode="wait">
                  {step === 'date' && (
                    <motion.div key="date-step" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-12">
                      <h2 className="font-serif text-5xl md:text-6xl font-bold leading-tight text-black">
                        {t('reserva.premium.date.label')}
                      </h2>
                      <div className="flex justify-center bg-white/40 backdrop-blur-3xl p-8 rounded-3xl border border-white/20 shadow-xl">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={(d) => d && setDate(d)}
                          disabled={(d) => d < new Date()}
                          className="p-0 border-none pointer-events-auto text-black"
                          classNames={{
                            day_selected: "bg-primary text-black hover:bg-primary hover:text-black focus:bg-primary focus:text-black",
                            day_today: "bg-primary/20 text-black font-bold",
                            head_cell: "text-black/40 font-normal text-xs uppercase tracking-widest",
                            cell: "h-12 w-12 text-center text-sm p-0 relative",
                            day: "h-12 w-12 p-0 font-bold text-black aria-selected:opacity-100 hover:bg-primary/20 rounded-full transition-colors",
                          }}
                        />
                      </div>
                    </motion.div>
                  )}

                  {step === 'guests' && (
                    <motion.div key="guests-step" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-12">
                      <h2 className="font-serif text-5xl md:text-6xl font-bold leading-tight text-black">
                        {t('reserva.premium.covers.label')}
                      </h2>
                      <div className="flex flex-wrap gap-4 justify-center">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <button
                            key={num}
                            onClick={() => setGuests(num)}
                            className={cn(
                              "w-20 h-20 rounded-full font-serif text-3xl transition-all duration-300 border flex items-center justify-center shadow-sm",
                              guests === num
                                ? "bg-primary text-black border-primary shadow-xl scale-110"
                                : "bg-white/60 backdrop-blur-xl text-black border-white/40 hover:border-primary/50"
                            )}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 'time' && (
                    <motion.div key="time-step" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-12">
                      <h2 className="font-serif text-5xl md:text-6xl font-bold leading-tight text-black">
                        {t('reserva.premium.time.label')}
                      </h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setSelectedTime(slot)}
                            className={cn(
                              "py-6 rounded-2xl font-serif text-2xl transition-all duration-300 border shadow-sm",
                              selectedTime === slot
                                ? "bg-primary text-black border-primary shadow-lg scale-105"
                                : "bg-white/60 backdrop-blur-xl text-black border-white/40 hover:border-primary/50"
                            )}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 'form' && (
                    <motion.div key="form-step" variants={variants} initial="initial" animate="animate" exit="exit" className="space-y-12">
                      <h2 className="font-serif text-5xl md:text-6xl font-bold leading-tight text-black">
                        {t('reserva.nombre')}
                      </h2>
                      <div className="space-y-12 max-w-lg mx-auto bg-white/60 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/40 shadow-2xl">
                        <div className="relative group">
                          <input
                            type="text"
                            placeholder={t('reserva.nombre')}
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full bg-black/5 border-b-2 border-primary py-4 font-serif text-2xl focus:outline-none transition-colors text-black placeholder:text-black/30 px-4 rounded-t-xl"
                          />
                        </div>
                        <div className="relative group">
                          <input
                            type="email"
                            placeholder={t('reserva.email')}
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full bg-black/5 border-b-2 border-primary py-4 font-serif text-2xl focus:outline-none transition-colors text-black placeholder:text-black/30 px-4 rounded-t-xl"
                          />
                        </div>
                        <div className="relative group">
                          <input
                            type="tel"
                            placeholder={t('reserva.telefono')}
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full bg-black/5 border-b-2 border-primary py-4 font-serif text-2xl focus:outline-none transition-colors text-black placeholder:text-black/30 px-4 rounded-t-xl gap-2"
                          />
                        </div>
                        <p className="text-black/80 text-sm font-sans italic text-center font-bold">
                          {t('reserva.paris.policy.note')}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Navigation CTA */}
              <div className="mt-20">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={
                    (step === 'date' && !date) ||
                    (step === 'time' && !selectedTime) ||
                    (step === 'form' && (!form.name || !form.email || !form.phone))
                  }
                  onClick={step === 'form' ? handleSubmit : nextStep}
                  className={cn(
                    "w-full h-20 rounded-full font-bold text-lg uppercase tracking-widest flex items-center justify-center gap-4 transition-all duration-500 shadow-2xl",
                    ((step === 'date' && !date) || (step === 'time' && !selectedTime))
                      ? "bg-black/10 text-black/20 cursor-not-allowed"
                      : "bg-primary text-black hover:bg-primary/90 hover:scale-[1.02]"
                  )}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      {step === 'form' ? t('reserva.paris.hero.cta') : t('reserva.paris.next')}
                      <ChevronRight size={20} />
                    </>
                  )}
                </motion.button>
              </div>
            </motion.section>
          )}

          {step === 'success' && (
            <motion.section
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-screen flex flex-col items-center justify-center text-center px-6"
            >
              <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center text-primary mb-8 shadow-xl">
                <Check size={48} />
              </div>
              <h2 className="font-serif text-6xl font-bold mb-4 text-black">{t('reserva.paris.success')}</h2>
              <p className="text-black/60 text-lg mb-12 max-w-md font-medium">{t('reserva.premium.prepay.info')}</p>
              <button
                onClick={() => setStep('hero')}
                className="text-black border-b-2 border-black pb-1 font-bold uppercase tracking-widest text-sm hover:text-primary hover:border-primary transition-all"
              >
                {t('common.back_to_home')}
              </button>
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </PageTransition>
  );
};

export default Reserva;
