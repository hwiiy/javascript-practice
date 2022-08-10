const left = document.querySelector("#left_day")

function dayCounter (){
    const date = new Date(); //today
    const christmas = new Date("2022-12-25");
    const diff = christmas - date; //ms 단위로 반환해줌

    const diffsec = Math.floor(diff/1000%60)
    const diffmin = Math.floor(diff/(1000*60)%60)
    const diffhour = Math.floor(diff/(1000*60*60)%24)
    const diffDay = Math.floor(diff/(1000*60*60*24))


 
     left.innerText = `${diffDay}일 ${diffhour}시간 ${diffmin}분 ${diffsec}초 남았습니다.`
    
}

setInterval(dayCounter,1000)



