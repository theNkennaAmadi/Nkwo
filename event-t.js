const arrow = document.querySelector(".m-embed");
document.querySelector(".back-btn").addEventListener("mouseenter", () => {
  arrow.classList.add("move");
});

document.querySelector(".back-btn").addEventListener("mouseleave", () => {
  arrow.classList.remove("move");
});

const eventDates = [...document.querySelectorAll(".event-sub-block")];

eventDates.map((date) => {
  if (
    date.querySelector("[event-start]").textContent === date.querySelector("[event-end]").textContent
  ) {
    date.querySelector("[event-end]").remove();
  }
});
