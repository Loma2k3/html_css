const cardArray=[
    {
        name: 'sagiri',
        img: 'images/sagiri.png'
    },
    {
        name: 'goku',
        img: 'images/goku.png'
    },
    {
        name: 'kenpachi',
        img: 'images/kenpachi.png'
    },
    {
        name: 'saitama',
        img: 'images/saitama.png'
    },
    {
        name: 'tatsumaki',
        img: 'images/tatsumaki.png'
    },
    {
        name: 'vegeta',
        img: 'images/vegeta.png'
    },
    {
        name: 'sagiri',
        img: 'images/sagiri.png'
    },
    {
        name: 'goku',
        img: 'images/goku.png'
    },
    {
        name: 'kenpachi',
        img: 'images/kenpachi.png'
    },
    {
        name: 'saitama',
        img: 'images/saitama.png'
    },
    {
        name: 'tatsumaki',
        img: 'images/tatsumaki.png'
    },
    {
        name: 'vegeta',
        img: 'images/vegeta.png'
    }
]

cardArray.sort(()=> 0.5 - Math.random());

const gridDisplay= document.querySelector('#grid');
const resultDisplay= document.querySelector('#result');
let cardsChosen= [];
let cardsChosenIDs=[];
const cardsWon= [];

function createBoard(){
    for(let i=0; i<cardArray.length; i++){
        const card= document.createElement('img');
        card.setAttribute('src','images/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard);
        gridDisplay.appendChild(card);
    }
}

createBoard();

function checkMatch(){
    const cards= document.querySelectorAll('img');
    const optionOneID=cardsChosenIDs[0];
    const optionTwoID= cardsChosenIDs[1];
    console.log('check for match!');
    if(optionOneID == optionTwoID){
        cards[optionOneID].setAttribute('src','images/blank.png')
        cards[optionTwoID].setAttribute('src','images/blank.png')
        alert('you have clicked the same image')
    }

    if(cardsChosen[0] == cardsChosen[1]){
        alert('you found a match')
        cards[optionOneID].setAttribute('src','images/white.png')
        cards[optionTwoID].setAttribute('src','images/white.png')
        cards[optionOneID].removeEventListener('click',flipCard);
        cards[optionTwoID].removeEventListener('click',flipCard);
        cardsWon.push(cardsChosen)

    }else{
        cards[optionOneID].setAttribute('src','images/blank.png');
        cards[optionTwoID].setAttribute('src','images/blank.png');
    }
    resultDisplay.textContent=cardsWon.length;
    cardsChosen=[];
    cardsChosenIDs=[];
    
    if(cardsWon.length == cardArray.length/2){
        resultDisplay.innerHTML='congratulation you found them all'
    }
}

function flipCard(){
    let cardID= this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardID].name);
    cardsChosenIDs.push(cardID);
    this.setAttribute('src',cardArray[cardID].img);
    if(cardsChosen.length===2){
        setTimeout(checkMatch,500);
    }
}
