

// function add(numOne , numTwo = 0){
//     const total = numOne + numTwo;
//     return total;
// }
// const result = add(23);
// console.log(result);


function add(numOne = 45 , numTwo = 0){
    const total = numOne + numTwo;
    return total;
}
const result = add();
console.log(result);


function fullName(first, last = 'Hasan'){
    const name = first + ' ' + last;
    return name;
}
const name = fullName('Abdur');
console.log(name);