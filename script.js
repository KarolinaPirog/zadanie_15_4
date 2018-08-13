//#1
var hello = "Hello";
var world = "World!";
const sayHelloWorld = `${hello} ${world}`;
console.log(sayHelloWorld);

//#2
const multiply = (a = 1, b = 1) => console.log(a*b);
multiply(2,3);

//#3
const average = (...args) => console.log((args.reduce(function(a, b) {return a + b }))/args.length);
average(3,1,6,5,4,5);

//#4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);

//#5
const myTable = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , name, , lastname] = myTable;
console.log(`${name} ${lastname}`);