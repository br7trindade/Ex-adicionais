const prompt = require('prompt-sync')();

let anoNascimento = parseInt(prompt("Digite o seu ano de nascimento: "));
let anoAtual = new Date().getFullYear();
let idade = anoAtual - anoNascimento;
console.log("Sua idade é: " + idade + " anos.");
