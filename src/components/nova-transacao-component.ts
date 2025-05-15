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
import saldoComponent from "./saldo-component.js";
import Conta from "../types/Conta.js";
import extratoComponent from "./extrato-component.js";

const elementoFormulario = document.querySelector('.block-nova-transacao form') as HTMLFormElement;
elementoFormulario.addEventListener('submit', function (event) {
    try {
        event.preventDefault(); // Bloqueia o comportamento padrão de recarregar a página ao enviar o formulário

        if (!elementoFormulario.checkValidity()) {
            alert('Por favor, preeencha todos os campos da transação!');
            return
        }

        const inputTipoTransacao = elementoFormulario.querySelector('#tipoTransacao') as HTMLSelectElement;
        const inputValor = elementoFormulario.querySelector('#valor') as HTMLInputElement;
        const inputData = elementoFormulario.querySelector('#data') as HTMLInputElement;

        let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
        let valor: number = inputValor.valueAsNumber; // Necessário para não concatenar com string
        let data: Date = new Date(inputData.value + " 00:00:00"); // Necessário para não tratar data como string

        const novaTransacao: Transacao = {
            tipoTransacao: tipoTransacao,
            data: new Date(),
            valor: 0
        };

        Conta.registrarTransacao(novaTransacao);
        saldoComponent.atualizar();
        extratoComponent.atualizar();
        elementoFormulario.reset(); //Limpar os dados do formulário
    } catch (erro) {
        alert(erro.message)
    }
});
