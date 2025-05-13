import saldoComponent from "./saldo-component.js";
import Conta from "../types/Conta.js";
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
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        data: new Date(),
        valor: 0
    };
    Conta.registrarTransacao(novaTransacao);
    saldoComponent.atualizar();
    elementoFormulario.reset(); //Limpar os dados do formulário
});
