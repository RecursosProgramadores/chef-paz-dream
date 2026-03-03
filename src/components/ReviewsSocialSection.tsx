import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star, MessageSquare } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import logoTripadvisor from '@/assets/logos/logotrivapdivisor.png';
import logoGoogle from '@/assets/logos/logogoogle.png';

const ReviewsSocialSection: React.FC = () => {
    const { t } = useLanguage();

    const reviews = [
        {
            name: 'Tripadvisor',
            rating: '4.0 / 5',
            count: '900+',
            link: 'https://www.tripadvisor.com.pe/Restaurant_Review-g294315-d7216625-Reviews-Chef_Paz_Restaurant-Iquitos_Loreto_Region.html',
            color: '#00AF87',
            logo: logoTripadvisor
        },
        {
            name: 'Google',
            rating: '4.3 / 5',
            count: '1800+',
            link: 'https://maps.app.goo.gl/4Zao52WsgnqWM9y39',
            color: '#4285F4',
            logo: logoGoogle
        }
    ];

    return (
        <section className="bg-[#F1F5F9] py-12 border-y border-slate-200">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
                        {/* Title Block */}
                        <div className="text-center md:text-right md:border-r md:border-slate-300 md:pr-20">
                            <h3 className="font-serif text-3xl md:text-4xl text-slate-700 mb-2">
                                {t('testimonials.reviews.title')}
                            </h3>
                            <div className="flex justify-center md:justify-end gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} className={`fill-emerald-800 text-emerald-800 ${i === 4 ? 'opacity-50' : ''}`} />
                                ))}
                            </div>
                        </div>

                        {/* Platform Blocks */}
                        <div className="flex flex-col sm:flex-row gap-12 md:gap-24">
                            {reviews.map((rev) => (
                                <a
                                    key={rev.name}
                                    href={rev.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-5 group hover:opacity-80 transition-opacity"
                                >
                                    <div className="w-14 h-14 flex items-center justify-center">
                                        <img src={rev.logo} alt={rev.name} className="w-full h-full object-contain" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-sans-body text-xs font-bold text-slate-500 uppercase tracking-wider">
                                            {rev.name}
                                        </span>
                                        <div className="flex items-center gap-2 mt-1">
                                            <Star size={14} className="text-slate-700" />
                                            <span className="font-serif text-lg font-bold text-slate-800">{rev.rating}</span>
                                        </div>
                                        <div className="flex items-center gap-2 mt-1">
                                            <MessageSquare size={14} className="text-slate-400" />
                                            <span className="font-sans-body text-xs text-slate-500 font-bold">{rev.count}</span>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default ReviewsSocialSection;
