var UserNumber = prompt("How many users are in your database?");

var UserNumber = parseInt(UserNumber);

var RNumber = Math.floor(Math.random() *UserNumber) + 1;

alert("Your winner is " + RNumber);

console.log("Program Complete - have a nice day");