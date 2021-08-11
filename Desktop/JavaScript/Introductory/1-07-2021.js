// Topic: Higher Order Function:
// It is a function that operates on/with other function
// Accepts other function as an argument OR return a function


// For Example:


// // 1. Function as a parameter.
// function laugh(){
//     console.log('hehehehe....');
// }

// function LaughThreeTime(func){
//     func();
//     func();
//     func();
// }

// LaughThreeTime(laugh);

// // 2. Function with return,
// function multipleBy(num){
//     return function (x){
//         return x*num;
//     }
// }

// const ans=multipleBy(2);
// console.log(ans(20));

// // OR

// const ans2=multipleBy(2)(20);
// console.log(ans2);


// function tripleADD(num1){
//     return function (num2){
//         return function (num3,num4){
//             return num1+num2+num3+num4;
//         }
//     }
// }
// const output=tripleADD(23)(10)(50,125);
// console.log(output);


// // Topic: Call Back Function:
// // setTimeout(function (){
// //     console.log('Data is available now');
// // },2000);

// // setInterval(() => {
// //     console.log('Data is available now');
// // }, 2000);


// const btn=document.getElementById('saveButton');
// // console.log(btn);
// // btn.classList.add('red-color');
// btn.addEventListener('click',function(){
//     console.log('I am clicked');
// })


// Topic: Hoisting:

// Variables declare with var keyword are hoisted at the top.
// Variables declared with let or const are not hoisted at top.
// Function declared with var keyword are not hoisted at the top.

// func();
// function func(){
//     console.log('Hello');
// }
// func();

// Topic: Build-In Array Helper Functions
// Used around 90-95% in web development 
