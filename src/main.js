// Напиши функціонал додавання задач в список, при сабміті форми задача повинна додаватись в дом дерево, та сховище.
// При перезавантаженні сторінки, список повинен відображатись одразу
// Реалізувати функціонал видалення елементів зі списку при натисканні на кнопку видалити

const TASKS_KEY = 'TASKS_KEY';

const form = document.querySelector('#task-form');
const list = document.querySelector('#task-list');

form.addEventListener('submit', onBtnSubmit);

restoreData();

function onBtnSubmit(e) {
  e.preventDefault();
  const inputEl = e.target.taskName.value;
  console.log(inputEl);
  addSingleTask(inputEl);
  e.target.reset();
}

console.log(infoItemLocalStorage() || []);

function addSingleTask(value) {
  const arrItem = infoItemLocalStorage(TASKS_KEY) || [];
  const item = document.createElement('li');
  item.textContent = value;
  list.append(item);
  arrItem.push(value);
  addItemLocalStorage(TASKS_KEY, arrItem);
}

function addItemLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

function infoItemLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function restoreData() {
    const data = infoItemLocalStorage(TASKS_KEY);
    if (!data) return;
    const dataLi = data.map(elem => `<li>${elem}</li>`).join('');
    list.insertAdjacentHTML('beforeend', dataLi);
}