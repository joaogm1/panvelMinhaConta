import MeusDados from "../pageobjects/MeusDados";

const meusDados = new MeusDados


Given(/^Clico em atualizar meus dados$/,()=>{
    meusDados.paginaMeusDados()
})



When(/^Insiro as informações correspondentes aos "([^"]*)"$/, (dadosPessoais) => {
        meusDados.atualzarDados(dadosPessoais)
});


Then (/^Espero a mensagem de confirmação$/,()=>{
    meusDados.respostaDeAtualizacao()
})


Then(/^Espero a mensagem de erro$/, () => {
	meusDados.respostaDeErro()
});

