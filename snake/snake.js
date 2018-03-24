function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.eat = function(pos) {
    // Check distance between where the snake is and where the food is.
    var d = dist(this.x, this.y, pos.x, pos.y);
    // If d is less than one pixel
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }

  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.update = function() {
    // If nothing has been eaten
    if (this.total === this.tail.length) {
      // shift everything over <- in the array 
      for (var i = 0; i < this.tail.length-1; i++) {
        this.tail[i] = this.tail[i+1];
      }
    }
    // If food eaten, location of new spot is added to the end, nothing shifted.
    this.tail[this.total-1] = createVector(this.x, this.y);
    
    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;

    //prevent the snake from running off the page
    this.x = constrain(this.x, 0, width-scl);
    this.y = constrain(this.y, 0, height-scl);
  }

  this.show = function() {
    fill('white');
    for (var i = 0; i < this.tail.length; i++) {
        rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  }
}