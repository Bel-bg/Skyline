import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">SM</span>
              </div>
              <span className="text-xl font-bold text-heading text-foreground">
                {t('hero.title')}
              </span>
            </div>
            <p className="text-muted-foreground text-elegant">
              {t('hero.subtitle')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-smooth">
                {t('nav.home')}
              </Link>
              <Link to="/menu" className="block text-muted-foreground hover:text-primary transition-smooth">
                {t('nav.menu')}
              </Link>
              <Link to="/reservations" className="block text-muted-foreground hover:text-primary transition-smooth">
                {t('nav.reservations')}
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-smooth">
                {t('nav.about')}
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-smooth">
                {t('nav.contact')}
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('contact.title')}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-muted-foreground text-sm">
                    123 Rue de la Gastronomie<br />
                    75001 Paris, France
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <p className="text-muted-foreground text-sm">+33 1 42 97 48 85</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <p className="text-muted-foreground text-sm">contact@saveurmoderne.fr</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t('contact.hours')}</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div className="text-muted-foreground text-sm">
                  <p><strong>Lun - Ven:</strong> 12:00 - 14:30, 19:00 - 22:30</p>
                  <p><strong>Sam - Dim:</strong> 19:00 - 23:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2024 Saveur Moderne. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;