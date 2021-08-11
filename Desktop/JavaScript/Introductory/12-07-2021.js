

// // Spread Operator
// function colors(a,b,c){
//     console.log('a: '+a);
//     console.log('b: '+b);
//     console.log('c: '+c);
// }

// const colorList=['red','blue','green','voilet','purple'];

// // Using Spread
// colorList(...colorList);
// const cloned=[...colorList];

// //using push to add at last of arr
// colorList.push('Black') //Will add at last of array

// // Using Unshift
// colorList.unshift('Pink') //will add at start of array


// // Using arguments operator
// function sum(){
//     const args=[...arguments];
//     const sumAll=args.reduce((total,currentValue)=>{
//         return total+currentValue;
//     },0);
//     return sumAll;
// }


// // RestOperator

// const sum=(...nums) =>{
//     const sumAll=nums.reduce((total,currentValue)=>{
//         return total+currentValue;
//     },0);
//     return sumAll;
// };

// console.log(sum(1,2,3,4,5,6,7,8));

// const FullName=(firstName,lasttName,...restArguments)=>{
//     console.log('First Name: '+firstName);
//     console.log('last Name: '+lastName);
//     console.log(restArguments);
// }

// // Array Destructioning
// const raceResults=[    'Anser',
// 'Ayaan',
// 'Ahmed',
// 'Moiz',
// 'Hasan'];

// const [firstPosition,secondPosition,thirdPosition, ,lastPostion]=raceResults;
// console.log(firstPosition);
// console.log(secondPosition);
// console.log(thirdPosition);
// console.log(lastPosition);


// const results=[
//     {
//         myName='Anser',
//         age='21',
//         country='Pakistan',
//         hobbies=['reading','learning'],
//     },
//     {
//         myName='Hooria',
//         age='18',
//         country='Pakistan',
//         hobbies=['reading','learning'],
//     },
//     {
//         myName='Ayaan',
//         age='15',
//         country='Pakistan',
//         hobbies=['reading','learning'],
//     },
// ]
// // Array Destruction
// const [firstObj,secondObj]=results;
// console.log(firstObj);

// // Object Destruction
// const {country}=secondObj;
// console.log(country);

// // Using object destruction with array destruction
// const [firstObj,{country},{myName,hobbies:skills}]=results;
// console.log(myName);
// console.log(skills);



