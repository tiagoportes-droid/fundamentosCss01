const apresentar = () => {
  const resposta = document.getElementById("resp");
  resposta.innerText = `Olá mundo.`;
};

const botao = document.getElementById("btnCompra");

if (botao) {
  botao.addEventListener("click", apresentar);
}
