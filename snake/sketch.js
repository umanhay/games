var snake;

function setup() {
  createCanvas(600, 600);
  snake = new Snake();
}

function draw() {
  background('black');
  snake.update();
  snake.show();
}

function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;

  this.update = function() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  this.show = function() {
    //snake
    fill('white');
    rect(this.x, this.y, 10, 10);
  }
}

