import MeuEndereco from "../pageobjects/MeuEndereco";

const meuEndereco = new MeuEndereco

Given(/^Estou na página meu Endereço$/, () => {
    meuEndereco.paginaMeuEndereco()
})

When(/^Insiro as informações correspondente ao "([^"]*)"$/, (dadosEndereco) => {
    meuEndereco.atualizarEndereco(dadosEndereco)
});


Then(/^Espero a mensagem de confirmação$/, () => {
    meuEndereco.respostaDeAtualizacao()
})


Then(/^Espero a mensagem de de erro$/, () => {
    meuEndereco.respostaDeErro()
});

// steps login
Given(/^Faço login no site da panvel$/, () => {

    meuEndereco.acessarPanvel()
    meuEndereco.preencherLogin()
    meuEndereco.logarBotao()
})

Then(/^Sou direcionado para a pagina da panvel$/, () => {
    console.log('foi')
})
// end steps login

//steps para verificar dados da minha conta
Given(/^Verifico as informações do site$/, () => {
    meuEndereco.verificarDadosMinhaConta()
});



Then(/^Os dados devem estar ok$/, () => {
    return true;
});
// final das steps de verificação de dados

// steps para atualização dos dados
Given(/^Clico em atualizar meus dados$/, () => {
    meuEndereco.paginaMeusDados()
})



Then(/^Espero a mensagem de confirmação dos dados$/, () => {
    meuEndereco.respostaDeAtualizacao()
})


Then(/^Espero a mensagem de erro dos dados$/, () => {
    meuEndereco.respostaDeErroDados()
});


When(/^Insiro as informações correspondentes dos "([^"]*)"$/, (dadosPessoais) => {
	meuEndereco.atualzarDados(dadosPessoais)
});

// final das steps dos meus dados