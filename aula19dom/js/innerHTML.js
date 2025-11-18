const container = document.querySelector('.container');
container.style.backgroundColor = 'yellow';

const titulo = document.getElementById('titulo');
titulo.style.fontSize = '28px';
titulo.style.color = 'red';
titulo.textContent = 'Manipulando o HTML via JavaScript';

const paragrafo = '<p>Eu sei acrescentar elementos via JavaScript, isso me torna super poderoso!</p>';
container.innerHTML += paragrafo;

titulo.innerText += "\nExemplo com innerText";


titulo.textContent = "Estudando DOM no Senai";

container.innerHTML += `
    <p id="prof1"></p>
    <p id="prof2"></p>
    <p id="prof3"></p>
`;

document.getElementById("prof1").textContent = "Professor: Carlos";
document.getElementById("prof2").textContent = "Professor: Ana";
document.getElementById("prof3").textContent = "Professor: João";

document.body.innerHTML += `
    <img src="https://uploads.metroimg.com/wp-content/uploads/2023/01/02114557/cr7-champions-emprestimo.jpg" width="150">
    <img src="https://s2-ge.glbimg.com/Qs0lbzpe7DejxY19oCQjKW09yLA=/0x0:2300x1517/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/G/A/aCKBdBTFmJofeo50z2vQ/2025-06-08t202523z-403099249-up1el681kqaon-rtrmadp-3-soccer-uefanations-por-esp-report.jpg" width="150">
`;
