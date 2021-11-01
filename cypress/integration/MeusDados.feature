Feature: Alterar Dados


Background: Acessando a página minha conta 

        Given Faço login no site da panvel
        Then Clico no botao de entrar


    Scenario Outline: Estou na pagina minha conta e quero alterar as informações de telefone
        Given Clico em atualizar meus dados
        When Insiro as informações correspondentes aos "<MEUS_DADOS>"
        Then Espero a mensagem de confirmação
        
        Examples:
        |MEUS_DADOS   |
        |DADOS_PESSOAIS|
   

    Scenario Outline: Estou na pagina minha conta e quero alterar as informações de telefone
        Given Clico em atualizar meus dados
        When Insiro as informações correspondentes aos "<MEUS_DADOS>"
        Then Espero a mensagem de erro
        
        Examples:
        |MEUS_DADOS   |
        |DADOS_INVALIDOS|