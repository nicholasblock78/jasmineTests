
var FirstArray = function(array) {
  this.arrInput = array;
}

FirstArray.prototype.greatestDifference1 = function() {
  var sortedArr = this.arrInput.sort(function(a,b){return a-b;});
  var endIndex = sortedArr.length - 1;

  return sortedArr[endIndex] - sortedArr[0];
}

var SecondArray = function(array) {
  this.arrInput = array;
  this.smallestInt;
  this.largestInt;
}

SecondArray.prototype.greatestDifference2 = function() {
  this.smallestInt = this.arrInput[0];
  this.largestInt = this.arrInput[1];

  for(var i=0; i < this.arrInput.length; i++) {
    if(this.arrInput[i] < this.smallestInt) {
      this.smallestInt = this.arrInput[i];
    }
    if(this.arrInput[i] > this.largestInt) {
      this.largestInt = this.arrInput[i];
    }
  }
  return this.largestInt - this.smallestInt;
}

//What is their difference in Big-O? Check bigocheatsheet.com to find out
//The built-in sort method is really nice and concise, but it comes at a
//price. The Big-O is most likely Ω(n log(n)) for the built-in sort method
//While the second method in a sense is manually building out our own sort
//method, it drops all the bells and whistles and uses only what we need.
//With one FOR loop, the Big O is only O(n). The second loop without the log
//is simpler and faster. 
