export interface MenuItem {
  id: string;
  name: string;
  category: "Veg" | "Paneer" | "Cheese" | "Chicken";
  description: string;
  price: number;
  image: string;
  rating?: number;
  popular?: boolean;
  spicy?: boolean;
  tags?: string[];
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "classic-veg-grill",
    name: "Classic Veg Grill",
    category: "Veg",
    description: "Fresh veggies, cheese, special sauce & crunchy grill.",
    price: 89,
    image: "/images/menu/classic-veg-grill.jpg",
    rating: 4.8,
    popular: true,
    tags: ["Must Try", "Bhopal Special"],
  },
  {
    id: "tandoori-paneer-blast",
    name: "Tandoori Paneer Blast",
    category: "Paneer",
    description: "Spicy paneer, onions, capsicum, cheese & our signature sauce.",
    price: 119,
    image: "/images/menu/tandoori-paneer-blast.jpg",
    rating: 4.9,
    popular: true,
    spicy: true,
    tags: ["Best Seller", "Signature"],
  },
  {
    id: "corn-cheese-delight",
    name: "Corn Cheese Delight",
    category: "Cheese",
    description: "Sweet corn, cheese, herbs & creamy sauce.",
    price: 109,
    image: "/images/menu/corn-cheese-delight.jpg",
    rating: 4.7,
    popular: false,
    tags: ["Cheesy", "Kids Favourite"],
  },
  {
    id: "chicken-fiesta",
    name: "Chicken Fiesta",
    category: "Chicken",
    description: "Tender chicken, veggies, cheese & spicy mayo.",
    price: 139,
    image: "/images/menu/chicken-fiesta.jpg",
    rating: 4.9,
    popular: true,
    spicy: true,
    tags: ["Chef Special", "Loaded"],
  },
  {
    id: "harihar-special-club",
    name: "Harihar Special Club",
    category: "Paneer",
    description: "Triple decker grilled sandwich with double paneer, cheese & house green chutney.",
    price: 149,
    image: "/images/menu/harihar-special-club.jpg",
    rating: 5.0,
    popular: true,
    tags: ["Triple Layer", "Ultimate"],
  },
  {
    id: "schezwan-veg-blast",
    name: "Schezwan Veg Blast",
    category: "Veg",
    description: "Fiery Schezwan sauce, crisp capsicum, onions & melted mozzarella.",
    price: 99,
    image: "/images/menu/schezwan-veg-blast.jpg",
    rating: 4.6,
    spicy: true,
    tags: ["Spicy Delight"],
  },
  {
    id: "pesto-paneer-grill",
    name: "Pesto Paneer Grill",
    category: "Paneer",
    description: "Fresh basil pesto, cottage cheese cubes, grilled tomato & herbs.",
    price: 129,
    image: "/images/menu/pesto-paneer-grill.jpg",
    rating: 4.8,
    tags: ["Gourmet"],
  },
  {
    id: "bbq-chicken-loaded",
    name: "BBQ Chicken Loaded",
    category: "Chicken",
    description: "Smoky BBQ shredded chicken, caramelized onions & double cheese blend.",
    price: 159,
    image: "/images/menu/bbq-chicken-loaded.jpg",
    rating: 4.9,
    popular: true,
    tags: ["Smoky & Loaded"],
  },
];

export const CATEGORIES = ["All", "Veg", "Paneer", "Cheese", "Chicken"] as const;
