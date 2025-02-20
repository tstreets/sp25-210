console.log("Umm... where are we?");

const birthYear = 1207;

let myName = "Ty the Noodle Arm Guy";

console.log(myName, "was born", birthYear);

myName = "Ty the Fly Guy";

// const variables can't change their values
// birthYear = 1208;

console.warn(myName, "MAY have devoured 10 souls.");

console.log("myName is", myName.length, "characters long.");

console.log("myName includes ty", myName.toUpperCase().includes("TY"));

myName = "tY";

console.log("myName has uppercase:", myName !== myName.toLowerCase());
console.log("myName has lowercase:", myName !== myName.toUpperCase());

const PI = 3.141592653589793;

console.log("$" + PI.toFixed(2));

// Get a random number between 1-100

const randomNumber = Math.floor(Math.random() * 100) + 1;

console.log("random number:", randomNumber);

console.log(Math.PI - PI, PI.toString().length);

console.log(PI, PI.toString());

console.log("loose check", PI == PI.toString());
console.log("strict check", PI === Number(PI.toString()));

console.log("PI type:", typeof PI);

console.log("myName type:", typeof myName);
