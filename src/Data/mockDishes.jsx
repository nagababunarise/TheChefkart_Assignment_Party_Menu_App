// Here I Imported Images to my local storage...
import Kadhai_Paneer from "../assets/Kadai-Paneer-01.jpg";
import Chicken_Biryani from "../assets/Chicken-biryani-02.jpg";
import Paneer_Butter_Masala from "../assets/Paneer-Butter-Masala-03.jpg";
import Mutton_Rogan_Josh from "../assets/Mutton-Rogan-josh-04.jpg";
import Spring_Rolls from "../assets/Spring-Rolls-05.jpg";
import Chicken_Tikka from "../assets/Chicken-Tikka-06.jpg";
import French_Fries from "../assets/French-Fries-08.jpg";
import Garlic_Bread from "../assets/Garlic-Bread-07.jpg";
import Gulab_Jamun from "../assets/Gulab-Jamun-09.jpg";
import Ice_Cream from "../assets/Ice-Cream-10.jpg";
import Masala_Dosa from "../assets/Masala-Dosa-11.jpg";
import Fish_Curry from "../assets/Fish-Curry-12.jpg";
import Veg_Pulao from "../assets/Veg-Pulao-13.jpg";
import Chicken_Thandoori from "../assets/Chicken-Thandoori-14.jpg";
import Chole_Bhature from "../assets/Chole-Bhature-14.jpg";
import Egg_Curry from "../assets/Egg-Curry-15.jpg";
import Paneer_Tikka from "../assets/Paneer-Tikka-17.jpg";
import Samosa from "../assets/Samosa-18.jpg";
import Onion_Rings from "../assets/Onion-Rings-18.jpg";
import Cheese_Nachos from "../assets/Chees-Nachos-19.jpg";
import Rasagulla from "../assets/Rasagulla-20.jpg";
import Brownie from "../assets/Browine-21.jpg";
import Pasta_Alfredo from "../assets/Pasta-Alfredo-22.jpg";
import Shrimp_Fried_Rice from "../assets/Shrimp-Fried-Rice-23.jpg";
import Falooda from "../assets/Falooda-24.jpg";

// Exported to Data .....................
const mockDishes = [
  {
    id: 1,
    name: "Kadhai Paneer",
    description:
      "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: Kadhai_Paneer,
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Onion", quantity: "2 large" },
      { name: "Capsicum", quantity: "1 large" },
      { name: "Tomato Puree", quantity: "1 cup" },
    ],
  },
  {
    id: 2,
    name: "Chicken Biryani",
    description:
      "Fragrant basmati rice cooked with marinated chicken and aromatic spices.",
    image: Chicken_Biryani,
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", quantity: "500g" },
      { name: "Basmati Rice", quantity: "2 cups" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Spices", quantity: "to taste" },
    ],
  },
  {
    id: 3,
    name: "Paneer Butter Masala",
    description: "Paneer cubes in a buttery, creamy tomato gravy.",
    image: Paneer_Butter_Masala,
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Butter", quantity: "3 tbsp" },
      { name: "Tomato Puree", quantity: "1.5 cups" },
      { name: "Cream", quantity: "1/2 cup" },
    ],
  },
  {
    id: 4,
    name: "Mutton Rogan Josh",
    description:
      "A Kashmiri delicacy made with tender mutton pieces in aromatic gravy.",
    image: Mutton_Rogan_Josh,
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Mutton", quantity: "500g" },
      { name: "Onion", quantity: "2 large" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Spices", quantity: "to taste" },
    ],
  },
  {
    id: 5,
    name: "Spring Rolls",
    description: "Crispy rolls filled with spiced vegetables served with dip.",
    image: Spring_Rolls,
    mealType: "STARTER",
    type: "VEG",
    ingredients: [
      { name: "Cabbage", quantity: "1 cup" },
      { name: "Carrot", quantity: "1 cup" },
      { name: "Spring Roll Sheets", quantity: "8" },
      { name: "Oil", quantity: "for frying" },
    ],
  },
  {
    id: 6,
    name: "Chicken Tikka",
    description:
      "Juicy chicken chunks marinated in spices and grilled to perfection.",
    image: Chicken_Tikka,
    mealType: "STARTER",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", quantity: "400g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Spices", quantity: "to taste" },
      { name: "Lemon Juice", quantity: "2 tbsp" },
    ],
  },
  {
    id: 7,
    name: "French Fries",
    description: "Crispy golden potato fries served with ketchup.",
    image: French_Fries,
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Potato", quantity: "3 large" },
      { name: "Salt", quantity: "to taste" },
      { name: "Oil", quantity: "for frying" },
    ],
  },
  {
    id: 8,
    name: "Garlic Bread",
    description: "Toasted bread topped with garlic butter and herbs.",
    image: Garlic_Bread,
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Bread", quantity: "4 slices" },
      { name: "Garlic", quantity: "4 cloves" },
      { name: "Butter", quantity: "3 tbsp" },
      { name: "Herbs", quantity: "1 tsp" },
    ],
  },
  {
    id: 9,
    name: "Gulab Jamun",
    description: "Soft fried dumplings soaked in sugar syrup.",
    image: Gulab_Jamun,
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Khoya", quantity: "200g" },
      { name: "Flour", quantity: "2 tbsp" },
      { name: "Sugar Syrup", quantity: "2 cups" },
      { name: "Cardamom", quantity: "1/2 tsp" },
    ],
  },
  {
    id: 10,
    name: "Ice Cream Sundae",
    description: "Chilled dessert with ice cream, syrup, and toppings.",
    image: Ice_Cream,
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Vanilla Ice Cream", quantity: "2 scoops" },
      { name: "Chocolate Syrup", quantity: "2 tbsp" },
      { name: "Nuts", quantity: "1 tbsp" },
      { name: "Cherry", quantity: "1" },
    ],
  },
  {
    id: 11,
    name: "Masala Dosa",
    description: "Crispy rice crepe filled with spiced potato filling.",
    image: Masala_Dosa,
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Rice Batter", quantity: "2 cups" },
      { name: "Potato", quantity: "3 medium" },
      { name: "Onion", quantity: "1 large" },
      { name: "Green Chili", quantity: "2" },
    ],
  },
  {
    id: 12,
    name: "Fish Curry",
    description: "Tangy and spicy curry with tender fish pieces.",
    image: Fish_Curry,
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Fish", quantity: "500g" },
      { name: "Coconut Milk", quantity: "1 cup" },
      { name: "Onion", quantity: "1 large" },
      { name: "Tamarind", quantity: "2 tbsp" },
    ],
  },
  {
    id: 13,
    name: "Vegetable Pulao",
    description: "Aromatic rice cooked with mixed vegetables and spices.",
    image: Veg_Pulao,
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Basmati Rice", quantity: "2 cups" },
      { name: "Carrot", quantity: "1 cup" },
      { name: "Peas", quantity: "1/2 cup" },
      { name: "Spices", quantity: "to taste" },
    ],
  },
  {
    id: 14,
    name: "Tandoori Chicken",
    description:
      "Chicken marinated with yogurt and spices, roasted in tandoor.",
    image: Chicken_Thandoori,
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Chicken", quantity: "1 kg" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Lemon Juice", quantity: "2 tbsp" },
      { name: "Spices", quantity: "to taste" },
    ],
  },
  {
    id: 15,
    name: "Chole Bhature",
    description: "Spicy chickpeas served with fried Indian bread.",
    image: Chole_Bhature,
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Chickpeas", quantity: "1 cup" },
      { name: "Flour", quantity: "2 cups" },
      { name: "Onion", quantity: "1 large" },
      { name: "Tomato", quantity: "2 medium" },
    ],
  },
  {
    id: 16,
    name: "Egg Curry",
    description: "Boiled eggs cooked in a spicy onion tomato gravy.",
    image: Egg_Curry,
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Eggs", quantity: "4" },
      { name: "Onion", quantity: "2 large" },
      { name: "Tomato", quantity: "2 medium" },
      { name: "Spices", quantity: "to taste" },
    ],
  },
  {
    id: 17,
    name: "Paneer Tikka",
    description: "Paneer cubes marinated in spices and grilled.",
    image: Paneer_Tikka,
    mealType: "STARTER",
    type: "VEG",
    ingredients: [
      { name: "Paneer", quantity: "250g" },
      { name: "Yogurt", quantity: "1/2 cup" },
      { name: "Spices", quantity: "to taste" },
      { name: "Capsicum", quantity: "1 large" },
    ],
  },
  {
    id: 18,
    name: "Samosa",
    description: "Crispy fried snack stuffed with spicy potato filling.",
    image: Samosa,
    mealType: "STARTER",
    type: "VEG",
    ingredients: [
      { name: "Potato", quantity: "2 medium" },
      { name: "Flour", quantity: "2 cups" },
      { name: "Green Chili", quantity: "2" },
      { name: "Oil", quantity: "for frying" },
    ],
  },
  {
    id: 19,
    name: "Onion Rings",
    description: "Crispy fried onion rings coated in batter.",
    image: Onion_Rings,
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Onion", quantity: "2 large" },
      { name: "Flour", quantity: "1 cup" },
      { name: "Corn Flour", quantity: "1/2 cup" },
      { name: "Oil", quantity: "for frying" },
    ],
  },
  {
    id: 20,
    name: "Cheese Nachos",
    description: "Crispy nachos topped with melted cheese and salsa.",
    image: Cheese_Nachos,
    mealType: "SIDES",
    type: "VEG",
    ingredients: [
      { name: "Nachos", quantity: "100g" },
      { name: "Cheese", quantity: "1/2 cup" },
      { name: "Salsa", quantity: "1/4 cup" },
      { name: "Jalapenos", quantity: "2 tbsp" },
    ],
  },
  {
    id: 21,
    name: "Rasgulla",
    description: "Soft spongy cheese balls soaked in sugar syrup.",
    image: Rasagulla,
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Paneer", quantity: "200g" },
      { name: "Sugar Syrup", quantity: "2 cups" },
      { name: "Cardamom", quantity: "1/2 tsp" },
    ],
  },
  {
    id: 22,
    name: "Brownie",
    description: "Rich and fudgy chocolate dessert.",
    image: Brownie,
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Chocolate", quantity: "100g" },
      { name: "Flour", quantity: "1 cup" },
      { name: "Butter", quantity: "100g" },
      { name: "Sugar", quantity: "1/2 cup" },
    ],
  },
  {
    id: 23,
    name: "Pasta Alfredo",
    description: "Creamy pasta with white sauce and cheese.",
    image: Pasta_Alfredo,
    mealType: "MAIN COURSE",
    type: "VEG",
    ingredients: [
      { name: "Pasta", quantity: "200g" },
      { name: "Milk", quantity: "1 cup" },
      { name: "Cheese", quantity: "1/2 cup" },
      { name: "Butter", quantity: "2 tbsp" },
    ],
  },
  {
    id: 24,
    name: "Shrimp Fried Rice",
    description: "Rice stir-fried with shrimp, vegetables, and soy sauce.",
    image: Shrimp_Fried_Rice,
    mealType: "MAIN COURSE",
    type: "NON-VEG",
    ingredients: [
      { name: "Shrimp", quantity: "200g" },
      { name: "Rice", quantity: "2 cups" },
      { name: "Soy Sauce", quantity: "2 tbsp" },
      { name: "Vegetables", quantity: "1 cup" },
    ],
  },
  {
    id: 25,
    name: "Falooda",
    description: "Sweet dessert drink with ice cream, rose syrup, and noodles.",
    image: Falooda,
    mealType: "DESSERT",
    type: "VEG",
    ingredients: [
      { name: "Rose Syrup", quantity: "2 tbsp" },
      { name: "Vermicelli", quantity: "1/2 cup" },
      { name: "Ice Cream", quantity: "1 scoop" },
      { name: "Basil Seeds", quantity: "1 tbsp" },
    ],
  },
];

export default mockDishes;
