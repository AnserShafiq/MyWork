// Functions return
// ---Objects:

// const getStats = (arr)=>{
//     const max=Math.max(...arr);
//     const min=Math.min(...arr);

//     return {
//         max,min
//     };
// };

// const reviews=[23,49,57,33];

// const stat=getStats(reviews);
// console.log(
//     stat
// );

// ---Computed Properties:
// const role='host';
// const player='Ahmed Khan';
// const team={
//     [role]:player,
//     [16]:'Sixteen',
// };
// OR
// team[role]=player;
// console.log(team);


// const addProperty=(obj,key,val)=>{
//     // const cloneObj={...obj};
//     // cloneObj[key]=val;
//     // return cloneObj;
//     return {
//         ...obj,
//         [key]:val,
//     };
// };

// const team={
//     Name:'Pakistan',
//     Players:16,
// };

// const result=addProperty(team,'location','Lahore');
// console.log(result);


// ---Adding Methods to Object:
// const math={
//     number:[1,2,3,4,5,6,7],
//     add:function(x,y){
//         return x+y;
//     },
//     multiply:function(x,y){
//         return x*y;
//     },
//     max:function(arr){
//         return Math.max(...arr);
//     },
// };

// const review=[1,21,12,33,54];

// console.log(math.max(review));
// console.log(math.add(10,20));

// ---This Keyword:

// function sayHi(){
//     console.log(this);
// }

// const person={
//     firstName:'Anser',
//     lastName:'Shafiq',
//     fullname(){
//         // this points to local objects
//         return `${this.firstName} ${this.lastName}`;
//     },
//     bio(){
//         const fullName=this.fullname();
//         return `${fullName} is a good Guy.`;
//     },
//     laugh:()=>{
//         //In this it will points to global objects
//         console.log(this);
//     },
// };
// person.fullname();
// console.log(person.bio());



// ---Events Handling on DOM:

// This way is also not recommended bcz of error and overwriting
// const btn=document.querySelector('#click');

// btn.onclick=()=>{
//     console.log('Button 2 Clicked');
// };
// btn.onclick=()=>{
//     alert('Second Button pressed');
// };

// ***Recommended Method by Sir for events handling
// const btn=document.querySelector('button');

// btn.addEventListener('click',function(){
//     console.log('Button Clicked');
// });
// btn.addEventListener('mouseover',function(){
//     btn.innerText='You touched this button';
// });
// btn.addEventListener('mouseout',function(){
//     btn.innerText='Click me';
// });

