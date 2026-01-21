import goldenElysia from "@/assets/golden-elysia.jpeg";
import wildHorizon from "@/assets/wild-horizon.jpeg";
import rebelRose from "@/assets/rebel-rose.jpeg";
import aureliaLuxe from "@/assets/aurelia-luxe.jpeg";
import victoryNoir from "@/assets/victory-noir.jpeg";
import midnightEmber from "@/assets/midnight-ember.jpeg";
import oudEclipse from "@/assets/oud-eclipse.jpeg";
import duneImperial from "@/assets/dune-imperial.jpeg";

export interface FragranceNote {
  category: "top" | "heart" | "base";
  notes: string[];
}

export interface Product {
  id: string;
  image: string;
  name: string;
  description: string;
  inspiration: string;
  story: string;
  notes: FragranceNote[];
  ingredients: string[];
  concentration: string;
  size: string;
  price: number;
}

export const WHATSAPP_NUMBER = "919363252579";

export const products: Product[] = [
  {
    id: "golden-elysia",
    image: goldenElysia,
    name: "Golden Elysia",
    description: "Radiant floral elegance",
    inspiration: "Inspired by J'adore",
    story: "A luminous celebration of femininity, Golden Elysia captures the essence of blooming gardens at golden hour. This radiant composition weaves together the world's most precious flowers into a symphony of pure elegance.",
    notes: [
      { category: "top", notes: ["Mandarin", "Champaca Flower", "Pear"] },
      { category: "heart", notes: ["Jasmine Sambac", "Rose", "Ylang-Ylang"] },
      { category: "base", notes: ["Damascus Plum", "Amaranth Wood", "Blackberry Musk"] }
    ],
    ingredients: ["Alcohol Denat.", "Parfum", "Aqua", "Limonene", "Linalool", "Benzyl Benzoate", "Citral", "Geraniol", "Benzyl Alcohol", "Farnesol"],
    concentration: "Eau de Parfum",
    size: "100ml / 3.4 fl oz",
    price: 999
  },
  {
    id: "rebel-rose",
    image: rebelRose,
    name: "Rebel Rose",
    description: "Bold and enchanting",
    inspiration: "Inspired by Good Girl Gone Bad",
    story: "For the woman who defies expectations. Rebel Rose is an intoxicating fusion of innocent florals and seductive darkness—a fragrance that captures the thrill of breaking free while embracing your truest desires.",
    notes: [
      { category: "top", notes: ["Bergamot", "Osmanthus", "Pink Pepper"] },
      { category: "heart", notes: ["Tuberose", "May Rose", "Jasmine"] },
      { category: "base", notes: ["White Musk", "Cedar", "Amberwood"] }
    ],
    ingredients: ["Alcohol Denat.", "Parfum", "Aqua", "Linalool", "Hydroxycitronellal", "Limonene", "Citronellol", "Geraniol", "Alpha-Isomethyl Ionone"],
    concentration: "Eau de Parfum",
    size: "100ml / 3.4 fl oz",
    price: 999
  },
  {
    id: "victory-noir",
    image: victoryNoir,
    name: "Victory Noir",
    description: "Sophisticated darkness",
    inspiration: "Inspired by Creed Aventus",
    story: "The scent of triumph and ambition. Victory Noir embodies the spirit of the modern conqueror—bold, confident, and unforgettable. Each note tells a story of battles won and mountains conquered.",
    notes: [
      { category: "top", notes: ["Pineapple", "Bergamot", "Blackcurrant", "Apple"] },
      { category: "heart", notes: ["Birch", "Moroccan Jasmine", "Rose", "Patchouli"] },
      { category: "base", notes: ["Musk", "Oak Moss", "Ambergris", "Vanilla"] }
    ],
    ingredients: ["Alcohol Denat.", "Parfum", "Aqua", "Limonene", "Linalool", "Coumarin", "Citral", "Geraniol", "Eugenol", "Citronellol"],
    concentration: "Eau de Parfum",
    size: "100ml / 3.4 fl oz",
    price: 999
  },
  {
    id: "oud-eclipse",
    image: oudEclipse,
    name: "Oud Eclipse",
    description: "Mysterious oriental",
    inspiration: "Inspired by Ombre Nomade",
    story: "A journey through ancient spice routes and moonlit deserts. Oud Eclipse is an opulent oriental masterpiece that captures the mystique of the East, where precious oud meets the warmth of exotic resins.",
    notes: [
      { category: "top", notes: ["Raspberry Accord", "Saffron", "Bergamot"] },
      { category: "heart", notes: ["Oud Wood", "Rose Absolute", "Incense"] },
      { category: "base", notes: ["Benzoin", "Amber", "Sandalwood", "Musk"] }
    ],
    ingredients: ["Alcohol Denat.", "Parfum", "Aqua", "Limonene", "Coumarin", "Linalool", "Citronellol", "Geraniol", "Eugenol", "Farnesol"],
    concentration: "Eau de Parfum Intense",
    size: "100ml / 3.4 fl oz",
    price: 999
  },
  {
    id: "midnight-ember",
    image: midnightEmber,
    name: "Midnight Ember",
    description: "Warm smoky allure",
    inspiration: "Inspired by Black Opium",
    story: "When night falls and inhibitions fade, Midnight Ember ignites. This addictive elixir blends the warmth of roasted coffee with intoxicating florals—a scent that burns bright in the darkness.",
    notes: [
      { category: "top", notes: ["Pink Pepper", "Pear", "Orange Blossom"] },
      { category: "heart", notes: ["Coffee Absolute", "Jasmine Sambac", "Bitter Almond"] },
      { category: "base", notes: ["Vanilla", "Patchouli", "Cedarwood", "Cashmere Wood"] }
    ],
    ingredients: ["Alcohol Denat.", "Parfum", "Aqua", "Linalool", "Limonene", "Coumarin", "Alpha-Isomethyl Ionone", "Citronellol", "Citral"],
    concentration: "Eau de Parfum",
    size: "100ml / 3.4 fl oz",
    price: 999
  },
  {
    id: "aurelia-luxe",
    image: aureliaLuxe,
    name: "Aurelia Luxe",
    description: "Opulent golden warmth",
    inspiration: "Inspired by Armani Sì",
    story: "The embodiment of modern elegance. Aurelia Luxe is for the woman who commands every room she enters—graceful yet powerful, soft yet unforgettable. A golden thread of sophistication woven into every note.",
    notes: [
      { category: "top", notes: ["Blackcurrant Nectar", "Mandarin", "Bergamot"] },
      { category: "heart", notes: ["Rose de Mai", "Freesia", "Neroli"] },
      { category: "base", notes: ["Vanilla", "Patchouli", "Ambroxan", "White Musk"] }
    ],
    ingredients: ["Alcohol Denat.", "Parfum", "Aqua", "Linalool", "Limonene", "Hydroxycitronellal", "Alpha-Isomethyl Ionone", "Geraniol", "Citral"],
    concentration: "Eau de Parfum",
    size: "100ml / 3.4 fl oz",
    price: 999
  },
  {
    id: "wild-horizon",
    image: wildHorizon,
    name: "Wild Horizon",
    description: "Adventurous spirit",
    inspiration: "Inspired by Sauvage",
    story: "Born from the untamed wilderness where the sky meets the earth. Wild Horizon captures the raw magnetism of open landscapes and the thrill of the unknown—fresh, fierce, and absolutely free.",
    notes: [
      { category: "top", notes: ["Calabrian Bergamot", "Pepper", "Mandarin"] },
      { category: "heart", notes: ["Lavender", "Sichuan Pepper", "Pink Pepper", "Vetiver"] },
      { category: "base", notes: ["Ambroxan", "Cedarwood", "Labdanum", "Elemi"] }
    ],
    ingredients: ["Alcohol Denat.", "Parfum", "Aqua", "Limonene", "Linalool", "Citronellol", "Coumarin", "Geraniol", "Citral"],
    concentration: "Eau de Parfum",
    size: "100ml / 3.4 fl oz",
    price: 999
  },
  {
    id: "dune-imperial",
    image: duneImperial,
    name: "Dune Impérial",
    description: "Desert majesty",
    inspiration: "Inspired by Arabian Tonka",
    story: "Where golden sands meet eternal sky. Dune Impérial is an ode to the majestic Arabian desert—warm, sensual, and infinitely rich. Let the intoxicating blend of tonka and spices transport you to lands of legend.",
    notes: [
      { category: "top", notes: ["Saffron", "Cinnamon", "Pink Pepper"] },
      { category: "heart", notes: ["Tonka Bean", "Almond", "Tobacco Flower"] },
      { category: "base", notes: ["Benzoin", "Sandalwood", "Vanilla", "Oud Wood"] }
    ],
    ingredients: ["Alcohol Denat.", "Parfum", "Aqua", "Coumarin", "Limonene", "Linalool", "Eugenol", "Cinnamal", "Benzyl Benzoate"],
    concentration: "Eau de Parfum Intense",
    size: "100ml / 3.4 fl oz",
    price: 999
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const openWhatsAppOrder = (productName: string, quantity: number = 1, price: number = 999) => {
  const total = price * quantity;
  const message = encodeURIComponent(
    `Hi! I would like to order from DAIM Perfumes:\n\n` +
    `Product: ${productName}\n` +
    `Quantity: ${quantity}\n` +
    `Total: ₹${total.toLocaleString('en-IN')}\n\n` +
    `Please confirm availability and share payment details.`
  );
  
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  window.location.href = whatsappUrl;
};

