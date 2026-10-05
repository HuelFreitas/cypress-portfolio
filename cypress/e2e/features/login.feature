# language: pt
Funcionalidade: Login
  Como usuário da aplicação The Internet
  Quero autenticar com e sem credenciais válidas
  Para validar o fluxo de acesso

  Cenário: Login com credenciais válidas
    Dado que estou na página de login
    Quando eu faço login com usuário "tomsmith" e senha "SuperSecretPassword!"
    Então devo ser redirecionado para a área segura
    E devo ver a mensagem de sucesso

  Cenário: Login com credenciais inválidas
    Dado que estou na página de login
    Quando eu faço login com usuário "usuario_invalido" e senha "senha_invalida"
    Então devo permanecer na página de login
    E devo ver a mensagem de erro de autenticação
