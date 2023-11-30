const cardArray=[
    {
        name: 'sagiri',
        img: '../images/sagiri.png'
    },
    {
        name: 'goku',
        img: '../images/goku.png'
    },
    {
        name: 'kenpachi',
        img: '../images/kenpachi.png'
    },
    {
        name: 'saitama',
        img: '../images/saitama.png'
    },
    {
        name: 'tatsumaki',
        img: '../images/tatsumaki.png'
    },
    {
        name: 'vegeta',
        img: '../images/vegeta.png'
    },
    {
        name: 'sagiri',
        img: '../images/sagiri.png'
    },
    {
        name: 'goku',
        img: '../images/goku.png'
    },
    {
        name: 'kenpachi',
        img: '../images/kenpachi.png'
    },
    {
        name: 'saitama',
        img: '../images/saitama.png'
    },
    {
        name: 'tatsumaki',
        img: '../images/tatsumaki.png'
    },
    {
        name: 'vegeta',
        img: '../images/vegeta.png'
    }
]

cardArray.sort(()=>0.5 - Math.random());

const boardDisplay=document.querySelector('#grid');

function createBoard(){
    for(let i=0; i< cardArray.length; i++){
        const card= document.createElement('img');
        card.setAttribute('data-id', i);
        card.setAttribute('src', '../images/blank.png');
        card.addEventListener('click', flipCard);
        boardDisplay.appendChild(card);
    }
}

let choseID=[]
function flipCard(){
    const id= this.getAttribute('data-id');
    this.setAttribute('src', cardArray[id].img);
    choseID.push(id);
    if(choseID.length==2){
        setTimeout(check, 500);
    }
}


let result=0;
function check(){
    const card=document.querySelectorAll('img');
    const imageOne= choseID[0];
    const imageTwo= choseID[1];
    if(imageOne == imageTwo){
        card[imageOne].setAttribute('src', '../images/blank.png')
        choseID=[]
        return;
    }

    if(cardArray[imageOne].name == cardArray[imageTwo].name){
        card[imageOne].setAttribute('src','../images/white.png')
        card[imageTwo].setAttribute('src','../images/white.png')
        card[imageOne].removeEventListener('click',flipCard)
        card[imageTwo].removeEventListener('click',flipCard)
        result++;
    }else{
        card[imageOne].setAttribute('src','../images/blank.png')
        card[imageTwo].setAttribute('src','../images/blank.png')
        choseID=[];
        return;
    }

    resultDisplay.innerHTML=result;
    choseID=[];
    
    if(result == cardArray.length/2){
        resultDisplay.innerHTML="you have found them all"
    }

}

createBoard();