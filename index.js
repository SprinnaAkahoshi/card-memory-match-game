const cards = document.querySelectorAll("[data-card]");
const grid = document.querySelector("[data-grid]");
let firstClick = null;
let secondClick = null;
let attempts = 0;
let score = 0;
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
const resetClicks = () => {
  firstClick = null;
  secondClick = null;
};

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
      attempts += 1;
      if (firstClickClasses !== secondClickClasses) {
        grid.classList.add("no-click");
        setTimeout(() => {
          firstClick.children[0].classList.remove("hide");
          secondClick.children[0].classList.remove("hide");
          firstClick.classList.remove("no-click");
          secondClick.classList.remove("no-click");
          resetClicks();
          grid.classList.remove("no-click");
        }, 1000);
      } else if (firstClickClasses === secondClickClasses) {
        score += 1;
        resetClicks();
      }
    }
    console.log(`attempts: ${attempts}`);
    console.log(`score: ${score}`);
  };
}
