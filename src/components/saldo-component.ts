import { FormatoData } from "../types/FormatoData.js";
import { formatarData, formatarMoeda } from "../utils/formatters.js";
import Conta from "../types/Conta.js"

const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLElement; // Converte o valor para que o código saiba que se trata de um elemento HTML
const elementoDataAcesso = document.querySelector('.block-saldo time') as HTMLElement;
if (elementoDataAcesso != null) {
    elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
}

renderizarSaldo();
function renderizarSaldo(): void {
    if (elementoSaldo != null) { // Garante que o elemento existe no código
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
};

const saldoComponent = {
    atualizar() {
        renderizarSaldo();
    }
};

export default saldoComponent;