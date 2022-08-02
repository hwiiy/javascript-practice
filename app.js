const h1 = document.querySelector(".hello h1");

function handleClick() {
   const clickedClass = "clicked" // 이렇게 변수에다가 저장해두고 쓰는 게 아주 유용함!!

    if(h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}

h1.addEventListener("click",handleClick);