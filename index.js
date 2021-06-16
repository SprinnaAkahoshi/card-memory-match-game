const cards = document.querySelectorAll("[data-card]");
const fruitArray = [
  "citrus",
  "kiwi",
  "orange",
  "blueberries",
  "citrus",
  "kiwi",
  "orange",
  "blueberries",
];

const randomizer = () => Math.floor(Math.random() * fruitArray.length);

for (let i = 0; i < cards.length; i++) {
  const randomNum = randomizer();
  const randomFruit = fruitArray.splice(randomNum, 1)[0];
  cards[i].classList.add(randomFruit);
  cards[i].onclick = () => {
    cards[i].children[0].classList.add("hide");
  };
}
