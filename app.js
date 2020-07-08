const addForm = document.querySelector('.add');
const list = document.querySelector('.d-flex');
const ul = document.querySelector('.todos');
const search = document.querySelector('.search input')

let num = 1200;

//Adding Todo list
const generateList = (todo) => {
    
    const li = document.createElement('li');
    li.setAttribute('class', list.getAttribute('class'));
    li.innerHTML = `<input type="checkbox" name="checkbox" id=${num}>
                    <label for=${num}>${todo}</label>
                    <i class="fas fa-trash-alt delete"></i>`;
    ul.appendChild(li);
    addForm.reset();
    num = num+1;
};

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = addForm.add.value.trim();  //.add is the name of the input in form;
    if (todo.length) {
        generateList(todo);
    }
});

//Deleting todo
ul.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

//Searching Todo
const filteredList = (term) => {
    Array.from(ul.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(ul.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
};

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filteredList(term);
});