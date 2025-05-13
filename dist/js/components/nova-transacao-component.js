import { TipoTransacao } from "../types/TipoTransacao.js";
import { atualizarSaldo, getSaldo } from "./saldo-component.js";
const elementoFormulario = document.querySelector('.block-nova-transacao form');
elementoFormulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Bloqueia o comportamento padrão de recarregar a página ao enviar o formulário
    if (!elementoFormulario.checkValidity()) {
        alert('Por favor, preeencha todos os campos da transação!');
        return;
    }
    const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao');
    const inputValor = elementoFormulario.querySelector('#valor');
    const inputData = elementoFormulario.querySelector('#data');
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber; // Necessário para não concatenar com string
    let data = new Date(inputData.value); // Necessário para não tratar data como string
    let saldo = getSaldo();
    if (tipoTransacao == TipoTransacao.DEPOSITO) {
        saldo += valor;
    }
    else if (tipoTransacao == TipoTransacao.TRANSFERENCIA || tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
        saldo -= valor;
    }
    else {
        alert('Tipo de transação inválida');
        return;
    }
    atualizarSaldo(saldo);
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        data: new Date(),
        valor: 0
    };
    console.log(novaTransacao);
    elementoFormulario.reset(); //Limpar os dados do formulário
});
