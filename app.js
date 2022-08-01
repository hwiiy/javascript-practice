const hello = document.querySelector(".hello:first-child h1")


function handleClick () {
    const CurrentColor = hello.style.color;
    let Newcolor;
    if(CurrentColor === "blue") {
        Newcolor = "tomato";
    } else {
        Newcolor = "blue";
    }
     hello.style.color = Newcolor ;
}

    hello.onclick = handleClick;