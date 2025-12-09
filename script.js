const text = document.querySelector("#text");
const counter = document.querySelector("#counter");
const countBtn = document.querySelector("#countBtn");
let countSpace = true;

const countChar = () => {
  const charCount = countSpace ? text.value.length : text.value.replaceAll(" ", "").length;
  const wordCount = text.value === "" ? 0 : text.value.trim().split(" ").length;
  counter.textContent = `Characters: ${charCount} | Words: ${wordCount}`;
};

countBtn.addEventListener("click", () => {
  countSpace = !countSpace;
  countBtn.textContent = `${countSpace ? "Don't" : ""} Count Spaces`;
  countChar();
});
