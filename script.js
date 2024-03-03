let coin = document.querySelector('.coin');
let count = document.querySelector('.h1');
let wait = document.querySelector('.div')
var i = [];
coin.addEventListener('click',(e) =>{
    if(count.textContent > 1006){
        count.textContent = 'You win';
    }else {
        count.textContent++;
    }
    i.push(1);
    console.log(i.length);
    wait.style = '--w:' + i.length + 'px;';
    wait.style.backgroundColor = '#AE0BB2';
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    ripples.textContent = '+1';
    coin.appendChild(ripples)
    setTimeout(() => {
        ripples.remove()
    },1000)
});