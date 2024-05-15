const elem = require('./elements').ELEMENTS

class inicio{

    selecionarItemPorIndex(valor){
        cy.xpath(elem.listaContas).select(valor)
    }

    confirmarItem(){
        cy.xpath(elem.btnGo).click()
    }

    clicarTransFunds(){
        cy.get(elem.btnTransferFundosCss).click()
    }

}

export default new inicio();