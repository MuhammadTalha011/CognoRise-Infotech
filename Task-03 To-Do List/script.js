let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
    const tasksList = document.getElementById('tasks');
    tasksList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;
        taskItem.innerHTML = `
            <h3>${task.name} - <span>${task.priority}</span></h3>
            <p>${task.description}</p>
            <p>${task.date}</p>
            <button onclick="toggleComplete(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        tasksList.appendChild(taskItem);
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDate = document.getElementById('taskDate').value;
    const taskPriority = document.getElementById('taskPriority').value;

    if (taskName && taskDescription && taskDate && taskPriority) {
        const task = {
            name: taskName,
            description: taskDescription,
            date: taskDate,
            priority: taskPriority,
            completed: false,
        };
        tasks.push(task);
        renderTasks();
        resetFields();
        alert("Task added successfully!");
    }
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function editTask(index) {
    const task = tasks[index];
    document.getElementById('taskName').value = task.name;
    document.getElementById('taskDescription').value = task.description;
    document.getElementById('taskDate').value = task.date;
    document.getElementById('taskPriority').value = task.priority;
    tasks.splice(index, 1); // Remove task for re-adding
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
    alert("Task deleted successfully!");
}

function resetFields() {
    document.getElementById('taskName').value = '';
    document.getElementById('taskDescription').value = '';
    document.getElementById('taskDate').value = '';
    document.getElementById('taskPriority').value = '';
}

// Filter tasks
document.getElementById('filterAll').addEventListener('click', () => {
    renderTasks();
});

document.getElementById('filterCompleted').addEventListener('click', () => {
    const filteredTasks = tasks.filter(task => task.completed);
    renderFilteredTasks(filteredTasks);
});

document.getElementById('filterPending').addEventListener('click', () => {
    const filteredTasks = tasks.filter(task => !task.completed);
    renderFilteredTasks(filteredTasks);
});

function renderFilteredTasks(filteredTasks) {
    const tasksList = document.getElementById('tasks');
    tasksList.innerHTML = '';

    filteredTasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;
        taskItem.innerHTML = `
            <h3>${task.name} - <span>${task.priority}</span></h3>
            <p>${task.description}</p>
            <p>${task.date}</p>
            <button onclick="toggleComplete(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        tasksList.appendChild(taskItem);
    });
}

document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('resetBtn').addEventListener('click', resetFields);

// Initial render
renderTasks();
