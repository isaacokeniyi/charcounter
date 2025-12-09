const text = document.querySelector("#text");
const counter = document.querySelector("#counter");

const countChar = () => {
  const charCount = text.value.length;
  const wordCount = text.value.trim().split(" ").length;
  counter.textContent = `Characters: ${charCount} | Words: ${wordCount}`;
};
