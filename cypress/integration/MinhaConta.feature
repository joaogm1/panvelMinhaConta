
Feature: Alterações da Minha conta panvel

    Scenario: Dado que estou logado e acesso o site da panvel
        
        Given Acesso o site da panvel
        And Clico no icone para entrar
        And Preencho as informações de Login
        Then Clico no botao de entrar

    Scenario Outline: Dado que estou logado no site e quero alterar minhas informações de telefone