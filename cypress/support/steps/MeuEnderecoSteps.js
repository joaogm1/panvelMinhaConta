import MeuEndereco from "../pageobjects/MeuEndereco";

const meuEndereco = new MeuEndereco

Given("Estou na página meu Endereço",()=>{
    meuEndereco.paginaMeuEndereco()
})
And("Insiro as informações correspondentes",()=>{
    meuEndereco.atualizarEndereco()
})

Then ("Espero a mensagem de confirmação",()=>{
    meuEndereco.respostaDeAtualizacao()
})