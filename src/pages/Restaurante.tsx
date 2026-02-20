import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';
import PageTransition from '@/components/PageTransition';
import { Clock, Phone, Instagram, Facebook, Mail, ExternalLink } from 'lucide-react';
import restaurantInterior from '@/assets/restaurant-interior.jpg';
import dishesGrid1 from '@/assets/dishes-grid-1.jpg';
import heroDish from '@/assets/hero-dish.jpg';
import cocktail from '@/assets/cocktail.jpg';
import dishesGrid2 from '@/assets/dishes-grid-2.jpg';

const menuDishes = [
  { img: heroDish, name: { es: 'Paiche a la Brasa', en: 'Grilled Paiche' } },
  { img: dishesGrid1, name: { es: 'Juanes Amazónicos', en: 'Amazonian Juanes' } },
  { img: cocktail, name: { es: 'Coctelería Exótica', en: 'Exotic Cocktails' } },
  { img: dishesGrid2, name: { es: 'Ceviche de la Selva', en: 'Jungle Ceviche' } },
];

const Restaurante = () => {
  const { lang, t } = useLanguage();

  return (
    <PageTransition>
      <main className="pt-24">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <img src={restaurantInterior} alt="Interior del restaurante" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/50" />
          <div className="relative z-10 text-center px-6">
            <AnimatedSection>
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-background mb-4">
                {t('rest.title')}
              </h1>
            </AnimatedSection>
          </div>
        </section>

        {/* Menu Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
                {t('rest.carta')}
              </h2>
              <p className="font-sans-body text-muted-foreground text-center text-lg mb-16 max-w-xl mx-auto">
                {t('rest.carta.desc')}
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {menuDishes.map((dish, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="group overflow-hidden rounded-lg">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={dish.img}
                        alt={dish.name[lang]}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 bg-card">
                      <h3 className="font-serif text-lg font-semibold text-card-foreground">
                        {dish.name[lang]}
                      </h3>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="text-center">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cta text-cta-foreground px-8 py-3 rounded-md font-sans-body font-semibold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                {t('rest.ver.carta')}
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Hours & Contact */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {/* Hours */}
              <AnimatedSection>
                <div className="bg-card/50 border border-border/50 p-10 rounded-3xl shadow-lg relative overflow-hidden h-full">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Clock size={24} />
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-foreground">
                      {t('rest.horario')}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center py-4 border-b border-border/50 gap-2">
                      <span className="text-foreground font-bold tracking-wide uppercase text-xs opacity-60">{t('rest.mon.sat')}</span>
                      <span className="text-primary font-serif text-2xl font-medium">{t('rest.mon.sat.hours')}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between sm:items-center py-6 px-6 bg-primary/5 rounded-2xl border-l-4 border-primary shadow-sm gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-primary font-bold tracking-wide uppercase text-xs">{t('rest.sun')}</span>
                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-full">
                          {lang === 'es' ? 'Especial' : 'Special'}
                        </span>
                      </div>
                      <span className="text-primary font-serif text-2xl font-bold">{t('rest.sun.hours')}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Contact */}
              <AnimatedSection delay={0.2}>
                <div className="bg-primary text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden h-full">
                  {/* Decorative background circle */}
                  <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

                  <h2 className="font-serif text-3xl font-bold mb-10 relative z-10">
                    {t('contact.title')}
                  </h2>

                  <div className="space-y-8 relative z-10">
                    <a href="https://wa.me/51990512048" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                      <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all shadow-inner">
                        <Phone size={24} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">
                          {lang === 'es' ? 'WhatsApp / Teléfono' : 'WhatsApp / Phone'}
                        </span>
                        <span className="text-xl font-bold tracking-tight">{t('rest.contact.phone')}</span>
                      </div>
                    </a>

                    <a href="https://instagram.com/chefpaziquitos" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                      <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all shadow-inner">
                        <Instagram size={24} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Instagram</span>
                        <span className="text-xl font-bold tracking-tight">{t('rest.contact.insta')}</span>
                      </div>
                    </a>

                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                      <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all shadow-inner">
                        <Facebook size={24} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Facebook</span>
                        <span className="text-xl font-bold tracking-tight">{t('rest.contact.fb')}</span>
                      </div>
                    </a>

                    <a href="mailto:info@chefpaz.pe" className="flex items-center gap-6 group">
                      <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all shadow-inner">
                        <Mail size={24} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Email</span>
                        <span className="text-xl font-bold tracking-tight">{t('rest.contact.email')}</span>
                      </div>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Restaurante;
