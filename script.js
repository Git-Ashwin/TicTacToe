
const parallax_el = document.querySelectorAll(".parallax");

console.log("Welcome to Tic Tac Toe !!!")
let bgaudio = new Audio("./Media/beep.mp3") 
let audioTurn = new Audio("./Media/beep_once.mp3") 
let gameover = new Audio("./Media/beep (1).mp3") 
let winmusic = new Audio("./Media/winner.mp3")
let drawMusic = new Audio("./Media/draw.mp3")
let turn = "X"
let isgameOver = false

// Function to change turn 
const changeTurn = () => {
    return turn === "X"?"0":"X"
}

//Fucntion to check win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText) !== ''){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " WON!!"
            isgameOver = true
            winmusic.play()
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
        }
    })
}

//Game logic
let boxes = document.getElementsByClassName("box");
let count = 0;
Array.from(boxes).forEach(element =>{
    
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=> {
        if(boxtext.innerText === ''){
            
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameOver){
                document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
                count = count + 1;
            }
            if(count == 9 && !isgameOver)
            {
                document.getElementsByClassName("info")[0].innerText = " Match is Tied!!!!";
                document.querySelector('.draw').getElementsByTagName('img')[0].style.width = "1200px"
                drawMusic.play();
            }
        }
    })
})

//Reset Button
reset.addEventListener('click', () =>{

    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText = ""
    })
    turn = "X"
    isgameOver = false
    count = 0
    winmusic.pause()
    winmusic.currentTime = 0
    document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})

//parallax effect sky theme
let xValue = 0, yValue = 0;

window.addEventListener("mousemove",(e)=>{
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    parallax_el.forEach((el)=>{
        el.style.transform = `translateX(calc(10% + ${xValue}px)) translateY(calc(-10% + ${-yValue}px))`;
    });

})