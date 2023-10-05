//LIGAÇÕES 
let htmlPontuacao = document.getElementById("pontucao")
let botaoNext = document.getElementById("btnNext")
let botaoConcluir = document.getElementById("btnConcluir")


//VARIAVEIS GLOBAIS

let pontos = 0
let nome = "";
let tela = 1;

function pontuar() {
  pontos += 10
  tela++;
  htmlPontuacao.innerHTML = pontos
  console.log(tela)
  nextTela();
}

function nextTela() {
  if (tela ==  11) {
    botaoNext.style.display = 'none';
    botaoConcluir.style.display = 'block';
    
  }
}