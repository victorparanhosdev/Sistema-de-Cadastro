const botaoMenu = document.querySelector('.caixa-principal-de-cadastro')

const caixaDeNome = document.querySelector('#input-name')
const dataDeNascimento = document.querySelector('#input-nasc')

const tabelaDeIntem = document.querySelector('.tabela-de-lista')

const sexMF = document.getElementsByName('sexomf')
let tbody = document.querySelector(".tabela-de-lista")

const Menu = {

  abrir() {
    botaoMenu.classList.add('active')
  },
  
  ok(){
    botaoMenu.classList.remove('confirmacao')
    botaoMenu.classList.remove('active')
  },
  fechar() {
   
    botaoMenu.classList.remove('active')
  },
  salvar(){
    
    botaoMenu.classList.add('confirmacao')
    
    
  }

}

let produtos = []
let contagem = 1
let anoAtual = new Date().getFullYear()
let diaAtual = new Date().getDate()
let mesAtual = new Date().getMonth() + 1



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


  let nome = caixaDeNome.value
  let Sexo;
  let sex;

  if (sexMF[0].checked) {
    Sexo = 'M'
    sex = 'Masculino'
  } else if (sexMF[1].checked) {
    Sexo = 'F'
    sex = 'Feminino'
  }

  let Nomeconvertido = Number(nome)
  if(nome == '' || dataDeNascimento.value == ''){
    alert('Por favor preencher todos os dados')
  
  
  }else if(Nomeconvertido === Nomeconvertido){
    alert('Não é Permitido Números')
    
  }else {
    let listaAdd = document.createElement('tr')
    listaAdd.innerHTML = ` <tr>
      <td id="tabela-nome">${contagem}. ${nome}</td>
      <td id="tabela-idade">${idade}</td>
      <td id="tabela-sexo">${Sexo}</td>
    </tr>`
    produtos.push(nome, idade, sex)
    tabelaDeIntem.appendChild(listaAdd)
    contagem++
  }

  
  dataDeNascimento.value = ''
  caixaDeNome.value = ''




}







