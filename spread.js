

// spread: three dots (...)

const numbers = [5,23,45,236,456,42,455];
// console.log(numbers);
// console.log(...numbers);
// console.log(Math.max(...numbers));
numbers.push(1);
console.log(numbers);

const max = Math.max(23,12,5,235,342);
console.log(max);


const numbersTwo = [333, ...numbers, 111, 222];
numbers.push(2);
console.log(numbersTwo);

// const numbersTwo = numbers;
// numbers.push(2);
// console.log(numbersTwo);
