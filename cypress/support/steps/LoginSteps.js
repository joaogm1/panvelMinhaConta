import Login from "../pageobjects/Login"

const loginSteps = new Login

Given("Faço login no site da panvel", () => {

    loginSteps.acessarPanvel()
    loginSteps.preencherLogin()
    loginSteps.logarBotao()
})

Then("Sou direcionado para a pagina da panvel", () => {
    loginSteps.confirmarUrl()
})