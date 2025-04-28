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

  const carrinho = [];
  const container = document.getElementById('container-produtos');
  const carrinhoDiv = document.getElementById('carrinho');
  const botaoCarrinho = document.getElementById('botaoCarrinho');
  const itensCarrinho = document.getElementById('itensCarrinho');
  const totalSpan = document.getElementById('total');

  botaoCarrinho.addEventListener('click', () => {
    carrinhoDiv.style.display = carrinhoDiv.style.display === 'none' ? 'block' : 'none';
  });

  function atualizarCarrinho() {
    itensCarrinho.innerHTML = '';
    let total = 0;

    carrinho.forEach(produto => {
      const div = document.createElement('div');
      div.classList.add('item-carrinho');
      div.innerHTML = `<strong>${produto.nome}</strong><br>R$ ${produto.preco.toFixed(2)}`;
      itensCarrinho.appendChild(div);
      total += produto.preco;
    });

    totalSpan.innerText = `Total: R$ ${total.toFixed(2)}`;
  }

  produtos.forEach(produto => {
    const box = document.createElement('div');
    box.classList.add('produto');
    box.innerHTML = `
      <img src="${produto.foto}" alt="${produto.nome}">
      <h2>${produto.nome}</h2>
      <p>R$ ${produto.preco.toFixed(2)}</p>
      <button>Adicionar ao carrinho</button>
    `;
    box.querySelector('button').addEventListener('click', () => {
      carrinho.push(produto);
      atualizarCarrinho();
    });
    container.appendChild(box);
  });