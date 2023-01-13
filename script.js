const colorVal = document.getElementById('color')
const button = document.getElementById('change')
const para = document.getElementById('paragraph')

button.addEventListener('click',function changeColor(){
    para.style.backgroundColor = colorVal.value;
})