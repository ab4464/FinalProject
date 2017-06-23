//DIVISION-PROBABILITY
function division() {
    var a = document.querySelector('#numerator');
    var b = document.querySelector('#denominator');
    document.getElementById('#probability').value = a / b;
 }
    








// FACTORIAL !  FUNCTION
var userInput = document.querySelectorAll('#permutation');
//this is for the total
var permutationNoRep = function(userInput) {    
    var product = 1;
    for(i = 1; i <= userInput; i++){
        product *= i;
    }
    return product;
}

// PERMUTATION WITH REPETITION
function permutationRep(userInput){
    return Math.pow(userInput, userInput);
}

part 
total


function getFactorial(num) {
  var result = 1;
  for (var i = num; i > 0; i--) {
    result = result * i;
  }
  return result;
}
function getPermutation(howMany, subSet) {
  var result = getFactorial(howMany);

  if (subSet) {
    result = result / getFactorial(howMany - subSet);
  }
  
  return result;
}
