Feature: Verificações na Página Minha Conta

    Background: Fazendo login na página da panvel

        Given Estou na página minha conta

    Scenario Outline: Adicionar um endereço
        Given Estou na página meu Endereço
        When Insiro as informações correspondente ao "<ENDERECO>"
        Then Espero a mensagem de confirmação

        Examples:
            | ENDERECO    |
            | ENDERECO_UM |



    Scenario Outline: Adicionar endereço inváido
        Given Estou na página meu Endereço
        When Insiro as informações correspondente ao "<ENDERECO>"
        Then Espero a mensagem de de erro

        Examples:
            | ENDERECO          |
            | ENDERECO_INVALIDO |

    Scenario Outline: Estou na pagina minha conta e quero alterar meus dados
        Given Clico em atualizar meus dados
        When Insiro as informações correspondentes dos "<MEUS_DADOS>"
        Then Espero a mensagem de confirmação

        Examples:
            | MEUS_DADOS     |
            | DADOS_PESSOAIS |


    Scenario Outline: Estou na pagina minha conta e quero verificar a inserção de dados invalidos
        Given Clico em atualizar meus dados
        When Insiro as informações correspondentes dos "<MEUS_DADOS>"
        Then Espero a mensagem de erro dos dados

        Examples:
            | MEUS_DADOS      |
            | DADOS_INVALIDOS |


    Scenario: Verificando as informações Minha Conta
        Given Verifico as informações do site
        Then  Os dados devem estar ok
