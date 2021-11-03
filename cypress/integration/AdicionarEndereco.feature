Feature: Adicionar endereço

    Background: Fazendo login na página da panvel

        Given Faço login no site da panvel
        Then Clico no botao de entrar
        

    Scenario Outline: Adicionar um endereço
        Given Estou na página meu Endereço
        When Insiro as informações correspondente ao "<ENDERECO>"
        Then Espero a mensagem de confirmação

        Examples:
            | ENDERECO      |
            | ENDERECO_UM   |
            #| ENDERECO_DOIS |

    Scenario Outline: Adicionar endereço inváido
        Given Estou na página meu Endereço
        When Insiro as informações correspondente ao "<ENDERECO>"
        Then Espero a mensagem de de erro

        Examples:
            | ENDERECO          |
            | ENDERECO_INVALIDO |