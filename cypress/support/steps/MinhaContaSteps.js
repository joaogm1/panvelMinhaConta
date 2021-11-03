
import MinhaConta from "../pageobjects/MinhaConta";
const minhaConta = new MinhaConta




Given(/^Verifico as informações do site$/, () => {
        minhaConta.verificarDadosMinhaConta()
});


