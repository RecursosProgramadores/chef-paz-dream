import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const navItems = [
    { label: t('nav.chef'), path: '/' },
    { label: t('nav.experiencia'), path: '/experiencia' },
    { label: t('nav.restaurante'), path: '/restaurante' },
    { label: t('nav.contacto'), path: '/contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative z-10">
          <h1 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-primary">
            Chef Paz
          </h1>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-sans-body text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-primary ${
                location.pathname === item.path ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="text-sm font-sans-body font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded border border-border"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <Link
            to="/reserva"
            className="bg-cta text-cta-foreground px-6 py-2.5 rounded-md text-sm font-sans-body font-semibold tracking-wide uppercase hover:opacity-90 transition-opacity"
          >
            {t('nav.reservar')}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative z-10 text-foreground"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg shadow-xl md:hidden"
          >
            <nav className="flex flex-col items-center gap-6 py-8">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-sans-body text-lg font-medium tracking-wide uppercase ${
                    location.pathname === item.path ? 'text-primary' : 'text-foreground/80'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                className="text-sm font-sans-body font-medium text-muted-foreground border border-border px-3 py-1 rounded"
              >
                {lang === 'es' ? 'EN' : 'ES'}
              </button>
              <Link
                to="/reserva"
                className="bg-cta text-cta-foreground px-8 py-3 rounded-md text-sm font-sans-body font-semibold tracking-wide uppercase"
              >
                {t('nav.reservar')}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
