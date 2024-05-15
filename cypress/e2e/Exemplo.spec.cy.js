/// <reference types="cypress" />
import login from '../support/pages/login'
import inicio from '../support/pages/inicio'
import historicoConta from '../support/pages/historicoConta'
import transferirFundos from '../support/pages/transferirFundos'
const transferirFundosData = require('./data/transferirFundosData').CONTATRANSF
const loginData = require('./data/loginData').LOGINDATA


describe('Fluxo de conta', () => {
  it('validar data ultima transacao', () => {
    
    login.realizarLogin(loginData.usuario, loginData.senha)

    inicio.selecionarItemPorIndex(1)

    inicio.confirmarItem()

    historicoConta.validarUltimaData()

  })

  it('validar numero da conta na tabela de credito', () => {
    
    login.realizarLogin(loginData.usuario, loginData.senha)

    inicio.selecionarItemPorIndex(1)

    inicio.confirmarItem()

    historicoConta.validarNumeroDaConta('1001160140')

  })

  it('validar descricao da transacao na aba de credito', () => {
    
    login.realizarLogin(loginData.usuario, loginData.senha)

    inicio.selecionarItemPorIndex(1)

    inicio.confirmarItem()

    historicoConta.validarDescricao('')

  })

  it('validar data da transacao na aba de credito', () => {
    
    login.realizarLogin(loginData.usuario, loginData.senha)

    inicio.selecionarItemPorIndex(1)

    inicio.confirmarItem()

    historicoConta.validarDataAbaCredito()

  })
  
})

describe('Fluxo de Login', () => {
  it('Realizar login valido', () => {
    login.realizarLogin(loginData.usuario, loginData.senha)

    login.validarLoginValido('Hello John Smith', 'Welcome to Altoro Mutual Online.')

  })

  it('Realizar login com usuario errado', () => {
    login.realizarLogin('ERRADO', loginData.senha)

    login.validarLoginInvalido("Login Failed: We're sorry, but this username or password was not found in our system. Please try again.")

  })

  it('Realizar login com senha errada', () => {
    login.realizarLogin(loginData.usuario, 'ERRADO')

    login.validarLoginInvalido("Login Failed: We're sorry, but this username or password was not found in our system. Please try again.")

  })
})

describe('Fluxo de Transacao de Fundos', () => {
  it('Realizar Transacao de Fundos', () => {

    login.realizarLogin(loginData.usuario, loginData.senha)

    inicio.clicarTransFunds()

    transferirFundos.selecionarContaOrigemIndex(transferirFundosData.contaOrigem)

    transferirFundos.selecionarContaDestinoIndex(transferirFundosData.contaDestino)

    transferirFundos.preencherValorTransferencia(transferirFundosData.valorTransf)

    transferirFundos.clicarBtnTransferirDinheiro()
    
    transferirFundos.validarTransferenciaSucesso()
  })
})