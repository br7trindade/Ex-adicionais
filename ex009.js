const prompt = require('prompt-sync')();

let valorTotal = parseFloat(prompt("Digite o valor total da compra: "));
let parcelas = parseInt(prompt("Digite o número de parcelas: "));
let taxaJuros = parseFloat(prompt("Digite a taxa de juros mensal (em %): ")) / 100;

let parcelaComJuros = (valorTotal * (1 + taxaJuros) ** parcelas * taxaJuros) / ((1 + taxaJuros) ** parcelas - 1);
console.log(`Valor total: ${valorTotal}`);
console.log(`Número de parcelas: ${parcelas}`);
console.log(`Taxa de juros: ${(taxaJuros * 100)}%`);
console.log(`Valor da parcela: ${parcelaComJuros.toFixed(2)}`);
