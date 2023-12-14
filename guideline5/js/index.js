const colors = document.querySelectorAll('.color');
const sizes = document.querySelectorAll('.size');
const fonts = document.querySelectorAll('.font');
const output = document.getElementById('output');

colors.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.getAttribute('data-color');
        changeColor(color);
    });
});

function changeColor(color) {
    output.style.color = color;
}

sizes.forEach(button => {
    button.addEventListener('click', () => {
        const size = button.getAttribute('data-size');
        changeSize(size);
    });
});

function changeSize(size) {
    output.style.fontSize = size + 'px';
}

fonts.forEach(button => {
    button.addEventListener('click', () => {
        const font = button.getAttribute('data-font');
        changeFont(font);
    });
});

function changeFont(font) {
    output.style.fontFamily = font;
}