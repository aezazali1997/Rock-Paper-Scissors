let userMove,compMove,userScore=0,compScore=0,userWinner=false,compWinner=false;
const Winner = document.querySelector(".notify-win");
const user=document.querySelector('.user-score');
const comp = document.querySelector('.comp-score');
const choices=['rock','paper','scissor']
const userTurn = (e) => {
  userMove=e.currentTarget.id;
  compMove=compTurn();
  switch (userMove + compMove) {
    case "rockscissor":
    case "paperrock":
    case "scissorpaper":
      userScore = userScore + 1;
      userWinner=true;
      break;
    case "scissorrock":
    case "rockpaper":
    case "paperscissor":
      compScore = compScore + 1;
      compWinner=true;
      break;
  }
  setWinner();
  if(userScore===5 || compScore===5){
    endGame();
  }
};
let btns = document.querySelectorAll(".turns button");
btns.forEach((btn) => {
  btn.addEventListener("click", userTurn);
});
const compTurn = () => {
  return choices[Math.floor(Math.random() * 3)];
};

const setWinner = () => {
if(userWinner){
if(userMove==='rock'){
Winner.textContent='Rock Breaks Scissor, You win! 😄'
}
else if(userMove==='paper'){
Winner.textContent = "Paper covers Rock, You win! 😄";
  
}
else if (userMove === "scissor") {
Winner.textContent = "Scissor cuts Paper, You win! 😄";
}
user.textContent=userScore;
userWinner=false;
}
else if(compWinner){
  if (compMove === "rock") {
    Winner.textContent = "Rock Breaks Scissor, You Lose 😞"; 
  } else if (userMove === "paper") {
    Winner.textContent = "Paper covers Rock, You Lose 😞";
  } else if (userMove === "scissor") {
    Winner.textContent = "Scissor cuts Paper, You Lose 😞";
  }
  comp.textContent=compScore;
  compWinner=false;
}
else{
  Winner.textContent="Both Selected the same, Its a Draw 😃"
}
  
};
const endGame = () => {
  Winner.textContent="Game ended!"
  document.querySelector('.move-text').textContent="Refresh the page to Play Again!";
  btns.forEach((btn) => {
    btn.classList.add('hide');
  })
}
