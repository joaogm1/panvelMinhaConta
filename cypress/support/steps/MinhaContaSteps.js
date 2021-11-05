import MinhaConta from "../pageobjects/MinhaConta";

const minhaConta = new MinhaConta

Given(/^Estou na página meu Endereço$/, () => {
    minhaConta.paginaMeuEndereco()
})

When(/^Insiro as informações correspondente ao "([^"]*)"$/, (dadosEndereco) => {
    minhaConta.atualizarEndereco(dadosEndereco)
});


Then(/^Espero a mensagem de confirmação$/, () => {
    minhaConta.respostaDeAtualizacao()
})


Then(/^Espero a mensagem de de erro$/, () => {
    minhaConta.respostaDeErro()
});

// steps login (minha conta)
Given(/^Estou na página minha conta$/, () => {

    minhaConta.acessarPanvel()
    minhaConta.preencherLogin()
    minhaConta.logarBotao()
})
// end steps login

//steps para verificar dados da minha conta
Given(/^Verifico as informações do site$/, () => {
    minhaConta.verificarDadosMinhaConta()
});



Then(/^Os dados devem estar ok$/, () => {
    return true;
});
// final das steps de verificação de dados

// steps para atualização dos dados
Given(/^Clico em atualizar meus dados$/, () => {
    minhaConta.paginaMeusDados()
})



Then(/^Espero a mensagem de confirmação dos dados$/, () => {
    minhaConta.respostaDeAtualizacao()
})


Then(/^Espero a mensagem de erro dos dados$/, () => {
    minhaConta.respostaDeErroDados()
});


When(/^Insiro as informações correspondentes dos "([^"]*)"$/, (dadosPessoais) => {
	minhaConta.atualzarDados(dadosPessoais)
});

// final das steps dos meus dados