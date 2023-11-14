//LIGAÇÕES 
let htmlPontuacao = document.getElementById("pontucao")
let botaoNext = document.getElementById("btnNext")
let botaoConcluir = document.getElementById("btnConcluir")

const estadoSelect = document.getElementById('estado');
const cidadeSelect = document.getElementById('cidade');

estadoSelect.addEventListener('change', () => {
    const estadoSelecionado = estadoSelect.value;

    // Limpa as opções atuais do dropdown de cidades
    cidadeSelect.innerHTML = '';

    if (estadoSelecionado !== "") {
        // Cria uma opção para indicar as cidades do estado selecionado
        const estadoOption = document.createElement('option');
        estadoOption.disabled = true;
        estadoOption.selected = true;
        estadoOption.textContent = `Cidades do ${estadoSelecionado}`;
        cidadeSelect.appendChild(estadoOption);

        // Faz a requisição à API do IBGE para obter as cidades do estado selecionado
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`)
            .then(response => response.json())
            .then(data => {
                // Preenche o dropdown de cidades com as opções retornadas pela API
                data.forEach(cidade => {
                    const option = document.createElement('option');
                    option.value = cidade.id; // Ou outra propriedade que identifique a cidade
                    option.textContent = cidade.nome;
                    cidadeSelect.appendChild(option); // Adiciona a opção de cidade ao dropdown
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

function nextTela() {
  if (tela ==  11) {
    botaoNext.style.display = 'none';
    botaoConcluir.style.display = 'block';
    
  }
}