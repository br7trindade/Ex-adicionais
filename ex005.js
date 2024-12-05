// Importando o módulo prompt-sync
const prompt = require('prompt-sync')();

// Solicitar o nome do produto
let nomeProduto = prompt("Digite o nome do produto: ");

// Solicitar o preço unitário e converter para número decimal
let precoUnitario = parseFloat(prompt("Digite o preço unitário do produto: R$ "));

// Solicitar a quantidade comprada e converter para número decimal
let quantidade = parseFloat(prompt("Digite a quantidade comprada: "));

// Calcular o valor total sem imposto
let valorTotalSemImposto = precoUnitario * quantidade;

// Calcular o imposto de 18%
let imposto = valorTotalSemImposto * 0.18;

// Calcular o valor total com o imposto
let valorTotalComImposto = valorTotalSemImposto + imposto;

// Exibir os resultados
console.log("\nResumo da Compra:");
console.log("Nome do Produto: " + nomeProduto);
console.log("Preço Unitário: R$ " + precoUnitario.toFixed(2));
console.log("Quantidade Comprada: " + quantidade);
console.log("Imposto Total (18%): R$ " + imposto.toFixed(2));
console.log("Valor Total da Compra: R$ " + valorTotalComImposto.toFixed(2));
