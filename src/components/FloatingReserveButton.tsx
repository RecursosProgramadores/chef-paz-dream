import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { CalendarDays } from 'lucide-react';

const FloatingReserveButton = () => {
  const { t } = useLanguage();

  return (
    <Link
      to="/reserva"
      className="fixed bottom-6 right-6 z-40 md:hidden bg-cta text-cta-foreground rounded-full p-4 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
      aria-label={t('nav.reservar')}
    >
      <CalendarDays size={24} />
    </Link>
  );
};

export default FloatingReserveButton;
