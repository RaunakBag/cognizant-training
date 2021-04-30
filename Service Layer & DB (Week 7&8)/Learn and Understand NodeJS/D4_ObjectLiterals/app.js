// Your Javascript Code Goes Here
var person = {
  firstName: "Aniket",
  lastName: "Kumar",
  greet: function () {
    console.log(`Hello, ${this.firstName} ${this.lastName} `);
  },
};

person.greet();
console.log(person["firstName"]);
// console.log(person["greet"]);
