
Feature: Alterações da Minha conta panvel

    Background: Dado que estou logado e acesso o site da panvel

        Given Acesso o site da panvel
        And Clico no icone para entrar
        And Preencho as informações de Login
        Then Clico no botao de entrar

    Scenario: Dado que estou logado no site e quero alterar minhas informações de telefone
        Given Logado acesso o menu minha conta
        And Clico em atualizar meus dados
        And Insiro as informações correspondentes
        And Então clico atualizar meus dados
        Then Espero a mensagem de confirmação

    Scenario: Dado que estou logado no site e quero Adicionar um endereço
        Given Logado acesso o menu minha conta
