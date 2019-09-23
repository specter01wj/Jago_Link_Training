var x, y, output;

window.onload = function () {
    x = document.getElementById('X');
    y = document.getElementById('Y');
    output = document.getElementById('Output');
    wireEvents();
};

function wireEvents() {
    document.getElementById('Add').addEventListener('click', function () {
        output.innerHTML = add(x.value, y.value);
    });
    document.getElementById('Subtract').addEventListener('click', function () {
        output.innerHTML = subtract(x.value, y.value);
    });
}

function add(x: number, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}



