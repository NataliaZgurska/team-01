import { infoItemLocalStorage } from './storage';

export default function restoreData(ref, TASKS_KEY) {
  const data = infoItemLocalStorage(TASKS_KEY);
  if (!data) return;
  ref.innerHTML = '';
  const dataLi = data
    .map(
      elem =>
        `<li id = "${elem.ID}">${elem.value} <button type = "button">X</button></li>`
    )
    .join('');
  ref.insertAdjacentHTML('beforeend', dataLi);
}
