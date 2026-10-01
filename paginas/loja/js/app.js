let quantidadePocao = 0;

const quantidade = document.querySelector(".quantidade");
const botoesPocao = document.querySelectorAll(".btn-compra");
const botaoComprar = document.getElementById("btnCompra");
const resposta = document.getElementById("resp");

botoesPocao.forEach((botao) => {
  botao.addEventListener("click", () => {
    quantidadePocao += 1;
    quantidade.innerText = quantidadePocao;
    if(quantidadePocao === 8){
      resposta.innerText = "Numero maximo de poções";
      quantidadePocao -= 1;
    }
  });
});

botaoComprar.addEventListener("click", () => {
  if (quantidadePocao > 0) {
    resposta.innerText = "Comprado com sucesso";

    setTimeout(() => {
      resposta.innerText = "";
      quantidadePocao = 0;
      quantidade.innerText = quantidadePocao;
    }, 2500);
  }
});
