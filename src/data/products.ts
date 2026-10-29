export type ProductCategory =
  | "Deluxe Spices"
  | "Spices"
  | "Dried Seafood"
  | "Canned Fish";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  image: string;
};

export const products: Product[] = [
  {
    slug: "green-cardamom",
    name: "Green Cardamom",
    category: "Deluxe Spices",
    description: "Green cardamom offered for business sourcing enquiries.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85",
  },
  {
    slug: "jumbo-eu-green-cardamom",
    name: "Jumbo EU Green Cardamom",
    category: "Deluxe Spices",
    description: "A named green cardamom option for buyer enquiries.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85",
  },
  {
    slug: "conventional-green-cardamom",
    name: "Conventional Green Cardamom",
    category: "Deluxe Spices",
    description: "A named green cardamom option for buyer enquiries.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85",
  },
  {
    slug: "high-eugenol-keeri-parai-cloves",
    name: "High-Eugenol Keeri Parai Cloves",
    category: "Deluxe Spices",
    description: "Cloves presented for product and export enquiries.",
    image:
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=900&q=85",
  },
  {
    slug: "black-pepper",
    name: "Black Pepper",
    category: "Deluxe Spices",
    description: "Black pepper offered for business sourcing enquiries.",
    image:
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=900&q=85",
  },
  {
    slug: "nutmeg",
    name: "Nutmeg",
    category: "Deluxe Spices",
    description: "Nutmeg presented for product and export enquiries.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85",
  },
  {
    slug: "mace-flowers",
    name: "Mace Flowers",
    category: "Deluxe Spices",
    description: "Mace flowers offered for business sourcing enquiries.",
    image:
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=900&q=85",
  },
  {
    slug: "cumin",
    name: "Cumin",
    category: "Spices",
    description: "Cumin offered for business sourcing enquiries.",
    image:
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=900&q=85",
  },
  {
    slug: "fennel",
    name: "Fennel",
    category: "Spices",
    description: "Fennel offered for business sourcing enquiries.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85",
  },
  {
    slug: "coriander",
    name: "Coriander",
    category: "Spices",
    description: "Coriander offered for business sourcing enquiries.",
    image:
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=900&q=85",
  },
  {
    slug: "mustard",
    name: "Mustard",
    category: "Spices",
    description: "Mustard offered for business sourcing enquiries.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85",
  },
  {
    slug: "ajwain",
    name: "Ajwain",
    category: "Spices",
    description: "Ajwain offered for business sourcing enquiries.",
    image:
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=900&q=85",
  },
  {
    slug: "fenugreek",
    name: "Fenugreek",
    category: "Spices",
    description: "Fenugreek offered for business sourcing enquiries.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85",
  },
  {
    slug: "dried-seafood",
    name: "Dried Seafood",
    category: "Dried Seafood",
    description: "Dried seafood category offered for business enquiries.",
    image:
      "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=900&q=85",
  },
  {
    slug: "jack-mackerel-in-olive-oil",
    name: "Jack Mackerel in Olive Oil",
    category: "Canned Fish",
    description: "Jack mackerel in olive oil offered for buyer enquiries.",
    image:
      "https://images.unsplash.com/photo-1584263347416-85a696b4eda7?auto=format&fit=crop&w=900&q=85",
  },
];

export const productCategories = [
  "Deluxe Spices",
  "Spices",
  "Rice",
  "Pulses and Lentils",
  "Dried Seafood",
  "Canned Fish",
] as const;

export const categoryDescriptions: Record<string, string> = {
  "Deluxe Spices":
    "Explore cardamom, cloves, black pepper, nutmeg and mace for sourcing enquiries.",
  Spices:
    "A selection of whole spices including cumin, fennel, coriander, mustard, ajwain and fenugreek.",
  Rice: "Rice is included in the company's product portfolio. Contact us to discuss available options.",
  "Pulses and Lentils":
    "Pulses and lentils are included in the company's product portfolio. Contact us to discuss available options.",
  "Dried Seafood":
    "Dried seafood options are available for product and export enquiries.",
  "Canned Fish":
    "Canned fish options include Jack Mackerel in Olive Oil.",
};
