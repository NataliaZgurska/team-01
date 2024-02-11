import refs from "./refs";
import {TASKS_KEY} from '../main';
import { addItemLocalStorage, infoItemLocalStorage } from './storage';

refs.list.addEventListener('click', removeItem);

function removeItem(event) {
    if (event.target.nodeName === 'BUTTON') {
      const idItem = event.target.parentNode.getAttribute('id');
      event.target.parentNode.remove();
      const dataArr = infoItemLocalStorage(TASKS_KEY);
      const newArr = dataArr.filter(item => item.ID !== idItem);
      addItemLocalStorage(TASKS_KEY, newArr);
    }
  }