const h1 = document.querySelector("body");


function handle() {
    var wframe = window.innerWidth;

    console.log(wframe);
    h1.classList.add("red","blue","gold")

    if (wframe <= 1000){
        h1.classList.remove("blue","gold") //red 가 적용
    } else if(wframe >1000 && wframe <=1500) {
        h1.classList.add("blue")  // blue 적용
        h1.classList.remove("red","gold"); //red 지움
    } else {
        h1.classList.remove("blue")
        h1.classList.add("gold")
    }
}

window.addEventListener("resize",handle)