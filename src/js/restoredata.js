import { infoItemLocalStorage } from "./storage";
import { TASKS_KEY } from "./constans";
import refs from "./refs";

export default function restoreData() {
  const data = infoItemLocalStorage(TASKS_KEY);
  if (!data) return;
  refs.list.innerHTML = '';
  const dataLi = data
    .map(
      elem =>
        `<li id = "${elem.ID}">${elem.value} <button type = "button">X</button></li>`
    )
    .join('');
  refs.list.insertAdjacentHTML('beforeend', dataLi);
}