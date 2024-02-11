import { TASKS_KEY } from './js/constans';
import restoreData from './js/restoredata';
import { removeElement } from './js/removeItem';

const pageTWO = document.querySelector('.ul-local');

restoreData(pageTWO, TASKS_KEY);

removeElement(pageTWO, TASKS_KEY);
