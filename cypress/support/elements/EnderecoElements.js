class EnderecoElements {
    barraDeCPF = () => { return '#input-cep' }
    barraDeIdentificacao = () => { return ':nth-child(2) > .form-control > .form-control__input' }
    barraDeNumero = () => { return '#input-enderecoNumero' }
    barraDeComplemento = () => { return ':nth-child(6) > .form-control > .form-control__input' }
    barraDeReferencia = () => { return ':nth-child(10) > .form-control > .form-control__input' }
    botaoAdicionarEndereco = () => { return ':nth-child(11) > .text-bold' }
}

export default EnderecoElements