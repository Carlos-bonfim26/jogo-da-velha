let allBox = document.querySelectorAll("section span");
let players = document.querySelector(".players");
let gameArea = document.querySelector(".container-game")
function player(event){

const player1 = event.target;

document.querySelector(".container-game").style.display = 'flex'
document.querySelector(".escolherModo").style.display = 'none';
for (let i = 0; i < allBox.length; i++) {
    allBox[i].setAttribute("onclick", "clickedBox(this)")
       
   }

if(player1.textContent === "Player (X)"){

} else if(player1.textContent === "Player (O)"){
players.setAttribute("class", "players active play")

}

}

function replay(){
    window.location.reload()
}

let playerXIcon = "fas fa-times";
let playerOIcon = "far fa-circle";
let playerSign = "X"
let runbot = true;
//user click function
function clickedBox(element){
   
if(players.classList.contains("play")){
   
    element.innerHTML = `<i class="${playerOIcon}"></i>`
    players.classList.add("active")
    playerSign = "O"
    element.setAttribute("id", playerSign);
} else{
     element.innerHTML = `<i class="${playerXIcon}"></i>`
     players.classList.add("active")
     playerSign = "X"
     element.setAttribute("id", playerSign);
}
selectWinner()
element.style.pointerEvents = "none"
gameArea.style.pointerEvents = "none"
let randomDelayTime = ((Math.random() * 1000) + 200).toFixed();
setTimeout(() =>{
    bot(runbot);
}, randomDelayTime)
}
 
// bot click function

function bot(runbot){
 if(runbot){
    playerSign = "O"
    let array = [];

    for (let i = 0; i < allBox.length; i++) {
       if(allBox[i].childElementCount == 0){
        array.push(i);
       }
        
    }
    let randomBox = array[Math.floor(Math.random() * array.length)]
   
   if(array.length > 0){
    if(players.classList.contains("play")){

        allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`
        players.classList.remove("active")
        playerSign = "X"
        allBox[randomBox].setAttribute("id", playerSign)
    } else{
         allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`
         players.classList.remove("active")
         playerSign = "O"
         allBox[randomBox].setAttribute("id", playerSign)
    }
   }
    allBox[randomBox].style.pointerEvents = "none";
    gameArea.style.pointerEvents = "auto"
}
}


function getClass(idname){
    return document.querySelector(".box" + idname).id;
}
function checkClasses(val1, val2, val3, sign){
    if(getClass(val1) == sign && getClass(val2) == sign && getClass(val3) == sign){
        return true
    }
}

function selectWinner(){
    if(checkClasses(1, 2, 3, playerSign) || checkClasses(4, 5, 6, playerSign) || checkClasses(7, 8, 9, playerSign) || checkClasses(1, 4, 7, playerSign) || checkClasses(2, 5, 8, playerSign) || checkClasses(3, 6, 9, playerSign) || checkClasses(1, 5, 9, playerSign) ||checkClasses(3, 5, 7, playerSign)){
        runbot = false;
        document.getElementById("vencedor").innerHTML = `Player ${playerSign} venceu a rodada`
       
        setTimeout(()=>{
            finalPartida()
        }, 700)
    } 
    

    
}

function finalPartida(){
    document.querySelector(".replay").style.display = 'flex';
    document.querySelector(".container-game").style.display = 'none'
}