import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Facebook, Phone, Mail } from 'lucide-react';
import logochef from '@/assets/logochefooter.png';
import fondofooter from '@/assets/fondofooter.png';
import libroReclamaciones from '@/assets/logos/libroreclamaciones.jpeg';
import logoFly from '@/assets/logos/logo.svg';

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white/90 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="inline-block mb-8 hover:scale-105 transition-transform">
              <img
                src={logochef}
                alt="Chef Paz"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </Link>

            <p className="font-serif text-accent italic text-lg mb-2 text-center md:text-left">
              {t('footer.slogan')}
            </p>
            <p className="text-white/40 text-xs font-sans-body font-bold tracking-widest uppercase mb-8">
              CHEF PAZ S.A.C.
            </p>

            <a
              href="https://forms.gle/YaXB1nhvNkimJGUT7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src={libroReclamaciones}
                alt="Libro de Reclamaciones"
                className="h-16 w-auto rounded-md shadow-lg"
              />
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans-body font-semibold text-sm uppercase tracking-widest mb-6 text-accent">
              {t('common.links')}
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
              {t('common.social')}
            </h4>
            <div className="flex gap-4 mb-6">
              <a href="https://wa.me/51990512048" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10" aria-label="WhatsApp">
                <Phone size={18} />
              </a>
              <a href="https://www.instagram.com/chefpaziquitos" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/chefpaziquitos" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://www.tiktok.com/@chefpaz.iquitos" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors h-10 w-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10" aria-label="TikTok">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.89-.23-2.74.24-.73.42-1.22 1.07-1.49 1.88-.27.82-.25 1.76.2 2.52.41.69 1.11 1.15 1.91 1.25.79.09 1.58-.08 2.22-.56.51-.38.83-.93.94-1.55.08-.43.07-.87.07-1.3V.02z" />
                </svg>
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
            <div className="mt-4 flex flex-col gap-2">
              <Link to="/terminos" className="text-white/20 hover:text-primary transition-colors text-[10px] font-sans-body uppercase tracking-widest font-bold">
                {t('footer.terms')}
              </Link>
              <Link to="/privacidad" className="text-white/20 hover:text-primary transition-colors text-[10px] font-sans-body uppercase tracking-widest font-bold">
                {t('footer.privacy')}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col items-center gap-4">
          <p className="text-white/20 text-xs font-sans-body">
            © {new Date().getFullYear()} Chef Paz S.A.C. — {t('footer.rights')}
          </p>
          <div className="flex items-center gap-3">
            <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">
              {t('footer.developed')}
            </span>
            <a
              href="https://fly-software.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform"
            >
              <img
                src={logoFly}
                alt="Fly Software"
                className="h-7 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
