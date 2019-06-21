var offset = {}
var worker1 = new Worker(1,100,100);
var worker2 = new Worker(2,120,100);
var workerSelect = {
  workers: [],
  destination: { x: '', y: ''},
  arrive: false
};

























function init() {
  draw()
}

const listWorks = [worker1, worker2];

console.log(listWorks);

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.beginPath();

  listWorks.forEach(work => {
    context.beginPath()
    context.fillStyle = work.color;
    context.arc(work.x,work.y,5, 0, Math.PI*2);
    context.fill();
  });

  //drawBoard()
  requestAnimationFrame(draw);
}

// action on the 
canvas.addEventListener("click", (e) => {
  listWorks.forEach(worker => {
    if(utils.circlePointCollision(e.clientX,e.clientY, worker.getCoordinates())){
      document.body.addEventListener("dblclick", moveWorkersSelect);

      workerSelect.workers.push(worker)
      console.log(workerSelect);
    }
  });
});

function drawBoard(){
  var bw = canvas.width;
  var bh = canvas.height;
  var p = 0;

  for (var x = 0; x <= bw; x += 10) {
      context.moveTo(0.5 + x + p, p);
      context.lineTo(0.5 + x + p, bh + p);
  }

  for (var x = 0; x <= bh; x += 10) {
      context.moveTo(p, 0.5 + x + p);
      context.lineTo(bw + p, 0.5 + x + p);
  }
  context.strokeStyle = "black";
  context.stroke();
}

function moveWorkersSelect(event) {
  let { destination } = workerSelect;
  destination.x = event.clientX;
  destination.y = event.clientY;
  
  moveWorker();
  
  console.log("action");
}

function moveWorker() {
  let { destination } = workerSelect;
  let toBeRemove = [];

  workerSelect.workers.forEach((workerSelect, index) => {
    listWorks.forEach(worker => {
      if(workerSelect.id === worker.id) {
        if(worker.arrived(destination)) {
          toBeRemove.push(worker.id);
        } else {
          worker.moveTo(destination);
        }
      }
    });
  });


  draw();
  setInterval(() => moveWorker(), 1000 / 60);

}

init();