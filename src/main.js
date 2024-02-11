// Напиши функціонал додавання задач в список, при сабміті форми задача повинна додаватись в дом дерево, та сховище.
// При перезавантаженні сторінки, список повинен відображатись одразу
// Реалізувати функціонал видалення елементів зі списку при натисканні на кнопку видалити


import refs from './js/refs';
import './js/removeItem';
import addSingleTask from './js/addsingletask';
import restoreData from './js/restoredata';


const { form } = refs;

form.addEventListener('submit', onBtnSubmit);

restoreData();

function onBtnSubmit(e) {
  e.preventDefault();
     const inputEl = e.target.taskName.value.trim();
  if (!inputEl) {
    return
  }
  
  addSingleTask(inputEl);
  e.target.reset();
}



