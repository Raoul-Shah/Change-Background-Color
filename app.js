function changeColor(getColor) {
    let bg = document.querySelector('.bg');
    let selectColor = getColor.value;
    bg.style.background = selectColor;
}