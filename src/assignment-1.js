
var MyArray = function(array) {
  this.arrInput = array;
}

MyArray.prototype.greatestDifference = function() {
  var sortedArr = this.arrInput.sort();
  var endIndex = sortedArr.length - 1;

  return sortedArr[endIndex] - sortedArr[0]
}
