const cards = document.querySelectorAll("[data-card]");
let firstClick = null;
let secondClick = null;
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
    const cardCover = cards[i].children[0];
    cardCover.classList.add("hide");
    cards[i].classList.add("no-click");
    if (!firstClick && !secondClick) {
      firstClick = cards[i];
    } else if (firstClick && !secondClick) {
      secondClick = cards[i];
      const firstClickClasses = firstClick.classList.value;
      const secondClickClasses = secondClick.classList.value;
      if (firstClickClasses !== secondClickClasses) {
        firstClick.children[0].classList.remove("hide");
        secondClick.children[0].classList.remove("hide");
        firstClick.classList.remove("no-click");
        secondClick.classList.remove("no-click");
      } else if (firstClickClasses === secondClickClasses) {
        // firstClick.classList.add("no-click");
        // secondClick.classList.add("no-click");
      }
      firstClick = null;
      secondClick = null;
    }
  };
}
