const text = document.querySelector("#text");
const counter = document.querySelector("#counter");

const countChar = () => {
  const charCount = text.value.length;
  const charCountWithoutSpaces = text.value.replaceAll(" ", "").length;
  const wordCount = text.value === "" ? 0 : text.value.trim().split(" ").length;
  counter.textContent = `Characters: ${charCount} | ${charCountWithoutSpaces} (without spaces) || Words: ${wordCount}`;
};

const clearInput = () => {
  text.value = "";
};
