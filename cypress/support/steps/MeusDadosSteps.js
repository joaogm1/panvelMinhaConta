import MeusDados from "../pageobjects/MeusDados";

const meusDados = new MeusDados


Given("Clico em atualizar meus dados",()=>{
    meusDados.paginaMeusDados()
})

And("Insiro as informações correspondentes aos dados",()=>{
    meusDados.atualizarTelefone()
})

And ("Então clico atualizar meus dados",()=>{
    meusDados.atualizarDadosGeralMinhaConta()
})
Then ("Espero a mensagem de confirmação",()=>{
    meusDados.respostaDeAtualizacao()
})