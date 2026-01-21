let a = 10;

let b = a;

b = 20;

// console.log(b , 'b');
// console.log(a , 'a');


let obj = {
  name: 'test'
}


// let obj2 = obj;

// obj2.name = 'Hello';

// console.log(obj , 'obj');
// console.log(obj2 , 'obj2');


// globalThis.console={log:nativeFunction}

// js --> browser --> DevTools --> UI


// stack

// obj : ox100
// obj2:0x100
// a:10
// b:10


// heap 

// {
//     name:'Hello'
// }

// chrome da chromium DevTools 

// terminalda node runtime (prints to stdout)

//============================================

//Day 2

// the real problems with var
// 1) var ignores block scope , it is function scope

// if(true){
//     var x = 10;
// }

// console.log(x); // 10

// 2) var is hoisted in a broken way so 

// var x;


// console.log(x); // undefined
// var x = 10;


// 3) var leaks in loops 

// for(var i = 0; i < 3; i++){
//     // setTimeout(() => console.log(i) , 100);

// }
// for(let i = 0; i < 3; i++){
//     setTimeout(() => console.log(i) , 100);
// }

// async + var = bugs and why let was invented 
// let was intrduced in 2015




// Day 3

// let test1 = 10;
// let test2 = 20;


// let total = `${test1 + test2} hello js`;


// let test = `<h1>${item.name}</h1>`;

// console.log(test);

// let a = true;

// let x = false;

// if(!x){
//     console.log('test'); 
// }


// home tasks
// guessing game (variables ,  math , conditions );


let secretNumber = Math.floor(Math.random() * 10) + 1;

let guess = null;


while(guess !== secretNumber){
  guess = +prompt('1 dan 10 gacha son kiriting!');

  if(guess > secretNumber){
    alert('kiritgan soningiz katta , kichikroq son kiriting')
  }else if(guess < secretNumber){
    alert('kiritgan soningiz kichik , kattaroq son kiriting')
  }else{
    alert('Siz togri topdingiz')
  }
}


