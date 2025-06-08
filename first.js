let userScore=0;
let compScore=0;
const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userp=document.querySelector("#user-score");
const compu=document.querySelector("#comp-score");

const genCompChoice=()=>{
   const options=["rock","paper","scissors"];
   const randIndx=Math.floor(Math.random()*3);
   return options[randIndx];
}

const drawGame=()=>{
   console.log("draw game");
   msg.innerText="Draw game,Play Again!";
   msg.style.backgroundColor="#001f3f";
}

const playGame=(userChoice)=>{
   const compChoice = genCompChoice();
   console.log("comp choice is",compChoice);
   console.log("user choice is",userChoice);
   if(userChoice===compChoice){
      drawGame();
   }else{
      let winGame=true;
      if(userChoice==="rock" && compChoice==="paper"){
         winGame=false;
      }else if(userChoice==="rock" && compChoice==="scissors"){
         console.log(winGame);
      }else if(userChoice==="paper" && compChoice==="rock"){
         winGame=false;
      }else if(userChoice==="paper" && compChoice==="scissors"){
         console.log(winGame);
      }else if(userChoice==="scissors" && compChoice==="paper"){
        console.log(winGame);
      }else if(userChoice==="scissors" && compChoice==="rock"){
         winGame=false;
      }
      showWinner(winGame,userChoice,compChoice);
   }
   
}
const showWinner = (winGame, userChoice, compChoice) => {
   if (winGame) {
      userScore++;
      userp.innerText=userScore;
      console.log("you win");
      msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
   } else {
      compScore++;
      compu.innerText=compScore;
      console.log("you lose");
      msg.innerText = `You lose!  ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor = "red";
   }
}

choice.forEach((choice)=>{
   console.log("choice");
   choice.addEventListener("click",()=>{
      const userChoice=choice.getAttribute("id");
      playGame(userChoice);
   })
})
