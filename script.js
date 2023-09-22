//LIGAÇÕES 
let htmlPontuacao = document.getElementById("pontucao")

//VARIAVEIS GLOBAIS

let pontos = 0

function pontuar(){
    pontos +=10
    htmlPontuacao.innerHTML = pontos
}

$(function() {
    $("#calendario").datepicker();
  });
  
  // Abrir o calendário quando o botão for clicado
  $("#btnCalendario").click(function() {
    $("#calendario").datepicker("show");
  });
