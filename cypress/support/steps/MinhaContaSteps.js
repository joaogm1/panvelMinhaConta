
import MinhaConta from "../pageobjects/MinhaConta";
const minhaConta = new MinhaConta



And("Clico em atualizar meus dados",()=>{
    minhaConta.atualizarMeusDados()
})

And("Insiro as informações correspondentes",()=>{
    minhaConta.atualizarTelefone()
})

And ("Então clico atualizar meus dados",()=>{
    minhaConta.atualizarDadosGeralMinhaConta()
})
Then ("Espero a mensagem de confirmação",()=>{
    minhaConta.respostaDeAtualizacao()
})

