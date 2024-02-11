import { TASKS_KEY } from "./constans";
import { addItemLocalStorage, infoItemLocalStorage } from './storage'
import refs from './refs';
import { nanoid } from 'nanoid';

export default function addSingleTask(value) {
  const arrItem = infoItemLocalStorage(TASKS_KEY) || [];
  const ID = nanoid();
  const itemEl = `<li id="${ID}"> ${value} <button type='button'>X</button> </li> `

  refs.list.insertAdjacentHTML('beforeend', itemEl)

  arrItem.push({ ID, value });
  addItemLocalStorage(TASKS_KEY, arrItem);
}
