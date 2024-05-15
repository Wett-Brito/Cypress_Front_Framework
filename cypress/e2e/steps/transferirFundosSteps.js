import { Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import inicio from '../../support/pages/inicio'
import transferirFundos from '../../support/pages/transferirFundos'
const transferirFundosData = require('../data/transferirFundosData').CONTATRANSF


Given('que eu vá para a tela de transferencia de fundos', () => {
    inicio.clicarTransFunds()

})

When('eu seleciono a conta de contaOrigem', () => {
    transferirFundos.selecionarContaOrigemIndex(transferirFundosData.contaOrigem)

})

And('seleciono a conta de contaDestino', () => {
    transferirFundos.selecionarContaDestinoIndex(transferirFundosData.contaDestino)

})

And('preencho o valor que vai ser transferido', () => {
    transferirFundos.preencherValorTransferencia(transferirFundosData.valorTransf)

})

And('clico no botao de transferir dinheiro', () => {
    transferirFundos.clicarBtnTransferirDinheiro()

})

Then('uma mensagem de transferencia com sucesso deve ser apresentada na tela', () => {
    transferirFundos.validarTransferenciaSucesso()

})
