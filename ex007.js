const prompt = require('prompt-sync')();

let valorTotal = parseFloat(prompt("Digite o valor total da compra: "));
let parcelas = parseInt(prompt("Digite o número de parcelas: "));
let valorParcela = valorTotal / parcelas;
console.log(`Valor total: ${valorTotal}`);
console.log(`Número de parcelas: ${parcelas}`);
console.log(`Valor de cada parcela: ${valorParcela}`);
