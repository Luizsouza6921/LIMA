const secao = document.getElementById('area');

const titulo = document.createElement('h1');
titulo.textContent = "Meu Título";
titulo.setAttribute('id', 'titulo');

const texto = document.createElement('p');
texto.textContent = "Esse é um parágrafo criado com JavaScript.";
texto.setAttribute('class', 'texto');

const imagem = document.createElement('img');
imagem.setAttribute('src', 'https://s2-oglobo.glbimg.com/WVAoOdQBvhuzI7--mpGOVVpIN4w=/0x0:2678x1786/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/h/N/ZDGmcCRoqOnV75RIVbmg/101481258-portugals-forward-07-cristiano-ronaldo-reacts-during-the-qatar-2022-world-cup-quarte.jpg');

secao.appendChild(titulo);
secao.appendChild(texto);
secao.appendChild(imagem);
