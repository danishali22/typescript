// UNION, | -> pipe in Typescript
// function combine(num1: number | string, num2: number | string) {
//     if (typeof num1 === "number" && typeof num2 === "number") {
//         return num1 + num2;
//     } else {
//         return num1.toString() + num2.toString();
//     }
// }

// const sum = combine(2, 5);
// const fullName = combine("Danish", " Ali");

// console.log(sum, fullName);

// LITERAL TYPES 

// function combine(num1: number | string, num2: number | string, conversionType: "as-number" | "as-string") {
//     let result;
//     if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
//         result = +num1 + +num2;
//     } else {
//         result = num1.toString() + num2.toString();
//     }
//     return result;
// }


// const sum1 = combine("10", "20", "as-number"); // 30
// const sum2 = combine(10, 50, "as-number");
// const combinedName = combine("Danish", " Ali", "as-string"); // Danish Ali
// console.log(sum1, sum2, combinedName);


// TYPE ALIAS / CUSTOM TYPES

type Combinable = number | string;
type ConversionType = "as-number" | "as-string";

function combine(num1: Combinable, num2: Combinable, conversionType: ConversionType) {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    } else {
        result = num1.toString() + num2.toString();
    }
    return result;
}


const sum1 = combine("10", "20", "as-number"); // 30
const sum2 = combine(10, 50, "as-number");
const combinedName = combine("Danish", " Ali", "as-string"); // Danish Ali
console.log(sum1, sum2, combinedName);



type User = {
    name: string;
    age: number;
    skills: string[]
}

const user: User = {
    name: "Danish",
    age: 22,
    skills: ["React", "Node"]
}

function greet(user: User) {
    console.log(`Hi, I am ${user.name}`);
}
greet(user);