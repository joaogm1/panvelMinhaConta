import Login from "../pageobjects/Login"

const loginSteps = new Login

Given("Faço login no site da panvel", () => {

    loginSteps.acessarPanvel()
    loginSteps.preencherLogin()
    loginSteps.logarBotao()
})

Then("Clico no botao de entrar", () => {
    loginSteps.logarMinhaConta()
})