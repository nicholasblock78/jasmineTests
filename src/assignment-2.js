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
Rectangle.prototype.findCorners = function() {
  var corners = [];
  corners[0] = [this.x, this.y]; //TL
  corners[1] = [this.x, this.y + this.height]; //BL
  corners[2] = [this.x + this.width, this.y]; //TR
  corners[3] = [this.x + this.width, this.y + this.height]; //BR
  this.corners = corners;
  return corners;
}
