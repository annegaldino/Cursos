/*
    Faça um programa para calcular o valor de uma viagem

    Você terá 3 variáveis. Sendo elas:
    1 - Preço do combustível
    2 - Gasto médio do carro por KM
    3 - Distância em KM da viagem

 */

const prompt = require("prompt-sync")({sigint:true});

const precoCombustivel= prompt("Digite o preço do combustível ");

const gastoMedio = prompt("Consumo médio do veículo ");

let distancia = prompt("Qual a distância ");

let valorGasto = (distancia / gastoMedio) * precoCombustivel;

console.log("Será gasto: " + valorGasto.toFixed(2));