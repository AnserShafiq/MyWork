const infoSection=document.querySelector('#info')
const Name='Anser';

// Local Storagge commands:

// 1- localStorage.setItem('itemname',value)
// 2- localStorage.getItem('itemname')
// 3- localStorage.removeItem('itemname')

// const myName='Anser Shafiq';
// localStorage.setItem('Name',myName);



// Arrays with objects as index are not store able
// in local storage so use JSON.stringify(arrayName) to convert
// object data into string 

const newP=document.createElement('p');
newP.innerText=localStorage.getItem('Name');
infoSection.appendChild(newP);
newP.style.color='blue';

const Ahmed={
    id:1,
    Name:'Ahmed Khan',
    age:30,
};
const Anser={
    i:3,
    Name:'Anser Shafiq',
    age:21,
};

// Array with Objects
const studentRecords=[Ahmed,Anser];

// Array with String Data

const stringArray=JSON.stringify(studentRecords);
localStorage.setItem('RECORD',stringArray);


// Using JSON.parse('stored array/key name') to convert back string
//  type into Objects type

let dataFromLocalStorage=localStorage.getItem('RECORD');
dataFromLocalStorage=JSON.parse(dataFromLocalStorage);

const newH3=document.createElement('h3');
newH3.innerText=dataFromLocalStorage[1].Name;
infoSection.appendChild(newH3);