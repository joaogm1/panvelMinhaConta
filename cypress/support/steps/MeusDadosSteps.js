import MeusDados from "../pageobjects/MeusDados";

const meusDados = new MeusDados


Given("Clico em atualizar meus dados",()=>{
    meusDados.paginaMeusDados()
})


When(/^Insiro as informações correspondentes aaaaa "([^"]*)"$/, (meuEndereco) => {
	
    meusDados.atualzarDados(meuEndereco)
    
});


Then ("Espero a mensagem de confirmação",()=>{
    meusDados.respostaDeAtualizacao()
})

