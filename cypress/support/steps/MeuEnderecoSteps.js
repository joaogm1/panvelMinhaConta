import MeuEndereco from "../pageobjects/MeuEndereco";
import MeusDados from "../pageobjects/MeusDados";

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
