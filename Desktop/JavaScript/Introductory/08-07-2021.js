// Array Helper Methods
// 1- forEach
// 2- map
// 


// Topic: Fat Arrow Function
// const addTwoNewSyntax = (num1,num2)=>{
//     return num1+num2;
// }

// const words=['dog','bag','milk'];
// const copy=words.slice(0);

// --- Use Of forEach:
// words.forEach(function(word){
//     console.log(word);
// }) 
const books=[
    {
        title:"Physics",
        owner:"Ayaan",
        rating:4.3,
    },
    {
        title:"Maths",
        owner:"Anser",
        rating:3.3,
    },
    {
        title:"Biology",
        owner:"Hooria",
        rating:5,
    },
];

// books.forEach(function(book,index){
//     console.log(
//         index,book
//     );
// });

// --- Use oF Map:
// const copy=words.map(words=>{
//     return words;
// } ) ;

// const newarr=books.map(function (book){
//     return {
//         title:book.title,
//         owner:book.owner,
//     };
// });
// console.log(newarr);

// console.log(copy)
// console.log(words);


// --- find: //It Only return one object which got found first
// const bookTitles=books.map(book => book.title);

// const myBook=bookTitles.find(book =>{
//     return book.includes('Maths')
// });
// console.log(myBook);
// const myBooknName=books.find(book=>{
//     if(book.owner.includes('Anser')){
//         return book;
//     }
// });
// console.log(myBooknName);


// --- filter:

const bestBooks=books.filter(book=>{
    return book.rating>=5;
});
console.log(bestBooks);