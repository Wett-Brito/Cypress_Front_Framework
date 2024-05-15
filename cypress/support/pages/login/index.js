const elem = require('./elements').ELEMENTS

class login{

    realizarLogin(user, pass){
        cy.xpath(elem.singin).click()
        cy.xpath(elem.username).type(user)
        cy.xpath(elem.password).type(pass)
        cy.xpath(elem.btnLogin).click()

    }

    validarLoginValido(titulo, subTitulo){
        cy.get(elem.txtTituloCss).contains(titulo)
        cy.get(elem.txtSubTituloCss).contains(subTitulo)
    }

    validarLoginInvalido(valor){
        cy.get(elem.txtLoginFailedCss).contains(valor)
    }

}

export default new login();