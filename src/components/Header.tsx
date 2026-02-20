import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logochef from '@/assets/logochef.png';
import tiktokIcon from '@/assets/logos/tiktok.svg';
import facebookIcon from '@/assets/logos/facebook.svg';
import instagramIcon from '@/assets/logos/instagram.svg';

const SocialLinks = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-6 ${className}`}>
    <a href="https://www.instagram.com/chefpaziquitos" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110 active:scale-95" aria-label="Instagram">
      <img
        src={instagramIcon}
        alt="Instagram"
        className="w-7 h-7 opacity-90 transition-all duration-300"
        style={{ filter: 'invert(23%) sepia(35%) saturate(1006%) hue-rotate(338deg) brightness(97%) contrast(92%)' }}
      />
    </a>
    <a href="https://www.facebook.com/chefpaziquitos" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110 active:scale-95" aria-label="Facebook">
      <img
        src={facebookIcon}
        alt="Facebook"
        className="w-7 h-7 opacity-90 transition-all duration-300"
        style={{ filter: 'invert(23%) sepia(35%) saturate(1006%) hue-rotate(338deg) brightness(97%) contrast(92%)' }}
      />
    </a>
    <a href="https://www.tiktok.com/@chefpaz.iquitos" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110 active:scale-95" aria-label="TikTok">
      <img
        src={tiktokIcon}
        alt="TikTok"
        className="w-7 h-7 opacity-90 transition-all duration-300"
        style={{ filter: 'invert(23%) sepia(35%) saturate(1006%) hue-rotate(338deg) brightness(97%) contrast(92%)' }}
      />
    </a>
  </div>
);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative z-10 flex items-center">
          <img
            src={logochef}
            alt="Chef Paz Logo"
            className="h-16 md:h-20 w-auto object-contain transition-all duration-500"
            style={{ filter: 'brightness(0)' }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-sans-body text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 px-5 py-2.5 rounded-full ${location.pathname === item.path
                ? 'bg-primary text-white shadow-lg'
                : 'text-black hover:text-primary'
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-8">
          {/* Social Links - Desktop */}
          <SocialLinks className="hidden md:flex" />

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="text-xs font-sans-body font-bold transition-all duration-300 px-4 py-2 rounded-full border-2 border-black text-black hover:bg-black hover:text-white"
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
            <Link
              to="/reserva"
              className="bg-cta text-cta-foreground px-7 py-2.5 rounded-full text-xs font-sans-body font-bold tracking-[0.15em] uppercase hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg whitespace-nowrap"
            >
              {t('nav.reservar')}
            </Link>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative z-10 p-2 transition-colors text-black"
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

              <SocialLinks className="py-2" />

              <button
                onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                className="text-sm font-sans-body font-medium text-black border-2 border-black px-4 py-1.5 rounded-full"
              >
                {lang === 'es' ? 'EN' : 'ES'}
              </button>
              <Link
                to="/reserva"
                className="bg-cta text-cta-foreground px-8 py-3 rounded-full text-sm font-sans-body font-semibold tracking-wide uppercase"
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
