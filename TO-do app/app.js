function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    var task = {
        text: taskText,
        date: new Date()
    };

    tasks.push(task);
    updateLists();
    taskInput.value = "";
}

function completeTask(index) {
    tasks[index].completed = !tasks[index].completed;
    updateLists();
}

function editTask(index) {
    var newText = prompt("Edit task:", tasks[index].text);

    if (newText !== null) {
        tasks[index].text = newText;
        updateLists();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    updateLists();
}

function updateLists() {
    var pendingTasksList = document.getElementById("pendingTasks");
    var completedTasksList = document.getElementById("completedTasks");

    pendingTasksList.innerHTML = "";
    completedTasksList.innerHTML = "";

    tasks.forEach(function(task, index) {
        var li = document.createElement("li");
        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <span>${task.date.toLocaleString()}</span>
            <button class="complete" onclick="completeTask(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
            <button class="edit" onclick="editTask(${index})">Edit</button>
            <button class="delete" onclick="deleteTask(${index})">Delete</button>
        `;

        if (task.completed) {
            completedTasksList.appendChild(li);
        } else {
            pendingTasksList.appendChild(li);
        }
    });
}

var tasks = [];

// Example tasks
tasks.push({ text: "Learn HTML", completed: false, date: new Date() });
tasks.push({ text: "Build a To-Do App", completed: false, date: new Date() });

updateLists();
