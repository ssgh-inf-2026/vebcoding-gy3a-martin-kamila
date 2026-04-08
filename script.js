const testButton = document.getElementById("testButton");
const userInput = document.getElementById("userInput");
const result = document.getElementById("result");

testButton.addEventListener("click", function () {
  const text = userInput.value.trim();

  if (text === "") {
    result.textContent = "Nejprve napiš nějaký text.";
    return;
  }

  result.textContent = `Aplikace funguje. Zadal/a jsi: ${text}`;
});
