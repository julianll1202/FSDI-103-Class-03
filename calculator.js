let num1 = 0;

function calculate(){
    num1 = Number(prompt("Please enter a number:"));
    let num2 = Number(prompt("Please enter another number:"));
    console.log(num1, num2);
    sum(num1, num2);
    sub(num1, num2);
    mult(num1, num2);
    div(num1, num2);
}
function sum(a, b){
    document.getElementById("results").innerHTML += `<p>The result of the sum is ${a+b}</p>`;
}

function sub(a,b){
    document.getElementById("results").innerHTML += `<p>The result of the substraction is ${a-b}</p>`;
}

function mult(a, b){
    document.getElementById("results").innerHTML += `<p>The result of the multiplication is ${a*b}</p>`;

}

function div(a, b){
    document.getElementById("results").innerHTML += `<p>The result of the division is ${a/b}</p>`; 
}
