class ElementsMeusDados {

    barraMeuTelefone = () => { return '#input-phone' }
    barraData = () => { return '#input-data-nascimento' }
    barraSexo = () => { return ':nth-child(6) > .form-control > .form-control__select' }
    barraCivil = () => { return ':nth-child(7) > .form-control > .form-control__select' }
    botaoAtualizarDados = () => { return '#btn-next-step' }
    mensagemErro = () => { return '.message__box-content' }

}

export default ElementsMeusDados
