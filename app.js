const hello = document.querySelector(".hello:first-child h1")


function handleBackgroundSize(){
    document.body.style.backgroundColor = "tomato";
}

function handleClick () {
    hello.style.color = "blue";
}

function handleMouseOn () {
    hello.innerText = "mouse is on!"
}
function handleMouseDown () {
    hello.innerText = "mouse is gone!"
}

function handleCopy () {
    alert("copier!!");
}
function handleoffline(){
    alert("SOS No wifi!!");
}

function handleonline () {
    alert("all gooood*^^*!");
}

hello.onclick = handleClick;
hello.addEventListener("mouseenter",handleMouseOn);
hello.addEventListener("mouseleave",handleMouseDown);
hello.addEventListener("copy",handleCopy);


window.addEventListener("offline",handleoffline);
window.addEventListener("online",handleonline);
window.addEventListener("resize",handleBackgroundSize);
