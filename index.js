// Selectors
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to get current date in YYYY-MM-DD format
function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();

  // Pad month and day with leading zeros if needed
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
}

// Event listener for adding a new task
addTaskBtn.addEventListener('click', function() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
      <input type="checkbox">
      <span class="task-text">${taskText}</span>
      <span class="task-date">${getCurrentDate()}</span>
      <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = '';

    // Add event listener for delete button
    const deleteBtn = taskItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
      taskItem.remove();
    });

    // Add event listener for checkbox
    const checkbox = taskItem.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function() {
      const taskTextElement = taskItem.querySelector('.task-text');
      if (this.checked) {
        taskTextElement.classList.add('completed');
      } else {
        taskTextElement.classList.remove('completed');
      }
    });
  }
});