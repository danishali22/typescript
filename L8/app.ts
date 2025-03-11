// 1- Generics intro

// 1.1:- Example 1
type Person = {
    name: string;
    age: number
}
const Boy: Person = {
    name: "Shiva",
    age: 18
}

const fruits: Array<Person> = [{ name: "Vivek", age: 12 }];
// fruits.push("Mango");
// fruits.push("Banana");
// fruits.push("Apple");
// console.log(fruits);


// 1.2:-  Example 2
function merge<t1, t2, t3>(obj1: t1, obj2: t2, obj3: t3) {
    return {...obj1, ...obj2, ...obj3}
}

const res = merge({name: "Danish"}, {role: "Software Engineer"}, {age: 24})
console.log(res)


// 2. Generics Contraints
function createObject<T extends string, U extends number, V extends boolean>(key: T, value: U, isActive: V) {
    return {key, value, isActive}
}

const obj = createObject("Age", 24, true);
console.log(obj);


//3. Generic Interface
interface Box<T> {
    value: T
}

const numberBox: Box<number> = {value : 12}
const stringBox: Box<string> = {value: "Dummy"}
const booleanBox: Box<boolean> = {value: false}
const objectBox: Box<object> = {value: {name: "Danish"}}
const anyBox: Box<unknown> = {value: "xyz"}

console.log(anyBox)

// Generic Default 

interface User<T = string> {
    data: T,
    status: number
}

type Person2 = {
    name: string;
    age: number;
}

const response: User = { data: "Success", status: 200 } // Default to string
const jsonRes: User<Person2> = { data: { name: "value", age: 21 }, status: 200 }
// console.log(response);
// console.log(jsonRes);


// 4. Generics with class
class Container<T> {
    private content: T;
    constructor(cont: T){
        this.content = cont
    }
    getContent(): T {
        return this.content;
    }
}

const stringContent = new Container<string>("Articles Content")
console.log(stringContent.getContent());

const numberContainer = new Container<number>(100);
console.log(numberContainer.getContent());


// 5- Generic with Array
function getFirst<T>(arr: T[]): T {
    return arr[0];
}

const firstNumber = getFirst([1, 2, 3, 4]);
const firstString = getFirst(["a", "b", "c"]);
console.log(firstNumber);
console.log(firstString);


// 6- Generic with keyof
const Car = {name: "Toyota"};
console.log(Car.name);
console.log(Car["name"]);

// Wrong Approach
// function getProperty(obj: object, key: string){
//     return obj[key]
// }
// const getObj = getProperty({}, "name");
// console.log(getObj);

// Right Approach
function getProperty<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
const objExample = { name: "Danish", age: 24 }
const nameObj = getProperty(objExample, "name");
const ageObj = getProperty(objExample, "age");
console.log(nameObj, ageObj);