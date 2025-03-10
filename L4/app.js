//! Function return type
function add(num1, num2) {
    return num1 + num2; //  return 30
}
// console.log(add(10,20));
function greet(name) {
    console.log("Hi, ".concat(name));
}
// let combineFunction : Function;
// combineFunction = 10; // invalid
// combineFunction = function(){}; valid
// combineFunction = add; // valid
// combineFunction = greet;
// console.log(combineFunction(1,2));
// Good Practice
var combineFunction;
combineFunction = add;
console.log(combineFunction(100, 200));
function addHandler(num1, num2, callbackFunction) {
    var result = num1 + num2;
    callbackFunction(result);
}
addHandler(20, 30, function (result) {
    console.log("Result: ", result);
});
