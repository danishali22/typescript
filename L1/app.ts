function calculateSum(num1: number, num2: number, printResult: boolean, text: string) {
    if(printResult){
        console.log(`${text} ${num1 + num2}`);
    } else {
        return num1 + num2;
    }
}

const n1 = 5;
const n2 = 10;

const printResult = true;
const text = "Sum of two numbers is = "

const result = calculateSum(n1, n2, printResult, text);