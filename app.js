const loginForm = document.querySelector("#login_form")
const loginInput = document.querySelector(".loginInput")
const greeting = document.getElementById("greeting")


const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";



function handleFormDisappear (){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username) //DB에 저장하는 항목!
    loginForm.classList.add(HIDDEN_CLASS);
    paintGreetings(username);
}

// 같은 내용 반복돼서 함수로 만들어 줬음.
function paintGreetings (username) {
    greeting.innerText = `Hello! ${username}`;
    greeting.classList.remove(HIDDEN_CLASS)
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASS)
    loginForm.addEventListener("submit",handleFormDisappear)

} else {
    paintGreetings(savedUsername);

}