console.log("Script")

// Add a task

function addTask() {
    
    // Get Task text 
    let textBox = document.getElementById("task-input")
    let taskText = textBox.value;
    textBox.value = "";

    // prevet empty tasks
    if (taskText == "") {
        alert ("Please enter a task");
        return;
    }

    let idNum = generateIdNum();

    createTask(taskText, idNum)

    // save task to local storage 
    localStorage.setItem("task" + idNum, taskText);
    console.log(localStorage.length);
}

function generateIdNum() {
    // start with idnum = 0
    let idnum = 0;

    // check if task with idnum exists
    while (localStorage.getItem("task" + idnum)  != null) {
        idnum++;
    }

    // if it does increment idnum and check again
    return idnum;
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
        localStorage.removeItem("task" + idNum);
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

function createTask(taskText, idNum) {
    // get task list
    let taskList = document.getElementById("task-list")

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

    // Add checkbox to task div
    taskDiv.appendChild(checkbox);

    // Add the label to task div
    taskDiv.appendChild(label);

    // Add task div to the list
    taskList.appendChild(taskDiv);
}

function loadTasks() {
    console.log(localStorage.length)
    for (let i = 0; i < localStorage.length; i ++) {
        let key = localStorage.key(i)
        console.log(key)
        let taskText = localStorage.getItem(key);
        console.log(taskText);
        createTask(taskText, key.substring(4));
    }
    fixTaskColor();
}
loadTasks();

