const produtos = [
    {
      nome: "Ovo Bunny Day ACNH",
      foto: "acnh.jpg",
      preco: 100.000
    },
    {
      nome: "Ovo Sonic The Hedgehog",
      foto: "sonic.webp",
      preco: 60.00
    },
    {
      nome: "Ovo de Páscoa PlayStation",
      foto: "playstation.png",
      preco: 79.90
    },
    {
      nome: "Ovo de Páscoa Moranguinho",
      foto: "moranguinho.jpg",
      preco: 120.00
    },
    {
      nome: "Ovo de Páscoa Hello Kitty",
      foto: "olagatinha.jpg",
      preco: 50.00
    }
  ];

  const container = document.getElementById('container-produtos');

  produtos.forEach(produto => {
    const box = document.createElement('div');
    box.classList.add('produto');
    box.innerHTML = `
      <img src="${produto.foto}" alt="${produto.nome}">
      <h2>${produto.nome}</h2>
      <p>R$ ${produto.preco.toFixed(2)}</p>
      <button>Adicionar ao Carrinho</button>
    `;
    container.appendChild(box);
  });