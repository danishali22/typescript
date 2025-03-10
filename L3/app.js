// UNION, | -> pipe in Typescript
// function combine(num1: number | string, num2: number | string) {
//     if (typeof num1 === "number" && typeof num2 === "number") {
//         return num1 + num2;
//     } else {
//         return num1.toString() + num2.toString();
//     }
// }
function combine(num1, num2, conversionType) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum1 = combine("10", "20", "as-number"); // 30
var sum2 = combine(10, 50, "as-number");
var combinedName = combine("Danish", " Ali", "as-string"); // Danish Ali
console.log(sum1, sum2, combinedName);
var user = {
    name: "Danish",
    age: 22,
    skills: ["React", "Node"]
};
function greet(user) {
    console.log("Hi, I am ".concat(user.name));
}
greet(user);
