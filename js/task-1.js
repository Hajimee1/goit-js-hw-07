`use strict`;
const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((h_item) => {
  console.log(`Category: ${h_item.querySelector("#categories .item h2").textContent}`);
  console.log(`Element: ${h_item.querySelectorAll("#categories li").length}`);
});
