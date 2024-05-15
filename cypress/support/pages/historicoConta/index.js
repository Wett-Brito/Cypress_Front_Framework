/// <reference types="cypress" />
const elem = require('./elements').ELEMENTS

class historicoConta{
    
    validarUltimaData(){
        cy.xpath(elem.primeiraDataRecente).then((data) => {
            const ano = data.text().substring(0,4);
            const mes = data.text().substring(5,7);
            const dia = data.text().substring(8,10);
      
            const mesAtual = new Date().getMonth() + 1
            const diaAtual = new Date().getDate()
            
            expect(ano).to.be.equal('2024')
            expect(mes).to.be.equal("0" + mesAtual)
            expect(dia).to.be.equal("" + diaAtual)
      
          })
    }

    validarNumeroDaConta(conta){
        cy.xpath(elem.primeiraLinhaCredito).first().contains(conta)
    }

    validarDataAbaCredito(){
        cy.xpath(elem.primeiraLinhaCredito).eq(1).then((data) => {

            const ano = data.text().substring(0,4);
            const mes = data.text().substring(5,7);
            const dia = data.text().substring(8,10);

            expect(ano).to.be.an('string')
            expect(mes).to.be.an('string')
            expect(dia).to.be.an('string')

        })
    }

    validarDescricao(descricao){
        cy.xpath(elem.primeiraLinhaCredito).eq(2).contains(descricao)
    }



}
export default new historicoConta();