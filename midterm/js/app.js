const catalogRef = document.querySelector("#catalog");

const products = [
  { image: "images/i210-midterm-product1.webp", name: "My First Fire" },
  { image: "images/i210-midterm-product2.webp", name: "Handy Hand" },
  { image: "images/i210-midterm-product3.webp", name: "NapSack" },
  {
    image: "images/i210-midterm-product4.webp",
    name: "Hot Tub Wildlife Feeder",
  },
  { image: "images/i210-midterm-product5.webp", name: "Toilet Meadow" },
  { image: "images/i210-midterm-product6.webp", name: "Pudding Pouch" },
];

console.table(products);

catalogRef.innerHTML = "";

for (let i = 0; i < products.length; i++) {
  const currentProduct = products[i];

  //   Make the div in js space
  const newDiv = document.createElement("div");
  const newImg = document.createElement("img");
  newImg.src = currentProduct.image;
  newImg.alt = currentProduct.name;

  newDiv.appendChild(newImg);
  newDiv.innerHTML += "<h4>" + currentProduct.name + "</h4>";
  catalogRef.appendChild(newDiv);

  console.log(currentProduct);
}

// for (let i = 0; i < products.length; i++) {
//   const currentProduct = products[i];

//   //   make the div as text
//   let divText = "<div>";
//   divText +=
//     '<img src="' +
//     currentProduct.image +
//     '" alt="' +
//     currentProduct.name +
//     '" />';
//   divText += "<h4>" + currentProduct.name + "</h4>";
//   divText += "</div>";
//   catalogRef.innerHTML += divText;
// }

// for (let index = 0; index < products.length; index++) {
//   const currentProduct = products[index];

//   //   make the div in 1 line
//   catalogRef.innerHTML +=
//     '<div> <img src="' +
//     currentProduct.image +
//     '" alt="' +
//     currentProduct.name +
//     '" /> <h4>' +
//     currentProduct.name +
//     "</h4> </div>";
// }
