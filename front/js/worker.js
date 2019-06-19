class Worker {
  constructor(id,x,y) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.radius = 10;
    this.color = 'rgb(0, 128, 255)';
  }

  draw() {
    fill(this.color)
    arc(this.x, this.y, this.radius, this.radius, 0, PI*2);
  }

}