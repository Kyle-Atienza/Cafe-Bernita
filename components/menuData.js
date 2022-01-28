export const menuItem = [
  {
    name: "Hawaiana",
    description: "Tomato Sauce, Mozzarella Cheese, Pineapple, Ham",
    variations: "TwelveIn",
    price: "249"
  }
];

class OrderItem {
  menuName;
  menuVariation;
  menuPrice;

  constructor(name, variation, price) {
    this.menuName = name;
    this.menuVariation = variation;
    this.menuPrice = price;
  }
}
