import MeuEndereco from "../pageobjects/MeuEndereco";

const meuEndereco = new MeuEndereco

Given(/^Estou na página meu Endereço$/,()=>{
    meuEndereco.paginaMeuEndereco()
})

When(/^Insiro as informações correspondente ao "([^"]*)"$/, (dadosEndereco) => {
    meuEndereco.atualizarEndereco(dadosEndereco)
});


Then (/^Espero a mensagem de confirmação$/,()=>{
    meuEndereco.respostaDeAtualizacao()
})


Then(/^Espero a mensagem de de erro$/, () => {
    meuEndereco.respostaDeErro()
});
