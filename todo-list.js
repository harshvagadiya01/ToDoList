let ar = [];

function addTask() {
  const name = document.querySelector('.js-name-input');
  const date = document.querySelector('.js-date-input');
  const priority = document.querySelector('.js-priority-input');

  if (!name.value) {
    alert('Enter valid task');
    return;
  }
  if (!date.value) {
    alert('Enter Date');
    return;
  }

  const obj = {
    name: name.value,
    dueDate: date.value,
    priority: priority.value
  };

  ar.push(obj);

  name.value = '';
  date.value = '';
  printList();
}

function printList() {
  const printableHtml = document.querySelector('.js-tasks');

  let tasks = `
    <input type="text" placeholder="Todo name" class="js-name-input name-input">
    <input type="date" class="js-date-input dueDate-input">
    <select class="js-priority-input priority-input">
      <option value="High">🔥 High</option>
      <option value="Medium">⚡ Medium</option>
      <option value="Low">✅ Low</option>
    </select>
    <button class="add-button js-add-button">Add</button>`;

  ar.forEach((curr, index) => {
    tasks += `
        <div class="name">${curr.name}</div>
        <div class="date">${curr.dueDate}</div>
        <div class="priority ${curr.priority.toLowerCase()}">${curr.priority}</div>
        <button class="delete-button js-delete-button" data-index="${index}">Delete</button>`;
  });

  printableHtml.innerHTML = tasks;

  document.querySelector('.js-add-button').addEventListener('click', () => {
    addTask();
  });

  document.querySelectorAll('.js-delete-button').
    forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        ar.splice(index, 1);
        printList();
      })
    });
}

document.querySelector('.js-add-button').addEventListener('click', () => {
  addTask();
});