import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { menuData } from '@/data/menuData';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Calendar as CalendarIcon, Clock, Users, MapPin, Utensils } from 'lucide-react';
import { cn } from '@/lib/utils';

const Reservations = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    time: '',
    table: '',
    mainDish: '',
    additionalDishes: [],
    specialRequests: ''
  });

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  const tablePreferences = [
    { value: 'window', label: 'Table près de la fenêtre' },
    { value: 'intimate', label: 'Table intime' },
    { value: 'central', label: 'Table centrale' },
    { value: 'terrace', label: 'Terrasse (si disponible)' },
    { value: 'no-preference', label: 'Sans préférence' }
  ];

  const mainDishes = menuData.filter(dish => 
    dish.category === 'traditional' || dish.category === 'modern'
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !formData.time || !formData.name || !formData.email) {
      toast({
        title: 'Informations manquantes',
        description: 'Veuillez remplir tous les champs obligatoires.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: t('reservation.success'),
      description: `Votre réservation pour le ${format(date, 'dd MMMM yyyy', { locale: fr })} à ${formData.time} est confirmée.`,
    });

    // Reset form
    setDate(undefined);
    setFormData({
      name: '',
      email: '',
      phone: '',
      guests: '2',
      time: '',
      table: '',
      mainDish: '',
      additionalDishes: [],
      specialRequests: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/5 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-light text-heading text-foreground mb-4">
            {t('reservation.title')}
          </h1>
          <p className="text-xl text-muted-foreground text-elegant max-w-2xl mx-auto">
            Réservez votre table pour une expérience gastronomique inoubliable
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant gradient-card border-border/50">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-light text-heading text-foreground">
                Formulaire de Réservation
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Nom complet *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Votre nom complet"
                      className="border-border/50 focus:border-primary transition-smooth"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="votre@email.com"
                      className="border-border/50 focus:border-primary transition-smooth"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-medium">
                      Téléphone
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+33 1 XX XX XX XX"
                      className="border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-foreground font-medium">
                      <Users className="w-4 h-4 inline mr-2" />
                      {t('reservation.guests')} *
                    </Label>
                    <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                      <SelectTrigger className="border-border/50 focus:border-primary">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1,2,3,4,5,6,7,8,9,10].map(num => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? 'personne' : 'personnes'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-foreground font-medium">
                      <CalendarIcon className="w-4 h-4 inline mr-2" />
                      {t('reservation.date')} *
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal border-border/50 focus:border-primary",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "dd MMMM yyyy", { locale: fr }) : "Sélectionner une date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-foreground font-medium">
                      <Clock className="w-4 h-4 inline mr-2" />
                      {t('reservation.time')} *
                    </Label>
                    <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                      <SelectTrigger className="border-border/50 focus:border-primary">
                        <SelectValue placeholder="Choisir l'heure" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map(time => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Table Preference */}
                <div className="space-y-2">
                  <Label className="text-foreground font-medium">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    {t('reservation.table')}
                  </Label>
                  <Select value={formData.table} onValueChange={(value) => handleInputChange('table', value)}>
                    <SelectTrigger className="border-border/50 focus:border-primary">
                      <SelectValue placeholder="Choisir votre préférence de table" />
                    </SelectTrigger>
                    <SelectContent>
                      {tablePreferences.map(pref => (
                        <SelectItem key={pref.value} value={pref.value}>
                          {pref.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Main Dish Selection */}
                <div className="space-y-2">
                  <Label className="text-foreground font-medium">
                    <Utensils className="w-4 h-4 inline mr-2" />
                    {t('reservation.main')} (optionnel)
                  </Label>
                  <Select value={formData.mainDish} onValueChange={(value) => handleInputChange('mainDish', value)}>
                    <SelectTrigger className="border-border/50 focus:border-primary">
                      <SelectValue placeholder="Choisir votre plat principal" />
                    </SelectTrigger>
                    <SelectContent>
                      {mainDishes.map(dish => (
                        <SelectItem key={dish.id} value={dish.id}>
                          {dish.name[language]} - {dish.price}€
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                  <Label htmlFor="requests" className="text-foreground font-medium">
                    Demandes spéciales
                  </Label>
                  <Textarea
                    id="requests"
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    placeholder="Allergies, régimes spéciaux, occasion spéciale..."
                    className="border-border/50 focus:border-primary transition-smooth resize-none"
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="gradient-primary hover:shadow-glow transition-spring px-12 py-3 text-lg"
                  >
                    {t('reservation.submit')}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Restaurant Info */}
          <Card className="mt-8 shadow-card gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                  <p className="text-muted-foreground text-sm">
                    123 Rue de la Gastronomie<br />
                    75001 Paris, France
                  </p>
                </div>
                <div>
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-foreground mb-1">Horaires</h3>
                  <p className="text-muted-foreground text-sm">
                    Lun-Ven: 12h-14h30, 19h-22h30<br />
                    Sam-Dim: 19h-23h
                  </p>
                </div>
                <div>
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-foreground mb-1">Contact</h3>
                  <p className="text-muted-foreground text-sm">
                    +33 1 42 97 48 85<br />
                    contact@saveurmoderne.fr
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reservations;