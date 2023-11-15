//LIGAÇÕES 
let htmlPontuacao = document.getElementById("pontucao")
let botaoConcluir = document.getElementById("btnConcluir")


const estadoSelect = document.getElementById('estado');
const cidadeSelect = document.getElementById('cidade');
estadoSelect.addEventListener('change', () => {
    const estadoSelecionado = estadoSelect.value;
    cidadeSelect.innerHTML = '';
    if (estadoSelecionado !== "") {
        const estadoOption = document.createElement('option');
        estadoOption.disabled = true;
        estadoOption.selected = true;
        estadoOption.textContent = `Cidades do ${estadoSelecionado}`;
        cidadeSelect.appendChild(estadoOption);
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`)
            .then(response => response.json())
            .then(data => {
                data.forEach(cidade => {
                    const option = document.createElement('option');
                    option.value = cidade.id; 
                    option.textContent = cidade.nome;
                    cidadeSelect.appendChild(option); 
                });
            })
            .catch(error => {
                console.error('Ocorreu um erro ao obter as cidades:', error);
            });
    }
});

//VARIAVEIS GLOBAIS

let pontos = 0
let tela = 1;

function pontuar() {
  pontos += 10
  tela++;
  htmlPontuacao.innerHTML = pontos
  console.log(tela)
  nextTela();

}
/* function nextTela() {
  if (tela ==  11) {
    botaoNext.style.display = 'none';
    botaoConcluir.style.display = 'block';
  }
} */

function Adeus() {
  console.log("Ação de conclusão realizada!");
  document.querySelector('.quadrado-central').style.display = 'none';
}

botaoConcluir.addEventListener('click', function() {
  Adeus();
});