document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');
    const colorInput = document.getElementById('colorInput');
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const newColor = colorInput.value;
        header.style.color = newColor;
    });
});
