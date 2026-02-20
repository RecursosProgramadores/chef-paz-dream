import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';
import PageTransition from '@/components/PageTransition';
import TropicalLeaf from '@/components/TropicalLeaf';
import { Phone, Instagram, Facebook, Mail, MapPin, Send, MessageCircle, Clock, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import amazoniaBg from '@/assets/amazonia-bg.jpg';
import fondoHero from '@/assets/fondohero.png';

const Contacto = () => {
  const { lang, t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleWhatsApp = () => {
    const text = lang === 'es'
      ? `Hola Chef Paz, soy ${form.name}. ${form.message}. Mi email: ${form.email}`
      : `Hello Chef Paz, I'm ${form.name}. ${form.message}. My email: ${form.email}`;
    window.open(`https://wa.me/51990512048?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <PageTransition>
      <main className="min-h-screen relative overflow-hidden">
        {/* Background Elements */}
        <div className="fixed inset-0 z-0">
          <img
            src={fondoHero}
            alt=""
            className="w-full h-full object-cover opacity-100"
          />
          {/* Subtle vignette for depth, not obscuring center */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/30" />
        </div>

        {/* Floating Tropical Leaves */}
        <TropicalLeaf className="top-[15%] -left-12 w-64 h-64 text-primary/10" rotate={45} delay={0} scale={1.2} />
        <TropicalLeaf className="top-[40%] -right-16 w-80 h-80 text-primary/5" rotate={-30} delay={1} scale={1.5} />
        <TropicalLeaf className="bottom-[10%] left-[5%] w-48 h-48 text-primary/10" rotate={15} delay={2} scale={0.8} />

        {/* Hero Section */}
        <div className="relative z-10 pt-32 pb-16">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="text-center mb-20">
                <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6 bg-primary/5">
                  {t('contact.hero.tag')}
                </span>
                <h1 className="font-serif text-5xl md:text-8xl font-bold text-black mb-6 leading-tight">
                  {t('contact.title')}
                </h1>
                <p className="font-sans-body text-black text-lg md:text-xl max-w-2xl mx-auto italic font-medium">
                  {t('contact.hero.subtitle')}
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto">
              {/* Left Column - Experience & Info */}
              <div className="space-y-8">
                <AnimatedSection delay={0.1}>
                  <div className="bg-white/40 backdrop-blur-2xl border border-white/40 p-10 rounded-[2.5rem] shadow-[0_32px_64px_rgba(0,0,0,0.15)] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/30 transition-colors" />

                    <h2 className="font-serif text-3xl text-black mb-8 font-bold">
                      {t('contact.visit.title')}
                    </h2>

                    <div className="space-y-8">
                      <div className="flex items-start gap-6 group/item">
                        <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-primary shadow-lg shadow-black/10 transition-all duration-500 group-hover/item:scale-110">
                          <MapPin size={24} />
                        </div>
                        <div>
                          <h3 className="font-sans-body font-bold text-black text-lg mb-2">{t('contact.address')}</h3>
                          <p className="font-sans-body text-black/80 leading-relaxed font-medium">
                            Jr. Putumayo Nro. 468<br />
                            (entre Tacna y Huallaga)<br />
                            Iquitos, Loreto, Perú
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-black/10">
                        <a href="https://wa.me/51990512048" className="flex items-center gap-4 text-black hover:text-primary transition-all group/link underline-offset-4">
                          <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center group-hover/link:bg-black group-hover/link:text-primary">
                            <MessageCircle size={20} />
                          </div>
                          <span className="text-sm font-bold">+51 990 512 048</span>
                        </a>
                        <a href="mailto:info@chefpaz.pe" className="flex items-center gap-4 text-black hover:text-primary transition-all group/link underline-offset-4">
                          <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center group-hover/link:bg-black group-hover/link:text-primary">
                            <Mail size={20} />
                          </div>
                          <span className="text-sm font-bold">info@chefpaz.pe</span>
                        </a>
                      </div>

                      <div className="flex gap-4 pt-4">
                        {[
                          { icon: <Instagram size={20} />, href: "https://instagram.com" },
                          { icon: <Facebook size={20} />, href: "https://facebook.com" }
                        ].map((social, idx) => (
                          <a
                            key={idx}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all"
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Map Integration */}
                <AnimatedSection delay={0.2}>
                  <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 aspect-[16/10] relative group">
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none z-10" />
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.2850932682068!2d-73.2463114!3d-3.7479617999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ea107179ed2e6f%3A0xeaa16ae8f75d36c8!2sChef%20Paz%20Restaurant!5e0!3m2!1ses!2spe!4v1771453524012!5m2!1ses!2spe"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Chef Paz Restaurant Location"
                      className="grayscale-[0.5] contrast-[1.1] brightness-[0.9]"
                    />
                  </div>
                </AnimatedSection>
              </div>

              {/* Right Column - Premium Form & Hours */}
              <div className="space-y-4 md:space-y-6">
                <AnimatedSection delay={0.3}>
                  <div className="bg-white/40 backdrop-blur-3xl border border-white/40 p-8 md:p-10 rounded-[2.5rem] shadow-[0_32px_64px_rgba(0,0,0,0.15)] relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem] -z-10" />
                    <h2 className="font-serif text-xl md:text-2xl text-black mb-8 text-center font-bold">
                      {t('contact.form.title')}
                    </h2>

                    <div className="space-y-4">
                      <div className="relative group">
                        <input
                          type="text"
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          required
                          className="w-full bg-black/5 border-b-2 border-black/10 px-4 py-3 font-sans-body text-black focus:outline-none focus:border-primary transition-all duration-500 placeholder:text-black/40 text-sm rounded-t-lg"
                          placeholder={t('contact.form.name')}
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-700 group-focus-within:w-full" />
                      </div>

                      <div className="relative group">
                        <input
                          type="email"
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          required
                          className="w-full bg-black/5 border-b-2 border-black/10 px-4 py-3 font-sans-body text-black focus:outline-none focus:border-primary transition-all duration-500 placeholder:text-black/40 text-sm rounded-t-lg"
                          placeholder={t('contact.form.email')}
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-700 group-focus-within:w-full" />
                      </div>

                      <div className="relative group">
                        <textarea
                          rows={2}
                          value={form.message}
                          onChange={e => setForm({ ...form, message: e.target.value })}
                          required
                          className="w-full bg-black/5 border-b-2 border-black/10 px-4 py-3 font-sans-body text-black focus:outline-none focus:border-primary transition-all duration-500 placeholder:text-black/40 resize-none text-sm rounded-t-lg"
                          placeholder={t('contact.form.message')}
                        />
                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-700 group-focus-within:w-full" />
                      </div>

                      <div className="pt-4">
                        <motion.button
                          onClick={handleWhatsApp}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-[#25D366] text-white px-6 py-4 rounded-xl font-sans-body font-bold text-xs uppercase tracking-widest hover:bg-[#20ba59] transition-all shadow-xl shadow-[#25D366]/20 flex items-center justify-center gap-2 group"
                        >
                          <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
                          {t('contact.form.whatsapp.btn')}
                        </motion.button>
                        <p className="text-primary text-[8px] text-center mt-4 uppercase tracking-widest font-black opacity-80">
                          {t('contact.form.whatsapp.note')}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.4}>
                  <div className="bg-white/40 backdrop-blur-3xl border border-white/40 rounded-[2.5rem] shadow-[0_32px_64px_rgba(0,0,0,0.15)] relative overflow-hidden group aspect-[16/10] flex flex-col p-8 md:p-10 transition-transform hover:scale-[1.01] duration-500">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-primary/30 transition-colors" />

                    {/* Upper Part: Status & Title */}
                    <div className="relative z-10 flex justify-between items-start mb-auto">
                      <div className="flex flex-col gap-1 text-left">
                        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-black/40">
                          {t('rest.horario')}
                        </span>
                        <h3 className="font-serif text-2xl md:text-3xl text-black outline-none font-bold">
                          Chef Paz <span className="text-primary italic">Atención</span>
                        </h3>
                      </div>
                      <div className="flex flex-col items-end gap-2 text-right">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                          <span className="text-[10px] font-bold uppercase tracking-wider">{t('contact.status.closed')}</span>
                        </div>
                        <span className="text-[9px] text-black/30 font-bold uppercase tracking-widest italic opacity-0 group-hover:opacity-100 transition-opacity">
                          {t('contact.response.tag')}
                        </span>
                      </div>
                    </div>

                    {/* Middle Part: Schedule Grid */}
                    <div className="relative z-10 grid grid-cols-1 gap-4 mb-auto pt-4">
                      <div className="flex justify-between items-end pb-2 border-b border-black/5">
                        <div className="flex flex-col text-left">
                          <span className="text-black/50 text-[9px] uppercase font-bold tracking-widest">{t('rest.mon.sat')}</span>
                          <span className="text-black font-serif text-lg leading-tight font-medium">{t('rest.mon.sat.hours')}</span>
                        </div>
                        <Clock size={16} className="text-black/20 mb-1" />
                      </div>

                      <div className="flex justify-between items-center py-4 px-6 bg-black/5 rounded-2xl border-l-4 border-primary shadow-inner">
                        <div className="flex flex-col text-left">
                          <span className="text-black/60 text-[9px] uppercase font-bold tracking-widest">{t('rest.sun')}</span>
                          <span className="text-black font-serif text-xl font-bold leading-tight">{t('rest.sun.hours')}</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                          <Star size={14} className="text-black fill-black" />
                        </div>
                      </div>
                    </div>

                    {/* Footer Part: Note */}
                    <div className="relative z-10 pt-4 border-t border-black/5 mt-auto flex items-center justify-between">
                      <p className="text-black/60 font-serif italic text-xs md:text-sm text-left font-medium">
                        "{t('contact.welcome.note')}"
                      </p>
                      <div className="flex gap-1 shrink-0">
                        <div className="w-1 h-1 rounded-full bg-primary/40" />
                        <div className="w-1 h-1 rounded-full bg-primary/20" />
                        <div className="w-1 h-1 rounded-full bg-primary/10" />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default Contacto;
