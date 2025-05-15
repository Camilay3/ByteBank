import { Transacao } from "./Transacao.js";
import { TipoTransacao } from "./TipoTransacao.js";
import { GrupoTransacao } from "./GrupoTransacao.js";

let saldo: number = JSON.parse(localStorage.getItem("saldo")) || 0;
const transacoes: Transacao[] = JSON.parse(localStorage.getItem("transacoes"), (key: string, value: string) => {
    if (key == 'data') {
        return new Date(value);
    }
    return value; // else
}) || []; // Se não tiver nenhuma informação no localstorage, retorna uma lista vazia

function debitar(valor: number): void {
    if (valor <= 0) {
        throw new Error("Valor inválido! Deve ser maior que zero.");
    } else if (valor > saldo) {
        throw new Error("Saldo insuficiente.");
    }
    saldo -= valor;
    localStorage.setItem("saldo", saldo.toString());
}

function depositar(valor: number): void {
    if (valor <= 0) {
        throw new Error("Valor inválido! Deve ser maior que zero.");
    }
    saldo += valor;
    localStorage.setItem("saldo", saldo.toString());
}

const Conta = {
    getSaldo() {
        return saldo;
    },

    getDataAcesso(): Date {
        return new Date();
    },

    getGrupoTransacoes(): GrupoTransacao[] {
        const grupoTransacoes: GrupoTransacao[] = [];
        const listaTransacoes: Transacao[] = structuredClone(transacoes); // Copia a estrutura do objeto - Evita falhas de segurança na lista original
        const transacoesOrdenadas: Transacao[] = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
        let labelAtualGrupoTransacao: string = "";

        // Agrupa o histórico de transações por mês, mesmo sendo feitas fora de ordem
        for (let transacao of transacoesOrdenadas) {
            let labelGrupoTransacao:string = transacao.data.toLocaleDateString('pt-br', {month: "long", year:"numeric"});
            
            if (labelAtualGrupoTransacao != labelGrupoTransacao) {
                labelAtualGrupoTransacao = labelGrupoTransacao;
                grupoTransacoes.push({
                    label: labelAtualGrupoTransacao,
                    transacoes: []
                })
            }
            grupoTransacoes.at(-1).transacoes.push(transacao)
        }

        return grupoTransacoes;
    },

    registrarTransacao(novaTransacao: Transacao): void {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            depositar(novaTransacao.valor);
        } else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            debitar(novaTransacao.valor);
        } else {
            throw new Error('Tipo de transação inválida');
        }

        transacoes.push(novaTransacao);
        localStorage.setItem("transacoes", JSON.stringify(transacoes));
    }
}

export default Conta;