const clock = document.getElementById("clock");

function showingClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0")
    const minutes = String(date.getMinutes()).padStart(2,"0")
    const seconds = String(date.getSeconds()).padStart(2,"0")
    clock.innerText = `${hours}:${minutes}:${seconds}`
}
showingClock(); //브라우저 창 열리자마자 바로 시계 띄우기 위해서
setInterval(showingClock, 1000) //1초 마다 showingClock 함수 실행시킨다!