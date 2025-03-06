const nums = [ 34, 67, 56, 45, 2 ];

//Traversing each array element with only 3 methods
//Method 1

for (let i=0; i < nums.length; i++){
    console.log(nums[i]);
}

//Method 2
console.log('for of loop');

for(let n of nums){
    console.log(n);
}

//Method 3

console.log('for each function');

nums.forEach((n, i) => {
    console.log(n, i);
});

nums.forEach((n, i, b) => {
    console.log(n, b);
});


//WAP to print only odd numbers
console.log('Odd numbers');
for(let n of nums){
    if(n % 2 !== 0){
        console.log(n);
    }
}

//method 2.0
console.log('odd numbers via ForEach');
nums.forEach((n) => {
    if(n % 2 !== 0){
        console.log(n);
    }
})