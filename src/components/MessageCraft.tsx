import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Heart, Sparkles, Send, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MessageCraft = () => {
  const [message, setMessage] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const { toast } = useToast();

  const templates = [
    {
      id: "bonjour",
      title: "Bonjour Classique",
      preview: "Bonjour mon ami, j'espère que tu passes une merveilleuse journée...",
      style: "elegant"
    },
    {
      id: "love",
      title: "Message d'Amour",
      preview: "Mon cœur, tu illumines chaque instant de ma vie...",
      style: "romantic"
    },
    {
      id: "celebration",
      title: "Célébration",
      preview: "Félicitations ! Ce moment mérite d'être célébré...",
      style: "joyful"
    },
    {
      id: "gratitude",
      title: "Gratitude",
      preview: "Merci infiniment pour ta présence et ta gentillesse...",
      style: "warm"
    }
  ];

  const handleTemplateSelect = (template: typeof templates[0]) => {
    setSelectedTemplate(template.id);
    setMessage(template.preview);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(message);
    toast({
      title: "Copié !",
      description: "Votre message a été copié dans le presse-papiers.",
    });
  };

  const handleSend = () => {
    toast({
      title: "Message prêt !",
      description: "Votre message est prêt à être partagé.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-primary/10">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <h1 className="text-5xl font-light text-foreground mb-4 text-elegant">
              Message Craft Studio
            </h1>
            <div className="absolute -top-2 -right-4 text-accent">
              <Sparkles className="w-8 h-8 animate-pulse" />
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-elegant">
            Créez des messages élégants avec une touche française. 
            Exprimez vos sentiments avec style et sophistication.
          </p>
        </div>

        {/* Template Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-light text-foreground mb-6 text-center text-elegant">
            Choisissez votre style
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {templates.map((template) => (
              <Card
                key={template.id}
                className={`p-4 cursor-pointer transition-smooth hover:shadow-soft border-2 ${
                  selectedTemplate === template.id
                    ? "border-primary shadow-glow gradient-card"
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() => handleTemplateSelect(template)}
              >
                <div className="text-center">
                  <Badge 
                    variant="secondary" 
                    className="mb-3 bg-accent/20 text-accent-foreground"
                  >
                    {template.title}
                  </Badge>
                  <p className="text-sm text-muted-foreground text-elegant leading-relaxed">
                    {template.preview}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Message Editor */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-card gradient-card border-border/50">
            <div className="mb-6">
              <h3 className="text-xl font-light text-foreground mb-2 text-elegant flex items-center gap-2">
                <Heart className="w-5 h-5 text-accent" />
                Votre Message
              </h3>
              <p className="text-muted-foreground text-elegant">
                Personnalisez votre message ou écrivez le vôtre
              </p>
            </div>

            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Écrivez votre message ici..."
              className="min-h-[200px] text-lg leading-relaxed resize-none border-border/50 focus:border-primary transition-smooth bg-background/50"
            />

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button
                onClick={handleCopy}
                variant="outline"
                className="flex-1 border-primary/20 hover:border-primary hover:bg-primary/5 transition-smooth"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copier
              </Button>
              <Button
                onClick={handleSend}
                className="flex-1 gradient-primary hover:shadow-glow transition-smooth"
              >
                <Send className="w-4 h-4 mr-2" />
                Prêt à envoyer
              </Button>
            </div>
          </Card>
        </div>

        {/* Preview Card */}
        {message && (
          <div className="max-w-2xl mx-auto mt-8">
            <h3 className="text-lg font-light text-foreground mb-4 text-center text-elegant">
              Aperçu de votre message
            </h3>
            <Card className="p-6 shadow-soft gradient-card border-accent/20">
              <div className="text-center">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <p className="text-foreground leading-relaxed text-elegant whitespace-pre-wrap">
                  {message}
                </p>
                <div className="mt-4 text-sm text-muted-foreground text-elegant">
                  Avec amour ✨
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageCraft;