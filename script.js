
document.getElementById('montante').addEventListener('click', function () {
    let ini = parseFloat(document.getElementById('CA').value);
    let juros = parseFloat(document.getElementById('per').value) / 100;
    let prazo = parseFloat(document.getElementById('prazo').value);
    let anoFormatado = prazo / 12;

    let res = ini * (1 + juros) ** prazo;
    let resultadoFormatado = res.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('res').innerHTML = resultadoFormatado;

    if (anoFormatado > 1) {
        document.getElementById('conclusão').innerHTML = `Em ${anoFormatado} anos você terá:`;
    } else {
        document.getElementById('conclusão').innerHTML = `Em ${anoFormatado} ano você terá:`;
    }
});