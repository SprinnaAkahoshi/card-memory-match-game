window.onload = () => {
  const cards = document.querySelectorAll("[data-card]");
  const grid = document.querySelector("[data-grid]");
  const attempts = document.querySelector("#attempts-count");
  const score = document.querySelector("#score-keeper");
  const timer = document.querySelector("#count-down");
  const wario = document.querySelector("#wario-modal");
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
  let firstClick = null;
  let secondClick = null;
  let attemptCount = 0;
  let scoreCount = 0;
  let countDown = 5;

  const randomizer = () => Math.floor(Math.random() * fruitArray.length);

  const spliceRandomFruit = (index) => fruitArray.splice(index, 1)[0];

  const updateCountdownText = () => {
    timer.innerHTML = countDown;
  };

  const endGame = () => {
    wario.classList.remove("hide");
  };

  const countDownTimer = setInterval(() => {
    countDown -= 1;
    updateCountdownText();
    if (countDown === 0) {
      clearInterval(countDownTimer);
      endGame();
    }
  }, 1000);

  const resetClicks = () => {
    firstClick = null;
    secondClick = null;
  };

  const firstSecondClickMismatchHandler = () => {
    grid.classList.add("no-click");
    setTimeout(() => {
      firstClick.children[0].classList.remove("hide"); //firstclick.children is cardcover
      secondClick.children[0].classList.remove("hide");
      firstClick.classList.remove("no-click");
      secondClick.classList.remove("no-click");
      resetClicks();
      grid.classList.remove("no-click");
    }, 1000);
  };

  const clickValidator = (card) => {
    if (firstClick === null && secondClick === null) {
      firstClick = card; // first click is randomfruit
    } else if (firstClick !== null && secondClick === null) {
      secondClick = card; // if first click is randomfruit and second click is not null, second click is randomfruit
      const firstClickClasses = firstClick.classList.value; // value of firstClick classes
      const secondClickClasses = secondClick.classList.value; //value of secondClick classes
      attemptCount += 1;
      if (firstClickClasses !== secondClickClasses) {
        firstSecondClickMismatchHandler();
      } else if (firstClickClasses === secondClickClasses) {
        scoreCount += 1;
        resetClicks();
      }
    }
  };

  const tracker = () => {
    attempts.innerHTML = attemptCount;
    score.innerHTML = scoreCount;
  };

  const handleClick = (card) => {
    const cardCover = card.children[0];
    cardCover.classList.add("hide");
    card.classList.add("no-click");
    clickValidator(card);
    tracker();
  };

  (() => {
    for (let i = 0; i < cards.length; i++) {
      const randomNum = randomizer();
      const randomFruit = spliceRandomFruit(randomNum);
      cards[i].classList.add(randomFruit); // adds fruit class to card at i
      cards[i].onclick = () => handleClick(cards[i]);
    }
  })();
};
