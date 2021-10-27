import PanvelSite from "../pageobjects/panvelSite";


const panvelSite = new PanvelSite

Given("Acesso o site da panvel", () => {

    panvelSite.acessarPanvel()
})

And("Clico no icone para entrar", () => {
    panvelSite.acessarLogin()
})

And("Preencho as informações de Login",()=>{
    panvelSite.preencherLogin()
})

Then("Clico no botao de entrar",()=>{
    panvelSite.logarBotao()
})