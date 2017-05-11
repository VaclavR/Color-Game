var container = document.getElementById("container");
var displayColor = document.getElementById("displayColor");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");
var colors, squares = [];

function createColors() {
    for (var i = 0; i < squares.length; i++) {
        for (var i2 = 0; i2 < 3; i2++) {
            var r = Math.floor(Math.random() * 256); 
            var g = Math.floor(Math.random() * 256); 
            var b = Math.floor(Math.random() * 256); 
        }
        var color = "rgb(" + r + ", " + g + ", " + b + ")";
        colors.push(color);
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    displayColor.textContent = (colors[Math.floor(Math.random() * squares.length)]);
}

function clickableSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].onclick = function() {
          if(this.style.backgroundColor == displayColor.textContent) {
              messageDisplay.textContent = "Correct!";
              changeColors(this.style.backgroundColor);
              resetButton.textContent = "Play again?";
          } else {
              this.style.backgroundColor = document.querySelector("body").style.backgroundColor;
              messageDisplay.textContent = "Try again!";
          }
        };
    }
}

resetButton.onclick = function() {
    reset(squares.length);
};

hardButton.onclick = function() {
    reset(9);
    this.classList.add("selected");
    easyButton.classList.remove("selected");
};

easyButton.onclick = function() {
    reset(6);
    this.classList.add("selected");
    hardButton.classList.remove("selected");
};

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
}

function createSquares(num) {
    for (var i = 0; i < num; i++) {
        var square = document.createElement("div");
        container.appendChild(square);
        document.querySelector("#container div:last-child").classList.add("square");
    }
    return squares = document.querySelectorAll(".square");
}

function reset(numSquares) {
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    container.innerHTML = "";
    createSquares(numSquares);
    colors = [];
    createColors();
    pickColor();
    clickableSquares();  
}

reset(6);

