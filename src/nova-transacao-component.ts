const elementoFormulario = document.querySelector('.block-nova-transacao form') as HTMLFormElement;
elementoFormulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Bloqueia o comportamento padrão de recarregar a página ao enviar o formulário

    if (!elementoFormulario.checkValidity()) {
        alert('Por favor, preeencha todos os campos da transação!');
        return
    }

    const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao') as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector('#valor') as HTMLInputElement;
    const inputData = elementoFormulario.querySelector('#data') as HTMLInputElement;

    let tipoTransacao: string = inputTipoTransacao.value;
    let valor: number = inputValor.valueAsNumber; // Necessário para não concatenar com string
    let data: Date = new Date(inputData.value); // Necessário para não tratar data como string

    if (tipoTransacao == 'Depósito') {
        saldo += valor;
    } else if (tipoTransacao == 'Transferência' || tipoTransacao == 'Pagamento de Boleto') {
        saldo -= valor;
    } else {
        alert('Tipo de transação inválida');
        return
    }

    elementoSaldo.textContent = saldo.toString(); // Garante que o elemento tipo texto receba um texto

    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }

    console.log(novaTransacao);

    elementoFormulario.reset(); //Limpar os dados do formulário
});
