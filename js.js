const botaoMenu = document.querySelector('.caixa-principal-de-cadastro')

const caixaDeNome = document.querySelector('#input-name')
const dataDeNascimento = document.querySelector('#input-nasc')

const tabelaDeIntem = document.querySelector('.tabela-de-lista')


let produtos = [];
let contagem = 1;
let anoAtual = new Date().getFullYear();
let diaAtual = new Date().getDate();
let mesAtual = new Date().getMonth() + 1;

const sexMF = document.getElementsByName('sexomf')



function resetandoTodosElementos() {
    dataDeNascimento.value = ''
    caixaDeNome.value = ''
    tabelaDeIntem.innerHTML = ''
    contagem = 1;
}




function adicionandoElementoEmLista() {
    let item1 = caixaDeNome.value
    let anoSelecionado = Number(dataDeNascimento.value.split("-")[0])
    //let mesSelecionado = dataDeNascimento.value.split("-")[1]
    //let diaSelecionado = dataDeNascimento.value.split("-")[2]
    let calculoDeIdade = (anoAtual - anoSelecionado)

    let Sexo = ''

    if (sexMF[0].checked) {
        Sexo = "M"
    } else if (sexMF[1].checked) {
        Sexo = "F"
    }

    produtos.push(item1, calculoDeIdade, Sexo)
    let listaAdd = document.createElement('tr')
    listaAdd.innerHTML = ` <tr>
    <td id="tabela-nome">${contagem}. ${item1}</td>
    <td id="tabela-idade">${calculoDeIdade}</td>
    <td id="tabela-sexo">${Sexo}</td>
  </tr>`

    tabelaDeIntem.appendChild(listaAdd)
    dataDeNascimento.value = ''
    caixaDeNome.value = ''
    contagem++



}



const Menu = {
    abrir() {
        botaoMenu.classList.add('active')
    },
    fechar() {
        botaoMenu.classList.remove('active')
    },
}





