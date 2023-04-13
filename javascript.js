const container = document.querySelector("#pad");

let numDiv = 40;

const showSize = document.querySelector("#showSize");
showSize.textContent = numDiv;

function dimensions() {
  return Math.sqrt(250000 / (numDiv * numDiv));
}

function makeCells(numDiv) {
  for (d = 0; d < numDiv * numDiv; d++) {
    createdCells = document.createElement("div");
    createdCells.classList.add("cells");
    createdCells.setAttribute(
      "style",
      `height:${dimensions()}px; width:${dimensions()}px;`
    );
    container.appendChild(createdCells);
  }
}

function draw() {
  const padCells = document.querySelectorAll("div.cells");
  padCells.forEach((padCell) => {
    padCell.addEventListener("mouseover", (event) => {
      let paintColor = document.getElementById("palette").value;
      padCell.setAttribute(
        "style",
        `height:${dimensions()}px; width:${dimensions()}px; background:${paintColor};`
      );
    });
  });
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const minusButton = document.querySelector("#minusButton");
minusButton.addEventListener("click", (event) => {
  if (numDiv > 16) {
    numDiv -= 1;
    let cells = document.querySelectorAll("div.cells");
    cells.forEach((cell) => {
      container.removeChild(cell);
    });
    makeCells(numDiv);
    draw();
    showSize.textContent = numDiv;
  } else {
  }
});

const plusButton = document.querySelector("#plusButton");
plusButton.addEventListener("click", (event) => {
  if (numDiv < 64) {
    numDiv += 1;
    let cells = document.querySelectorAll("div.cells");
    cells.forEach((cell) => {
      container.removeChild(cell);
    });
    makeCells(numDiv);
    draw();
    showSize.textContent = numDiv;
  } else {
  }
});

function erase() {
  const padCells = document.querySelectorAll("div.cells");
  padCells.forEach((padCell) => {
    padCell.addEventListener("mouseover", (event) => {
      padCell.setAttribute(
        "style",
        `height:${dimensions()}px; width:${dimensions()}px; background:white;`
      );
    });
  });
}

const drawButton = document.querySelector("#drawButton");
drawButton.addEventListener("click", (event) => {
  draw();
});

const eraseButton = document.querySelector("#eraseButton");
eraseButton.addEventListener("click", (event) => {
  erase();
});

function randomColor() {
  let color = ["red", "orange", "yellow", "green", "violet", "indigo", "blue"];
  return color[Math.floor(Math.random() * color.length)];
}

function rainbow() {
  const padCells = document.querySelectorAll("div.cells");
  padCells.forEach((padCell) => {
    padCell.addEventListener("mouseover", (event) => {
      padCell.setAttribute(
        "style",
        `height:${dimensions()}px; width:${dimensions()}px; background:${randomColor()};`
      );
    });
  });
}

const rainbowButton = document.querySelector("#rainbowButton");
rainbowButton.addEventListener("click", (event) => {
  rainbow();
});

function clear() {
  const padCells = document.querySelectorAll("div.cells");
  padCells.forEach((padCell) => {
    padCell.setAttribute(
      "style",
      `height:${dimensions()}px; width:${dimensions()}px; background:white;`
    );
  });
}

const clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", (event) => {
  clear();
});

const palette = document.querySelector("#palette");
palette.addEventListener("click", (event) => {
  document.querySelector("#drawButton").focus();
  draw();
});

window.onload = function () {
  document.querySelector("#drawButton").focus();
};

makeCells(numDiv);
draw();
