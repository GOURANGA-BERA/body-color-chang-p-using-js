const btn = document.querySelector("button");

const body = document.body;
const h1 = document.querySelector("h1");

function randomcolor() {
  const red = parseInt(Math.random() * 256);
  const green = parseInt(Math.random() * 256);
  const blue = parseInt(Math.random() * 256);
  const random = `rgb(${red},${green},${blue})`;
  return random;
}

btn.addEventListener("click", () => {
  const color = randomcolor();
  body.style.backgroundColor = color;
  h1.innerText = color;
});
