const myListItem = document.querySelectorAll("li");
const myButton1 = document.getElementById("font_s");
const myHeading = document.querySelector("h1");
const myButton2 = document.getElementById("font_f");
const myOrderedList = document.querySelector("ol");
const myFontSize = document.getElementById("font-size");
const myFontFamily = document.getElementById("font-family");
let clickAmount = 1;
let clickAmountFamily = 1;

function changeFontSize() {
  console.log(myOrderedList.style.fontFamily);
  let fontSizeValue;
  console.log(clickAmount);
  if (clickAmount === 1) {
    fontSizeValue = "20px";
  } else if (clickAmount === 2) {
    fontSizeValue = "24px";
  } else if (clickAmount === 3) {
    fontSizeValue = "28px";
  } else if (clickAmount === 4) {
    fontSizeValue = "32px";
  } else if (clickAmount === 5) {
    fontSizeValue = "16px";
  }

  myOrderedList.style.fontSize = `${fontSizeValue}`;

  clickAmount++;
  if (clickAmount > 5) {
    clickAmount = 1;
  }
}

function changeFontFamily() {
  console.log(clickAmountFamily);
  if (clickAmountFamily === 1) {
    myOrderedList.style.fontFamily = "Roboto, sans-serif";
  } else if (clickAmountFamily === 2) {
    myOrderedList.style.fontFamily = "Mansalva, cursive";
  } else if (clickAmountFamily === 3) {
    myOrderedList.style.fontFamily = "Grenze, serif";
  } else if (clickAmountFamily === 4) {
    myOrderedList.style.fontFamily = "Turret Road, serif";
  } else if (clickAmountFamily === 5) {
    myOrderedList.style.fontFamily = "Courier New, Courier, monospace";
  }

  clickAmountFamily++;
  if (clickAmountFamily > 5) {
    clickAmountFamily = 1;
  }
}

const x = window.getComputedStyle(myOrderedList).fontSize;
myFontSize.textContent = `Fonttikoko nyt: ${x}`;

const fontti = window.getComputedStyle(myOrderedList).fontFamily;
myFontFamily.textContent = `Fontti on nyt: ${fontti}`;

function setFontFamily() {
  const fontti = window.getComputedStyle(myOrderedList).fontFamily;
  myFontFamily.textContent = `Fontti on nyt: ${fontti}`;
}

function setFontSize() {
  const x = window.getComputedStyle(myOrderedList).fontSize;
  myFontSize.textContent = `Fonttikoko nyt: ${x}`;
}

myButton1.addEventListener("click", function () {
  changeFontSize();
  setFontSize();
});

myButton2.addEventListener("click", function () {
  changeFontFamily();
  setFontFamily();
});
