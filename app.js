const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");


function onLoginSubmitForm(event) {
   event.preventDefault(); //어떤 event 들이든지 default behavior을 막는 함수
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    console.log(username)
}

loginForm.addEventListener("submit",onLoginSubmitForm)