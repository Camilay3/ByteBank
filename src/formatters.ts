function formatarMoeda(valor: number): string {
    return valor.toLocaleString('pt-br', { currency: 'BRL', style: 'currency' }); // Formatar no estilo de moeda brasileira
}

function formatarData(data: Date, formato: FormatoData = FormatoData.PADRAO): string {
    if (formato === FormatoData.DIA_SEMANA_DIA_MES_ANO) {
        return data.toLocaleDateString('pt-br', {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }); // "sábado, 10/05/2025"

    } else if (formato === FormatoData.DIA_MES) {
        return data.toLocaleDateString('pt-br', {
            day: "2-digit", month: "2-digit"
        }); // "10/05"

    } else {
        return data.toLocaleDateString('pt-br'); // "10/05/2025"
    }
}