
document.getElementById('montante').addEventListener('click', function () {
    let ini = parseFloat(document.getElementById('CA').value);
    let juros = parseFloat(document.getElementById('per').value) / 100;
    let prazo = parseFloat(document.getElementById('prazo').value);
    let anoFormatado = prazo / 12;
    
    if(ini.length === 0 || juros.length === 0 || prazo.length === 0){
        document.getElementById('conclusão').innerHTML = `Insira os dados`;
        document.getElementById('conclusão').style.color = 'red'
    }

    let res = ini * (1 + juros) ** prazo;
    let resultadoFormatado = res.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('res').innerHTML = resultadoFormatado;

    document.getElementById('conclusão').innerHTML = `Em ${anoFormatado} ${anoFormatado > 1 ? 'anos' : 'ano'} você terá:`;
    conclusão.style.color = 'white';
       
});// return anoFormato ? < 1 
/* se prazo for 1 até 11, então retornará mês ou meses

*/