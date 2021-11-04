Feature: Alterar Dados


Background: Acessando a página minha conta 

        Given Faço login no site da panvel
        Then Sou direcionado para a pagina da panvel


    Scenario Outline: Estou na pagina minha conta e quero alterar meus dados
        Given Clico em atualizar meus dados
        When Insiro as informações correspondentes aos "<MEUS_DADOS>"
        Then Espero a mensagem de confirmação
        
        Examples:
        |MEUS_DADOS   |
        |DADOS_PESSOAIS|
   

    Scenario Outline: Estou na pagina minha conta e quero verificar a inserção de dados invalido
        Given Clico em atualizar meus dados
        When Insiro as informações correspondentes aos "<MEUS_DADOS>"
        Then Espero a mensagem de erro dos dados
        
        Examples:
        |MEUS_DADOS   |
        |DADOS_INVALIDOS|