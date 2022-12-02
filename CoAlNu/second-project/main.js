const taskInput = document.getElementById("input");
const addBtn = document.getElementById("addBtn");

let taskList = [];

addBtn.addEventListener("click", addTask);

function addTask() {
    let taskContent = taskInput.value;
    taskList.push(taskContent);
    render();
}

function render() {
    let resultHTML = '';
    for (let i = 0; i < taskList.length; i++) {
        resultHTML += `
        <div class="task">
                    <div>${taskList[i]}</div>
                    <div>
                        <button>Check</button>
                        <button>Delete</button>
                    </div>
                </div>
        `
    }
    document.getElementById("task-board").innerHTML = resultHTML;

}