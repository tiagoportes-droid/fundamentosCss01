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

  if (loginV === "" || senhaV === "") {
    divResposta.innerHTML = `<p>Login e senha são obrigatórios</p>`;
    setTimeout(() => {
      divResposta.innerHTML = `<p></p>`;
    }, 2000);
    return;
  }

  const usuarioEncontrado = logins.find(
    (usuario) => usuario.email === loginV && usuario.senha === senhaV,
  );

  if (usuarioEncontrado) {
    divResposta.textContent = "Login efetuado com sucesso! Redirecionando...";

    setTimeout(() => {
      window.location.href = "../loja/index.html";
    }, 1500);
  } else {
    divResposta.innerHTML = `
        <p>Login ou senha incorretos.</p>
        `;
    setTimeout(() => {
      divResposta.innerHTML = `<p></p>`;
    }, 1000);
  }
};

botao.addEventListener("click", mostrar);
