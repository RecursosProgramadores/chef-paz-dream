import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Facebook, Phone, Mail } from 'lucide-react';
import logochef from '@/assets/logochefooter.png';
import fondofooter from '@/assets/fondofooter.png';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[#1A0F0D] overflow-hidden border-t border-white/5">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={fondofooter}
          alt=""
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0D] via-[#1A0F0D]/80 to-[#1A0F0D]/60" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white/90">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6 hover:scale-105 transition-transform">
              <img
                src={logochef}
                alt="Chef Paz"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </Link>
            <p className="font-serif text-accent italic text-lg mb-4">
              {t('footer.slogan')}
            </p>
            <p className="text-white/40 text-sm font-sans-body">
              CHEF PAZ S.A.C.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans-body font-semibold text-sm uppercase tracking-widest mb-6 text-accent">
              Links
            </h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-white/60 hover:text-primary transition-colors font-sans-body text-sm">{t('nav.chef')}</Link>
              <Link to="/experiencia" className="text-white/60 hover:text-primary transition-colors font-sans-body text-sm">{t('nav.experiencia')}</Link>
              <Link to="/restaurante" className="text-white/60 hover:text-primary transition-colors font-sans-body text-sm">{t('nav.restaurante')}</Link>
              <Link to="/contacto" className="text-white/60 hover:text-primary transition-colors font-sans-body text-sm">{t('nav.contacto')}</Link>
              <Link to="/reserva" className="text-primary font-sans-body text-sm font-semibold hover:opacity-80 transition-opacity">{t('nav.reservar')}</Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sans-body font-semibold text-sm uppercase tracking-widest mb-6 text-accent">
              Social
            </h4>
            <div className="flex gap-4 mb-6">
              <a href="https://wa.me/51990512048" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10" aria-label="WhatsApp">
                <Phone size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="mailto:info@chefpaz.pe" className="text-white/60 hover:text-primary transition-colors h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
            <p className="text-white/40 text-xs font-sans-body">
              Jr. Putumayo Nro. 468, Iquitos, Loreto, Perú
            </p>
            <p className="text-white/40 text-xs font-sans-body mt-1">
              +51 990 512 048
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 text-center">
          <p className="text-white/20 text-xs font-sans-body">
            © {new Date().getFullYear()} Chef Paz S.A.C. — {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
