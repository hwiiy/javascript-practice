const loginInput = document.querySelector("#login_form input");
const loginBtn = document.querySelector("#login_form button");


function handleOnclickBtn() {
    console.log(loginInput.value,"click!!" );
}

loginBtn.addEventListener("click",handleOnclickBtn);