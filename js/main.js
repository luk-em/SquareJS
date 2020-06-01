let rotate = 50;
const deg = 10;

const div = document.querySelector('div');
const btn = document.querySelector('button');
div.style.transition = "0.5s";

btn.addEventListener("click", function () {
    rotate = rotate + deg;
    div.style.transform = "rotate(" + rotate + "deg)";
})
