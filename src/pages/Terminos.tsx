import { useLanguage } from '@/contexts/LanguageContext';
import PageTransition from '@/components/PageTransition';
import AnimatedSection from '@/components/AnimatedSection';

const Terminos = () => {
    const { t } = useLanguage();

    return (
        <PageTransition>
            <main className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
                <AnimatedSection>
                    <h1 className="font-serif text-4xl md:text-6xl font-bold text-black mb-4">
                        {t('legal.terms.title')}
                    </h1>
                    <p className="text-black/40 text-sm mb-12 uppercase tracking-widest font-bold">
                        {t('legal.last_update')}
                    </p>

                    <div className="space-y-12">
                        <p className="font-sans-body text-black/80 text-lg leading-relaxed">
                            {t('legal.terms.intro')}
                        </p>

                        <section className="space-y-4">
                            <h2 className="font-serif text-2xl font-bold text-black">
                                {t('legal.terms.reservations.title')}
                            </h2>
                            <p className="font-sans-body text-black/70 leading-relaxed">
                                {t('legal.terms.reservations.text')}
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="font-serif text-2xl font-bold text-black">
                                {t('legal.terms.cancellation.title')}
                            </h2>
                            <p className="font-sans-body text-black/70 leading-relaxed">
                                {t('legal.terms.cancellation.text')}
                            </p>
                        </section>
                    </div>
                </AnimatedSection>
            </main>
        </PageTransition>
    );
};

export default Terminos;
