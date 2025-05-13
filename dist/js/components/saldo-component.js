import { FormatoData } from "../types/FormatoData.js";
import { formatarData, formatarMoeda } from "../utils/formatters.js";
let saldo = 3000;
const elementoDataAcesso = document.querySelector('.block-saldo time');
if (elementoDataAcesso != null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
export function getSaldo() { return saldo; }
;
atualizarSaldo(saldo);
export function atualizarSaldo(novoSaldo) {
    saldo = novoSaldo;
    const elementoSaldo = document.querySelector('.saldo-valor .valor'); // Converte o valor para que o código saiba que se trata de um elemento HTML
    if (elementoSaldo != null) { // Garante que o elemento existe no código
        elementoSaldo.textContent = formatarMoeda(saldo);
    }
}
;
