import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedSection from '@/components/AnimatedSection';
import dishesGrid1 from '@/assets/dishes-grid-1.jpg';
import restaurantInterior from '@/assets/restaurant-interior.jpg';
import cocktail from '@/assets/cocktail.jpg';
import dishesGrid2 from '@/assets/dishes-grid-2.jpg';

const galleryItems = [
  { img: dishesGrid1, titleKey: 'exp.food', descKey: 'exp.food.desc' },
  { img: restaurantInterior, titleKey: 'exp.ambiance', descKey: 'exp.ambiance.desc' },
  { img: cocktail, titleKey: 'exp.drinks', descKey: 'exp.drinks.desc' },
  { img: dishesGrid2, titleKey: 'exp.ceviche', descKey: 'exp.ceviche.desc' },
];

const Experiencia = () => {
  const { t } = useLanguage();

  return (
    <main className="pt-24">
      {/* Header */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
              {t('exp.title')}
            </h1>
            <p className="font-sans-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {t('exp.subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryItems.map((item, i) => (
              <AnimatedSection key={item.titleKey} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer">
                  <img
                    src={item.img}
                    alt={t(item.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-500 flex items-end">
                    <div className="p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="font-serif text-2xl font-bold text-background mb-2">
                        {t(item.titleKey)}
                      </h3>
                      <p className="font-sans-body text-background/80 text-sm">
                        {t(item.descKey)}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experiencia;
