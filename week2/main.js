//Day 1
// array  barcha tipdagi malumot lari o'zida saqlay oladi

// const numbers = [1, 2, 3, 4, 5, 6, 7];


// exercises 

// let fruits = ["apple", "mango", "banana", "pineapple", "ananas"];

// console.log(fruits[0], 'first array element');
// console.log(fruits[fruits.length - 1], 'last array element');
// console.log(fruits[1], 'second positions element');



// Day 2
// array methods 

// push -- array oxiridan elementlarni qo'shadi
// pop -- oxiridan elementni o'chiradi
// shift -- array boshidan elementni o'chiriadi
// unshift -- boshiga elementni qo'shadi
// toString -- array ni string ko'rinishiga o'tkazadi 
// at -- berilgan indexdagi qiymatni qaytaradi
// join -- array ni string ga o'tkazadi
// isArray -- array yoki array masligini tekshiradi true yoki false qiymat qaytaradi
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//delete fruits[0];
// delete method ini ishlatganda shu index dagi qiymatni o'rinida undefined qilib bo'sh qolidirib keradi shuning uchun  pop yoki shift metodlaridan foydalangan maqulroq

// =======================
// 1) map -- array elementlar bo'ylab aylanadi va yangi array qaytaradi , eski array ni o'zgartirmaydi

// const cars = ['bmw', 'tesla', 'byd', 'jeep'];
// const newCars = cars.map((car) => car + 'test');

// console.log(newCars, 'yangi array hotiradan ham yangi joyga joylashgan');

// 2) every - bu method true yoki false qiymat qaytaradi , barcha array elementlarni callback shartiga qo'yib chiqadi qaysi elementida shartga tushmasa o'sha joyida to'xtaydi va natijani qaytaradi 

// const sonlar = [2, 4, 5, 6];
// const natija = sonlar.every((son)=> son % 2 == 0);
// console.log(natija , 'test');

// 3) fill -- array ni berilgan element bilan to'ldirib beradi
// array.fill(value, start, end) eski arrayni override qiladi

// 4) filter -- yangi array qaytaradi shartdan o'tgan qiymatlar bilan eski errayni o'zgartirmaydi
// misol uchun
// const ages = [12,34,45,18, 19];

// const olderAges = ages.filter(age=> age > 18);
// console.log(olderAges , 'older age');

// 5) find  -- yangi array qaytaradi original array ni o'zgartirmaydi shartga to'gri kelgan qiymatlarni o'tkazadi va yangi array hosil qiladi


// 6) reduce -- bitta qiymat qaytaradi yani funksiya hisoblab yigan qiymatni original arrayni o'zgartirib yubormaydi odatda array elementlarni yig'indisini hisoblash uchun ishlatiladi 

// const numbers = [1,2,3,4,5];

// const totalValue =  numbers.reduce((acc , currentValue)=>{
//     return acc +currentValue
// } , 3);

// console.log(totalValue , 'test');
// bu yerda 18 chiqadi chunki 3 bu initialValue hisoblanadi yani acc = 3 bo'ladi shu qiymatga arrayning barcha qiymatini qo'shib ketadi

// ...rest -- bu array ni destructure qilish da ishlatiladi.

// let a , rest;
// const arr1 = [1,2,3,4,5];

// [a, ...rest] = arr1;

// console.log(a ,rest  ,'');

// bu yerda a arr1 ni 0 indexdagi qiymati rest esa qolgan qiymatlarini [] array qilib o'ziga yig'ib oladi.

// slice -- array elementlarini qirqib beradi 
// array.slice(start , end);