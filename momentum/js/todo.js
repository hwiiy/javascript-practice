const toDoForm = document.getElementById("todo_form")
const toDoInput= toDoForm.querySelector("input")
const toDoList = document.getElementById("todo_list")

function paintToDo(newTodo) {
const li = document.createElement("li");
const span = document.createElement("span"); //나중에 삭제 버튼도 만들어야 하므로 이렇게 만들었음
li.appendChild(span) //li 안에 span을 집어 넣는 것! (li 자식요소로 span 존재)
span.innerText = newTodo;
toDoList.appendChild(li)
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo =toDoInput.value; //toDoInput.value값을 newTodo라는 변수에 복사해두는 것
    toDoInput.value = ""; 
    paintToDo(newTodo); //handleToDoSubmi 함수가 paintToDo 함수를 사용
}
toDoForm.addEventListener("submit",handleToDoSubmit);