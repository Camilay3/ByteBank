let saldo = 3000;
const elementoSaldo = document.querySelector('.saldo-valor .valor'); // Converte o valor para que o código saiba que se trata de um elemento HTML
if (elementoSaldo != null) { // Garante que o elemento existe no código
    elementoSaldo.textContent = saldo.toLocaleString('pt-br', { currency: 'BRL', style: 'currency' }); // Formatar no estilo de moeda brasileira
}
const elementoDataAcesso = document.querySelector('.block-saldo time');
if (elementoDataAcesso != null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = dataAcesso.toLocaleDateString('pt-br', {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}
