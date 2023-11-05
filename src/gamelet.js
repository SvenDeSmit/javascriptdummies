const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let position = 0;
let vertical = 0;

function handleKeyPress(e) {
  /*
    Horizontal position
  */
  if (e.code === "ArrowLeft") {
    position = position - 10;
  }
  if (e.code === "ArrowRight") {
    position = position + 10;
  }
  if (position < 0) {
    position = 0;
  }
  /*
    Vertical position
  */
  if (e.code === "ArrowUp") {
    vertical = vertical - 10;
  }
  if (e.code === "ArrowDown") {
    vertical = vertical + 10;
  }
  if (vertical < 0) {
    vertical = 0;
  }

  refresh(); // update the position of the balll
}
function refresh() {
  ball.style.left = position + "px";
  ball.style.top = vertical + "px";
}
