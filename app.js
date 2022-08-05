const h1 = document.querySelector("body");


function handle() {
    var wframe = window.innerWidth;

    console.log(wframe);
    h1.classList.add("red","blue")

    if (wframe <= 1000){
        h1.classList.remove("blue") //red 가 적용
    } else if(wframe >1000 && wframe <=1500) {
        h1.classList.remove("red");
        h1.classList.add("blue")
    } else {
        h1.classList.remove("red","blue")
    }
}

window.addEventListener("resize",handle)