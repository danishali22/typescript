function sum(num1, num2, printResult, text) {
    if (printResult) {
        console.log("".concat(text, " ").concat(num1 + num2));
    }
    else {
        return num1 + num2;
    }
}
var n1 = 5;
var n2 = 10;
var printResult = true;
var text = "Sum of two numbers is = ";
var result = sum(n1, n2, printResult, text);
