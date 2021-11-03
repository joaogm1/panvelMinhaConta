
import MinhaConta from "../pageobjects/MinhaConta";
const minhaConta = new MinhaConta




Given(/^Verifico as informações do site$/, () => {
        minhaConta.verificarDadosMinhaConta()
});



Then(/^Os dados devem estar ok$/, () => {
	return true;
});
