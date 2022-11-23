const botaoMenu = document.querySelector('.caixa-principal-de-cadastro')

const caixaDeNome = document.querySelector('#input-name')
const dataDeNascimento = document.querySelector('#input-nasc')

const tabelaDeIntem = document.querySelector('.tabela-de-lista')



let produtos = []
let contagem = 1
let anoAtual = new Date().getFullYear()
let diaAtual = new Date().getDate()
let mesAtual = new Date().getMonth() + 1

const sexMF = document.getElementsByName('sexomf')

function resetandoTodosElementos() {
  dataDeNascimento.value = ''
  caixaDeNome.value = ''
  tabelaDeIntem.innerHTML = ''
  contagem = 1
}

function adicionandoElementoEmLista() {
  let anoSelecionado = Number(dataDeNascimento.value.split('-')[0])
  let mesSelecionado = Number(dataDeNascimento.value.split('-')[1])
  let diaSelecionado = Number(dataDeNascimento.value.split('-')[2])

  let calculoDeDia = diaAtual - diaSelecionado
  let calculoDeMes = mesAtual - mesSelecionado
  let calculoDoAno = anoAtual - anoSelecionado
  let idade

  if (calculoDeMes >= 0) {
    if (calculoDeDia >= 0) {
      idade = calculoDoAno
    } else {
      idade = calculoDoAno - 1
    }
  } else {
    idade = calculoDoAno - 1
  }

  let item1 = caixaDeNome.value
  let Sexo
  let sex

  if (sexMF[0].checked) {
    Sexo = 'M'
    sex = 'Masculino'
  } else if (sexMF[1].checked) {
    Sexo = 'F'
    sex = 'Feminino'
  }

  produtos.push(item1, idade, sex)
  let listaAdd = document.createElement('tr')
  listaAdd.innerHTML = ` <tr>
    <td id="tabela-nome">${contagem}. ${item1}</td>
    <td id="tabela-idade">${idade}</td>
    <td id="tabela-sexo">${Sexo}</td>
  </tr>`

  tabelaDeIntem.appendChild(listaAdd)
  dataDeNascimento.value = ''
  caixaDeNome.value = ''
  contagem++
  alert(produtos)
}

const Menu = {
  abrir() {
    botaoMenu.classList.add('active')
  },

  ok(){
    botaoMenu.classList.remove('confirmacao')
  },
  fechar() {
   
    botaoMenu.classList.remove('active')
  },
  salvar(){
    botaoMenu.classList.add('confirmacao')
    
  }
}
