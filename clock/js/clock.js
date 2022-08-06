const clock = document.getElementById("clock");

function showingClock(){
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
showingClock();
setInterval(showingClock, 1000) //1초 마다 showingClock 함수 실행시킨다!