import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Dish } from '@/data/menuData';
import StarRating from './StarRating';
import { Heart, ShoppingCart, MessageSquare } from 'lucide-react';

interface DishCardProps {
  dish: Dish;
}

const DishCard = ({ dish }: DishCardProps) => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState('');
  const [isLiked, setIsLiked] = useState(false);

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available':
        return 'bg-success text-success-foreground';
      case 'limited':
        return 'bg-warning text-warning-foreground';
      case 'unavailable':
        return 'bg-destructive text-destructive-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const handleOrder = () => {
    if (dish.availability === 'unavailable') {
      toast({
        title: 'Indisponible',
        description: 'Ce plat n\'est actuellement pas disponible.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Ajouté au panier !',
      description: `${dish.name[language]} a été ajouté à votre commande.`,
    });
  };

  const handleRatingSubmit = () => {
    if (userRating === 0) {
      toast({
        title: 'Note requise',
        description: 'Veuillez donner une note avant de soumettre.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Merci pour votre avis !',
      description: 'Votre évaluation a été enregistrée.',
    });

    setIsRatingModalOpen(false);
    setUserRating(0);
    setUserComment('');
  };

  return (
    <Card className="group overflow-hidden shadow-card hover:shadow-elegant transition-spring bg-gradient-card border-border/50">
      <div className="relative">
        <img
          src={dish.image}
          alt={dish.name[language]}
          className="w-full h-48 object-cover group-hover:scale-105 transition-spring"
        />
        <div className="absolute top-4 right-4 flex space-x-2">
          <Badge className={getAvailabilityColor(dish.availability)}>
            {t(`menu.${dish.availability}`)}
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 left-4 bg-background/80 hover:bg-background"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
        </Button>
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Header */}
          <div>
            <h3 className="text-lg font-semibold text-foreground text-heading">
              {dish.name[language]}
            </h3>
            <p className="text-muted-foreground text-elegant text-sm mt-1">
              {dish.description[language]}
            </p>
          </div>

          {/* Rating and Reviews */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <StarRating rating={dish.rating} size="sm" />
              <span className="text-sm text-muted-foreground">
                {dish.rating} ({dish.reviews} avis)
              </span>
            </div>
            <div className="text-xl font-bold text-primary">
              {dish.price}€
            </div>
          </div>

          {/* Allergens */}
          {dish.allergens && dish.allergens.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {dish.allergens.map((allergen) => (
                <Badge key={allergen} variant="outline" className="text-xs">
                  {allergen}
                </Badge>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex space-x-2">
            <Button
              onClick={handleOrder}
              disabled={dish.availability === 'unavailable'}
              className="flex-1 gradient-primary hover:shadow-glow transition-spring"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              {t('menu.order')}
            </Button>

            <Dialog open={isRatingModalOpen} onOpenChange={setIsRatingModalOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <MessageSquare className="w-4 h-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>{t('menu.rate')}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">{dish.name[language]}</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">{t('common.rating')}:</span>
                      <StarRating
                        rating={userRating}
                        interactive
                        onRatingChange={setUserRating}
                        size="lg"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Commentaire (optionnel)
                    </label>
                    <Textarea
                      value={userComment}
                      onChange={(e) => setUserComment(e.target.value)}
                      placeholder="Partagez votre expérience..."
                      className="resize-none"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => setIsRatingModalOpen(false)}
                      className="flex-1"
                    >
                      {t('common.cancel')}
                    </Button>
                    <Button
                      onClick={handleRatingSubmit}
                      className="flex-1 gradient-primary"
                    >
                      {t('reviews.submit')}
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DishCard;