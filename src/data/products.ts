import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Chanel No. 5",
    brand: "Chanel",
    price: 120,
    image: "https://th.bing.com/th/id/OIP.2lqtM6GC5vKZDhO7jkItnAHaHN?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "women",
    fragranceFamily: "Floral",
    description: "An iconic fragrance that blends timeless floral notes with elegance.",
    topNotes: ["Aldehydes", "Neroli", "Ylang-Ylang"],
    middleNotes: ["Jasmine", "Rose", "Lily of the Valley"],
    baseNotes: ["Sandalwood", "Vetiver", "Musk"],
    sizes: [
      { size: "50ml", price: 120 },
      { size: "100ml", price: 200 }
    ],
    rating: 4.8,
    reviews: 2100,
    featured: true
  },
  {
    id: 2,
    name: "Sauvage",
    brand: "Dior",
    price: 110,
    image: "https://static.beautytocare.com/media/catalog/product/cache/global/image/1300x1300/85e4522595efc69f496374d01ef2bf13/d/i/dior-sauvage-eau-de-toilette-200ml.jpg",
    category: "men",
    fragranceFamily: "Fresh",
    description: "Raw and noble, inspired by wide-open spaces under a blue sky.",
    topNotes: ["Calabrian Bergamot", "Pepper"],
    middleNotes: ["Lavender", "Geranium", "Patchouli"],
    baseNotes: ["Ambroxan", "Cedar", "Labdanum"],
    sizes: [
      { size: "60ml", price: 110 },
      { size: "100ml", price: 175 }
    ],
    rating: 4.7,
    reviews: 1890,
    featured: true
  },
  {
    id: 3,
    name: "Aventus",
    brand: "Creed",
    price: 325,
    image: "https://tse4.mm.bing.net/th/id/OIP.LD-3oDszlEjmW6BwpwMnrQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "men",
    fragranceFamily: "Fruity",
    description: "Celebrating strength and success with a bold fruity and woody blend.",
    topNotes: ["Pineapple", "Apple", "Bergamot"],
    middleNotes: ["Birch", "Rose", "Jasmine"],
    baseNotes: ["Oakmoss", "Ambergris", "Vanilla"],
    sizes: [
      { size: "50ml", price: 325 },
      { size: "100ml", price: 475 }
    ],
    rating: 4.9,
    reviews: 980,
    featured: true
  },
  {
    id: 4,
    name: "Black Orchid",
    brand: "Tom Ford",
    price: 150,
    image: "https://th.bing.com/th/id/R.82472b195dce5efaf4d184136dbdf04e?rik=CDgNj22eZc9t4g&pid=ImgRaw&r=0",
    category: "unisex",
    fragranceFamily: "Oriental",
    description: "Luxurious and sensual fragrance with rich dark accords.",
    topNotes: ["Truffle", "Ylang-Ylang", "Bergamot"],
    middleNotes: ["Orchid", "Lotus Wood", "Spices"],
    baseNotes: ["Vanilla", "Sandalwood", "Vetiver"],
    sizes: [
      { size: "50ml", price: 150 },
      { size: "100ml", price: 250 }
    ],
    rating: 4.8,
    reviews: 1250,
    featured: true
  },
  {
    id: 5,
    name: "Light Blue",
    brand: "Dolce & Gabbana",
    price: 95,
    image: "https://rougeb2car.vtexassets.com/arquivos/ids/167533/Light-Blue-Eau-Intense-EDP-100ml-3.jpg?v=637783055606430000",
    category: "women",
    fragranceFamily: "Fresh",
    description: "Capturing the joy of a Mediterranean summer with vibrant freshness.",
    topNotes: ["Sicilian Lemon", "Apple", "Cedar"],
    middleNotes: ["Bamboo", "Jasmine", "Rose"],
    baseNotes: ["Amber", "Musk", "Cedarwood"],
    sizes: [
      { size: "50ml", price: 95 },
      { size: "100ml", price: 150 }
    ],
    rating: 4.6,
    reviews: 870,
    featured: false
  },
  {
    id: 6,
    name: "La Vie Est Belle",
    brand: "Lancôme",
    price: 115,
    image: "https://c.cdnmp.net/239505480/p/l/4/lancome-la-vie-est-belle-eau-de-parfum-30-ml~49634.jpg",
    category: "women",
    fragranceFamily: "Gourmand",
    description: "Happiness in a bottle, a blend of sweet and floral elegance.",
    topNotes: ["Blackcurrant", "Pear"],
    middleNotes: ["Iris", "Jasmine", "Orange Blossom"],
    baseNotes: ["Praline", "Vanilla", "Patchouli"],
    sizes: [
      { size: "50ml", price: 115 },
      { size: "100ml", price: 180 }
    ],
    rating: 4.8,
    reviews: 2100,
    featured: true
  },
  {
    id: 7,
    name: "Acqua di Gio",
    brand: "Giorgio Armani",
    price: 105,
    image: "https://tse2.mm.bing.net/th/id/OIP.DcvoUQPCrUMl6YUG_U66pQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "men",
    fragranceFamily: "Aquatic",
    description: "A classic fresh aquatic fragrance inspired by the Mediterranean.",
    topNotes: ["Lime", "Jasmine", "Bergamot"],
    middleNotes: ["Peach", "Rosemary", "Sea Notes"],
    baseNotes: ["Amber", "Patchouli", "Musk"],
    sizes: [
      { size: "50ml", price: 105 },
      { size: "100ml", price: 170 }
    ],
    rating: 4.7,
    reviews: 1500,
    featured: false
  },
  {
    id: 8,
    name: "Flowerbomb",
    brand: "Viktor & Rolf",
    price: 130,
    image: "https://tse1.mm.bing.net/th/id/OIP.9AJSqldy70bFkZEjD4PDxgHaH8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "women",
    fragranceFamily: "Floral",
    description: "An explosion of floral bouquet, both glamorous and feminine.",
    topNotes: ["Tea", "Bergamot"],
    middleNotes: ["Orchid", "Rose", "Freesia"],
    baseNotes: ["Patchouli", "Musk"],
    sizes: [
      { size: "50ml", price: 130 },
      { size: "100ml", price: 200 }
    ],
    rating: 4.9,
    reviews: 2200,
    featured: true
  },
  {
    id: 9,
    name: "Good Girl",
    brand: "Carolina Herrera",
    price: 120,
    image: "https://i5.walmartimages.com/seo/Good-Girl-Eau-De-Parfum-Spray-1-7-Oz-50-Ml-for-Women-by-Carolina-Herrera_3edb6e17-8ce3-4288-83cb-4eb0d09a71a0.4f018cc06a68e0bff8710f404653fe66.jpeg",
    category: "women",
    fragranceFamily: "Oriental",
    description: "A daring yet sophisticated fragrance with contrast of light and dark.",
    topNotes: ["Almond", "Coffee"],
    middleNotes: ["Jasmine Sambac", "Tuberose"],
    baseNotes: ["Tonka Bean", "Cacao", "Vanilla"],
    sizes: [
      { size: "50ml", price: 120 },
      { size: "100ml", price: 190 }
    ],
    rating: 4.7,
    reviews: 1320,
    featured: true
  },
  {
    id: 10,
    name: "Bleu de Chanel",
    brand: "Chanel",
    price: 140,
    image: "https://th.bing.com/th/id/R.42ebf343a994c97c7820ff143df99de6?rik=3rf7zbjA2Tx3oQ&pid=ImgRaw&r=0",
    category: "men",
    fragranceFamily: "Woody",
    description: "A fresh, clean, and profoundly sensual scent for modern men.",
    topNotes: ["Grapefruit", "Lemon", "Mint"],
    middleNotes: ["Ginger", "Nutmeg", "Jasmine"],
    baseNotes: ["Sandalwood", "Cedar", "Patchouli"],
    sizes: [
      { size: "50ml", price: 140 },
      { size: "100ml", price: 220 }
    ],
    rating: 4.9,
    reviews: 2400,
    featured: true
  },
  {
    id: 11,
    name: "L'Interdit",
    brand: "Givenchy",
    price: 125,
    image: "https://tse3.mm.bing.net/th/id/OIP.0Yw4F134DY_4qOX8wYdcAQHaLH?r=0&w=1200&h=1800&rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "women",
    fragranceFamily: "Floral",
    description: "A tribute to bold femininity, contrasting white flowers with dark notes.",
    topNotes: ["Bergamot", "Pear"],
    middleNotes: ["Tuberose", "Orange Blossom", "Jasmine"],
    baseNotes: ["Patchouli", "Vetiver", "Vanilla"],
    sizes: [
      { size: "50ml", price: 125 },
      { size: "100ml", price: 190 }
    ],
    rating: 4.6,
    reviews: 800,
    featured: false
  },
  {
    id: 12,
    name: "Hypnotic Poison",
    brand: "Dior",
    price: 115,
    image: "https://tse1.mm.bing.net/th/id/OIP.SiqjuTh7z3Jtke3CBMqT3AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "women",
    fragranceFamily: "Gourmand",
    description: "Mysterious and magnetic, blending sweet gourmand notes with sensual warmth.",
    topNotes: ["Almond", "Coconut"],
    middleNotes: ["Jasmine Sambac", "Tuberose"],
    baseNotes: ["Vanilla", "Sandalwood", "Musk"],
    sizes: [
      { size: "50ml", price: 115 },
      { size: "100ml", price: 180 }
    ],
    rating: 4.8,
    reviews: 900,
    featured: true
  },
  {
    id: 13,
    name: "The One",
    brand: "Dolce & Gabbana",
    price: 110,
    image: "https://tse2.mm.bing.net/th/id/OIP.AZN9cW47RkJradl_4p2ZbAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "men",
    fragranceFamily: "Oriental",
    description: "Sophisticated, charismatic fragrance with spicy oriental notes.",
    topNotes: ["Grapefruit", "Coriander", "Basil"],
    middleNotes: ["Ginger", "Cardamom", "Orange Blossom"],
    baseNotes: ["Tobacco", "Amber", "Cedar"],
    sizes: [
      { size: "50ml", price: 110 },
      { size: "100ml", price: 180 }
    ],
    rating: 4.7,
    reviews: 970,
    featured: false
  },
  {
    id: 14,
    name: "Armani Code",
    brand: "Giorgio Armani",
    price: 125,
    image: "https://perfumeonline.ca/cdn/shop/products/Armani-Code-Le-Parfum_1024x1024.png?v=1673373814",
    category: "men",
    fragranceFamily: "Oriental",
    description: "A seductive oriental fragrance with an irresistible charm.",
    topNotes: ["Lemon", "Bergamot"],
    middleNotes: ["Olive Blossom", "Guaiac Wood"],
    baseNotes: ["Tonka Bean", "Leather"],
    sizes: [
      { size: "50ml", price: 125 },
      { size: "100ml", price: 190 }
    ],
    rating: 4.6,
    reviews: 1150,
    featured: false
  },
  {
    id: 15,
    name: "Y",
    brand: "Yves Saint Laurent",
    price: 135,
    image: "https://tse1.mm.bing.net/th/id/OIP.RPWycxENnVv69JRGkir10AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "men",
    fragranceFamily: "Fresh",
    description: "A bold and youthful fragrance that captures creativity and freedom.",
    topNotes: ["Bergamot", "Ginger", "Apple"],
    middleNotes: ["Sage", "Juniper Berries"],
    baseNotes: ["Vetiver", "Tonka Bean", "Cedar"],
    sizes: [
      { size: "50ml", price: 135 },
      { size: "100ml", price: 200 }
    ],
    rating: 4.7,
    reviews: 1050,
    featured: true
  },
  {
    id: 16,
    name: "Alien",
    brand: "Thierry Mugler",
    price: 125,
    image: "https://tse3.mm.bing.net/th/id/OIP.uwkeePa64ZczFVogY8lzEQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "women",
    fragranceFamily: "Oriental",
    description: "Radiant and mysterious fragrance that exudes sensual power.",
    topNotes: ["Mandarin"],
    middleNotes: ["Jasmine Sambac"],
    baseNotes: ["Cashmeran", "Amber"],
    sizes: [
      { size: "50ml", price: 125 },
      { size: "100ml", price: 195 }
    ],
    rating: 4.8,
    reviews: 990,
    featured: true
  },
  {
    id: 17,
    name: "Ombre Leather",
    brand: "Tom Ford",
    price: 160,
    image: "https://m.media-amazon.com/images/I/516JPGXMhEL.jpg",
    category: "unisex",
    fragranceFamily: "Woody",
    description: "A textural fragrance of floral leather and spices that is bold and refined.",
    topNotes: ["Cardamom"],
    middleNotes: ["Leather", "Jasmine Sambac"],
    baseNotes: ["Amber", "Patchouli"],
    sizes: [
      { size: "50ml", price: 160 },
      { size: "100ml", price: 250 }
    ],
    rating: 4.9,
    reviews: 700,
    featured: false
  },
  {
    id: 18,
    name: "Spicebomb",
    brand: "Viktor & Rolf",
    price: 130,
    image: "https://tse4.mm.bing.net/th/id/OIP.d6TnhU5FwccAO637XqfqaAHaHa?r=0&w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "men",
    fragranceFamily: "Oriental",
    description: "Explosive and addictive, a bold spicy fragrance for men.",
    topNotes: ["Pink Pepper", "Bergamot"],
    middleNotes: ["Cinnamon", "Saffron"],
    baseNotes: ["Leather", "Tobacco", "Vetiver"],
    sizes: [
      { size: "50ml", price: 130 },
      { size: "100ml", price: 200 }
    ],
    rating: 4.7,
    reviews: 840,
    featured: true
  },
  {
    id: 19,
    name: "Eros",
    brand: "Versace",
    price: 115,
    image: "https://th.bing.com/th/id/R.17d239620bbf069af63273d1a4e5b742?rik=iL3D326YD9CBOg&pid=ImgRaw&r=0",
    category: "men",
    fragranceFamily: "Fresh",
    description: "Passionate and bold, inspired by love and desire.",
    topNotes: ["Mint", "Green Apple", "Lemon"],
    middleNotes: ["Tonka Bean", "Geranium"],
    baseNotes: ["Vanilla", "Cedarwood", "Vetiver"],
    sizes: [
      { size: "50ml", price: 115 },
      { size: "100ml", price: 175 }
    ],
    rating: 4.6,
    reviews: 920,
    featured: false
  },
  {
    id: 20,
    name: "Idôle",
    brand: "Lancôme",
    price: 120,
    image: "https://tse1.mm.bing.net/th/id/OIP.tqiIGmL7zWDPtN9wwpnqhAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "women",
    fragranceFamily: "Floral",
    description: "A modern floral fragrance celebrating bold, empowered women.",
    topNotes: ["Pear", "Bergamot"],
    middleNotes: ["Rose", "Jasmine"],
    baseNotes: ["Vanilla", "Musk"],
    sizes: [
      { size: "50ml", price: 120 },
      { size: "100ml", price: 185 }
    ],
    rating: 4.7,
    reviews: 1150,
    featured: true
  }
];

export const fragranceFamilies = [
  "Floral",
  "Woody",
  "Oriental",
  "Fresh",
  "Aquatic",
  "Fruity",
  "Gourmand"
];

export const cities = [
  "Algiers", "Oran", "Constantine", "Annaba", "Blida", "Batna", "Djelfa",
  "Sétif", "Sidi Bel Abbès", "Biskra", "Tébessa", "El Oued", "Skikda",
  "Tiaret", "Béjaïa", "Tlemcen", "Ouargla", "Béchar", "Mostaganem"
];