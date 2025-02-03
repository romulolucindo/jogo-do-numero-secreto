// Criar uma função que exibe "Olá, mundo!" no console.
function saudação() {
  console.log("Olá, mundo!!");
}
// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function saudacaoNome() {
  let nome = prompt("Digite o seu nome pf");
  console.log(`Olá ${nome}!`);
}
// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function numeroDobrado() {
  let numero1 = Number(prompt("Digite o numero que vc quer dobrar"));
  let potenciador = 2;
  let potenciacao = numero1 * potenciador;
  console.log(potenciacao);
} numeroDobrado();
// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media() {
  let numeroMedia1 = 5;
  let numeroMedia2 = 9;
  let numeroMedia3 = 7;
  let calculoMedia = (numeroMedia1 + numeroMedia2 + numeroMedia3 / 3);
  let resultadoMedia = console.log(`A média dos 3 valor é ${calculoMedia}!`);
} media();
// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero() {
  let maiorNumero1 = parseInt(Math.random() * 1000);
  let maiorNumero2 = parseInt(Math.random() * 1000);
  if (maiorNumero1 > maiorNumero2) {
    console.log(`Os numeros usados foram: ${maiorNumero1} e ${maiorNumero2}, e o maior deles é o ${maiorNumero1}`);
  } else {
    console.log(`Os numeros usados foram: ${maiorNumero1} e ${maiorNumero2}, e o maior deles é o ${maiorNumero2}`);

  }
} maiorNumero();
// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function multEleMesmo() {
  let numMultiplicar = parseInt(Math.random() * 100);
  console.log(numMultiplicar * numMultiplicar);
} multEleMesmo();
