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
  info.append(h3, p);
  li.append(info);
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
