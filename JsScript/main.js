const container = document.getElementById('container-dois');
const imagens = container.querySelectorAll('.bloquinhos-centro img');
let indiceAtual = 0;
function mostrarImagem(indice) {
    imagens.forEach((img, i) => { // Oculta todas as imagens
        img.parentElement.style.display = i === indice ? 'block' : 'none';
    });
}
function proximaImagem() {
    indiceAtual = (indiceAtual + 1) % imagens.length; // Volta p início após a última imagem
    mostrarImagem(indiceAtual);
}
function imagemAnterior() {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length; // Volta p final após a primeira imagem
    mostrarImagem(indiceAtual);
}
function adicionarBotoes() {
    const botaoAnterior = document.createElement('button');
    botaoAnterior.innerText = '◀';
    botaoAnterior.classList.add('botao-carrossel', 'anterior');
    botaoAnterior.addEventListener('click', imagemAnterior);

    const botaoProximo = document.createElement('button');
    botaoProximo.innerText = '▶';
    botaoProximo.classList.add('botao-carrossel', 'proximo');
    botaoProximo.addEventListener('click', proximaImagem);

    container.appendChild(botaoAnterior);
    container.appendChild(botaoProximo);
}
function iniciarCarrossel() {
    mostrarImagem(indiceAtual); // Mostra a primeira imagem
    adicionarBotoes(); // Adiciona os botões de navegação
}
window.onload = iniciarCarrossel;