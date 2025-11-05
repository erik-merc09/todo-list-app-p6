console.log("Script")

// Add a task

function addTask() {
    
    // Get Task text 
    let textBox = document.getElementById("task-input")
    let taskText = textBox.value;
    textBox.value = ""

    createTask(taskText)

}

function removeTask(event) {
    // Get the id of div to remove
    let checkboxId = event.target.id;
    let idNum = checkboxId.substring(8);
    let taskDiv = document.getElementById("task" + idNum);
    taskDiv.classList.add("remove")

    //Get the task-list container
    let taskList = document.getElementById("task-list")

    // Remove task div from task list
    //taskList.removeChild(taskDiv)
    setTimeout(function() {
        taskList.removeChild(taskDiv)
        fixTaskColor();
    }, 1000);
}

function fixTaskColor() {
    let taskList = document.getElementById("task-list")
    for ( let i = 0; i < taskList.childElementCount; i++) {
        taskList.children[i].style.backgroundColor = "blue"
        if (i % 2 == 1) {
            taskList.children[i].style.backgroundColor = "darkturquoise"
        }
    }
}

function createTask(taskText) {
    // get task list
    let taskList = document.getElementById("task-list")

    // generate id number
    let idNum = taskList.childElementCount;

    // Create task div
    let taskDiv = document.createElement("div")
    taskDiv.id = "task" + idNum;
    taskDiv.classList.add("task-item")
    if (idNum % 2 == 1 ) {
        taskDiv.style.backgroundColor = "darkturquoise"
    }

    // Create checkbox
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    checkbox.id = "checkbox" + idNum;
    checkbox.addEventListener("change", removeTask);

    // Create label
    let label = document.createElement
    ("label")
    label.id = "label" + idNum;

    // Set label text
    label.innerText = taskText;

    // dave task to local storage 
    localStorage.setItem(taskDiv.id, taskText);
    console.log(localStorage.length);

    // Add checkbox to task div
    taskDiv.appendChild(checkbox);

    // Add the label to task div
    taskDiv.appendChild(label);

    // Add task div to the list
    taskList.appendChild(taskDiv);
}

function loadTasks() {
    console.log(localStorage.length)
    for (let i = 0; i< localStorage.length; i ++) {
        let key = localStorage.key(i)
        console.log(key)
        let taskText = localStorage.getItem(key);
        console.log(taskText);
        createTask(taskText);
    }
}
loadTasks();

