function addNums(a, b){

    var c= a+b;

    console.log(c);

};

addNums (56, 387);


// get avg of 3 numbers

const getAvg =function(m1, m2, m3){

    const avg = (m1+m2+m3)/3;

    console.log(avg);

}

const result = getAvg(34, 56, 78);
console.log(result);

//Arrow function (Factorial)

const factorial = (nums) => {

    let f = 1;

    for(let i=2; i<=nums; i++){
        f*=i;
    }

    return f;


}

console.log(factorial(7));

let [a, b, c ] = [1, 2, 3];


// get MultipleValues

const getMultipleValues = () => {
    return [33, 44, 55];
}

const [m, n, o] = getMultipleValues();
console.log(o); 
