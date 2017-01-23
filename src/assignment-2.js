//Calculate each corner of rectangle
//do any of x bounds of 2nd rectangle fall in between x bounds of 1st rectangle
var Rectangle = function(x,y,width,height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.corners;
}

//4 corners are returned in [TL, BL, TR, BR] => [[x,y],[x,y],[x,y],[x,y]]
//***This is where I first started out
Rectangle.prototype.findCorners = function() {
  var corners = [];
  corners[0] = [this.x, this.y]; //TL
  corners[1] = [this.x, this.y + this.height]; //BL
  corners[2] = [this.x + this.width, this.y]; //TR
  corners[3] = [this.x + this.width, this.y + this.height]; //BR
  this.corners = corners;
  return corners;
}

//Because of screen X and Y coordinates can't be negative!
//first check x coorindates for overlap
//IF overlap, then check y coordinates
//IF Both x & y overlap, then RETURN TRUE

//As writing out my pseudocode, I realized that I only needed to check the cases
//that would be false. If not caught by false thus means has to intersect
Rectangle.prototype.intersectsWith = function(rect) {
  if (rect.x < this.x && rect.x + rect.width < this.x) {
    return false;
  }
  else if (rect.x > this.x + this.width) {
    return false;
  }
  else if (rect.y < this.y && rect.y + rect.height < this.y) {
    return false;
  }
  else if (rect.y > this.y + this.height) {
    return false;
  }
  else {
    return true;
  }


}
