// Load tasks from local storage
document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    
    taskList.innerHTML = ''; // Clear existing tasks

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${task}</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    if (task !== '') {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = ''; // Clear input field
        loadTasks(); // Reload tasks
    }
}

function editTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const newTask = prompt('Edit Task:', tasks[index]);

    if (newTask !== null && newTask !== '') {
        tasks[index] = newTask;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        loadTasks(); // Reload tasks
    }
}

function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks(); // Reload tasks
}
