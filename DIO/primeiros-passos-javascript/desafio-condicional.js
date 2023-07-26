/*
    Faça um programa para calcular o valor de uma viagem

    Você terá 5 variáveis. Sendo elas:
    1 - Preço do etanol;
    2 - Preço da gasolina;
    3 - O tipo do combustível que está no seu carro;
    4 - Gasto médio do carro por KM
    5 - Distância em KM da viagem

    Imprima no console o valor que será gasto para realizar esta viagem

 */
const prompt = require("prompt-sync")({sigint:true});

let tipoCombustivel = prompt("Qual o combustível utilizado? E - Etanol ou G - Gasolina ");

let gastoMedio = prompt("Consumo médio do veículo ");

let distancia = prompt("Qual a distância ");

const valorEtanol = 4.5;
const valorGasolina = 5.5;

let valorGasto = 0;

if(tipoCombustivel == 'E')
    valorGasto = (distancia / gastoMedio) * valorEtanol;
else(tipoCombustivel == 'G')
    valorGasto = (distancia / gastoMedio) * valorGasolina;

console.log("Será gasto de " + (tipoCombustivel == 'E' ? "Etanol: " : "Gasolina: ") + valorGasto.toFixed(2));