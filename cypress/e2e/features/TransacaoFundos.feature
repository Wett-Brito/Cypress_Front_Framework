# language: pt
    Funcionalidade: Transacao de Fundos

Testes de validacao do sistema de transacao de fundos.
Tem como objetivo valida se o sistema de transacao de fundos
esta funcionando como deveria, entre diversos tipos de contas

Contexto: Loga no sistema
        Dado que eu logue no sistema

    @id_001
    Cenário: Realizar Transacao de Fundos
        Dado que eu vá para a tela de transferencia de fundos
        Quando eu seleciono a conta de contaOrigem
        E seleciono a conta de contaDestino
        E preencho o valor que vai ser transferido
        E clico no botao de transferir dinheiro
        Entao uma mensagem de transferencia com sucesso deve ser apresentada na tela
