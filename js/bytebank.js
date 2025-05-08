let saldo = 3000;

const elementoSaldo = document.querySelector('.saldo-valor .valor');
const elementoFormulario = document.querySelector('.block-nova-transacao form');

elementoSaldo.textContent = saldo;
elementoFormulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Bloqueia o comportamento padrão de recarregar a página ao enviar o formulário

    if (!elementoFormulario.checkValidity()) {
        alert('Por favor, preeencha todos os campos da transação!');
        return
    }

    const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao');
    const inputValor = elementoFormulario.querySelector('#valor');
    const inputData = elementoFormulario.querySelector('#data');

    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.value;
    let data = inputData.value; // ou elementoFormulario.querySelector('#data').value

    if (tipoTransacao == 'Depósito') {
        saldo += valor;
    } else if (tipoTransacao == 'Transferência' || tipoTransacao == 'Pagamento de Boleto') {
        saldo -= valor;
    } else {
        alert('Tipo de transação inválida');
        return
    }

    elementoSaldo.textContent = saldo;

    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }

    console.log(novaTransacao);

    elementoFormulario.reset(); //Limpar os dados do formulário
});