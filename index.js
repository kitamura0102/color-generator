let htmlText = "";
let btn = document.getElementById("btn");
let selectedItem = document.getElementById("select-color");

btn.addEventListener("click", function () {
  colors();
});

function colors() {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=FF0&mode=${selectedItem.value}&count=5`
  )
    .then((response) => response.json())
    .then(function (data) {
      for (let i = 0; i < data.colors.length; i++) {
        htmlText += `<div class="color-boxes"  style="background-color:${data.colors[i].hex.value}"></div>
      `;

      }
      render();
      htmlText = "";
    });
}



function render() {
  const container = (document.getElementById("color-palette").innerHTML =
    htmlText);
  return container;
}
colors();