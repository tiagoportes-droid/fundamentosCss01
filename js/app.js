const login = document.getElementById("txtLogin");
const senha = document.getElementById("txtSenha");
const divResposta = document.getElementById("resposta");
const botao = document.getElementById("btnAcessar");

const logins = [{ id: 1, email: "tiago.fportes@gmail.com", senha: "sla12345" }];

const mostrar = () => {
  const loginV = login.value;
  const senhaV = senha.value;

  divResposta.innerHTML = `
        <p><strong>Login: </strong>${loginV}</p>
        <p><strong>Senha: </strong>${senhaV}</p>
    `;

  const usuarioEncontrado = logins.find(
    (usuario) => usuario.email === loginV && usuario.senha === senhaV,
  );

  if (usuarioEncontrado) {
    divResposta.textContent = "Login efetuado com sucesso! Redirecionando...";

    setTimeout(() => {
      window.location.href = "../loja/index.html";
    }, 2000);
  } else {
    divResposta.innerHTML = `
        <p>Login ou senha incorretos.</p>
        `;
  }
};

botao.addEventListener("click", mostrar);
