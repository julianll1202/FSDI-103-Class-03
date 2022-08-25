function greet(name){
    return "Hello " + name + "!";
}

let greeting1=greet("Eric");
let greeting2=greet("Alvin");

console.log(greeting1);
console.log(greeting2);

function sum(a,b){
    return a+b;
}

let result = sum(5,4);
console.log(result);

/*Define a function named multiplyThree which accepts a number
and returns that number multiplied by three.
Display the result on console*/

function multiplyThree(a){
    return a*3;
}

result = multiplyThree(5);
console.log(result);

let subTotal=0;
function addCart(price){
    return subTotal += price;
}

subTotal = addCart(100);
subtotal = addCart(400);
subTotal = addCart(600);

console.log(subTotal);

function calculateTaxes(subTotal){
    return 1.11*subTotal;
}
let total = calculateTaxes(subTotal);
console.log(total);