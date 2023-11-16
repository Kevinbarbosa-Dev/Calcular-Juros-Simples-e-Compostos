
document.getElementById('montante').addEventListener('click', function () {
    let ini = parseFloat(document.getElementById('CA').value);
    let juros = parseFloat(document.getElementById('per').value) / 100;
    let prazo = parseFloat(document.getElementById('prazo').value);
    let anoFormatado = prazo / 12;

    if(isNaN(ini) && isNaN(juros) && isNaN(prazo)){
        conclusão.innerHTML = `Insira os dados`;
        conclusão.style.color = 'red'
    }

    let res = ini * (1 + juros) ** prazo;
    let resultadoFormatado = res.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('res').innerHTML = resultadoFormatado;

    if (anoFormatado > 1) {
        document.getElementById('conclusão').innerHTML = `Em ${anoFormatado} anos você terá:`;
        conclusão.style.color = 'white'
    } else {
        document.getElementById('conclusão').innerHTML = `Em ${anoFormatado} ano você terá:`;
    }

    
});
/* se prazo for 1 até 11, então retornará mês ou meses

*/