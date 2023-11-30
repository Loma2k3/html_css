const yourChoiceDisplay= document.getElementById('your-choice');
const computerChoiceDisplay= document.getElementById('computer-choice');
const resultDisplay= document.getElementById('result');
const choices=document.querySelectorAll('button');

let you;
let youIcon

let computer;
let computerIcon;

let result;

choices.forEach(choice=>choice.onclick= e=>{
    you=e.target.innerHTML;
    if(you==='rock'){
        youIcon='<i class="fa-regular fa-hand-back-fist"></i>'
    }else if(you==='scissor'){
        youIcon='<i class="fa-regular fa-hand-scissors"></i>'
    }else if(you==='paper'){
        youIcon='<i class="fa-regular fa-hand"></i>'
    }
    

    yourChoiceDisplay.innerHTML=youIcon;
    generateComputerChoice();
    getResult();
})

function getResult(){
    if(computer=== you){
        result= 'its a draw';
    }
    if(computer==='rock' && you=== 'paper'){
        result='you win!';
    }
    if(computer==='rock' && you=== 'scissor'){
        result='you lost!';
    }
    if(computer==='paper' && you=== 'rock'){
        result='you lost!';
    }
    if(computer==='paper' && you=== 'scissor'){
        result='you win';
    }
    if(computer==='scissor'&& you==='paper'){
        result= 'you lost';
    }
    if(computer==='scissor'&& you==='rock'){
        result= 'you win';
    }

    resultDisplay.innerHTML=result
}

function generateComputerChoice(){
    const random= Math.floor(Math.random() * 3) + 1;
    if(random===1){
        computer= 'rock';
        computerIcon='<i class="fa-regular fa-hand-back-fist"></i>';
    }
    if(random===2){
        computer= 'scissor';
        computerIcon='<i class="fa-regular fa-hand-scissors"></i>';
    }
    if(random===3){
        computer= 'paper';
        computerIcon='<i class="fa-regular fa-hand"></i>'
    }

    computerChoiceDisplay.innerHTML=computerIcon;
}

