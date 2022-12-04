const taskInput = document.querySelector(".task-input");
const addBtn = document.querySelector(".button-add");

let taskList = [];

addBtn.addEventListener("click", addTask);



function addTask() {
 
    let task = {
        id : randomIDgenerate(),
        taskContent : taskInput.value,
        isComplete : false
    }
    taskList.push(task);
    console.log(taskList)
    render();
    taskInput.value="";
}

function render() {
    let resultHTML = '';
  
    for (let i = 0; i < taskList.length; i++) {
       

        if(taskList[i].isComplete == true){
            resultHTML += `
            <div class="task">
                        <div class="task-done">${taskList[i].taskContent}</div>
                        <div>
                            <button onClick="toggleComplete('${taskList[i].id}')">Check</button>
                            <button onClick="deleteTask('${taskList[i].id}')">Delete</button>
                        </div>
                    </div>
            `
        }else {
            resultHTML += `
            <div class="task">
                        <div>${taskList[i].taskContent}</div>
                        <div>
                            <button onClick="toggleComplete('${taskList[i].id}')">Check</button>
                            <button onClick="deleteTask('${taskList[i].id}')">Delete</button>
                        </div>
                    </div>
            `
        }
    }
    document.getElementById("task-board").innerHTML = resultHTML;
}

function randomIDgenerate(){
    return Math.random().toString(36).substr(2, 16);
}
function toggleComplete(id){
  
    for(let i=0;i<taskList.length;i++){
        if(taskList[i].id === id){
            // taskList[i].isComplete = true; 만약 이렇게 써버리면 평생 true인 상태로 굳음
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    //여기서 render 다시 안 불러주면 ui 수정 되지 않음! ui그려주는 건 render 관할임.
   render();
}

function deleteTask(id){
    for(let i=0;i<taskList.length;i++){
        if(taskList[i].id === id){
            taskList.splice(i,1)
        }
    }
    //여기서 render 다시 안 불러주면 ui 수정 되지 않음! ui그려주는 건 render 관할임.
   render();
   console.log("delete",id)
}