export class Armazenador {
    constructor() { }
    static salvar(chave, valor) {
        const valorComoString = JSON.stringify(valor);
        localStorage.setItem(chave, valorComoString);
    }
    static obter(chave, reviver) {
        // <T> garante que o tipo de entrada seja o mesmo de saída ou null: Tipo genérico
        const valor = localStorage.getItem(chave);
        if (valor === null) {
            return null;
        }
        else if (reviver) {
            return JSON.parse(valor, reviver);
        }
        return JSON.parse(valor);
    }
}
