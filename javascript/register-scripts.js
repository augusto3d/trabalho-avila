// Carregar os usuários salvos no localStorage ou inicializar um objeto vazio
const users = JSON.parse(localStorage.getItem('users')) || {}; 

// Função para registrar um novo usuário
function register(username, password) {
  // Verificar se o nome de usuário já existe
  if (users[username]) {
    // Exibe a mensagem de erro se o nome de usuário já existir
    document.getElementById('register-error-message').classList.remove('hidden');
  } else {
    // Caso não exista, adiciona o novo usuário no objeto users
    users[username] = password;
    // Salva a lista de usuários no localStorage
    localStorage.setItem('users', JSON.stringify(users));
    // Alerta de sucesso
    alert('Cadastro realizado com sucesso!');
    // Redireciona para a tela de login (index.html)
    window.location.href = 'index.html';
  }
}

// Aguardar o clique no botão de cadastro
document.getElementById('register-button').addEventListener('click', () => {
  // Pega os valores dos campos de nome de usuário e senha
  const username = document.getElementById('new-username-input').value.trim();
  const password = document.getElementById('new-password-input').value.trim();
  
  // Verifica se o usuário forneceu informações válidas antes de tentar registrar
  if (username === "" || password === "") {
    alert("Por favor, preencha todos os campos.");
  } else {
    // Chama a função de registro
    register(username, password);
  }
});
