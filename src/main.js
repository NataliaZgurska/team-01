// Напиши функціонал додавання задач в список, при сабміті форми задача повинна додаватись в дом дерево, та сховище.
// При перезавантаженні сторінки, список повинен відображатись одразу
// Реалізувати функціонал видалення елементів зі списку при натисканні на кнопку видалити

import { nanoid } from 'nanoid';
import { addItemLocalStorage, infoItemLocalStorage } from './js/storage'
import refs from './js/refs';

const { form, list } = refs;
const TASKS_KEY = 'TASKS_KEY';


form.addEventListener('submit', onBtnSubmit);
list.addEventListener('click', removeItem);

restoreData();

function onBtnSubmit(e) {
  e.preventDefault();
  const inputEl = e.target.taskName.value;
  addSingleTask(inputEl);
  e.target.reset();
}

function addSingleTask(value) {
  const arrItem = infoItemLocalStorage(TASKS_KEY) || [];
  const ID = nanoid();
  const item = document.createElement('li');
  const button = document.createElement('button');
  button.textContent = ' X';
  item.textContent = value;
  item.appendChild(button);
  button.setAttribute('type', 'button');
  list.append(item);
  item.setAttribute('id', `${ID}`);
  arrItem.push({ ID, value });
  addItemLocalStorage(TASKS_KEY, arrItem);
}



function restoreData() {
  const data = infoItemLocalStorage(TASKS_KEY);
  if (!data) return;
  const dataLi = data
    .map(
      elem =>
        `<li id = "${elem.ID}">${elem.value} <button type = "button">X</button></li>`
    )
    .join('');
  list.insertAdjacentHTML('beforeend', dataLi);
}

function removeItem(event) {
  if (event.target.nodeName === 'BUTTON') {
    const idItem = event.target.parentNode.getAttribute('id');
    event.target.parentNode.remove();
    const dataArr = infoItemLocalStorage(TASKS_KEY);
    const newArr = dataArr.filter(item => item.ID !== idItem);
    addItemLocalStorage(TASKS_KEY, newArr);
  }
}
