import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import login from "../pages/login";
const loginData = require('../data/loginData').LOGINDATA


Given('que eu logue no sistema',  () => {
    login.realizarLogin(loginData.usuario, loginData.senha)
});

Given('que eu logue no sistema com {string} e {string}', (usuario, senha) => {
    login.realizarLogin(usuario, senha)
})

Then('valido que o login aconteceu com sucesso', () => {
    login.validarLoginValido('Hello John Smith', 'Welcome to Altoro Mutual Online.')
})

Then('valido que o login não aconteceu', () => {
    login.validarLoginInvalido("Login Failed: We're sorry, but this username or password was not found in our system. Please try again.")
})