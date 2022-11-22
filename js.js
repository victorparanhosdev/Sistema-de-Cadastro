let botaoMenu = document.querySelector('.caixa-principal-de-cadastro')

let caixaDeNome = document.querySelector('#input-name')
let dataDeNascimento = document.querySelector('#input-nasc')

let listaDeIntem = document.querySelector('.listando-intem')



let produtos = []



function resetandoTodosElementos() {
    caixaDoValor.value = ''
    caixaDeNome.value = ''
    listaDeIntem.innerHTML = ''
}

function adicionandoElementoEmLista() {
    let item1 = caixaDeNome.value
    let item2 = dataDeNascimento.value
    produtos.push(item1, item2)
    let listaAdd = document.createElement('li')
    listaAdd.classList.add('option-lista')
    listaAdd.innerHTML = `
    <span class="span1">NOME:</span> ${item1} <span class="span1">IDADE:</span> <span class="span2">${item2} Anos</span>`
    
    listaDeIntem.appendChild(listaAdd)
    caixaDoValor.value = ''
    caixaDeNome.value = ''
}



const Menu = {
    abrir() {
        botaoMenu.classList.add('active')
    },
    fechar() {
        botaoMenu.classList.remove('active')
    },
}





