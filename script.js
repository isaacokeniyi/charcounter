const text = document.querySelector("#text");
const counter = document.querySelector("#counter");
const theme = document.querySelector("#theme");
const all = document.querySelectorAll("html *");
const deviceTheme = document.querySelector("#device-theme");

window.addEventListener("load", () => {
  const currentText = localStorage.getItem("text");
  if (currentText) {
    text.value = currentText;
  }
});

const countChar = () => {
  const charCount = text.value.replaceAll(/\n/g, "").length;
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

const switchTheme = () => {
  switch (theme.value) {
    case "device":
      deviceTheme.disabled = false;
      localStorage.setItem("text", text.value);
      window.location.reload();
      break;
    case "light":
      deviceTheme.disabled = true;
      all.forEach((elem) => {
        elem.classList.remove("darkmode");
      });
      break;
    case "dark":
      deviceTheme.disabled = true;
      all.forEach((elem) => {
        elem.classList.add("darkmode");
      });
      break;

    default:
      break;
  }
};
