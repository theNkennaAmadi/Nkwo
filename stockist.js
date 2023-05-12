const pLinks = [...document.querySelectorAll("[a-physical]")];

pLinks.map((link) => {
  let srcText = link.parentElement.parentElement.querySelector("[stock-a]")
    .textContent;
  let nameT = link.previousElementSibling.textContent;
  let dirUrl = `https://www.google.co.uk//maps/search/${nameT},${srcText}`;
  link.setAttribute("href", dirUrl);
});

console.log("hello");
