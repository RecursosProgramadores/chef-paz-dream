import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';
import { Phone, Instagram, Facebook, Mail, MapPin, Send } from 'lucide-react';

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
    <main className="pt-24">
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground text-center mb-16">
              {t('contact.title')}
            </h1>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Info + Map */}
            <AnimatedSection>
              <div className="mb-10">
                <div className="flex items-start gap-3 mb-6">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="font-sans-body font-semibold text-foreground mb-1">{t('contact.address')}</h3>
                    <p className="font-sans-body text-muted-foreground text-sm">
                      Jr. Putumayo Nro. 468 (entre Tacna y Huallaga)<br />
                      Iquitos, Loreto, Perú
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <a href="https://wa.me/51990512048" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors font-sans-body text-sm">
                    <Phone size={18} className="text-primary" />
                    +51 990 512 048
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors font-sans-body text-sm">
                    <Instagram size={18} className="text-primary" />
                    @chefpaz.iquitos
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors font-sans-body text-sm">
                    <Facebook size={18} className="text-primary" />
                    Chef Paz
                  </a>
                  <a href="mailto:info@chefpaz.pe" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors font-sans-body text-sm">
                    <Mail size={18} className="text-primary" />
                    info@chefpaz.pe
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-lg aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.3!2d-73.2516!3d-3.7491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNDQnNTYuOCJTIDczwrAxNScwNS44Ilc!5e0!3m2!1ses!2spe!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chef Paz Location"
                />
              </div>
            </AnimatedSection>

            {/* Right - Form */}
            <AnimatedSection delay={0.2}>
              <div className="bg-card rounded-lg p-8 md:p-12 shadow-lg">
                <div className="space-y-6">
                  <div>
                    <label className="font-sans-body text-sm font-medium text-foreground block mb-2">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-background border border-border rounded-md px-4 py-3 font-sans-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="font-sans-body text-sm font-medium text-foreground block mb-2">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-background border border-border rounded-md px-4 py-3 font-sans-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="font-sans-body text-sm font-medium text-foreground block mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-background border border-border rounded-md px-4 py-3 font-sans-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleWhatsApp}
                      className="flex-1 bg-cta text-cta-foreground px-6 py-3 rounded-md font-sans-body font-semibold text-sm uppercase tracking-wide hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                      <Send size={16} />
                      {t('contact.form.whatsapp')}
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contacto;
