/*
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
    
    
    
});


*/


let tipoCalculo = '';
function calculo(tipo) {
    tipoCalculo = tipo;

    const resultadoElement = document.getElementById("res");
    resultadoElement.classList.remove("cor-juros-simples", "cor-juros-compostos");
    if (tipo === 'simples') {
        document.getElementById("jc").classList.remove("active");
        document.getElementById("js").classList.add("active");
        resultadoElement.classList.add("cor-juros-simples");
    } else if (tipo === 'compostos') {
        document.getElementById("js").classList.remove("active");
        document.getElementById("jc").classList.add("active");
        resultadoElement.classList.add("cor-juros-compostos");
    }

}
function montante() {
    let ini = parseFloat(document.getElementById('CA').value);
    let juros = parseFloat(document.getElementById('per').value) / 100;
    let prazo = parseFloat(document.getElementById('prazo').value);
    let anoFormatado = Math.floor(prazo / 12);

    let meses = 0
    meses = prazo - 12
    /* arrumar os meses */

    if (tipoCalculo === 'simples') {
        const resultado = ini * juros * prazo;
        const res = ini + resultado;
        let resultadoFormatado = res.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById('res').innerHTML = resultadoFormatado;

        document.getElementById('conclusão').innerHTML = `Em ${anoFormatado} ${anoFormatado > 1 ? 'anos' : 'ano'} e ${meses} ${meses === 1 ? 'mês' : 'meses'} você terá:`;
        conclusão.style.color = 'white';
            
    }
    else if (tipoCalculo === 'compostos') {
        let res = ini * (1 + juros) ** prazo;
        let resultadoFormatado = res.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById('res').innerHTML = resultadoFormatado;
        document.getElementById('conclusão').innerHTML = `Em ${anoFormatado} ${anoFormatado > 1 ? 'anos' : 'ano'} você terá:`;
        conclusão.style.color = 'white';
    }
}



/* se prazo for 1 até 11, então retornará mês ou meses




*/

