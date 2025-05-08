let saldo = 3000;

const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLElement; // Converte o valor para que o código saiba que se trata de um elemento HTML
if (elementoSaldo != null) { // Garante que o elemento existe no código
    elementoSaldo.textContent = saldo.toString();
}

// Usar > tsc [nomeDoArquivo.ts] sempre que atualizá-lo
// Se tiver tsconfig.json, o comando tsc -w faz isso automaticamente para todos os arquivos