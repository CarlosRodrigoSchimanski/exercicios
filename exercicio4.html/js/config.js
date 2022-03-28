'use strict';

const imagens = [
    {'id': '1', 'url': './imagens/banner.png'},
    {'id': '2', 'url': './imagens/banner2.png'},
    {'id': '3', 'url': './imagens/banner3.png'},
    {'id': '4', 'url': './imagens/banner4.png'}
]

const container = document.querySelector('.container')

const loadimagens = (imagens, container) => {
    imagens.forEach(image => {
        container.innerHTML +=`
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    });
}

loadimagens( imagens, container);