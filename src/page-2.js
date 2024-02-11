import { TASKS_KEY } from './js/constans';
import restoreData from './js/restoredata';
import { removeElement } from './js/removeItem';
import { getContacts } from './js/API/api'

const pageTWO = document.querySelector('.ul-local');

restoreData(pageTWO, TASKS_KEY);

removeElement(pageTWO, TASKS_KEY);

getContacts();
