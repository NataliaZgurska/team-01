// Напиши функціонал додавання задач в список, при сабміті форми задача повинна додаватись в дом дерево, та сховище.
// При перезавантаженні сторінки, список повинен відображатись одразу
// Реалізувати функціонал видалення елементів зі списку при натисканні на кнопку видалити

import refs from './js/refs';
import { removeElement } from './js/removeItem';
import addSingleTask from './js/addsingletask';
import restoreData from './js/restoredata';
import { TASKS_KEY } from './js/constans';

const { form, list } = refs;

form.addEventListener('submit', onBtnSubmit);

restoreData(list, TASKS_KEY);
removeElement(list, TASKS_KEY);

function onBtnSubmit(e) {
  e.preventDefault();
  const inputEl = e.target.taskName.value.trim();
  if (!inputEl) return;

  addSingleTask(inputEl);
  e.target.reset();
}
