const formulario = document.querySelector("#formCadastro");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const nome = document.querySelector("#txtNome").value.trim();
  const cidade = document.querySelector("#txtCidade").value.trim();
  const obs = document.querySelector("#txtObs").value.trim();

  localStorage.setItem('alunoNome', nome);
  localStorage.setItem('alunoCidade', cidade);
  localStorage.setItem("alunoObs", obs);

  window.location.href = "../consulta/consulta.html"
});
