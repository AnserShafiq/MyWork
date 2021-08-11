let interval=0;
let sec=0,min=0,hour=0;
const secs=document.querySelector('.secs');
const mins=document.querySelector('.mins');
const hours=document.querySelector('.hours');
const btn_start = document.querySelector('#btn-start');
const btn_stop=document.querySelector('#btn-stop')

function startTime(){
    while(true){
        sec++
        console.log(sec);
        if(sec<=9){
            secs.innerHTML='0'+sec;
        }
        if(sec>9 && sec<60){
            secs.innerHTML=sec;
        }
        if(sec>60){
            min++;
            sec=0;
            if(min<=9){
                mins.innerHTML='0'+min;
            }
            if(min>9 && min<60){
                mins.innerHTML=min;
            }
            if(min>60){
                break;
            }
        
        }
    }
    return;
}


btn_start.addEventListener('click',function(e){
    console.log('In Start');
    startTime();
})