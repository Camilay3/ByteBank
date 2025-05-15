// Aprendizado sobre tipagem - Não importante para o projeto ByteBank
/* 
    let saldo2 = 3000; // Daria problema se fosse só saldo1, mesmo que esteja em um arquivo diferente ao que o saldo1 foi declarado
    let qualquer: any = ''; // Quer dizer que a variável pode receber qualquer tipo

    // ARRAYS
    const lista: number[] = [];
    lista.push(2, 4, 6);

    // EXECUÇÃO
    Usar > tsc [nomeDoArquivo.ts] sempre que atualizá-lo
    Se tiver tsconfig.json, o comando tsc -w faz isso automaticamente para todos os arquivos
*/
import { Transacao } from "../types/Transacao.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import SaldoComponent from "./saldo-component.js";
import Conta from "../types/Conta.js";
import ExtratoComponent from "./extrato-component.js";

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", function(event) {
    try 
    {
        event.preventDefault(); // Evita recarregar a página
        if (!elementoFormulario.checkValidity()) {
            alert("Por favor, preencha todos os campos da transação!");
            return;
        }

        const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
        const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
        const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

        let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
        let valor: number = inputValor.valueAsNumber;
        let data: Date = new Date(inputData.value + " 00:00:00"); // Evita erros de datas

        const novaTransacao: Transacao = {
            tipoTransacao: tipoTransacao,
            valor: valor, 
            data: data,
        }

        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        ExtratoComponent.atualizar();
        elementoFormulario.reset(); // Limpa o formulário
    }
    catch(erro) {
        alert(erro.message);
    }
});
