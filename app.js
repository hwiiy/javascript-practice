const h1 = document.querySelector(".hello h1");

function handleClick() {
    h1.className = "active";
}

h1.addEventListener("click",handleClick);