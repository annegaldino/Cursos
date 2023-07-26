/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço de etiqueta
    e a escolja da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado

    Código Condição de pagamento:
    - A vista Débito, recebe 10% de desconto
    - A vista do Dinheiro ou PIX, recebe 15% de desconto
    - Em duas vezes, preço normal de etiqueta sem juros
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%
 */

const prompt = require("prompt-sync")({sigint:true});

let valorProduto = parseFloat(prompt("Valor da compra: "));
let tipoPagamento = prompt("Forma de pagamento: D - Débito, DP - Dinheiro ou PIX, 2 - Em duas vezes, X - Acima de duas vezes ");
let valorCompra = 0;


if(tipoPagamento == "D")
    valorCompra = valorProduto - (valorProduto * 0.10);
else if(tipoPagamento == "DP")
    valorCompra = valorProduto - (valorProduto * 0.15);
else if (tipoPagamento == "2")
    valorCompra = valorProduto;
else if(tipoPagamento == "X")
    valorCompra = valorProduto * 1.10;

console.log("Valor da Compra: " + valorCompra.toFixed(2));