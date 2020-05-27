// var game = {};
// game.init = function () {
//   setupMode();
//   setupListener();
//   resetM();
// };
// gameOver.init();

var numberOfSquares = 6;
var colors = [];
var pickedColor;

var messageD = document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var resetB = document.querySelector("#reset");
var easyB = document.querySelector("#easyBtn");
var hardB = document.querySelector("#hardBtn");
var modeB = document.querySelectorAll(".mode");

init();
function init() {
  setupMode();
  setupListener();
  resetM();
}

function setupMode() {
  for (var i = 0; i < modeB.length; i++) {
    modeB[i].addEventListener("click", function () {
      modeB[0].classList.remove("selected");
      modeB[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy"
        ? (numberOfSquares = 3)
        : (numberOfSquares = 6);
      // if (this.textContent === "Easy") {
      //   numberOfSquares = 3;
      // } else {
      //   numberOfSquares = 6;
      // }
      resetM();
    });
  }
}

function setupListener() {
  for (var i = 0; i < squares.length; i++) {
    //點擊偵測
    squares[i].addEventListener("click", function () {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageD.textContent = "Correct";
        changeColor(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetB.textContent = "Play Again";
      } else {
        this.style.backgroundColor = "#232323";
        messageD.textContent = "Try Again";
      }
    });
  }
}

function resetM() {
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      //color[i]如果有顏色
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
  messageD.textContent = "";
  resetB.textContent = "New Colors";
}
// easyB.addEventListener("click", function () {
//   hardB.classList.remove("selected");
//   easyB.classList.add("selected");
//   numberOfSquares = 3;
//   colors = generateRandomColors(numberOfSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
//   h1.style.backgroundColor = "steelblue";
//   messageD.textContent = "";
//   resetB.textContent = "New Colors";
// });
// hardB.addEventListener("click", function () {
//   hardB.classList.add("selected");
//   easyB.classList.remove("selected");
//   numberOfSquares = 6;
//   colors = generateRandomColors(numberOfSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//   }
//   h1.style.backgroundColor = "steelblue";
//   messageD.textContent = "";
//   resetB.textContent = "New Colors";
// });

resetB.addEventListener("click", function () {
  resetM();
  // colors = generateRandomColors(numberOfSquares);
  // pickedColor = pickColor();
  // colorDisplay.textContent = pickedColor;
  // for (var i = 0; i < squares.length; i++) {
  //   //加入初始顏色
  //   squares[i].style.backgroundColor = colors[i];
  // }
  // h1.style.backgroundColor = "steelblue";
  // messageD.textContent = "";
  // resetB.textContent = "New Colors";
});

//贏得遊戲全部顏色同步
function changeColor(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

//選擇一個顏色
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
//生成顏色陣列
function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}
//生成RGB顏色
function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  //rgb(n," "n," "n) 要留空白
  return "rgb(" + r + "," + " " + g + "," + " " + b + ")";
}
