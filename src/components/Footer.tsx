import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Facebook, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl font-bold text-primary mb-3">Chef Paz</h3>
            <p className="font-serif text-accent italic text-lg mb-4">
              {t('footer.slogan')}
            </p>
            <p className="text-secondary-foreground/60 text-sm font-sans-body">
              CHEF PAZ S.A.C.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans-body font-semibold text-sm uppercase tracking-widest mb-6 text-accent">
              Links
            </h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-secondary-foreground/70 hover:text-primary transition-colors font-sans-body text-sm">{t('nav.chef')}</Link>
              <Link to="/experiencia" className="text-secondary-foreground/70 hover:text-primary transition-colors font-sans-body text-sm">{t('nav.experiencia')}</Link>
              <Link to="/restaurante" className="text-secondary-foreground/70 hover:text-primary transition-colors font-sans-body text-sm">{t('nav.restaurante')}</Link>
              <Link to="/contacto" className="text-secondary-foreground/70 hover:text-primary transition-colors font-sans-body text-sm">{t('nav.contacto')}</Link>
              <Link to="/reserva" className="text-primary font-sans-body text-sm font-semibold">{t('nav.reservar')}</Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sans-body font-semibold text-sm uppercase tracking-widest mb-6 text-accent">
              Social
            </h4>
            <div className="flex gap-4 mb-6">
              <a href="https://wa.me/51990512048" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/70 hover:text-primary transition-colors" aria-label="WhatsApp">
                <Phone size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/70 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/70 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="mailto:info@chefpaz.pe" className="text-secondary-foreground/70 hover:text-primary transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-secondary-foreground/50 text-xs font-sans-body">
              Jr. Putumayo Nro. 468, Iquitos, Loreto, Perú
            </p>
            <p className="text-secondary-foreground/50 text-xs font-sans-body mt-1">
              +51 990 512 048
            </p>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-secondary-foreground/40 text-xs font-sans-body">
            © {new Date().getFullYear()} Chef Paz S.A.C. — {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
