import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logochef from '@/assets/logochef.png';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white shadow-sm ${scrolled ? 'py-3' : 'py-4'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative z-10 flex items-center">
          <img
            src={logochef}
            alt="Chef Paz Logo"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-sans-body text-xs font-semibold tracking-widest uppercase transition-all duration-300 px-5 py-2.5 rounded-full ${location.pathname === item.path
                  ? 'bg-primary text-white shadow-md'
                  : 'text-foreground/70 hover:bg-primary/10 hover:text-primary'
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="text-xs font-sans-body font-bold text-muted-foreground hover:text-primary transition-colors px-3 py-1.5 rounded-full border border-border bg-white"
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
          className="md:hidden relative z-10 p-2 text-foreground transition-colors hover:text-primary"
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
                  className={`font-sans-body text-lg font-medium tracking-wide uppercase ${location.pathname === item.path ? 'text-primary' : 'text-foreground/80'
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
