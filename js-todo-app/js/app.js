// Select DOM elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Event listener for form submission
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskText = todoInput.value.trim();

  if (taskText) {
    addTask(taskText);
    todoInput.value = ''; // Clear input field
  }
});

// Function to add a task
function addTask(taskText) {
  const li = document.createElement('li');
  li.textContent = taskText;

  // Add complete button
  const completeButton = document.createElement('button');
  completeButton.classList.add('complete');
  completeButton.textContent = 'Complete';
  completeButton.addEventListener('click', () => {
    li.classList.toggle('completed');
    if (li.classList.contains('completed')) {
      li.innerHTML = `<span style="color: green;">✔</span> ${taskText}`;
      li.appendChild(deleteButton); // Re-add delete button
    } else {
      li.textContent = taskText;
      li.appendChild(completeButton); // Re-add complete button
      li.appendChild(deleteButton); // Re-add delete button
    }
  });

  // Add delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete');
  deleteButton.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  todoList.appendChild(li);
}