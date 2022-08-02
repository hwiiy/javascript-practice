const h1 = document.querySelector(".hello h1");

function handleClick() {
   const clickedClass = "clicked" // 이렇게 변수에다가 저장해두고 쓰는 게 아주 유용함!!
    h1.classList.toggle("clicked");
}

h1.addEventListener("click",handleClick);