// References to DOM
const menuRef = document.querySelector("#menu");

// Data
const menuItems = [
  {
    image:
      "http://s7d1.scene7.com/is/image/mcdonalds/DC_202106_0336_LargeVanillaCone_1564x1564-1:nutrition-calculator-tile",
    name: "Vanilla Cone",
  },
  {
    image:
      "http://s7d1.scene7.com/is/image/mcdonalds/DC_201907_1509_MediumChocolateShake_Glass_A1_1564x1564-1:nutrition-calculator-tile",
    name: "Chocolate Shake",
  },
  {
    image:
      "http://s7d1.scene7.com/is/image/mcdonalds/DC_201907_1598_MediumVanillaShake_Glass_A1_1564x1564-1:nutrition-calculator-tile",
    name: "Vanilla Shake",
  },
  {
    image:
      "http://s7d1.scene7.com/is/image/mcdonalds/DC_201907_1513_MediumStrawberryShake_Glass_A1_1564x1564-1:nutrition-calculator-tile",
    name: "Strawberry Shake",
  },
];

menuRef.innerHTML = "";

for (let index = 0; index < menuItems.length; index++) {
  const item = menuItems[index];

  const newArticle = document.createElement("article");
  const newImg = document.createElement("img");
  newImg.src = item.image;
  newArticle.appendChild(newImg);

  const newP = "<p>" + item.name + "</p>";
  newArticle.innerHTML += newP;

  menuRef.appendChild(newArticle);
}
