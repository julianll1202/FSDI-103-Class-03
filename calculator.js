let num1 = 0;

function calculate(){
    num1 = Number(prompt("Please enter a number:"));
    let num2 = Number(prompt("Please enter another number:"));
    console.log(num1, num2);
    sum(num1, num2);
}
function sum(num1, num2){
    document.getElementById("results").innerHTML= num1+num2;
}

function substract(a,b){}

