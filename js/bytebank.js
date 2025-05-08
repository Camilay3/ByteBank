var saldo = 3000;
var elementoSaldo = document.querySelector('.saldo-valor .valor'); // Converte o valor para que o código saiba que se trata de um elemento HTML
var elementoFormulario = document.querySelector('.block-nova-transacao form');
if (elementoSaldo != null) { // Garante que o elemento existe no código
    elementoSaldo.textContent = saldo.toString();
}
elementoFormulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Bloqueia o comportamento padrão de recarregar a página ao enviar o formulário
    if (!elementoFormulario.checkValidity()) {
        alert('Por favor, preeencha todos os campos da transação!');
        return;
    }
    var inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao');
    var inputValor = elementoFormulario.querySelector('#valor');
    var inputData = elementoFormulario.querySelector('#data');
    var tipoTransacao = inputTipoTransacao.value;
    var valor = inputValor.valueAsNumber; // Necessário para não concatenar com string
    var data = new Date(inputData.value); // Necessário para não tratar data como string
    if (tipoTransacao == 'Depósito') {
        saldo += valor;
    }
    else if (tipoTransacao == 'Transferência' || tipoTransacao == 'Pagamento de Boleto') {
        saldo -= valor;
    }
    else {
        alert('Tipo de transação inválida');
        return;
    }
    elementoSaldo.textContent = saldo.toString(); // Garante que o elemento tipo texto receba um texto
    var novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    elementoFormulario.reset(); //Limpar os dados do formulário
});
// Usar > tsc [nomeDoArquivo.ts] sempre que atualizá-lo
