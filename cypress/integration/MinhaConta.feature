
Feature: Alterações da Minha conta panvel

    Background: Acessando a página minha conta 

        Given Faço login no site da panvel
        Then Clico no botao de entrar


    
    Scenario: Dado que estou logado no site e quero alterar minhas informações de telefone
        Given Clico em atualizar meus dados
        And Insiro as informações correspondentes
        And Então clico atualizar meus dados
        Then Espero a mensagem de confirmação
   
