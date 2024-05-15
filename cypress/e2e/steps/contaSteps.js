import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import inicio from "../../support/pages/inicio";
import historicoConta from "../../support/pages/historicoConta";
const contaData = require('../data/contaData').CONTADATA;

Given('que eu seleciono o item',  () => {
    inicio.selecionarItemPorIndex(1)
});

When('eu confirmo o item', () => {
    inicio.confirmarItem()
})

Then('valido a data da ultima transacao da aba de recente', () => {
    historicoConta.validarUltimaData()
})

Then('valido o numero da conta da ultima transacao da aba de credito', () => {
    historicoConta.validarNumeroDaConta(contaData.numeroConta)
})

Then('valido o descricao da ultima transacao da aba de credito', () => {
    historicoConta.validarDescricao(contaData.descricao)
})

Then('valido a data da ultima transacao da aba de credito', () => {
    historicoConta.validarDataAbaCredito()
})