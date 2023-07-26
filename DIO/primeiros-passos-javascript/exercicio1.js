/*
    1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcie e imprima
    a su média e a sia c;assofocação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3)

    Classificação:
    - Media menor que 5, reprovação
    - Média entre 5 e 7, recuperação
    - Média acima de 7, passou de semestre
 */
const prompt = require("prompt-sync")({sigint:true});

let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));

let media = (nota1 + nota2 + nota3) / 3;

if (media < 5)
    console.log("MÉDIA: " + media + " REPROVADO");
else if (media >= 5 && media < 7)
    console.log("MÉDIA: " + media + " RECUPERAÇÃO");
else
    console.log("MÉDIA: " + media + " APROVADO");