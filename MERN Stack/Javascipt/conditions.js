const age = 18;

if (age >= 18){
    console.log("You can vote");
}

else{
    console.log("You can't vote");
}

// WAP to check if a number is positive or negative or zero

const number = 10;

if(number > 0){
    console.log("Number is positive");
}else if(number < 0){
    console.log("Number is negative");
}
else{
    console.log("Number is zero");

}

// WAP to check if a number is even or odd

const num=21;

if(num % 2 === 0){
    console.log("Number is even");
}
else{
    console.log("Number is odd");
}

const num1 = 16;

const root = num1 ** 0.5;

console.log(root);

if(Number.isInteger(root)){
    console.log("Number is perfect square");
}