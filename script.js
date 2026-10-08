const form = document.getElementById('task-form');
const titleInput = document.getElementById('task-title');
const descInput = document.getElementById('task-desc');
const errorMsg = document.getElementById('error-message');
const list = document.getElementById('task-list');

function createTaskItem(title, description) {
  const li = document.createElement('li');
  li.className = 'task';
  const info = document.createElement('div');
  info.className = 'task-info';
  const h3 = document.createElement('h3');
  h3.textContent = title;
  const p = document.createElement('p');
  p.textContent = description;
  const status = document.createElement('span');
  status.className = 'status pending';
  status.textContent = 'Pending';
  info.append(h3, p, status);
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'toggle-btn';
  btn.textContent = 'Mark Completed';
  li.append(info, btn);
  return li;
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const title = titleInput.value.trim();
  const description = descInput.value.trim();
  if (title === '' || description === '') {
    errorMsg.textContent = 'Please enter both a title and a description.';
    return;
  }
  errorMsg.textContent = '';
  list.append(createTaskItem(title, description));
  form.reset();
});

// Toggle Pending/Completed (event delegation also works for new tasks)
list.addEventListener('click', function (event) {
  if (!event.target.classList.contains('toggle-btn')) return;
  const task = event.target.closest('.task');
  const status = task.querySelector('.status');
  const done = status.classList.contains('pending');
  status.classList.toggle('pending', !done);
  status.classList.toggle('completed', done);
  status.textContent = done ? 'Completed' : 'Pending';
  event.target.textContent = done ? 'Mark Pending' : 'Mark Completed';
});
