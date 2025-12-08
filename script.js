const text = document.querySelector("#text");
const counter = document.querySelector("#counter");

const countChar = () => {
  const count = text.value.length;
  counter.textContent = `Characters: ${count}`;
};
