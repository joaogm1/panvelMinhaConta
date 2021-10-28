Feature: Alterar Dados


Background: Acessando a página minha conta 

        Given Faço login no site da panvel
        Then Clico no botao de entrar


    
    Scenario: Estou na pagina minha conta e quero alterar as informações de telefone
        Given Clico em atualizar meus dados
        And Insiro as informações correspondentes aos dados
        Then Espero a mensagem de confirmação