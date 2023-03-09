import productOne from "../assets/product1.png";
import productTwo from "../assets/product2.png";
import productThree from "../assets/product3.png";
import productFour from "../assets/product4.png";
import productFive from "../assets/product5.png";
import productSix from "../assets/product6.png";
import productSeven from "../assets/product7.png";
const productsData = [
  {
    id: 1,
    img: productOne,
    desc: "OPTIMUM NUTRITION GOLD STANDARD 100% WHEY PROTEIN",
    benifits: [
      "Post-Workout Muscle Support & Recovery",
      "24 Grams of Protein per Serving to Help Build and Maintain Muscle³",
      "5.5 Grams of Naturally Occurring BCAAs per Serving to Support Endurance and Recovery",
      "The World's Best-Selling Whey Protein Powder",
    ],
    flavors: ["Banana Cream", "Chocolate Coconut", "Coffee"],
    type: "Post-Workout Muscle Support & Recovery",
    overview:
      "Each serving of the world’s best-selling whey protein powder provides 24 grams of high-quality whey protein primarily from Whey Protein Isolate, which has had excess carbohydrates, fat, and lactose ‘isolated’ out using sophisticated filtering technologies. The powder is also instantized for easy mixing using just a glass and spoon. With more than 20 different flavors – including naturally flavored options – there’s no doubt this is the Optimum Nutrition Gold Standard 100% Whey Protein.",

    price: 85.99,
    link: "#",
    size: [
      20,
      30,
      70
    ],
  },
  {
    id: 2,
    img: productTwo,
    desc: "SERIOUS MASS",
    benifits: [
      "For Muscle Building & Weight Gain Goals",
      "1,250 Calories per Serving to Help Boost Calorie Intake ¹",
      "50 Grams of Protein per Serving to Help Build and Maintain Muscle ¹ ³",
      "252-254 Grams of Carbohydrates per Serving to Help Fuel Workouts ¹",
    ],
    flavors: ["Banana", "Chocolate", "Vanilla"],
    type: "For Muscle Building & Weight Gain Goals",
    overview:
      "SERIOUS MASS is the ultimate muscle building and weight gain formula. With 1,250 calories per 2-scoop serving and 50 grams of protein to support muscle recovery, this powder makes the ideal post-workout and between meals shake for sizing up your goals. SERIOUS MASS provides you with the tools you need to support your weight gains goals.¹",

    price: 30.99,
    link: "#",
    size: [
      30,
      70
    ],
  },
  {
    id: 3,
    img: productThree,
    desc: "MICRONIZED CREATINE POWDER",
    benifits: [
      "Muscle Size, Strength & Performance",
      "5 Grams of Pure Creatine Monohydrate per Serving",
      "Helps Support ATP Recycling & Explosive Movements¹ ³",
      "Zero Calories & Zero Carbohydrates",
    ],
    flavors: ["Banana"],
    type: "Muscle Size, Strength & Performance",
    overview:
      "Creatine monohydrate has been extensively studied and shown to help support muscle size, strength and recovery when used consistently over time in conjunction with a healthy, balanced diet and regular weight training¹.",

    price: 39.99,
    link: "#",

    size: [
      30,
      70
    ],
  },
  {
    id: 4,
    img: productFour,
    desc: "OPTI-MEN",
    benifits: [
      "Multi-Vitamin for Active Men",
      "Supports Cellular Energy & Metabolism - B-Vitamins Support the Breakdown and Transport of Nutrients¹",
      "Supports Muscle Health¹",
      "Supports Immunity¹",
    ],
    flavors: [],
    type: "Multi-Vitamin for Active Men",
    overview:
      "OPTI-MEN® is more than a multi. It’s a NUTRIENT OPTIMIZATION SYSTEM OPTI-MEN® providing 75+ active ingredients in 4 blends specifically designed to support the nutrient needs of active men. Each 3-tablet serving provides free form amino acids, antioxidant vitamins A, C and E, essential minerals and botanical extracts in foundational amounts that can be built on by consuming a healthy, balanced diet.¹",

    price: 31.99,
    link: "#",
    size: [
      30,
      70
    ],
  },
  {
    id: 5,
    img: productFive,
    desc: "BCAA 1000",
    benifits: [
      "Branched Chain Amino Acid Support",
      "2:1:1 ratio of L-Leucine, L-Isoleucine and L-Valine",
      "Essential Amino Acid Support",
      "Versatile Amino Acid Support",
    ],
    flavors: [],
    type: "Branched Chain Amino Acid Support",
    overview:
      "BCAA 1000 Caps are recommended first thing in the morning and/or during the 30 minutes just before or immediately after training. Simply take 2 capsules with your favourite beverage, or with your protein shake.",

    price: 12.99,
    link: "#",
    size: [
      30,
      70
    ],
  },
  {
    id: 6,
    img: productSix,
    desc: "ESSENTIAL AMIN.O. ENERGY",
    benifits: [
      "Anytime Energy & Muscle Recovery",
      "100 mg of Caffeine per Serving from Coffee Bean and/or Tea Leaf",
      "5 Grams of Amino Acids for Muscle Recovery Support¹",
      "5 to 10 Calories Per Serving with Zero Sugar",
    ],
    flavors: ["Fruit Fusion"],
    type: "Anytime Energy & Muscle Recovery",
    overview:
      "Mix up ESSENTIAL AMIN.O. ENERGY anytime you want a boost of energy, focus and muscle recovery support. Each serving provides 100 mg of caffeine from natural sources to support energy and focus along with 5 grams of amino acids for muscle support.¹",

    price: 27.99,
    link: "#",
    size: [
      30,
      70
    ],
  },
  {
    id: 7,
    img: productSeven,
    desc: "GOLD STANDARD 100% CASEIN",
    benifits: [
      "Slow-Digesting Protein for Overnight Muscle Recovery",
      "24 Grams of Protein per serving to Help Build and Maintain Muscle³",
      "Nearly 5 Grams of Naturally Occurring BCAAs per Serving to Support Endurance and Recovery",
      "Ideal for Use Between Meals and Before Bed",
    ],
    flavors: ["Chocolate Supreme", "Chocolate Coconut", "Coffee"],
    type: "Slow-Digesting Protein for Overnight Muscle Recovery",
    overview:
      "Casein, a slower digesting and absorbing protein can be used after exercise, between meals or before bed to help support satiety and muscle recovery. GOLD STANDARD 100% CASEIN™ delivers BCAAs to recovering muscles for several hours. By using only premium micellar casein as a protein source, we’ve created a protein powder that sets the GOLD STANDARD® for slow digesting protein support.",

    price: 53.99,
    link: "#",
    size: [
      30,
      70
    ],
  },
];
export default productsData;
