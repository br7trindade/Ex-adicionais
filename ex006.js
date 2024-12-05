const prompt = require('prompt-sync')();

let nomeProduto = prompt("Digite o nome do produto: ");
let precoOriginal = parseFloat(prompt("Digite o preço original do produto: "));
let desconto = parseFloat(prompt("Digite a porcentagem de desconto: "));
let valorDesconto = precoOriginal * (desconto / 100);
let precoFinal = precoOriginal - valorDesconto;
console.log(`Produto: ${nomeProduto}`);
console.log(`Preço original: ${precoOriginal}`);
console.log(`Desconto: ${valorDesconto}`);
console.log(`Preço final após desconto: ${precoFinal}`);
