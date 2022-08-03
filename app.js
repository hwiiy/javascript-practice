const loginForm = document.querySelector("#login_form");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting");

function handleFormDisapper(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden")//loginForm 에 class 명으로 hidden 추가하는 것임!
    greeting.innerText = "Hello! " + username;
    greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit",handleFormDisapper)

//form tag 이니까 click 아니고 submit 임