function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;

  this.eat = function(pos) {
    // Check distance between where the snake is and where the food is.
    var d = dist(this.x, this.y, pos.x, pos.y);
    // If d is less than one pixel
    if (d < 1) {
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
    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;

    //prevent the snake from running off the page
    this.x = constrain(this.x, 0, width-scl);
    this.y = constrain(this.y, 0, height-scl);
  }

  this.show = function() {
    //snake
    fill('white');
    rect(this.x, this.y, scl, scl);
  }
}