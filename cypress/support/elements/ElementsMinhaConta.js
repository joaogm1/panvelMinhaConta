class ElementsMinhaConta {


    botaoAtualizarMeusDados = () =>{return '.card__actions > [href="/panvel/editarMeusDados.do"]'}
    atualizarMeuTelefone = ()=>{return '#input-phone'}
    atualizarDadosGeral = ()=> {return '#btn-next-step'}
    respostaAtualizarDados = () => {return '.search-result--empty-text'}
    aidicionarEndereco = () =>{return '[href="/panvel/adicionarEndereco.do"]'}
    barraEndereço = () =>{return ':nth-child(2) > .form-control > .form-control__input' }

}

export default ElementsMinhaConta

