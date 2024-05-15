# language: pt
    Funcionalidade: Conta

    Testes de validação de tudo relacionado a tela de
    historico da conta.
    Tem como objetivo validar garantir que todas as
    informações apresentadas em suas tabelas estejam
    corretas.

Contexto: Loga no sistema
        Dado que eu logue no sistema

    @id_0001
    Cenário: validar data ultima transacao da aba de recente
        Dado que eu seleciono o item
        Quando eu confirmo o item
        Entao valido a data da ultima transacao da aba de recente

    @id_0002
    Cenário: validar numero da ultima transacao da aba de credito
        Dado que eu seleciono o item
        Quando eu confirmo o item
        Entao valido o numero da conta da ultima transacao da aba de credito

    @id_0003
    Cenário: validar descricao da ultima transacao da aba de credito
        Dado que eu seleciono o item
        Quando eu confirmo o item
        Entao valido o descricao da ultima transacao da aba de credito
    
    @id_0004
    Cenário: validar data ultima da transacao da aba de credito
        Dado que eu seleciono o item
        Quando eu confirmo o item
        Entao valido a data da ultima transacao da aba de credito




