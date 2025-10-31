console.log("Script")

// Add a task

function addTask() {
    /* 
    <div id="task1" class="task-item">
        <input type="checkbox" id="checkbox1">
        <label id ="label1"> Take out trash</label>
    </div>
    */

    // Get Task text 
    let textBox = document.getElementById("task-input")
    let taskText = textBox.value;
    textBox.value = ""

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