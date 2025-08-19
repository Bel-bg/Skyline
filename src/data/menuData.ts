export interface Dish {
  id: string;
  name: {
    en: string;
    fr: string;
  };
  description: {
    en: string;
    fr: string;
  };
  price: number;
  image: string;
  rating: number;
  reviews: number;
  availability: "available" | "limited" | "unavailable";
  category: "traditional" | "modern" | "drinks" | "desserts" | "sides";
  allergens?: string[];
}

export const menuData: Dish[] = [
  // Traditional Dishes
  {
    id: "coq-au-vin",
    name: {
      en: "Coq au Vin",
      fr: "Coq au Vin",
    },
    description: {
      en: "Classic French chicken braised in red wine with mushrooms and pearl onions",
      fr: "Poulet français classique braisé au vin rouge avec champignons et petits oignons",
    },
    price: 28,
    image:
      "https://i.pinimg.com/1200x/5f/d5/c8/5fd5c82486206f6f8ceb0c426739cd1d.jpg",
    rating: 4.8,
    reviews: 156,
    availability: "available",
    category: "traditional",
    allergens: ["gluten"],
  },
  {
    id: "bouillabaisse",
    name: {
      en: "Bouillabaisse Marseillaise",
      fr: "Bouillabaisse Marseillaise",
    },
    description: {
      en: "Traditional Provençal fish stew with saffron and rouille",
      fr: "Soupe de poisson provençale traditionnelle au safran et rouille",
    },
    price: 34,
    image: "/src/assets/dishes/coq-au-vin.jpg",
    rating: 4.9,
    reviews: 203,
    availability: "limited",
    category: "traditional",
    allergens: ["shellfish", "eggs"],
  },
  {
    id: "cassoulet",
    name: {
      en: "Cassoulet Toulousain",
      fr: "Cassoulet Toulousain",
    },
    description: {
      en: "Slow-cooked white bean stew with duck confit and Toulouse sausage",
      fr: "Ragout de haricots blancs mijoté avec confit de canard et saucisse de Toulouse",
    },
    price: 26,
    image: "/src/assets/dishes/coq-au-vin.jpg",
    rating: 4.7,
    reviews: 98,
    availability: "available",
    category: "traditional",
  },

  // Modern Creations
  {
    id: "salmon-teriyaki",
    name: {
      en: "Miso-Glazed Salmon",
      fr: "Saumon Glacé au Miso",
    },
    description: {
      en: "Pan-seared salmon with miso glaze, quinoa, and seasonal vegetables",
      fr: "Saumon poêlé au glaçage miso, quinoa et légumes de saison",
    },
    price: 32,
    image: "/src/assets/dishes/salmon-teriyaki.jpg",
    rating: 4.6,
    reviews: 89,
    availability: "available",
    category: "modern",
    allergens: ["soy", "sesame"],
  },
  {
    id: "duck-fusion",
    name: {
      en: "Five-Spice Duck Breast",
      fr: "Magret de Canard aux Cinq Épices",
    },
    description: {
      en: "Duck breast with five-spice crust, sweet potato purée, and cherry reduction",
      fr: "Magret de canard en croûte cinq épices, purée de patate douce et réduction de cerises",
    },
    price: 36,
    image: "/src/assets/dishes/salmon-teriyaki.jpg",
    rating: 4.8,
    reviews: 124,
    availability: "available",
    category: "modern",
  },

  // Desserts
  {
    id: "creme-brulee",
    name: {
      en: "Vanilla Crème Brûlée",
      fr: "Crème Brûlée à la Vanille",
    },
    description: {
      en: "Classic vanilla custard with caramelized sugar and fresh berries",
      fr: "Crème à la vanille classique avec sucre caramélisé et fruits rouges",
    },
    price: 12,
    image: "/src/assets/dishes/creme-brulee.jpg",
    rating: 4.9,
    reviews: 267,
    availability: "available",
    category: "desserts",
    allergens: ["eggs", "dairy"],
  },
  {
    id: "chocolate-souffle",
    name: {
      en: "Dark Chocolate Soufflé",
      fr: "Soufflé au Chocolat Noir",
    },
    description: {
      en: "Light and airy chocolate soufflé with raspberry coulis",
      fr: "Soufflé au chocolat léger et aérien avec coulis de framboises",
    },
    price: 14,
    image: "/src/assets/dishes/creme-brulee.jpg",
    rating: 4.7,
    reviews: 145,
    availability: "available",
    category: "desserts",
    allergens: ["eggs", "dairy", "gluten"],
  },

  // Beverages
  {
    id: "wine-selection",
    name: {
      en: "Sommelier's Selection",
      fr: "Sélection du Sommelier",
    },
    description: {
      en: "Curated wine pairing for your meal",
      fr: "Accord de vins sélectionnés pour votre repas",
    },
    price: 18,
    image: "/src/assets/dishes/coq-au-vin.jpg",
    rating: 4.8,
    reviews: 89,
    availability: "available",
    category: "drinks",
  },
  {
    id: "cocktail-moderne",
    name: {
      en: "Saveur Moderne Signature",
      fr: "Signature Saveur Moderne",
    },
    description: {
      en: "House cocktail with French spirits and seasonal fruits",
      fr: "Cocktail maison aux spiritueux français et fruits de saison",
    },
    price: 15,
    image: "/src/assets/dishes/coq-au-vin.jpg",
    rating: 4.6,
    reviews: 67,
    availability: "available",
    category: "drinks",
  },

  // Side Dishes
  {
    id: "truffle-fries",
    name: {
      en: "Truffle Parmesan Fries",
      fr: "Frites à la Truffe et Parmesan",
    },
    description: {
      en: "Hand-cut fries with truffle oil and aged Parmesan",
      fr: "Frites coupées main à l'huile de truffe et Parmesan vieilli",
    },
    price: 16,
    image: "/src/assets/dishes/coq-au-vin.jpg",
    rating: 4.5,
    reviews: 178,
    availability: "available",
    category: "sides",
    allergens: ["dairy"],
  },
  {
    id: "seasonal-vegetables",
    name: {
      en: "Seasonal Vegetables",
      fr: "Légumes de Saison",
    },
    description: {
      en: "Market-fresh vegetables prepared with herbs and olive oil",
      fr: "Légumes frais du marché préparés aux herbes et huile d'olive",
    },
    price: 12,
    image: "/src/assets/dishes/coq-au-vin.jpg",
    rating: 4.4,
    reviews: 92,
    availability: "available",
    category: "sides",
  },
];

export const specialOrders = [
  {
    id: "chef-table",
    name: {
      en: "Chef's Table Experience",
      fr: "Expérience Table du Chef",
    },
    description: {
      en: "Multi-course tasting menu prepared at the chef's table",
      fr: "Menu dégustation multi-services préparé à la table du chef",
    },
    price: 120,
    duration: "3 hours",
    minGuests: 2,
    maxGuests: 8,
  },
  {
    id: "wine-dinner",
    name: {
      en: "Wine Pairing Dinner",
      fr: "Dîner avec Accords de Vins",
    },
    description: {
      en: "Five-course dinner with carefully selected wine pairings",
      fr: "Dîner cinq services avec accords de vins soigneusement sélectionnés",
    },
    price: 85,
    duration: "2.5 hours",
    minGuests: 2,
    maxGuests: 12,
  },
  {
    id: "private-dining",
    name: {
      en: "Private Dining Room",
      fr: "Salon Privé",
    },
    description: {
      en: "Exclusive dining room with customized menu",
      fr: "Salle à manger exclusive avec menu personnalisé",
    },
    price: 200,
    duration: "4 hours",
    minGuests: 8,
    maxGuests: 20,
  },
];
