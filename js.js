let botaoMenu = document.querySelector('.caixa-principal-de-cadastro')
const caixaDeNome = document.querySelector('#input-name')
const caixaDoValor = document.querySelector('#input-nasc')

const botaoAdicionar = document.querySelector('#btn-adicionar')
const botaoReset = document.querySelector('#btn-reset')
const listaDeIntem = document.querySelector('.listando-intem')

let produtos = []

botaoReset.addEventListener('click', ()=> {
    caixaDoValor.value = ''
    caixaDeNome.value = ''
    listaDeIntem.innerHTML = ''
})

botaoAdicionar.addEventListener('click', ()=> {
    let item1 = caixaDeNome.value
    let item2 = Number(caixaDoValor.value)
    produtos.push(item1, item2)
    let listaAdd = document.createElement('li')
    listaAdd.classList.add('option-lista')
    listaAdd.innerHTML = `
    <span class="span1">NOME:</span> ${item1} <span class="span1">IDADE:</span> <span class="span2">${item2} Anos</span>`

    listaDeIntem.appendChild(listaAdd)
    caixaDoValor.value = ''
    caixaDeNome.value = ''


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





