const INPUT=document.querySelector('#lbsInput');
const output=document.querySelector('#output');
const gram=document.querySelector('#gramsOutput');
const kg=document.querySelector('#kgOutput');
const oz=document.querySelector('#ozOutput');

output.style.visibility = 'hidden';

INPUT.addEventListener('input',function(e){
    output.style.visibility = 'visible';
    let lbs=e.target.value;
    console.log(lbs);
    gram.innerText=lbs / 0.0022046;
    kg.innerText=lbs / 2.2046;
    oz.innerText= lbs * 16;
});