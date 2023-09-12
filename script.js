// Definição variáveis / Captura elementos do DOM
let quantidadeSubtotal = document.getElementById("quantidade-subtotal");

let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

// Criar função atualizar o DOM 

function atualizarDom(){

quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";

valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
}
atualizarDom()

// Capturar elementos para aumentar a quantidade


let btnAdcionarUm = document.getElementById('btn-adicionar-produto-01');

let btnSubtrairUm = document.getElementById('btn-subtrair-produto-01')

let quantidadeProduto01 = document.getElementById('quantidade-produto-01');

let valorProduto01 = 11.66

// Função
function adcionarUm(){

// Incrementando a quantidade do produto
  quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1

// Incrementando a quantidade do subtotal
  subtotalInfo.quantidade = subtotalInfo.quantidade + 1

// Atualizar valor subtotal
subtotalInfo.valor = subtotalInfo.valor + valorProduto01

atualizarDom()

}

function subtrairUm(){

  // Subtraindo a quantidade do produto
    quantidadeProduto01.value = Number(quantidadeProduto01.value) - 1
  
  // Subtraindo a quantidade do subtotal
    subtotalInfo.quantidade = subtotalInfo.quantidade - 1
  
  // Atualizar valor subtotal
  subtotalInfo.valor = subtotalInfo.valor - valorProduto01

  // Atualizar o DOM  
  atualizarDom()
}

// Eventos
btnAdcionarUm.addEventListener("click", adcionarUm)
btnSubtrairUm.addEventListener("click", subtrairUm)



