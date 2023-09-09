// Definição variáveis / Captura elementos do DOM
let quantidadeSubtotal = document.getElementById("quantidade-subtotal");

let valorSubtotal1 = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

// Funções
quantidadeSubtotal.innerText = subtotalInfo.quantidade + "itens";
valorSubtotal.innerText = subtotalInfo.valor;

// Eventos

