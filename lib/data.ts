import { IMAGES } from "./images";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/select", label: "Select" },
  { href: "/shop", label: "Shop" },
] as const;

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "hot",
    label: "Hot Coffees",
    items: [
      {
        id: "caffe-latte",
        name: "Caffè Latte",
        description: "Rich espresso balanced with silky steamed milk and a whisper of foam.",
        price: 4.45,
        image: IMAGES.baristaLatteArt,
        tag: "Classic",
      },
      {
        id: "caramel-macchiato",
        name: "Caramel Macchiato",
        description: "Vanilla-steamed milk marked with espresso and a caramel drizzle.",
        price: 4.95,
        image: IMAGES.latteHeart,
        tag: "Bestseller",
      },
      {
        id: "cappuccino",
        name: "Cappuccino",
        description: "Bold espresso crowned with a deep layer of velvety milk foam.",
        price: 4.25,
        image: IMAGES.heroCappuccino,
      },
      {
        id: "americano",
        name: "Americano",
        description: "Espresso shots topped with hot water for a light, layered crema.",
        price: 3.65,
        image: IMAGES.pourEspresso,
      },
    ],
  },
  {
    id: "cold",
    label: "Cold Coffees",
    items: [
      {
        id: "iced-caramel-latte",
        name: "Iced Caramel Latte",
        description: "Espresso over ice with cold milk and a ribbon of caramel.",
        price: 4.95,
        image: IMAGES.icedCoffeeHand,
        tag: "Bestseller",
      },
      {
        id: "cold-brew",
        name: "Cold Brew",
        description: "Slow-steeped for 20 hours for a naturally sweet, smooth finish.",
        price: 4.15,
        image: IMAGES.coldBrew,
      },
      {
        id: "sweet-cream-cold-brew",
        name: "Sweet Cream Cold Brew",
        description: "Our signature cold brew, finished with a float of vanilla sweet cream.",
        price: 4.65,
        image: IMAGES.coldBrew,
      },
    ],
  },
  {
    id: "frappe",
    label: "Frappé & Blended",
    items: [
      {
        id: "mocha-frappe",
        name: "Mocha Frappé",
        description: "Coffee, milk and mocha sauce, blended with ice to a silky finish.",
        price: 5.25,
        image: IMAGES.heroCappuccino,
      },
      {
        id: "matcha-frappe",
        name: "Matcha Frappé",
        description: "Stone-ground matcha blended with milk and ice, capped with foam.",
        price: 5.45,
        image: IMAGES.matchaIced,
        tag: "New",
      },
    ],
  },
  {
    id: "tea",
    label: "Tea",
    items: [
      {
        id: "matcha-latte",
        name: "Matcha Latte",
        description: "Ceremonial-grade matcha whisked with steamed milk.",
        price: 4.75,
        image: IMAGES.matchaClassic,
      },
      {
        id: "iced-matcha-latte",
        name: "Iced Matcha Latte",
        description: "Stone-ground matcha shaken over ice with cold milk.",
        price: 4.95,
        image: IMAGES.matchaIced,
      },
    ],
  },
  {
    id: "bakery",
    label: "Bakery",
    items: [
      {
        id: "blueberry-muffin",
        name: "Blueberry Muffin",
        description: "Baked fresh daily, packed with whole blueberries.",
        price: 3.25,
        image: IMAGES.muffins,
      },
      {
        id: "butter-croissant",
        name: "Butter Croissant",
        description: "Laminated and layered for a flaky, golden bite.",
        price: 3.45,
        image: IMAGES.muffins,
      },
    ],
  },
];

export const BESTSELLERS = [MENU[0].items[1], MENU[1].items[0], MENU[2].items[1], MENU[1].items[1]];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Amelia R.",
    role: "Regular since 2021",
    quote:
      "My order is ready before I reach the counter. It's the small things that keep me coming back every morning.",
  },
  {
    name: "Daniyor K.",
    role: "Rewards member",
    quote: "The app makes ordering effortless, and the seasonal drinks never disappoint.",
  },
  {
    name: "Priya S.",
    role: "Weekend regular",
    quote: "There's a rhythm to this place — the grinder, the steam, the quiet hum. My favorite hour of the week.",
  },
];

export type Stat = {
  value: string;
  suffix: string;
  label: string;
};

export const STATS: Stat[] = [
  { value: "9", suffix: "k+", label: "Premium Users" },
  { value: "2", suffix: "k+", label: "Happy Customer" },
  { value: "28", suffix: "+", label: "Awards Winning" },
];

export type WeHaveFeature = {
  emoji: string;
  title: string;
  copy: string;
};

export const WE_HAVE_FEATURES: WeHaveFeature[] = [
  { emoji: "💖", title: "Tasty", copy: "We have the most delicious coffee" },
  { emoji: "🚀", title: "Fast", copy: "Our cafe will serve you quickly" },
  { emoji: "💸", title: "Available", copy: "Cafe will serve at the most pleasant prices" },
];

export type EventCard = {
  title: string;
  image: string;
  size: "lg" | "sm";
};

export const EVENTS: EventCard[] = [
  { title: "Two Coffee For 1 Price", image: IMAGES.latteHeart, size: "lg" },
  { title: "Kitchen Tour", image: IMAGES.storefront, size: "lg" },
  { title: "Free Coffee For 3 Coffee", image: IMAGES.matchaIced, size: "sm" },
  { title: "Our Instagram", image: IMAGES.beansPile, size: "sm" },
  { title: "Where Are You Choose Us?", image: IMAGES.friendsCafe, size: "sm" },
];

export const CONTACT = {
  instagram: "@supercoffee", 
  
  phone: "+7-999-999-99-99",
};

export type MerchItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tag?: string;
};

export type MerchCategory = {
  id: string;
  label: string;
  items: MerchItem[];
};

export const MERCH: MerchCategory[] = [
  {
    id: "drinkware",
    label: "Drinkware",
    items: [
      {
        id: "ceramic-mug",
        name: "Heritage Ceramic Mug",
        description: "355ml matte-glaze mug with the classic emblem debossed on the base.",
        price: 14.95,
        image: IMAGES.muffins,
        tag: "Bestseller",
      },
      {
        id: "stainless-tumbler",
        name: "Stainless Cold Cup",
        description: "Double-wall insulated tumbler that keeps cold drinks cold for 12+ hours.",
        price: 22.5,
        image: IMAGES.coldBrew,
      },
      {
        id: "travel-press",
        name: "Travel French Press",
        description: "Brew on the go — vacuum body, leak-proof lid, fits most car cupholders.",
        price: 28.0,
        image: IMAGES.pourEspresso,
        tag: "New",
      },
    ],
  },
  {
    id: "beans",
    label: "Coffee At Home",
    items: [
      {
        id: "house-blend-beans",
        name: "House Blend, Whole Bean",
        description: "Our everyday medium roast — balanced, nutty, and easy to love. 340g bag.",
        price: 12.95,
        image: IMAGES.beansPile,
        tag: "Bestseller",
      },
      {
        id: "dark-roast-beans",
        name: "Midnight Dark Roast",
        description: "Bold and smoky, with a heavy body built for milk-forward drinks. 340g bag.",
        price: 13.5,
        image: IMAGES.farmHarvest,
      },
      {
        id: "matcha-tin",
        name: "Ceremonial Matcha Tin",
        description: "Stone-ground, vivid green, whisks smooth. 40g tin, about 20 servings.",
        price: 24.0,
        image: IMAGES.matchaClassic,
      },
    ],
  },
  {
    id: "gifting",
    label: "Gifting",
    items: [
      {
        id: "gift-card-25",
        name: "Digital Gift Card",
        description: "Delivered by email in minutes — the easiest yes for any coffee lover.",
        price: 25.0,
        image: IMAGES.friendsCafe,
        tag: "Popular",
      },
      {
        id: "starter-bundle",
        name: "Starter Bundle",
        description: "Mug, 340g house blend, and a reusable straw — boxed and ready to gift.",
        price: 34.95,
        image: IMAGES.shopInterior,
      },
    ],
  },
];
