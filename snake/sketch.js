var snake;
var scl = 20;
var food;

function setup() {
  createCanvas(600, 600);
  snake = new Snake();
  frameRate(10);
  pickLocation();
}

//make sure food is on the grid
function pickLocation () {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  //get a location
  food = createVector(floor(random(cols)), floor(random(rows)));
  //expand food back out to scale  
  food.mult(scl);
}

function draw() {
  background('black');
  snake.update();
  snake.show();

// If snake eats the food, pick a new location
  if (snake.eat(food)) {
    pickLocation();
  }

  //food
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0);
  }
}

