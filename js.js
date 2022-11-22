let botaoMenu = document.querySelector('.menu')
const caixaDoProduto = document.querySelector('#caixa-peca')
const caixaDoValor = document.querySelector('#caixa-valor-peca')

const botaoAdicionar = document.querySelector('#btn-adicionar')
const botaoReset = document.querySelector('#btn-reset')
const listaDeIntem = document.querySelector('#listando-intem')

let produtos = []

botaoReset.addEventListener('click', ()=> {
    caixaDoValor.value = ''
    caixaDoProduto.value = ''
    listaDeIntem.innerHTML = ''
})

botaoAdicionar.addEventListener('click', ()=> {
    let item1 = caixaDoProduto.value
    let item2 = Number(caixaDoValor.value)
    produtos.push(item1, item2)
    let listaAdd = document.createElement('li')
    listaAdd.classList.add('option-lista')
    listaAdd.innerHTML = `
    <span class="span1">NOME:</span> ${item1} <span class="span1">IDADE:</span> <span class="span2">${item2} Anos</span>`

    listaDeIntem.appendChild(listaAdd)
    caixaDoValor.value = ''
    caixaDoProduto.value = ''


})




const Menu = {
    abrir() {
        botaoMenu.classList.add('active')
    
    },

    fechar() {
        botaoMenu.classList.remove('active')
    },

    concluir() {

        botaoMenu.classList.remove('active')
        
  

    }
  

}





