
function add(numOne, numTwo){
    // const sum = numOne + numTwo;
    // return sum;
    return numOne + numTwo;
};
console.log(add(23,12));


// function expression
const addTwo = function addTwo(numOne, numTwo){
    return numOne + numTwo
};
console.log(addTwo(34,10));

// function expression (anonymous)
const addThree = function(numOne, numTwo){
    return numOne + numTwo;
};
console.log(addThree(45,6));

/*----------------------------
       arrow function 
----------------------------*/
const addFour = (numOne, numTwo) => numOne + numTwo;
console.log(addFour(342,23));

// const addFour = (numOne, numTwo=0) => numOne + numTwo;
// console.log(addFour(342));



