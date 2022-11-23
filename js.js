const botaoMenu = document.querySelector('.caixa-principal-de-cadastro')

const caixaDeNome = document.querySelector('#input-name')
const dataDeNascimento = document.querySelector('#input-nasc')

const tabelaDeIntem = document.querySelector('.tabela-de-lista')


let produtos = []
let contagem = 1;


function resetandoTodosElementos() {
    dataDeNascimento.value = ''
    caixaDeNome.value = ''
    tabelaDeIntem.innerHTML = ''
    contagem = 1;
}


let anoAtual = new Date().getFullYear();
let diaAtual = new Date().getDate();

console.log(diaAtual)

function adicionandoElementoEmLista() {
    let item1 = caixaDeNome.value
    let item2 = dataDeNascimento.value
    let calculoDeIdade = (item2) -

    

    produtos.push(item1, item2)
    let listaAdd = document.createElement('tr')
    
    listaAdd.innerHTML = ` <tr>
    <td id="tabela-nome">${contagem}. ${item1}</td>
    <td id="tabela-idade"></td>
    <td id="tabela-sexo"></td>
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





