import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { menuData, specialOrders } from '@/data/menuData';
import DishCard from '@/components/DishCard';
import { ChefHat, Sparkles, Clock, Users } from 'lucide-react';

const Menu = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Tous les plats', icon: <ChefHat className="w-4 h-4" /> },
    { id: 'traditional', label: t('menu.traditional'), icon: <ChefHat className="w-4 h-4" /> },
    { id: 'modern', label: t('menu.modern'), icon: <Sparkles className="w-4 h-4" /> },
    { id: 'desserts', label: t('menu.desserts'), icon: <Sparkles className="w-4 h-4" /> },
    { id: 'drinks', label: t('menu.drinks'), icon: <ChefHat className="w-4 h-4" /> },
    { id: 'sides', label: t('menu.sides'), icon: <ChefHat className="w-4 h-4" /> },
  ];

  const filteredDishes = activeCategory === 'all' 
    ? menuData 
    : menuData.filter(dish => dish.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/5">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-light text-heading text-foreground mb-4">
            {t('menu.title')}
          </h1>
          <p className="text-xl text-muted-foreground text-elegant max-w-2xl mx-auto">
            Découvrez notre sélection de plats alliant tradition française et créativité moderne
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category.id)}
              className={`${
                activeCategory === category.id 
                  ? 'gradient-primary shadow-glow' 
                  : 'border-border/50 hover:border-primary/50'
              } transition-spring`}
            >
              {category.icon}
              <span className="ml-2">{category.label}</span>
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredDishes.map((dish) => (
            <div key={dish.id} className="animate-fade-in-up">
              <DishCard dish={dish} />
            </div>
          ))}
        </div>

        {/* Special Orders Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl shadow-elegant mb-16">
          <div className="container mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-light text-heading text-foreground mb-4">
                {t('menu.special')}
              </h2>
              <p className="text-lg text-muted-foreground text-elegant max-w-2xl mx-auto">
                {t('menu.special.desc')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialOrders.map((order) => (
                <Card key={order.id} className="shadow-card hover:shadow-elegant transition-spring gradient-card border-border/50">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                          <Sparkles className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-heading text-foreground mb-2">
                          {order.name.fr}
                        </h3>
                        <p className="text-muted-foreground text-elegant text-sm">
                          {order.description.fr}
                        </p>
                      </div>

                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            Durée:
                          </span>
                          <span>{order.duration}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            Convives:
                          </span>
                          <span>{order.minGuests}-{order.maxGuests}</span>
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-4">
                          À partir de {order.price}€
                        </div>
                        <Button className="w-full gradient-primary hover:shadow-glow transition-spring">
                          Réserver cette expérience
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Footer */}
        <div className="text-center bg-card rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-semibold text-heading text-foreground mb-4">
            Besoin d'aide pour choisir ?
          </h3>
          <p className="text-muted-foreground text-elegant mb-6">
            Nos sommeliers et chefs sont à votre disposition pour vous conseiller
          </p>
          <Button size="lg" className="gradient-primary hover:shadow-glow transition-spring">
            Contacter notre équipe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Menu;