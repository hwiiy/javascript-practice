const h1 = document.querySelector(".hello h1");

function handleClick() {
    const current = h1.className;
    let newcolor; 
    if(current === "active") {
        newcolor = "";
    } else {
        newcolor="active";
    }
    h1.className = newcolor;
}

h1.addEventListener("click",handleClick);