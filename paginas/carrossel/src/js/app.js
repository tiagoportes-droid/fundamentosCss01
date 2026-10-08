const telaCarousel = document.getElementById("potionCarrosel");
const BtnEsquerda = document.getElementById("BtnEsquerda");
const BtnDireita = document.getElementById("BtnDireita");
const resposta = document.getElementById("titulo");

// Array unificado com todas as poções da sua pasta
const pocoes = [
  "./src/componente/carousel/potion.png",
  "./src/componente/carousel/pocao-de-alta-saude.webp",
  "./src/componente/carousel/a-green-potion-png.webp",
];

let indiceAtual = 0;
const intervalo = 2000;

const atualizarCarousel = () => {
  if (telaCarousel) {
    telaCarousel.style.backgroundImage = `url("${pocoes[indiceAtual]}")`;
  }
};

const proximoSlide = () => {
  indiceAtual++;

  if (indiceAtual >= pocoes.length) {
    indiceAtual = 0;
  }

  atualizarCarousel();
};

const slideAnterior = () => {
  indiceAtual--;

  if (indiceAtual < 0) {
    indiceAtual = pocoes.length - 1;
  }

  atualizarCarousel();
};

if (BtnDireita) {
  BtnDireita.addEventListener("click", proximoSlide);
}

if (BtnEsquerda) {
  BtnEsquerda.addEventListener("click", slideAnterior);
}

// Troca automática das imagens
setInterval(proximoSlide, intervalo);

setTimeout(() => {
  if(resposta){
    resposta.innerText = `Levando Usuario para a página de espera..`;
  }
  setTimeout(() => {
    window.location.href = "../loja/index.html";
  }, 3000);
}, 30000); // 30seg

// Renderização inicial
atualizarCarousel();
