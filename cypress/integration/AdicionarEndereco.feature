Feature: Adicionar endereço

    Background: Acessando a página minha conta

        Given Faço login no site da panvel
        Then Clico no botao de entrar

    Scenario Outline: Alterar meu endereço
        Given Estou na página meu Endereço
        When Insiro as informações correspondente ao "<ENDERECO>"
        Then Espero a mensagem de confirmação

        Examples:
            | ENDERECO    |
            | ENDERECO_UM |
            | ENDERECO_DOIS|