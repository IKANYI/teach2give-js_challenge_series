
// Sum of two numbers
function sum(a, b) {
  return a + b;
};
console.log(sum(5,8));
// Returns the next number from the number passed
function nextNumber(number) {
  return number += 1;
}
console.log(nextNumber(10));

// Find perimeter of a rectangle
function rectanglePerimeter(length, width) {
  return 2*(length + width);
}
console.log(rectanglePerimeter(20,4));
// Return something to me
function returnSomethingToMe(thing) {
  return "something" +" "+ thing
}
console.log(returnSomethingToMe("big"));

// Bob's BMI vs Jane's BMI
function greaterBMI(Bob, Jane) {
  if (Bob >Jane) return "Bob"
  if (Jane > Bob) return "Jane"
  else return "equal"
}
console.log(greaterBMI(45,34));

// Basketball points
function basketBallPoints(two_pointers, three_pointers) {
  const points = two_pointers * 2 + three_pointers * 3;
  return points;
}
console.log(basketBallPoints(5, 6));

// Less than 100
function isSumLessThan100(x,y ){
  if(x + y > 100) return true;
  else return false;
}
console.log(isSumLessThan100(99, 6));

//Convert minutes to second
function convertToSecond(mins){
   const seconds = mins * 60;
    if(seconds === 1 )
      { return 1 +" " + "second" ;}
    else if(seconds === 0 ){
      return 0;
    }
    else {
      return seconds + " seconds"
    }


}
  console.log(convertToSecond(1/60));

//Greater among the three
function greater(x, y, z){
  return Math.max(x, y, z);
}

console.log(greater(23,34,54));

//Less among the three
function least(x, y, z) {
  return  Math.min(x, y, z);
}

console.log(least(234,54,65,));

 //Football points
function footballPoints(w, d, l ) {
  return (w * 3 + d * 1 + l * 0);

}
console.log(footballPoints(3,4,1));
// Even numbers

function isEven(number) {
  return number % 2 == 0;
}
console.log(isEven(89));
// all even numbers between 0 and 101
for (let i = 1; i < 101 ; i++) {
  if (isEven(i) == true) {
    console.log(i);
}
}
