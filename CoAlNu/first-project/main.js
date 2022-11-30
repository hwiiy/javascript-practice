let computerNum = 0;

const playbtn = document.getElementById("playbtn")
const userInput =document.getElementById("user_input")
const result = document.getElementById("result")
const resetbtn = document.getElementById("resetbtn")
const chancesArea = document.getElementById("chance_area")

let chances= 5;
let gameover =false;
let history = [];


playbtn.addEventListener("click",play)
resetbtn.addEventListener("click",reset)
userInput.addEventListener("focus",()=>{userInput.value = ""})

function pickRandom(){
    computerNum = Math.floor(Math.random()*100)+1
    console.log(computerNum)
}

pickRandom()

function play(){
    let userValue = userInput.value;

    if (userValue < 1 || userValue > 100) {
      result.textContent = "1과 100사이의 숫자를 입력해주세요";
      return;
    }

    if (history.includes(userValue)) {
      result.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력하세요";
      return;
    }

    chances--;
    chancesArea.textContent = `남은 횟수 : ${chances}`;

    if (computerNum > userValue) result.textContent = "up!!";
    else if (computerNum < userValue) {
      result.textContent = "down!!";
    } else {
      result.textContent = "맞췄습니다!";
      playbtn.disabled = true;
      chancesArea.textContent = "";
    }
    if (chances < 1) {
      gameover = true;
      chancesArea.textContent = "남은 횟수가 없습니다 ㅠㅠ";
    }
    if (gameover) {
      playbtn.disabled = true;
      chancesArea.textContent = "";
      result.textContent = "Game Over!";
    }
    history.push(userValue);
   
}

function reset(){
    userInput.value = "";
    pickRandom()
    result.textContent = "결과값이 여기 나옵니다!"
    chancesArea.textContent = `남은 횟수 : 5`
    playbtn.disabled = false;

}