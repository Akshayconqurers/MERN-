const nums = [4, 5, 6, 7, 8, 9];

const nums2 = nums.map((n) => {return n*2 });

console.log(nums2);


const prices = ['₹543.33, ₹232.33, ₹434.933, ₹254.433, ₹274.373'];
//[543, 232, 434, 254, 274]

console.log(parseInt('₹543.33'.slice(1)));

const prices2 = prices.map((p) => {return parseInt(p.slice(1))});
console.log(prices2);

//WAP to create an array with 18%  gst prices
const Money = [100, 200, 300, 400, 500];
//[118, 236, 354, 472, 590]

const Money2 = Money.map((m) => {return m*1.18});
console.log(Money2);

const names = ['Tom Luke', 'Harry Ray', 'John Doeyrrttyrer', 'Mary Jane'];
//['Tom, Harry, John, Mary']

const names2 = names.map((n) => {return n.split(' ')[0]});
console.log(names2);


//WAP to create an array with name length 

const names3 = names.map((n) => {return n.length});
console.log(names3);