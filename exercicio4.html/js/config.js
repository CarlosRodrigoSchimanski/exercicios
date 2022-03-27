const ant = document.getElementById('anterior');
const pos = document.getElementById('posterior');


function befor() {
    slider.src='./imagens/banner3.png';
}

function after() {
    slider.src='./imagens/banner2.png';
}

pos.addEventListener('click', befor);
ant.addEventListener('click', after);