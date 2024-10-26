let time = document.getElementById('time');
let btn = document.getElementById('button');


function startTimer(){
    if(timer){
        clearTimeout(timer);
    }
    let timer = setInterval(() => {
        time.innerText = time.innerText + 1;
    }, 1000);
}

btn.addEventListener('click', ()=>{
    startTimer();
})
