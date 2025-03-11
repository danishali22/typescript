// 1- Generics intro
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Boy = {
    name: "Shiva",
    age: 18
};
var fruits = [{ name: "Vivek", age: 12 }];
// fruits.push("Mango");
// fruits.push("Banana");
// fruits.push("Apple");
// console.log(fruits);
// 1.2:-  Example 2
function merge(obj1, obj2, obj3) {
    return __assign(__assign(__assign({}, obj1), obj2), obj3);
}
var res = merge({ name: "Danish" }, { role: "Software Engineer" }, { age: 24 });
console.log(res);
// 2. Generics Contraints
function createObject(key, value, isActive) {
    return { key: key, value: value, isActive: isActive };
}
var obj = createObject("Age", 24, true);
console.log(obj);
var numberBox = { value: 12 };
var stringBox = { value: "Dummy" };
var booleanBox = { value: false };
var objectBox = { value: { name: "Danish" } };
var anyBox = { value: "xyz" };
console.log(anyBox);
var response = { data: "Success", status: 200 }; // Default to string
var jsonRes = { data: { name: "value", age: 21 }, status: 200 };
// console.log(response);
// console.log(jsonRes);
// 4. Generics with class
var Container = /** @class */ (function () {
    function Container(cont) {
        this.content = cont;
    }
    Container.prototype.getContent = function () {
        return this.content;
    };
    return Container;
}());
var stringContent = new Container("Articles Content");
console.log(stringContent.getContent());
var numberContainer = new Container(100);
console.log(numberContainer.getContent());
// 5- Generic with Array
function getFirst(arr) {
    return arr[0];
}
var firstNumber = getFirst([1, 2, 3, 4]);
var firstString = getFirst(["a", "b", "c"]);
console.log(firstNumber);
console.log(firstString);
// 6- Generic with keyof
var Car = { name: "Toyota" };
console.log(Car.name);
console.log(Car["name"]);
// Wrong Approach
// function getProperty(obj: object, key: string){
//     return obj[key]
// }
// const getObj = getProperty({}, "name");
// console.log(getObj);
// Right Approach
function getProperty(obj, key) {
    return obj[key];
}
var objExample = { name: "Danish", age: 24 };
var nameObj = getProperty(objExample, "name");
var ageObj = getProperty(objExample, "age");
console.log(nameObj, ageObj);
