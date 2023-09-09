// Definição variáveis / Captura elementos do DOM
let quantidadeSubtotal = document.getElementById("quantidade-subtotal");

let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

// Funções substituição dos valores e quantidade
quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";

valorSubtotal.innerText = subtotalInfo.valor;


// Capturar elementos para aumentar a quantidade
let btnAdcionarUm = document.getElementById('btn-adicionar-produto-01');

let quantidadeProduto01 = document.getElementById('quantidade-produto-01');

// Função
function adcionarUm(){
  quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1
  
}

// Eventos
btnAdcionarUm.addEventListener("click", adcionarUm)
