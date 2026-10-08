const nomeSalvo = localStorage.getItem("alunoNome");
const cidadeSalva = localStorage.getItem("alunoCidade");
const obsSalvo = localStorage.getItem("alunoObs");

const alunoCriado = [
  (document.querySelector("#resultadoNome").textContent = nomeSalvo),
  (document.querySelector("#resultadoCidade").textContent = cidadeSalva),
  (document.querySelector("#resultadoObs").textContent = obsSalvo),
];
