import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Informations manquantes",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t("contact.address"),
      details: ["123 Rue de l'amazone'", "75001 Benin, Cotonou"],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: t("contact.phone"),
      details: ["+229 01 40 76 96 28"],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: t("contact.email"),
      details: ["contact@skyline.fr"],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t("contact.hours"),
      details: [
        "Lundi - Vendredi: 12h-14h30, 19h-22h30",
        "Samedi - Dimanche: 19h-23h",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/5 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-light text-heading text-foreground mb-4">
            {t("contact.title")}
          </h1>
          <p className="text-xl text-muted-foreground text-elegant max-w-2xl mx-auto">
            Nous serions ravis de répondre à vos questions et de vous accueillir
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-heading text-foreground text-center">
                  Envoyez-nous un message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-foreground font-medium"
                      >
                        Nom complet *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Votre nom"
                        className="border-border/50 focus:border-primary transition-smooth"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-foreground font-medium"
                      >
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="votre@email.com"
                        className="border-border/50 focus:border-primary transition-smooth"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-foreground font-medium"
                      >
                        Téléphone
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="+229 01 XX XX XX XX"
                        className="border-border/50 focus:border-primary transition-smooth"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="subject"
                        className="text-foreground font-medium"
                      >
                        Sujet
                      </Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) =>
                          handleInputChange("subject", e.target.value)
                        }
                        placeholder="Objet de votre message"
                        className="border-border/50 focus:border-primary transition-smooth"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-foreground font-medium"
                    >
                      {t("contact.message")} *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Votre message..."
                      className="border-border/50 focus:border-primary transition-smooth resize-none"
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gradient-primary hover:shadow-glow transition-spring"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {t("contact.send")}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="shadow-card gradient-card border-border/50 overflow-hidden">
                <div className="h-64">
                  <iframe
                    title="Carte Saveur Moderne"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.302260855834!2d2.04100397350945!3d7.17782381521698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10251bf514c4f031%3A0xb0bb4f8b89c459c4!2sHECM%20Bohicon!5e1!3m2!1sfr!2sbj!4v1755605591105!5m2!1sfr!2sbj"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "16rem" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Card>

              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="shadow-card hover:shadow-elegant transition-spring gradient-card border-border/50"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-glow">
                        {info.icon}
                      </div>
                      <h3 className="font-semibold text-foreground mb-3 text-heading">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p
                            key={detailIndex}
                            className="text-muted-foreground text-sm text-elegant"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional Info */}
              <Card className="shadow-elegant gradient-blue border-border/50">
                {" "}
                {/* Changed from gradient-warm to gradient-blue */}
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-light text-heading text-foreground mb-4">
                    Informations Pratiques
                  </h3>
                  <div className="space-y-4 text-muted-foreground text-elegant">
                    <p>
                      <strong>Réservations:</strong> Nous recommandons fortement
                      de réserver, particulièrement pour les weekend et soirées.
                    </p>
                    <p>
                      <strong>Parking:</strong> Parking public à 50m du
                      restaurant (Parking Saint-Honoré).
                    </p>
                    <p>
                      <strong>Accessibilité:</strong> Restaurant accessible aux
                      personnes à mobilité réduite.
                    </p>
                    <p>
                      <strong>Dress Code:</strong> Tenue correcte exigée. Smart
                      casual recommandé.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
