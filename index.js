const newTaskInput = document.getElementById('new-task-input');
const addTaskButton = document.getElementById('add-task-button');
const tasksList = document.getElementById('tasks');

addTaskButton.addEventListener('click', (e) => {
    e.preventDefault();

    const taskText = newTaskInput.value.trim();
    if (!taskText) {
        return;
    }

    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.addEventListener('change', () => {
        taskElement.classList.toggle('completed');
    });

    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;

    const taskDeleteButton = document.createElement('button');
    taskDeleteButton.textContent = 'Delete';
    taskDeleteButton.addEventListener('click', () => {
        taskElement.remove();
    });

    taskElement.appendChild(taskCheckbox);
    taskElement.appendChild(taskTextElement);
    taskElement.appendChild(taskDeleteButton);

    tasksList.appendChild(taskElement);

    newTaskInput.value = '';
});
