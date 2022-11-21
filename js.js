let botaoMenu = document.querySelector('.menu')
const caixaDoProduto = document.querySelector('#caixa-peca')
const caixaDoValor = document.querySelector('#caixa-valor-peca')

let produtos = []

const Menu = {
    abrir() {
        botaoMenu.classList.add('active')
    
    },

    fechar() {
        botaoMenu.classList.remove('active')
    },

    concluir() {

        let item1 = caixaDoProduto.value
        let item2 = Number(caixaDoValor.value)
        produtos.push(item1, item2)
        botaoMenu.classList.remove('active')
        
  

    }
  

}



