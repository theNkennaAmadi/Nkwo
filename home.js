const img1 = [...document.querySelectorAll("[hero='1']")];
const img2 = [...document.querySelectorAll("[hero='2']")];
const length1 = img1.length;
const length2 = img2.length;

console.log(img1, img2);

setInterval(() => {
  let currIndex = 0;
  img1.map((img) => {
    img.classList.toggle("img-hidden");
  });
  currIndex++;
  if (currIndex > length1 - 1) {
    currIndex = 0;
  }
}, 4000);

setInterval(() => {
  let currIndex2 = 0;
  img2.map((img) => {
    img.classList.toggle("img-hidden");
  });
  currIndex2++;
  if (currIndex2 > length2 - 1) {
    currIndex2 = 0;
  }
}, 5500);

const tWrap = document.querySelector(".home-hero-p-text");
const text = document.querySelector(".home-hero-p").textContent;

const typewriter = new Typewriter(tWrap, {
  loop: false,
  delay: 75,
});

typewriter.typeString(text).start();

const eventDates = [...document.querySelectorAll(".home-event-date")];

eventDates.map((date) => {
  if (
    date.querySelector("[event-start]") == date.querySelector("[event-end]")
  ) {
    date.querySelector("[event-end]").remove();
  }
});
