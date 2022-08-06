const loginForm = document.querySelector("#login_form")
const loginInput = document.querySelector("#login_form input")
const greeting = document.getElementById("greeting")

const HIDDEN_CLASS = "hidden"
const USERNAME_KEY = "username"


function handleLoginForm () {
  event.preventDefault();  
  const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username)
    greeting.innerText = `Hello! ${username}` 
    greeting.classList.remove(HIDDEN_CLASS)
    loginForm.classList.add(HIDDEN_CLASS);
}


const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null ){
    //show form
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit",handleLoginForm)
} else {
    //show h1
    greeting.innerText = `Hello! ${savedUsername}`
    greeting.classList.remove(HIDDEN_CLASS);
}