const cards = document.querySelectorAll(".card");
const fruitArray = ["citrus", "kiwi", "orange", "blueberries"];

const randomizer = () => Math.floor(Math.random() * fruitArray.length);

for (let i = 0; i < cards.length; i++) {
  const randomFruit = fruitArray[randomizer()];
  cards[i].onclick = () => {
    cards[i].classList.add(randomFruit);
  };
}
