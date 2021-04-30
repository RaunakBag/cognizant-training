// Your Javascript Code Goes Here
//Function Statement
function greet() {
  console.log("Hi!");
}
greet();

//Functions are first classs
function logGreeting(fn) {
  fn();
}
logGreeting(greet);

//Function Expression
const greetMe = function () {
  console.log("Hello Aniket!");
};
greetMe();

//its first class
logGreeting(greetMe);

//Use a function expression to create a function to fly
logGreeting(function () {
  console.log("Hello There!");
});
