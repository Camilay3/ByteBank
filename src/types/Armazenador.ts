export class Armazenador {
    private constructor() {}

    static salvar(chave:string, valor:any):void {
        const valorComoString:string = JSON.stringify(valor);
        localStorage.setItem(chave, valorComoString)
    }

    static obter<T>(chave:string, reviver?: (this: any, key: string, value:any) => any): T | null {
        // <T> garante que o tipo de entrada seja o mesmo de saída ou null: Tipo genérico
        const valor = localStorage.getItem(chave)

        if (valor === null) {
            return null
        } else if (reviver) {
            return JSON.parse(valor, reviver) as T;
        }

        return JSON.parse(valor) as T;
    }
}