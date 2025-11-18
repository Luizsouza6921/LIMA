//1
let nome = "Luiz";

let titulo = document.querySelector("h1");
titulo.textContent = "Bem-vindo ao DOM, " + nome;
document.body.collor(titulo);

//2
let p = document.querySelector("p");
p.textContent = "Este é um parágrafo criado com JavaScript.";
document.body.collor(p);

//3
document.body.style.backgroundColor = "lightblue";

//4
titulo.style.color = "darkblue";
p.style.color = "darkred";
