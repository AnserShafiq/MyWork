// alert('Working js file in a browser with live servver');
// console.log("Yes this is browser console");

// let string1 = "i am living in PAKISTAN";
// let string2=string1.toUpperCase();
// console.log(string2);

// // Topic: Objects
// const myInfo={
//     name:"Anser",
//     occupation:"Student",
//     Degree:"BsCs",
//     Cnic:"32330-324-3-34344"
// }
// //name,occupation,degree,cnic => Object Keys
// // (Always they are string)

// // Anser, student, bscs, 123... => object Values

// // We have two ways to access the object properties:

// // 1. With Dont Notation
// // console.log(myInfo.name);
// // console.log(myInfo.Cnic);

// // 2. With square brackets
// // console.log(myInfo['occupation']);
// // console.log(myInfo['Degree']);

// // To Edit Object Values:
// myInfo.occupation='Teacher';

// // To Add New Key In Object:
// myInfo.Age="21";
// myInfo.Phone="03243242354";

// // console.log(myInfo);

// // To use variables with Object:
// let ref='name';
// console.log(myInfo[ref]);

// // To Add New Key with array:
// myInfo.hobby=["Badminton","Gaming","Swimming"];
// console.log(myInfo);

// // To Use Nested Object:
// myInfo['laptop']={
//     name:"DEll",
//     price:"30K",
//     edition:{
//         year:"2002",
//         color:'Black',
//         feature:['sound','mouse pad']
//     }
// };

// console.log(myInfo);
// // To print any thing from Nest:
// console.log(myInfo.laptop.edition.feature[1]);

// // Topic: Array With Objects As Element:
// const shoppingCart=[
//     {
//         product:'Floor',
//         quantity:1,
//         price:20
//     }
//     ,{
//         product:'Shampoo',
//         quantity:3,
//         price:200
//     }
// ];
// console.log(shoppingCart);
// // To print or access any obbject-element's key:
// console.log(shoppingCart[0].price);
// // Array's elements are only accessible by loop

// Loops:
// 1. For
// 2. While
// 3. For Of => Always uses for arrays(when you dont need array indicies)
// const sports=['Basketball','Cricket','Football'];
// for(let sport of sports){
//     console.log(sport);
// }
// const myName='AnserShafiq';
// for(const i of myName){
//     console.log(i);
// }
// const shoppingCart=[
//         {
//             product:'Floor',
//             quantity:1,
//             price:20
//         }
//         ,{
//             product:'Shampoo',
//             quantity:3,
//             price:200
//         }
//     ];
// let total=0;
// for ( const charac of shoppingCart ){
//     console.log(charac);
//     total+=charac.quantity;
// } 
// console.log(total);
// 4. For in => Always use for objects
// const myInfo={
//     name:"Anser",
//     occupation:"Student",
//     Degree:"BsCs",
//     Cnic:"32330-324-3-34344",
//     hobby:['Gamaing','Programming']
// };
// for(const property in myInfo){ //property will have access to keys
//     console.log(`${property}:${myInfo[property]}`);
//     console.log(myInfo[property]);
// }

// Topic: Functions


function myOwnFunction(){
    console.log('My Own Function');
}

myOwnFunction();

function myOwn(){
    return "HelloWorld";
}
console.log(myOwn());