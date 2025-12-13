const text = document.querySelector("#text");
const counter = document.querySelector("#counter");

const countChar = () => {
  const charCount = text.value.length;
  const charCountWithoutSpaces = text.value.replaceAll(/\s/g, "").length;
  const wordCount = text.value === "" ? 0 : text.value.trim().split(" ").length;
  counter.innerHTML = `
  <li>Characters: ${charCount} </li>
  <li>Characters without spaces: ${charCountWithoutSpaces} </li>
  <li>Words: ${wordCount}</li>
  `;
};

const clearInput = () => {
  text.value = "";
  countChar();
};
