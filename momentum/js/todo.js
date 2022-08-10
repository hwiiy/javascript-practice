const toDoForm = document.getElementById("todo_form")
const toDoInput = toDoForm.querySelector("input")

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    
}