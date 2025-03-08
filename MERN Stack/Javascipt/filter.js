// Sample array of smartphone objects
const smartphones = [
    { brand: "Samsung", price: 45000, colors: ["black", "blue"] },
    { brand: "Apple", price: 120000, colors: ["white", "gold"] },
    { brand: "OnePlus", price: 35000, colors: ["black", "blue"] },
    { brand: "Samsung", price: 55000, colors: ["white", "green"] },
    { brand: "Xiaomi", price: 20000, colors: ["blue", "gray"] }
];

// 1. Price of the second smartphone
console.log("Price of second smartphone:", smartphones[1].price);

// 2. 2nd color of the third smartphone
console.log("2nd color of third smartphone:", smartphones[2].colors[1]);

// 3. Replace 2nd color of the last smartphone
smartphones[smartphones.length - 1].colors[1] = "red";
console.log("Updated last smartphone's colors:", smartphones[smartphones.length - 1].colors);

// 4. Filter all Samsung phones
const samsungPhones = smartphones.filter(phone => phone.brand === "Samsung");
console.log("Samsung Phones:", samsungPhones);

// 5. Filter all phones with price less than 50000
const affordablePhones = smartphones.filter(phone => phone.price < 50000);
console.log("Phones under 50000:", affordablePhones);

// 6. Filter all phones with blue color
const bluePhones = smartphones.filter(phone => phone.colors.includes("blue"));
console.log("Phones with blue color:", bluePhones);

// 7. Get an array of all brands (unique values)
const brands = [...new Set(smartphones.map(phone => phone.brand))];
console.log("All brands:", brands);
