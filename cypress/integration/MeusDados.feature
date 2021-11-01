Feature: Alterar Dados


Background: Acessando a página minha conta 

        Given Faço login no site da panvel
        Then Clico no botao de entrar


    
    Scenario Outline: Estou na pagina minha conta e quero alterar as informações de telefone
        Given Clico em atualizar meus dados
        When Insiro as informações correspondentes ao "<ENDERECO>"
        Then Espero a mensagem de confirmação
        
        Examples:
        |ENDERECO   |
        |ENDERECO_DOIS|
