const myListItem = document.querySelectorAll("li");
const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");
let clickAmount = 1;

function changeFontSize() {
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

  myListItem.forEach((element) => {
    element.style.fontSize = `${fontSizeValue}`;
  });

  clickAmount++;
  if (clickAmount > 5) {
    clickAmount = 1;
  }
}

function myFunction() {
  alert(document.getElementById("demo").style.fontSize);
}

// function changeHeadingFontSize() {
//     myHeading.style.fontSize
// }

myButton.addEventListener("click", function () {
  changeFontSize();
});
