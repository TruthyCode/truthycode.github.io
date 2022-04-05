const addTaskBtn = document.querySelector('button');
const userInput = document.querySelector('.inp');
const taskList = document.querySelector('ol');

const AddAndRemoveItems = function () {
  const newTask = userInput.value;
  if (newTask && newTask !== 'Your task goes here') {
    const taskListItem = document.createElement('li');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✔️';
    taskListItem.textContent = newTask;
    taskListItem.appendChild(deleteBtn);

    taskList.appendChild(taskListItem);
    userInput.value = '';
    document.querySelector('.message').textContent = '';

    deleteBtn.addEventListener('click', function () {
      document.querySelector('.message').textContent =
        `Completed the task - ${taskListItem.textContent}!`.replace('✔️', '');
      taskListItem.remove();
    });
  } else {
    if (userInput.value) userInput.value = '';
    alert(`You can't create an empty task`);
  }
  userInput.focus();
};
addTaskBtn.addEventListener('click', AddAndRemoveItems);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && document.activeElement == userInput) {
    AddAndRemoveItems();
  }
  if (e.key === 'Escape' && document.activeElement == userInput) {
    userInput.blur();
  }
});

userInput.addEventListener('click', function () {
  userInput.value = '';
});
