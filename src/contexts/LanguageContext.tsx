import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.menu": "Menu",
    "nav.reservations": "Reservations",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.order": "Order Now",

    // Hero
    "hero.title": "Skyline",
    "hero.subtitle": "Where Tradition Meets Innovation",
    "hero.description":
      "Experience the perfect harmony of traditional French cuisine and modern culinary artistry in an elegant atmosphere.",
    "hero.cta": "Discover Our Menu",
    "hero.reserve": "Make a Reservation",

    // Menu
    "menu.title": "Our Menu",
    "menu.traditional": "Traditional Dishes",
    "menu.modern": "Modern Creations",
    "menu.drinks": "Beverages",
    "menu.desserts": "Desserts",
    "menu.sides": "Side Dishes",
    "menu.available": "Available",
    "menu.limited": "Limited",
    "menu.unavailable": "Unavailable",
    "menu.order": "Order",
    "menu.rate": "Rate this dish",
    "menu.special": "Special Orders",
    "menu.special.desc": "Custom dishes tailored to your preferences",

    // Reservations
    "reservation.title": "Make a Reservation",
    "reservation.date": "Date",
    "reservation.time": "Time",
    "reservation.guests": "Number of Guests",
    "reservation.table": "Table Preference",
    "reservation.main": "Main Dish",
    "reservation.additional": "Additional Dishes",
    "reservation.submit": "Reserve Table",
    "reservation.success": "Reservation confirmed!",

    // About
    "about.title": "Our Story",
    "about.subtitle": "Tradi-Modern Philosophy",
    "about.description":
      "At Saveur Moderne, we believe that the best cuisine comes from respecting tradition while embracing innovation. Our chefs combine time-honored French techniques with contemporary flavors and presentations.",

    // Contact
    "contact.title": "Contact Us",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.hours": "Opening Hours",
    "contact.message": "Message",
    "contact.send": "Send Message",

    // Reviews
    "reviews.title": "Customer Reviews",
    "reviews.add": "Write a Review",
    "reviews.restaurant": "Rate Our Restaurant",
    "reviews.submit": "Submit Review",

    // Common
    "common.loading": "Loading...",
    "common.error": "An error occurred",
    "common.success": "Success!",
    "common.close": "Close",
    "common.cancel": "Cancel",
    "common.confirm": "Confirm",
    "common.price": "Price",
    "common.rating": "Rating",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.menu": "Menu",
    "nav.reservations": "Réservations",
    "nav.about": "À Propos",
    "nav.contact": "Contact",
    "nav.order": "Commander",

    // Hero
    "hero.title": "Skyline",
    "hero.subtitle": "Où la Tradition Rencontre l'Innovation",
    "hero.description":
      "Découvrez l'harmonie parfaite entre la cuisine française traditionnelle et l'art culinaire moderne dans une atmosphère élégante.",
    "hero.cta": "Découvrir Notre Menu",
    "hero.reserve": "Réserver une Table",

    // Menu
    "menu.title": "Notre Menu",
    "menu.traditional": "Plats Traditionnels",
    "menu.modern": "Créations Modernes",
    "menu.drinks": "Boissons",
    "menu.desserts": "Desserts",
    "menu.sides": "Accompagnements",
    "menu.available": "Disponible",
    "menu.limited": "Limité",
    "menu.unavailable": "Indisponible",
    "menu.order": "Commander",
    "menu.rate": "Noter ce plat",
    "menu.special": "Commandes Spéciales",
    "menu.special.desc": "Plats personnalisés selon vos préférences",

    // Reservations
    "reservation.title": "Réserver une Table",
    "reservation.date": "Date",
    "reservation.time": "Heure",
    "reservation.guests": "Nombre de Convives",
    "reservation.table": "Préférence de Table",
    "reservation.main": "Plat Principal",
    "reservation.additional": "Plats Supplémentaires",
    "reservation.submit": "Réserver",
    "reservation.success": "Réservation confirmée !",

    // About
    "about.title": "Notre Histoire",
    "about.subtitle": "Philosophie Tradi-Moderne",
    "about.description":
      "Chez Saveur Moderne, nous croyons que la meilleure cuisine vient du respect de la tradition tout en embrassant l'innovation. Nos chefs combinent les techniques françaises ancestrales avec des saveurs et présentations contemporaines.",

    // Contact
    "contact.title": "Nous Contacter",
    "contact.address": "Adresse",
    "contact.phone": "Téléphone",
    "contact.email": "Email",
    "contact.hours": "Heures d'Ouverture",
    "contact.message": "Message",
    "contact.send": "Envoyer",

    // Reviews
    "reviews.title": "Avis Clients",
    "reviews.add": "Écrire un Avis",
    "reviews.restaurant": "Noter Notre Restaurant",
    "reviews.submit": "Soumettre l'Avis",

    // Common
    "common.loading": "Chargement...",
    "common.error": "Une erreur s'est produite",
    "common.success": "Succès !",
    "common.close": "Fermer",
    "common.cancel": "Annuler",
    "common.confirm": "Confirmer",
    "common.price": "Prix",
    "common.rating": "Note",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
