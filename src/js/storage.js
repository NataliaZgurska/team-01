export function addItemLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

export function infoItemLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}