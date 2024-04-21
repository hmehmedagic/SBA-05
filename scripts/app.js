document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.parts_info');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const infoContainer = button.nextElementSibling;
            infoContainer.classList.toggle('show');
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const subTextItems = document.querySelectorAll(".sub_text");
    let delay = 11000;
    subTextItems.forEach(item => {
        item.style.animationDelay = `${delay}ms`;
        delay += 20;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    var gifElement = document.querySelector('.home_body');
    var gifUrl = 'AC6.gif';

    const updateBackground = () => {
        gifElement.style.backgroundImage = 'url(' + gifUrl + '?' + new Date().getTime() + ')';
    }

    updateBackground();

    window.addEventListener('load', updateBackground);
});