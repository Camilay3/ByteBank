import { TipoTransacao } from "./TipoTransacao.js";

export type Transacao = {
    tipoTransacao: TipoTransacao; // O tipo tem que receber algum valor que faça parte da Enum, não poderia ser string vazia por exemplo
    data: Date;
    valor: number;
} // Faz com que o código respeite com precisão os requisitos do projeto
