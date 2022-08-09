const rangeForm = document.querySelector("#range")
const rangeInput = document.querySelector("#range input")

const guessForm = document.querySelector("#guess")
const guessInput = document.querySelector("#guess input")

const resultMessage = document.getElementById("result")
const final = document.getElementById("winOrLose")


//submit은 enter를 누르거나 button을 클릭할 때 모두 적용 됨 !

// range form 관련

function onRangeSubmit(){
event.preventDefault();
const rangeValue = rangeInput.value;
console.log(rangeValue);
}
rangeForm.addEventListener("submit",onRangeSubmit);

// guess form 관련

function onGuessSubmit(){
    const UserGuessNumber = guessInput.value;
    const rangeValue = rangeInput.value;
    event.preventDefault();
    
    const machine = Math.floor(Math.random() * rangeValue)

    resultMessage.innerText = `You chose : ${UserGuessNumber}, the machine chose : ${machine}`
    resultMessage.classList.remove("hidden")

    if(UserGuessNumber == machine){
        final.classList.remove("hidden");
        final.innerText = "You win!"
    } else {
        final.classList.remove("hidden");
        final.innerText = "You lost!"
    }
}
guessForm.addEventListener("submit",onGuessSubmit);

