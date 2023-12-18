let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let r1 = Math.floor(Math.random() * 256);
  let g1 = Math.floor(Math.random() * 256);
  let b1 = Math.floor(Math.random() * 256);
  document.body.style.backgroundImage = `linear-gradient(to bottom, rgb(${r},${g},${b}), rgb(${r1},${g1},${b1}))`;
});
