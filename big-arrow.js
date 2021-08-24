
const add = (numOne, numTwo) => numOne + numTwo;
console.log(add(12,21));


const multiply = (num1, num2, num3) => num1 * num2 * num3;
console.log(multiply(4,12,3));


const fiveTimes = (num) => num * 5;
console.log('five times:', fiveTimes(2));


const tenTimes = num => num * 10;
console.log('ten times: ', tenTimes(10));


const getName = () => 'Masum Hossain';
console.log(getName());


const doMath = (x,y) => {
    const sum = x + y;
    const dif = x - y;
    const result = sum * dif;
    const output = result / 2;
    return output;
}
console.log(doMath(33,3));
