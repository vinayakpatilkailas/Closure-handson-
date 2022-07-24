// Question 1:

//    function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

// Soln: PopUp is shown on screen for 4 times.


// Question 2:

let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count);  
  }
  console.log(count); //  
})();

// Soln:    output= 1
//          output = 0

// Question 3: 

for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); 
        }, 1000);
  }

//   Soln: // Output: (3)3 - Three is printed thrice

//  Question 4 - Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.


 function outer(length) {

 return function(breadth){
   let area = length*breadth;
   console.log(area);
}

}
const rectangle = outer(5);
rectangle(8);



// Question 5 - Take a variable in outer function and create an inner function to increase the counter every time it is called

const ticketBooking = function(){
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`the passenger count is ${passengerCount}`)
    };
};

const bookie = ticketBooking()
bookie();
bookie();
bookie();
bookie();

//Question 6 - Print Output

var a = 12;
(function () {
  alert(a);
})();
//Soln: In this page  12 is popped up


// Question 7
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();
//Soln: "this page  12" is popped up


// Qustion 8 - 
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar =" + globalVar);
 
    })(456);
})(123);
// Soln:

// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar =xyz
Footer
