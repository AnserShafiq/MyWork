
const btns=document.querySelectorAll('button');
const bdy=document.querySelector('body')
const h1=document.querySelector('h1')

function colorChanger()
{
   const color=this.style.backgroundColor;
   bdy.style.backgroundColor=color;
   h1.innerHTML=`Your Color: <b>${color.toUpperCase()}</b>`;
   const bold=document.querySelector('b')
   bold.addEventListener('mouseover',function(){
       bold.style.color='white';
   })
   bold.addEventListener('mouseout',function(){
       bold.style.color='black';
   })
};

for(const btn of btns){
    const color=btn.innerText.toLowerCase();
    btn.style.backgroundColor=color;
    btn.addEventListener('click',colorChanger)
};
