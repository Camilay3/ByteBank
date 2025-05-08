let saldo = 3000;

const elementoSaldo = document.querySelector('.saldo-valor .valor');
const elementoFormulario = document.querySelector('.block-nova-transacao form');

elementoSaldo.textContent = saldo;
elementoFormulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Bloqueia o comportamento padrão de recarregar a página ao enviar o formulário

    if (!elementoFormulario.checkValidity()) {
        alert('Por favor, preeencha todos os campos da transação!');
        return
    }
});