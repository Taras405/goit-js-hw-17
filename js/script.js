let intervalIndex = 1;

const messagesInterval = setInterval(() => {
  console.log(`Повідомлення № ${intervalIndex}`);
  intervalIndex++;
  if (intervalIndex > 5) {
    clearInterval(messagesInterval);
  }
}, 1000);



const blockItems = document.querySelectorAll(".block__item");

blockItems.forEach((item, index) => {
  let size = 100;
  let growing = true;

  setInterval(() => {
    if (growing) {
      size += 10;
      if (size >= 150) growing = false;
    } else {
      size -= 10;
      if (size <= 100) growing = true;
    }
    item.style.width = size + "px";
    item.style.height = size + "px";

    if (index % 2 === 0) {
      item.style.backgroundColor = growing ? "red" : "lightblue";
    } else {
      item.style.backgroundColor = growing ? "red" : "lightblue";
    }
  }, 500);
});



const items = document.querySelectorAll(".game__item");
const scoreEl = document.getElementById("score");
let score = 0;
let activeIndex = null;

setInterval(() => {
  if (activeIndex !== null) {
    items[activeIndex].classList.remove("active");
  }

  activeIndex = Math.floor(Math.random() * items.length);
  items[activeIndex].classList.add("active");

  setTimeout(() => {
    items[activeIndex].classList.remove("active");
    activeIndex = null;
  }, 1000);
}, 2000);

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (index === activeIndex) {
      score++;
      scoreEl.textContent = score;
      item.classList.remove("active");
      activeIndex = null;
    }
  });
});



const input = document.getElementById("timeInput");
const startBtn = document.getElementById("startBtn");
const message = document.getElementById("message");

startBtn.addEventListener("click", () => {
  let seconds = parseInt(input.value);

  if (isNaN(seconds) || seconds <= 0) {
    message.textContent = "Будь ласка, введіть коректне число!";
    return;
  }

  message.textContent = `Залишилось: ${seconds} секунд`;

  const timer = setInterval(() => {
    seconds--;
    if (seconds > 0) {
      message.textContent = `Залишилось: ${seconds} секунд`;
    } else {
      clearInterval(timer);
      message.textContent = "Час вийшов!";
    }
  }, 1000);
});
