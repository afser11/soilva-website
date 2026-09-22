export type SoilvaProduct = {
  slug: string;
  name: string;
  category: string;
  description: string;
  story: string;
  sizes: readonly string[];
  accent: string;
  uses: readonly string[];
  highlights: readonly string[];
  related: readonly string[];
};

export const products = [
  {
    "slug": "red-chilli-powder",
    "name": "Red Chilli Powder",
    "category": "Ground Spice",
    "description": "Rich colour and authentic flavour for everyday Indian cooking.",
    "story": "Soilva Red Chilli Powder begins with carefully selected chillies. Each batch is processed hygienically and ground with care to help retain the spice’s natural aroma, colour and character. It is made for everyday meals where dependable flavour matters.",
    "sizes": [
      "100 g",
      "200 g",
      "500 g"
    ],
    "accent": "#b32118",
    "uses": [
      "Curries",
      "Vegetables",
      "Gravies",
      "Marinades",
      "Tandoori dishes",
      "Snacks"
    ],
    "highlights": [
      "Carefully selected chillies",
      "Traditional Kandap grinding",
      "Hygienic processing",
      "Food-grade packaging",
      "Crafted with care",
      "Made in India"
    ],
    "related": [
      "turmeric-powder",
      "coriander-powder",
      "garam-masala"
    ]
  },
  {
    "slug": "turmeric-powder",
    "name": "Turmeric Powder",
    "category": "Ground Spice",
    "description": "Warm golden colour and earthy character for daily meals.",
    "story": "Soilva Turmeric Powder is prepared from carefully selected turmeric roots and processed with attention to cleanliness and consistency. Its warm colour and earthy character make it a trusted everyday essential in Indian kitchens.",
    "sizes": [
      "100 g",
      "200 g",
      "500 g"
    ],
    "accent": "#d99b16",
    "uses": [
      "Dal",
      "Vegetables",
      "Curries",
      "Rice dishes",
      "Pickles",
      "Marinades"
    ],
    "highlights": [
      "Carefully selected turmeric",
      "Traditional Kandap grinding",
      "Hygienic processing",
      "Food-grade packaging",
      "Crafted with care",
      "Made in India"
    ],
    "related": [
      "red-chilli-powder",
      "coriander-powder",
      "cumin-powder"
    ]
  },
  {
    "slug": "coriander-powder",
    "name": "Coriander Powder",
    "category": "Ground Spice",
    "description": "Fresh aroma and balanced taste for curries and vegetables.",
    "story": "Soilva Coriander Powder is made from carefully selected coriander seeds and ground to support a fresh aroma and balanced taste. It brings gentle depth to everyday curries, gravies and vegetable dishes.",
    "sizes": [
      "100 g",
      "200 g",
      "500 g"
    ],
    "accent": "#6baa46",
    "uses": [
      "Curries",
      "Gravies",
      "Vegetables",
      "Lentils",
      "Marinades",
      "Dry sabzi"
    ],
    "highlights": [
      "Carefully selected coriander",
      "Traditional Kandap grinding",
      "Hygienic processing",
      "Food-grade packaging",
      "Crafted with care",
      "Made in India"
    ],
    "related": [
      "red-chilli-powder",
      "turmeric-powder",
      "cumin-powder"
    ]
  },
  {
    "slug": "cumin-powder",
    "name": "Cumin Powder",
    "category": "Ground Spice",
    "description": "Deep earthy flavour that adds warmth to savoury dishes.",
    "story": "Soilva Cumin Powder is crafted from selected cumin seeds and processed with care to maintain its earthy aroma and warm flavour. It is suitable for both everyday cooking and finishing dishes.",
    "sizes": [
      "100 g",
      "200 g",
      "500 g"
    ],
    "accent": "#8b5a2b",
    "uses": [
      "Raita",
      "Chaat",
      "Curries",
      "Dal",
      "Rice",
      "Seasoning"
    ],
    "highlights": [
      "Carefully selected cumin",
      "Traditional Kandap grinding",
      "Hygienic processing",
      "Food-grade packaging",
      "Crafted with care",
      "Made in India"
    ],
    "related": [
      "coriander-powder",
      "garam-masala",
      "kitchen-king-masala"
    ]
  },
  {
    "slug": "garam-masala",
    "name": "Garam Masala",
    "category": "Blended Masala",
    "description": "An aromatic blend designed to finish memorable Indian meals.",
    "story": "Soilva Garam Masala brings together selected spices in a balanced aromatic blend. It is intended to add warmth, depth and a finishing touch to a wide range of Indian dishes.",
    "sizes": [
      "50 g",
      "100 g",
      "200 g"
    ],
    "accent": "#7d2636",
    "uses": [
      "Curries",
      "Dal",
      "Paneer",
      "Biryani",
      "Vegetables",
      "Gravies"
    ],
    "highlights": [
      "Balanced spice blend",
      "Traditional processing",
      "Hygienic handling",
      "Food-grade packaging",
      "Crafted with care",
      "Made in India"
    ],
    "related": [
      "kitchen-king-masala",
      "cumin-powder",
      "black-pepper-powder"
    ]
  },
  {
    "slug": "black-pepper-powder",
    "name": "Black Pepper Powder",
    "category": "Ground Spice",
    "description": "Bold peppery character for seasoning, soups and savoury recipes.",
    "story": "Soilva Black Pepper Powder is made from selected peppercorns and ground with care for a bold, familiar peppery character. It works well as both a cooking ingredient and a finishing seasoning.",
    "sizes": [
      "50 g",
      "100 g",
      "200 g"
    ],
    "accent": "#2f2f2f",
    "uses": [
      "Soups",
      "Salads",
      "Eggs",
      "Pasta",
      "Marinades",
      "Seasoning"
    ],
    "highlights": [
      "Selected peppercorns",
      "Careful grinding",
      "Hygienic processing",
      "Food-grade packaging",
      "Crafted with care",
      "Made in India"
    ],
    "related": [
      "garam-masala",
      "cumin-powder",
      "kitchen-king-masala"
    ]
  },
  {
    "slug": "kitchen-king-masala",
    "name": "Kitchen King Masala",
    "category": "Blended Masala",
    "description": "A versatile masala blend for rich everyday vegetable dishes.",
    "story": "Soilva Kitchen King Masala is a versatile blend created for everyday Indian cooking. Its balanced profile helps add aroma, colour and depth to vegetable dishes, gravies and paneer recipes.",
    "sizes": [
      "50 g",
      "100 g",
      "200 g"
    ],
    "accent": "#e46b18",
    "uses": [
      "Mixed vegetables",
      "Paneer",
      "Gravies",
      "Pulao",
      "Dry sabzi",
      "Curries"
    ],
    "highlights": [
      "Versatile spice blend",
      "Balanced flavour profile",
      "Hygienic processing",
      "Food-grade packaging",
      "Crafted with care",
      "Made in India"
    ],
    "related": [
      "garam-masala",
      "coriander-powder",
      "red-chilli-powder"
    ]
  }
] as const satisfies readonly SoilvaProduct[];
