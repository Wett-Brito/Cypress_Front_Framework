# language: pt
    Funcionalidade: Login
    
    Testes de validação de toda a tela de login.
    Tem como objetivo validar que a tela de login,
    esta funcionando de forma completa, com todos
    as suas posibilidades de exceções.

    @id_01
    Cenário: Realizar login valido
        Dado que eu logue no sistema
        Entao valido que o login aconteceu com sucesso

    @id_02
    Esquema do Cenário: Realizar login com usuario errado
        Dado que eu logue no sistema com "<usuario>" e "<senha>"
        Entao valido que o login não aconteceu
    Exemplos: 
    | usuario   |senha     |
    | errado    | demo1234 |
    | jsmith    | errado   |