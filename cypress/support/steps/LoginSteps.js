import Login from "../pageobjects/Login"

const loginSteps = new Login

Given("Acesso o site da panvel", () => {

    loginSteps.acessarPanvel()
   
})

And("Clico no icone para entrar", () => {
    loginSteps.acessarLogin()
})

And("Preencho as informações de Login", () => {
    loginSteps.preencherLogin()
})

Then("Clico no botao de entrar", () => {
    loginSteps.logarBotao()
})

Given("Logado acesso o menu minha conta", () => {
    loginSteps.logarMinhaConta()
   cy.wait(4000)

})