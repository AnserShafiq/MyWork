// // Q1
// function randomNumber(n){
//     let randomNo= Math.floor(Math.random()*n)+1;
//     return randomNo;
// }
// console.log('Random No => ',randomNumber(18));

// // Q2
// function isValidPassword(password,username){
//     let ans=password.length<8? true:(password.indexOf(' ')>=0? true:password.indexOf(username)>=0? true:false);
//     if(ans===true){
//         return false;
//     }
//     else{
//         return true;
//     }
// }

// console.log(isValidPassword('89Fjj1nms','dogLuvr'));//true
// console.log(isValidPassword('dogLuvr123!', 'dogLuvr')); //false
// console.log(isValidPassword('hello1','dogLuvr'));//false


// // Q3
// function avg(array){
//     let sum=len=0;
//     for (let i of array){
//         sum=sum+i;
//         len+=1;
//     }
//     console.log(sum);
//     return sum/len;
// }

// const array=[75,76,80,95,100];
// console.log(avg(array));

// // Q4
// function random(array){
//     return array[Math.floor(Math.random()*array.length)];
// }
// function getCard(){
//     const val=[1,2,3,4,5,6,7,8,9,'J','Q','K','A'];
//     const suit=['clubs','spades','hearts','diamonds'];
//     let ans={};
//     ans.value=random(val);
//     ans.suit=random(suit);
//     return ans;
// }
// console.log(getCard());

// Q5 
const pangrams=['Waltz, bad nymph, for quick jigs vex',
    'Quick zephyrs blow, vexing daft Jim',
    'Sphinx of black quartz, judge my vow',
    'Two driven jocks help fax my big quiz',
    'Five quacking zephyrs jolt my wax bed',
    'The five boxing wizards jump quickly',
    'Pack my box with five dozen liquor jugs',
    'The quick brown fox jumps over the lazy dog',
    'Jinxed wizards pluck ivy from the big quilt',
    'Crazy Fredrick bought many very exquisite opal jewels',
    'We promptly judged antique ivory buckles for the next prize',
    'A mad boxer shot a quick, gloved jab to the jaw of his dizzy opponent',
    'Jaded zombies acted quaintly but kept driving their oxen forward',
    'The job requires extra pluck and zeal from every young wage earner'
]

// // Q6

// function fizzbuzz(n){
//     for(let i=1;i<=n;i++){
//         if(i%3===0 && i%5!=0){
//             console.log('fizz');
//         }
//         else if(i%5===0 && i%3!=0){
//             console.log('buzz');
//         }
//         else if(i%3===0 && i%5===0){
//             console.log('fizzbuzz');
//         }
//         else{
//             console.log(i);
//         }
//     }
// }

// fizzbuzz(17);

// // Q7
// function palindrome(word){
//     word=word.toLowerCase();
//     let check=word.split("").reverse().join("");
//     if(word===check){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(palindrome('abba'));
