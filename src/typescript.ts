// Aprendizado sobre tipagem - Não importante para o projeto ByteBank

/* let saldo2 = 3000; // Daria problema se fosse só saldo */
/* 
let qualquer: any = ''; // Quer dizer que a variável pode receber qualquer tipo
qualquer = 22

// ARRAYS
const lista: number[] = [];
lista.push(2, 4, 6);

// TIPOS PERSONALIZADOS
type Transacao = {
    tipoTransacao: TipoTransacao; // O tipo tem que receber algum valor que faça parte da Enum, não poderia ser string vazia por exemplo
    data: Date;
    valor: number;
} // Faz com que o código respeite com precisão os requisitos do projeto

// Enum
enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

const novaTransacao: Transacao = {
    tipoTransacao: TipoTransacao.PAGAMENTO_BOLETO,
    data: new Date(),
    valor: 0
};

console.log(novaTransacao) */