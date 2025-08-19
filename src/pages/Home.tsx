import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChefHat, Clock, Star, Users, Calendar, Utensils } from 'lucide-react';
import StarRating from '@/components/StarRating';
import heroImage from '@/assets/restaurant-hero.jpg';

const Home = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: 'Cuisine d\'Excellence',
      description: 'Nos chefs allient tradition française et innovation moderne'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Service Impeccable',
      description: 'Une expérience culinaire mémorable dans une atmosphère raffinée'
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'Ingrédients Premium',
      description: 'Sélection rigoureuse des meilleurs produits locaux et de saison'
    }
  ];

  const reviews = [
    {
      name: 'Marie Dubois',
      rating: 5,
      comment: 'Une expérience gastronomique exceptionnelle ! Le mélange tradition-modernité est parfait.',
      date: 'Il y a 2 jours'
    },
    {
      name: 'Jean-Pierre Martin',
      rating: 5,
      comment: 'Service irréprochable et cuisine d\'une finesse remarquable. Je recommande vivement !',
      date: 'Il y a 1 semaine'
    },
    {
      name: 'Sophie Laurent',
      rating: 4,
      comment: 'Cadre magnifique et plats délicieux. Une belle découverte dans Paris.',
      date: 'Il y a 2 semaines'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-heading animate-fade-in-up">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-elegant mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>
          <p className="text-lg text-elegant mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" className="gradient-primary hover:shadow-glow transition-spring text-lg px-8">
              <Link to="/menu">{t('hero.cta')}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8">
              <Link to="/reservations">{t('hero.reserve')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-heading text-foreground mb-4">
              L'Art de la Gastronomie
            </h2>
            <p className="text-lg text-muted-foreground text-elegant max-w-2xl mx-auto">
              Découvrez notre approche unique qui marie l'excellence de la tradition française 
              avec l'audace de la cuisine moderne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-spring gradient-card border-border/50">
                <CardContent className="p-8">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-glow">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-heading text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-elegant">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 gradient-warm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground text-elegant">Années d'Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2</div>
              <div className="text-muted-foreground text-elegant">Étoiles Michelin</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-muted-foreground text-elegant">Clients Satisfaits</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.9</div>
              <div className="text-muted-foreground text-elegant">Note Moyenne</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-heading text-foreground mb-4">
              {t('reviews.title')}
            </h2>
            <p className="text-lg text-muted-foreground text-elegant">
              Découvrez ce que nos clients pensent de leur expérience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-spring gradient-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                    <StarRating rating={review.rating} size="sm" />
                  </div>
                  <p className="text-muted-foreground text-elegant">
                    "{review.comment}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-primary/20 hover:border-primary">
              <Link to="/contact">{t('reviews.add')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-light text-heading mb-4">
            Réservez Votre Table Dès Maintenant
          </h2>
          <p className="text-lg text-elegant mb-8 max-w-2xl mx-auto opacity-90">
            Vivez une expérience gastronomique inoubliable dans notre restaurant tradi-moderne
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/reservations">
                <Calendar className="w-5 h-5 mr-2" />
                Réserver une Table
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8">
              <Link to="/menu">
                <Utensils className="w-5 h-5 mr-2" />
                Voir le Menu
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;