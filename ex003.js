const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));
let maior = Math.max(num1, num2);
let menor = Math.min(num1, num2);
let diferenca = maior - menor;
console.log("A diferença entre o maior e o menor número é: " + diferenca);
