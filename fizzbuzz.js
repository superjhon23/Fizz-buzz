let dividedNumber = prompt("Please enter a number");
if (dividedNumber === null || dividedNumber === ""){
  "Please enter a valid number"
} else if ((dividedNumber % 5) === 0 && (dividedNumber % 3) === 0 ){
  console.log("FizzBuzz");  
} else if ((dividedNumber % 5) === 0){
  console.log("Fizz");
} else if ((dividedNumber % 3) === 0){
  console.log("Buzz");
};
console.log(dividedNumber);