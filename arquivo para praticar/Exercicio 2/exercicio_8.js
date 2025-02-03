// Crie um programa que utilize o console.log para exibir uma mensagem de boas - vindas.
console.log("Bem Vindo!")
// Crie uma variável chamada "nome" e atribua a ela o seu nome.Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = "Romulo";
console.log(`Olá ${nome}`);
// Crie uma variável chamada "nome" e atribua a ela o seu nome.Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!".
alert(`Olá ${nome}`);
// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?.Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let perguntaLinguagem = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(perguntaLinguagem);
// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha.Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado".Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 1;
let valor2 = 2;
let resultado = (valor1 + valor2);
console.log(`A soma dos valores ${valor1} e ${valor2} é: ${resultado}`);
// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha.Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado".Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let resultado2 = (valor1 - valor2);
console.log(`A subtração dos valores ${valor1} e ${valor2} é: ${resultado2}`);
// Peça ao usuário para inserir sua idade com prompt.Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = prompt("Qual a sua idade?");
if (idade >= 18) {
  alert("Maior de idade!");
} else alert("Menor de idade!!!");
// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero.Use if-else para imprimir a respectiva mensagem.
let numero = prompt("Digite im numero!");

if (numero == 0) {
  alert("Numero 0!!!!!!");
} else if (numero > 0) {
  alert("Numero positivo!");
} else alert("Numero negativo!!");

// Use um loop while para imprimir os números de 1 a 10 no console.
let loop1 = 1;
while (loop1 <= 10) {
  alert(loop1);
  loop1++;
}
// Crie uma variável "nota" e atribua um valor numérico a ela.Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nota = 5;
if (nota >= 7) {
  console.log("Aprovado");
} else console.log("Reprovado");

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numeroAleatorio = parseInt(Math.random());
console.log(numeroAleatorio);

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

let numeroInteiro = parseInt(Math.random() * 10 + 1);
console.log(numeroInteiro);

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numero1000 = parseInt(Math.random() * 1000 + 1);
console.log(numero1000);