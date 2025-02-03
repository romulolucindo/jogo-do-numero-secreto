// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function imc(peso, altura) {
  return Math.round((peso / (altura ** 2)) * 10) / 10;
}
let peso = 78;
let altura = 1.87;
let calculoImc = imc(peso, altura);
console.log(`O seu IMC é de: ${calculoImc}`);

function fatorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
} console.log(fatorial(prompt("Digite o numero que vc quer ver o fatorial!")));

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function conversaoDolarParaReais(dolar, taxaDeCambio) {
  return dolar * taxaDeCambio;
}
let dolar = 11;
let taxaDeCambio = 4.80;

let reais = conversaoDolarParaReais(dolar, taxaDeCambio);
reais = reais.toFixed(2).replace('.', ',');
dolar = dolar.toFixed(2).replace('.', ',');

console.log(`$${dolar} Dólares são R$${reais} Reais`);


// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
let alturaPerimetro = 20;
let larguraPerimetro = 50;

function areaDoPerimetro(alturaPerimetro, larguraPerimetro) {
  let area = larguraPerimetro * alturaPerimetro;
  let perimetro = 2 * (alturaPerimetro + larguraPerimetro);
  console.log(` O tamando da area é de: ${area}m, e o perimetro é de ${perimetro}m`);
} areaDoPerimetro(alturaPerimetro, larguraPerimetro);

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
let raio = 10;
function calcularAreaCircular(raio) {
}
const pi = 3.14;
let area = pi * raio ** 2;
let perimetro = 2 * pi * raio;
console.log(`A Area é de ${area.toFixed(2)}m e o perimetro é de ${perimetro.toFixed(2)}m.`)

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

let numero = 5;
function mostrartabuada(numero) {
  console.log(`Tabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}
mostrartabuada(numero);