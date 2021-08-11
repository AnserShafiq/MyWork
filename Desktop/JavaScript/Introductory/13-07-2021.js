// DOM Manipulation

// Elements to select any DOM elements:
// 1- getElementById(Returns Single Object);
// 2- getElementsByClassName(Returns Collection);
// 3- getElementsBytagName(Returns Collection);
// 4- querySelector(Returns Single Object);
// 5- querySelectorAll(Returns Collection);


// --- Adding Style:
// const h1=document.querySelector('h1'); //This will only use the first h1 tag which appeared first
// h1.style.color='green'; //Will change color of h1 tags

// const h1tags=document.querySelectorAll('h1');

// for (let h1 of h1tags){
//     h1.style.color='red';
//     h1.style.fontSize='2rem';
//     h1.style.textDecoration='underline';
//     h1.style.fontWeight='1000';
// }



// --- CSS class use:
// const h1=document.querySelector('h1');
// // To add any css class in JS
// h1.classList.add('colorH1');

// // To delete any css class
// h1.classList.remove('colorH1');


// --- createElement:

const newLi1=document.createElement('li');
newLi1.innerText='First Li';

const newLi2=document.createElement('li');
newLi2.innerText='Second Li';

const newLi3=document.createElement('li');
newLi3.innerText='Third Li';

const parentUl=document.querySelector('#lower');


// Now to add creted elements, We can use

// --- append,prepend and insertBefore: 

// append:
parentUl.append(newLi1,newLi2,newLi3);

// insertBefore:
const newli4=document.createElement('li');
newli4.innerText='Fourth Li';
parentUl.insertBefore(newli4,newLi2);

// prepend:
const newli5=document.createElement('li');
newli5.innerText='Fifth Li';
parentUl.prepend(newli5);

