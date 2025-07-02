const loginForm = document.getElementById('login-form');

  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = document.getElementById('email').value;
      const senha = document.getElementById('senha').value;

      if (!email || !senha) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      fetch('https://api-cantina-storage.vercel.app/cozinheiras')
        .then(response => response.json())
        .then(users => {
          const user = users.find(
            user => user.email === email && user.senha === senha
          );

          if (!user) {
            alert('Email ou senha inválidos');
            return;
          }

          localStorage.setItem('id_usuario', user.id);
          localStorage.setItem('nome_usuario', user.nome);
          localStorage.setItem('email_usuario', user.email);

          alert('Login realizado com sucesso!');
          window.location.href = 'dashboard.html';
        })
        .catch(error => {
          console.error('Erro ao fazer login:', error);
          alert('Erro ao fazer login. Tente novamente mais tarde.');
        });
    });
  }
