function convertToRoman(num) {
  let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  let romanized = "";

  for (let index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  if (typeof num === "number") {
    return (document.getElementById("result").innerHTML = romanized);
  }
  return (document.getElementById("result").innerHTML =
    "Your input is not valid!");
}

document.getElementById("clipboard").addEventListener("click", copyToClipboard);

function copyToClipboard() {
  let copyText = document.getElementById("result");
  let textArea = document.createElement("textarea");

  const emptyResultField = result.innerText;
  if (!emptyResultField) {
    return;
  }

  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();

  alert("Roman numerals copied to clipboard!");
}
