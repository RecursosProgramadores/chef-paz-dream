import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';
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
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Hours */}
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <Clock className="text-primary" size={28} />
                <h2 className="font-serif text-3xl font-bold text-foreground">
                  {t('rest.horario')}
                </h2>
              </div>
              <div className="space-y-4 font-sans-body">
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-foreground font-medium">{t('rest.lun.vie')}</span>
                  <span className="text-muted-foreground">12:00 – 15:00 / 19:00 – 23:00</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-foreground font-medium">{t('rest.sabado')}</span>
                  <span className="text-muted-foreground">12:00 – 23:00</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-foreground font-medium">{t('rest.domingo')}</span>
                  <span className="text-muted-foreground">{t('rest.cerrado')}</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact */}
            <AnimatedSection delay={0.2}>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                {t('contact.title')}
              </h2>
              <div className="space-y-5">
                <a href="https://wa.me/51990512048" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors font-sans-body">
                  <Phone size={22} className="text-primary flex-shrink-0" />
                  <span>+51 990 512 048</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors font-sans-body">
                  <Instagram size={22} className="text-primary flex-shrink-0" />
                  <span>@chefpaz.iquitos</span>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors font-sans-body">
                  <Facebook size={22} className="text-primary flex-shrink-0" />
                  <span>Chef Paz</span>
                </a>
                <a href="mailto:info@chefpaz.pe" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors font-sans-body">
                  <Mail size={22} className="text-primary flex-shrink-0" />
                  <span>info@chefpaz.pe</span>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Restaurante;
