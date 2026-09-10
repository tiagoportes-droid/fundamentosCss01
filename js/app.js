const apresentar = () => {
  const resposta = document.getElementById("resp");
  resposta.innerText = `Comprado com sucesso`;
  setTimeout(() => {
    resposta.innerText = ``
  }, 3000);
};

const botao = document.getElementById("btnCompra");

if (botao) {
  botao.addEventListener("click", apresentar);
}
