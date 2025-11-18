const corpo = document.body
//const corpo = querySelector('.container')
const container = document.querySelector('.container');
const titulo = document.getElementById('titulo');
const paragrafo = document.querySelectorAll('[data-info="intro"]');


corpo.style.baclgroundColor = 'pink';
container.style.border = '2px solid black';
titulo.style.fontFamily = 'Arial';
titulo.style.fontSize = '48px'
titulo.style.color = 'white'
titulo.textContent = 'Dom' //Adicionando conteudo de texto
paragrafo.style.color = 'blue';

