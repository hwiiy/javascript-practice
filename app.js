const h1 = document.querySelector("h1");

function mouseup() {
    h1.style.color = "gray"; 
    h1.innerText = "The mouse is here!"
}

function mousegone() {
    h1.style.color = "tomato";
    h1.innerText = "The mouse is gone!"
}

function rightClick(){
    h1.innerText = "rightClick!"
    h1.style.color = "gold"
    
}

function resize () {
    h1.innerText = "resized!!"
    h1.style.color = "blue"
}

console.dir(h1);

window.addEventListener("resize",resize)
h1.addEventListener("mouseenter",mouseup)
h1.addEventListener("mouseleave",mousegone)
h1.addEventListener("contextmenu",rightClick) //마우스 우클릭시  이벤트