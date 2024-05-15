const elem = require('./elements').ELEMENTS
let valorTransferido;

class transferirFundos {

    

    selecionarContaOrigemIndex(index){
        cy.get(elem.slcContaOrigemCss).select(index)
    }

    selecionarContaDestinoIndex(index){
        cy.get(elem.slcContaDestinoCss).select(index)

    }

    preencherValorTransferencia(valor){

        cy.get(elem.inptValorTransferenciaCss).type(valor)

        if(valor.includes('.') || valor.slice(- 1) == '0'){
            valor = valor.substring(0, valor.length  - 1)
        }

        valorTransferido = valor;
    }

    clicarBtnTransferirDinheiro(){
        cy.get(elem.btnTransferirDinheiroCss).click()
    }

    validarTransferenciaSucesso(){

        const yourDateTime = new Date().getMonth();


        cy.get(elem.txtTransferenciaSucessoCss).invoke('text').then((texto => {

            const dia = new Date().getDate();
            const mes = new Date().getMonth() + 1;
            const ano = new Date().getFullYear().toString().substring(2);

            const data = mes + "/" + dia + "/" + ano;
            
            expect(texto).contain(valorTransferido)
            expect(texto).contain("was successfully transferred from Account")
            expect(texto).contain(data)

        }))
    }
}
export default new transferirFundos();