
const name = 'Masum';
let lastName = 'Mia';
lastName = 'Hossain';
const fullName = `${name} ${lastName}`;
console.log(fullName);


function calculate(x, y, z=1){
    const sum = x + y + z;
    return sum;
}
console.log(calculate(23,23));



// template string
const color = 'goldren color';
const price = '2k';
const mobile = `
samsung j2 phone
ram 1 gb
rom 8 gb
${color}
${price}
`
console.log(mobile);


// arrow function
const getName = (first, last) => first + last;
const fiveTimes = x => x * 5;

const bigArrow = (x,y,z) => {
    const first = x + y;
    const second = x - y;
    const third = y * z;
    const fourth = x / z;
    const result = (first + second + third) * fourth;
    return result;
}
console.log('Big arrow: ', parseFloat(bigArrow(34,43,54).toFixed(2)));

const numbers = [23,34,45,63,2,54];
const min = Math.min(...numbers)
console.log(min);
const max = Math.max(...numbers)
console.log(max);