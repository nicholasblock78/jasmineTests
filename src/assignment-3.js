
//Necessary because JS typical number library can't hold that many digits. Loses precision
var possibleChars = ["a","c","d","e","g","i","l","m","n","o","p","r","s","t","u","w"];
var numWeWant = 667734139064;
var checkValidity = function() {
  //First check to see if str input against possibleChars to check if valid

}

// var assignment3 = function(str) {
//   return null if !str.checkValidity();
//   var number;
//
//   return number
// }

var yourAssignment3 = function(str) {
     var h = 7;
     var letters = ["a","c","d","e","g","i","l","m","n","o","p",
 "r","s","t","u","w"];
     for (var i = 0; i < str.length; i++) {
         var letter = str[i];
         var index = letters.indexOf(letter);
         h = (h * 37) + index;
}
return h; }

//Dont forget to run this code through JSLint
//Refactor into ES6 code and transpile w Babel

//parseInt(0)
