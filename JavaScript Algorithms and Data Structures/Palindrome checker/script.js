function palindrome(str) {
  let originalString = str.replace(/[\W_]/g, "").toLowerCase();

  let strCheck = str
    .toLowerCase()
    .replace(/[\W_]/g, "")
    .split("")
    .reverse("")
    .join("");

  if (originalString === strCheck) {
    return (document.getElementById("result").innerHTML =
      "This is a palindrome.");
  }
  return (document.getElementById("result").innerHTML =
    "It's a trap, this is not a palindrome!");
}
