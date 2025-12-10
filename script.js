const text = document.querySelector("#text");
const counter = document.querySelector("#counter");
const countBtn = document.querySelector("#countBtn");

const countChar = () => {
  const charCount = text.value.length;
  const charCountWithoutSpaces = text.value.replaceAll(" ", "").length;
  const wordCount = text.value === "" ? 0 : text.value.trim().split(" ").length;
  counter.textContent = `Characters: ${charCount} | ${charCountWithoutSpaces} (without spaces) || Words: ${wordCount}`;
};

countBtn.addEventListener("click", () => {
  countSpace = !countSpace;
  countBtn.textContent = `${countSpace ? "Don't" : ""} Count Spaces`;
  countChar();
});
