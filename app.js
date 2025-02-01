let listaDeNumerosSorteados = [];
let numeroLimite = 3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function gerarNumeroAleatorio() {
  let numerEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = limparCampo.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numerEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numerEscolhido);
    console.log(listaDeNumerosSorteados);
    return numerEscolhido;
  }
}

function exibirNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  if ('speechSynthesis' in window) {
    let utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR';
    utterance.rate = 1.2;
    window.speechSynthesis.speak(utterance);
  } else {
    console.log("Web Speech API não suportada neste navegador.");
  }
}

function exibirMensagemInicial() {
  exibirNaTela('h1', 'JOGO DO NUMERO SECRETO!');
  exibirNaTela('p', 'Chute um numero entre 1 a 10!');
}
exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;
  console.log(numeroSecreto);


  if (chute == numeroSecreto) {
    exibirNaTela('h1', 'Você acertou o numero secreto!');
    let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
    let mensagemTentativas = `Você descobriu o numero secreto que era: ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`;
    exibirNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto) {
      exibirNaTela('p', 'O numero secreto é menor!');
    } else {
      exibirNaTela('p', 'O numero secreto é maior!');
    }

    tentativas++;
  } limparCampo();
}
function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);

}