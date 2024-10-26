let time = document.getElementById('time');
let btn = document.getElementById('button');
let timer = null;

function startTimer(){
    if(timer) clearInterval(timer);

    timer = setInterval(() => {
        if(time.innerText < 10)time.innerText = Number(time.innerText) + 1;
        else clearInterval(timer)
    }, 500);
}

function reverseTimer (){
    if(timer) clearInterval(timer);

    timer = setInterval(() => {
        if(time.innerText > 0) time.innerText = Number(time.innerText) - 1;
        else clearInterval(timer)
    }, 500);
}

btn.addEventListener('click', ()=>{
    if(time.innerText == 0) startTimer();
    else if(time.innerText == 10) reverseTimer();
})
