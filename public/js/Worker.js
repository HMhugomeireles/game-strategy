class Worker {
  constructor(id,x,y) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.radius = 5;
    this.color = 'rgb(0, 128, 255)';
  }

  getCoordinates() {
    return { 
      x: this.x,
      y: this.y,
      radius: this.radius
    }
  }

  moveTo(destination) {

    if (this.x !== destination.x) {
      if (this.x > destination.x) {
        this.x-=1;
      } else {
        this.x+=1;
      }
    }

    if (this.y !== destination.y) {
      if (this.y > destination.y) {
        this.y-=1;
      } else {
        this.y+=1;
      }
    }

  }

  arrived(destination) {
    if(destination.x === this.x && destination.y === this.y) {
      return true;
    }
    return false;
  }
}