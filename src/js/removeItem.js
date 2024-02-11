import { addItemLocalStorage, infoItemLocalStorage } from './storage';

export function removeElement(ref, TASKS_KEY) {
  ref.addEventListener('click', removeItem);

  function removeItem(event) {
    if (event.target.nodeName !== 'BUTTON') return;

    const idItem = event.target.parentNode.getAttribute('id');
    event.target.parentNode.remove();
    const dataArr = infoItemLocalStorage(TASKS_KEY);
    const newArr = dataArr.filter(item => item.ID !== idItem);
    addItemLocalStorage(TASKS_KEY, newArr);
  }
}
