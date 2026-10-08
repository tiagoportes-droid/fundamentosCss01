let quantidadePocao = 0;

const quantidade = document.querySelector(".quantidade");
const botoesPocao = document.querySelectorAll(".btn-compra");
const botaoComprar = document.getElementById("btnCompra");
const resposta = document.getElementById("resp");

let numeroMaxPotion = false;
let compradoPotion = false;

botoesPocao.forEach((botao) => {
  botao.addEventListener("click", () => {
    quantidadePocao += 1;
    quantidade.innerText = quantidadePocao;
    if (quantidadePocao === 8) {
      resposta.innerText = "Numero maximo de poções";
      quantidadePocao -= 1;
      numeroMaxPotion = true;
    }
  });
});

botaoComprar.addEventListener("click", () => {
  if (quantidadePocao > 0) {
    resposta.innerText = "Comprado com sucesso";
    compradoPotion = true;

    if (quantidadePocao === 0) {
      resposta.innerText = `Selecione ao menos uma poção`;
    }

    setTimeout(() => {
      resposta.innerText = "";
      quantidadePocao = 0;
      quantidade.innerText = quantidadePocao;
    }, 2500);

    if (compradoPotion && numeroMaxPotion) {
      resposta.innerText = `Levando Usuario para a página de espera..`;
      setTimeout(() => {
        window.location.href = "../carrossel/index.html";
      }, 1500);
    }
  }
});
