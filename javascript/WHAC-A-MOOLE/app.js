const squares= document.querySelectorAll('.square');
const mole= document.querySelector('.mole')
const timeleft=document.querySelector('#time-left');
const score=document.querySelector('#score');

let result=0;
let hitPosition
let current=60
let timerID= null;

function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('mole')
    } )

    let randomSquare=squares[Math.floor(Math.random()*9)]
    randomSquare.classList.add('mole')

    hitPosition= randomSquare.id;
}

squares.forEach(square=>{
    square.addEventListener('mousedown',()=>{
        if(square.id== hitPosition){
            result++;
            score.textContent = result;
            // hitPosition=null;
        }
    })
})

function moveMole(){
    
    timerID= setInterval(randomSquare, 500)
}


moveMole()

function countDown(){
    if(current==0){
        clearInterval(countDownTimerId)
        clearInterval(timerID)
        alert('GAME OVER! your final score is'+result)
    }
    current--
    timeleft.textContent=current
   
}

let countDownTimerId= setInterval(countDown, 1000)