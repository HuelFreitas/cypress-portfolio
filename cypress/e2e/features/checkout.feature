# language: pt
Funcionalidade: Carrinho
  Como visitante da loja Demo Web Shop
  Quero adicionar um livro ao carrinho
  Para validar a jornada básica de compra

  Cenário: Adicionar o primeiro livro ao carrinho
    Dado que estou na home da loja
    Quando eu navego para a categoria Books
    E eu adiciono o primeiro livro ao carrinho
    Então o carrinho deve mostrar 1 item
