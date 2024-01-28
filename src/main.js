// Напиши функціонал додавання задач в список, при сабміті форми задача повинна додаватись в дом дерево, та сховище.
// При перезавантаженні сторінки, список повинен відображатись одразу
// Реалізувати функціонал видалення елементів зі списку при натисканні на кнопку видалити

const form = document.querySelector('#task-form');
form.addEventListener('submit', onBtnSubmit);

function onBtnSubmit(e) {
    e.preventDefault();
    const inputEl = e.target.taskName.value;
    console.log(inputEl);
    e.target.reset();
}