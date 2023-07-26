/*
    2) O IMC - Índice de Massa Corporal é um critério da organização Mundial de Saúde para dar uma indicação sobre
    a condição de peso de uma pessoa adulta

    Fórmula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tebela abaixo:

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso
    - Entre 18.5 e 25 Peso Normal
    - Entre 25 e 30 Acima do Peso
    - Entre 30 e 40 Obeso
    - Acima de 40 Obesidade Grave
 */

const prompt = require("prompt-sync")({sigint:true});

let peso = parseFloat(prompt("Informe sue peso: "));
let altura = parseFloat(prompt("informe sua altura: "));

let imc = peso / Math.pow(altura,2);

if(imc < 18.5)
    console.log("IMC = " + imc + " => Abaixo do peso");
else if (imc >= 18.5 && imc < 25)
    console.log("IMC = " + imc + " => Peso normal");
else if (imc >= 25 && imc < 30)
    console.log("IMC = " + imc + " => Acima do peso");
else if (imc >= 30 && imc < 40)
    console.log("IMC = " + imc + " => Obeso");
else if (imc >= 40)
    console.log("IMC = " + imc + " => Obesidade Grave");