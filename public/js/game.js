/**
Initialisation
  Load assets
  Pre-calculations
Game Loop
  Clear the screen
  Retrieve Player Input
  Process AI & Logic
  Draw graphics
  Update the screen
 */

var width = canvas.width;
var height = canvas.height;

var state = {
  x: width / 2,
  y: height / 2
}

context.fillStyle = "red"

function update(progress) {
  console.log(progress);
  state.x += progress - 13

  if (state.x > width) {
    state.x -= width
  }
}

function draw() {
  context.clearRect(0, 0, width, height)

  context.fillRect(state.x, state.y, 10, 10)

  //Draw number to the screen
  context.font = '10px Arial';
  context.fillStyle = 'white';
  context.fillText("FPS: " + fps, 10, 30);

}

function loop(timestamp) {
  let progress = timestamp - lastRender;

  var secondsPassed = (timestamp - lastRender) / 1000;
  lastRender = timestamp;
  //Calculate fps
  fps = Math.round(1 / secondsPassed);


  update(progress);
  draw();

  lastRender = timestamp;
  window.requestAnimationFrame(loop);
}

let lastRender = 0;

window.requestAnimationFrame(loop);