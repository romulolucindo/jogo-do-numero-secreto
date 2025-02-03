alert("Boas vindas ao jogo do numero secreto");
//Math.random para gerar numeros aleatorios (0.1234)
//Math.floor para arredondar o numero gerados para baixo(0.1234 = 1)
let mutiplicador = 1000;
let numeroSecreto = Math.floor(Math.random() * mutiplicador) + 1;
let chute
let tentativas = 1;

// Enquando o chute for diferente do numero secreto, repete-se o codigo e conta as tentativas.
console.log(numeroSecreto)
while (chute != numeroSecreto) {
  chute = prompt(`Chute um numero de 1 a ${mutiplicador}`);

  // se o chute for igual ao numero secreto, executar o alert de acerto, se não executar o alert de erro e repete.
  if (chute == numeroSecreto) {
    break;
  } else if (chute <= numeroSecreto) {
    alert(`O umero secreto é maior > que ${chute}`);
  } else {
    alert(`O umero secreto é menor < que ${chute}`);
  }
  tentativas++;

}
// Garante a concordancia gramatical sobre tentativa no singular e tentativas no plural
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Você acertou o numero secreto que era: ${numeroSecreto}, Você acertou com ${tentativas} ${palavraTentativa}.`);
