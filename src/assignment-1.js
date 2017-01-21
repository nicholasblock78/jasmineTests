
var FirstArray = function(array) {
  this.arrInput = array;
}

FirstArray.prototype.greatestDifference = function() {
  var sortedArr = this.arrInput.sort(function(a,b){return a-b;});
  var endIndex = sortedArr.length - 1;

  return sortedArr[endIndex] - sortedArr[0];
}

var SecondArray = function(array) {
  this.arrInput = array;
}

SecondArray.prototype.greatestDifference = function() {

}
