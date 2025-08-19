import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Users, Heart, Star, ChefHat, Clock } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: 'Excellence Culinaire',
      description: 'Chaque plat est une œuvre d\'art, créée avec passion et précision par nos chefs expérimentés.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion & Tradition',
      description: 'Nous honorons les techniques ancestrales françaises tout en embrassant l\'innovation moderne.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Service d\'Exception',
      description: 'Notre équipe dévouée s\'engage à offrir une expérience mémorable à chaque client.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Reconnaissance',
      description: 'Récompensés par 2 étoiles Michelin et de nombreux prix gastronomiques.'
    }
  ];

  const team = [
    {
      name: 'Chef Antoine Dubois',
      role: 'Chef Exécutif',
      description: 'Formé dans les plus grandes maisons parisiennes, Antoine apporte 20 ans d\'expérience et sa vision tradi-moderne.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Marie Lecomte',
      role: 'Chef Pâtissière',
      description: 'Spécialiste des desserts français revisités, Marie sublime la tradition avec une touche contemporaine.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Jean-Pierre Martin',
      role: 'Sommelier',
      description: 'Expert en vins français et internationaux, Jean-Pierre guide nos clients vers les accords parfaits.',
      image: '/api/placeholder/300/300'
    }
  ];

  const timeline = [
    {
      year: '2008',
      title: 'Ouverture',
      description: 'Création de Saveur Moderne dans le cœur historique de Paris'
    },
    {
      year: '2012',
      title: 'Première Étoile',
      description: 'Reconnaissance Michelin pour notre approche culinaire innovante'
    },
    {
      year: '2018',
      title: 'Seconde Étoile',
      description: 'Consécration de notre excellence gastronomique'
    },
    {
      year: '2024',
      title: 'Évolution Continue',
      description: 'Nouvelle carte et expériences culinaires exclusives'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/5">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-light text-heading text-foreground mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-muted-foreground text-elegant max-w-3xl mx-auto mb-8">
            {t('about.description')}
          </p>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elegant gradient-card border-border/50 overflow-hidden">
              <CardContent className="p-12">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-light text-heading text-foreground mb-6">
                    {t('about.subtitle')}
                  </h2>
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="prose prose-lg mx-auto text-center text-muted-foreground text-elegant">
                  <p className="text-lg mb-6">
                    Chez Saveur Moderne, nous croyons que la gastronomie est un art qui se transmet et se réinvente. 
                    Notre philosophie repose sur le respect des traditions culinaires françaises, enrichies par 
                    l'audace de la créativité contemporaine.
                  </p>
                  <p className="text-lg mb-6">
                    Chaque plat raconte une histoire, celle d'un terroir, d'une technique, d'une émotion. 
                    Nos chefs puisent dans l'héritage gastronomique français tout en osant l'innovation, 
                    créant ainsi une cuisine unique qui surprend et enchante.
                  </p>
                  <p className="text-lg">
                    Dans un cadre élégant mêlant charme parisien et design contemporain, nous vous invitons 
                    à vivre une expérience sensorielle complète, où chaque détail compte pour créer 
                    des souvenirs inoubliables.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-heading text-foreground mb-4">
              Nos Valeurs
            </h2>
            <p className="text-lg text-muted-foreground text-elegant max-w-2xl mx-auto">
              Ce qui guide notre passion quotidienne pour l'excellence gastronomique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-spring gradient-card border-border/50">
                <CardContent className="p-8">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-glow">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-heading text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-elegant text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-heading text-foreground mb-4">
              Notre Parcours
            </h2>
            <p className="text-lg text-muted-foreground text-elegant max-w-2xl mx-auto">
              Les étapes marquantes de notre aventure gastronomique
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center text-white font-bold shadow-glow">
                      {item.year}
                    </div>
                  </div>
                  <Card className="flex-1 shadow-card hover:shadow-elegant transition-spring gradient-card border-border/50">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-heading text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-elegant">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-heading mb-4">
              Notre Équipe
            </h2>
            <p className="text-lg opacity-90 text-elegant max-w-2xl mx-auto">
              Les artisans passionnés qui donnent vie à notre vision culinaire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center shadow-elegant">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <ChefHat className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold text-heading mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm opacity-90 text-elegant">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-heading text-foreground mb-4">
              Nos Distinctions
            </h2>
            <p className="text-lg text-muted-foreground text-elegant">
              La reconnaissance de notre excellence culinaire
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elegant gradient-blue border-border/50">
              <CardContent className="p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">⭐⭐</h3>
                    <p className="text-muted-foreground font-medium">Étoiles Michelin</p>
                  </div>
                  <div>
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">95/100</h3>
                    <p className="text-muted-foreground font-medium">Le Figaro</p>
                  </div>
                  <div>
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">15+</h3>
                    <p className="text-muted-foreground font-medium">Années d'Excellence</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;