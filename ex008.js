const prompt = require('prompt-sync')();

let horasTrabalhadas = parseInt(prompt("Digite o número de horas trabalhadas por semana: "));
let valorHora = parseFloat(prompt("Digite o valor da hora trabalhada: "));
let salarioSemanal = horasTrabalhadas * valorHora;
let salarioMensal = salarioSemanal * 4;  // Supondo 4 semanas por mês
console.log(`Salário semanal: ${salarioSemanal}`);
console.log(`Salário mensal: ${salarioMensal}`);
