var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : {
    todo: [],
    completed: []
};

//console.log( JSON.parse(localStorage.getItem('todoList')) );

var removeFa = '<i class="fa fa-trash-o"></i>';
var completeFa = '<i class="fa fa-check"></i>';
var dotsFa = '<i class="fa fa-ellipsis-h" aria-hidden="true"></i>';

renderToList();

document.getElementById('add').addEventListener("click", function () {
    var value = document.getElementById('item').value;

    if (value) {
        addItem(value);
    }
});

document.getElementById('item').addEventListener('keydown', function (e) {
    var value = this.value;
    if (e.code === 'Enter' && value) {
        addItem(value);
    };
})

function addItem(value) {
    addItemTodo(value);
    document.getElementById('item').value = '';

    data.todo.push(value);
    dataUpdated();
};

function renderToList() {
    if (!data.todo.length && !data.completed.length) return;

    for (var i = 0; i < data.todo.length; i++) {
        var value = data.todo[i];
        addItemTodo(value);
    };
    for (var j = 0; j < data.completed.length; j++) {
        var value = data.completed[j];
        addItemTodo(value, true);
    }
};

function dataUpdated() {
    localStorage.setItem('todoList', JSON.stringify(data));
};

function removeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    var value = item.innerText;

    if (confirm("Delete task?")) {
        if (id === 'todo') {
            data.todo.splice(data.todo.indexOf(value), 1);
        }
        else {
            data.completed.splice(data.completed.indexOf(value), 1);
        }
        dataUpdated();

        parent.removeChild(item);
    }
};

function completeItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    var value = item.innerText;

    if (id === 'todo') {
        data.todo.splice(data.todo.indexOf(value), 1);
        data.completed.push(value);
    } else {
        data.completed.splice(data.completed.indexOf(value), 1);
        data.todo.push(value);
    }

    dataUpdated();

    var target = (id === 'todo') ? document.getElementById('completed') : document.getElementById('todo');

    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
    item.classList.remove('opened');
};

function more() {
    var item = this.parentNode;
    item.classList.toggle('opened');
};

function addItemTodo(text, completed) {
    var list = (completed) ? document.getElementById('completed') : document.getElementById('todo');

    var item = document.createElement('li');
    item.classList.add('li');

    var hdr = document.createElement('p');
    hdr.innerText = text;

    var about = document.createElement('div');
    about.classList.add('about');
    about.setAttribute("contenteditable", true);

    var dots = document.createElement('div');
    dots.classList.add('dots');
    dots.innerHTML = dotsFa;

    dots.addEventListener('click', more);

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeFa;

    // Click event for remove item from list
    remove.addEventListener('click', removeItem);


    var border = document.createElement('div');
    border.classList.add('border');

    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeFa;

    // Click event for complete task from list
    complete.addEventListener('click', completeItem);

    buttons.appendChild(remove);
    buttons.appendChild(border);
    buttons.appendChild(complete);
    item.appendChild(hdr);
    item.appendChild(about);
    item.appendChild(buttons);
    item.appendChild(dots);

    list.insertBefore(item, list.childNodes[0]);
};


document.getElementById('f-color').addEventListener('click', function () {
    document.getElementById('header').style.backgroundColor = "#3568ba";
    document.getElementById('item').style.backgroundColor = "rgba(91, 139, 216,.4)";
    var x = document.getElementsByClassName('li');
    x.style.borderBottom = '1px';
    console.log(document.getElementsByClassName('li'));
});
document.getElementById('s-color').addEventListener('click', function () {
    document.getElementById('header').style.backgroundColor = "#e5822d";
    document.getElementById('item').style.backgroundColor = "rgba(255, 255, 255,.2)";
});
document.getElementById('th-color').addEventListener('click', function () {
    document.getElementById('header').style.backgroundColor = "#822de5";
    document.getElementById('item').style.backgroundColor = "rgba(255, 255, 255,.2)";
});
document.getElementById('ft-color').addEventListener('click', function () {
    document.getElementById('header').style.backgroundColor = "#2d7f37";
    document.getElementById('item').style.backgroundColor = "rgba(255, 255, 255,.2)";
});

