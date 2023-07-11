// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const pendingTasksList = document.getElementById('pendingTasks');
const completedTasksList = document.getElementById('completedTasks');

// Add event listeners
addTaskBtn.addEventListener('click', addTask);

// Add a new task
function addTask() {
  const taskText = taskInput.value;

  if (taskText !== '') {
    const taskItem = document.createElement('li');
    const taskTextSpan = document.createElement('span');
    const completeButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    taskTextSpan.innerText = taskText;

    completeButton.innerText = 'Complete';
    completeButton.addEventListener('click', completeTask);

    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', deleteTask);

    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);

    pendingTasksList.appendChild(taskItem);

    taskInput.value = '';
  }
}

// Mark a task as complete
function completeTask() {
  const taskItem = this.parentNode;
  const taskText = taskItem.querySelector('span').innerText;

  const completedTaskItem = document.createElement('li');
  const completedTaskTextSpan = document.createElement('span');
  const deleteButton = document.createElement('button');

  completedTaskTextSpan.innerText = taskText;

  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', deleteTask);

  completedTaskItem.appendChild(completedTaskTextSpan);
  completedTaskItem.appendChild(deleteButton);

  completedTasksList.appendChild(completedTaskItem);

  taskItem.remove();
}

// Delete a task
function deleteTask() {
  const taskItem = this.parentNode;
  taskItem.remove();
}

