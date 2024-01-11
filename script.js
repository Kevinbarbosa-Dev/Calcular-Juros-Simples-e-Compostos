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

function formatar(input_id) {
    let inputElement = document.getElementById(input_id)

    if (input_id === 'CA') {
        let valor = inputElement.value.replace(/\D/g, '');
        valor = (parseFloat(valor) / 100).toFixed(2);
        inputElement.value = valor;
    } else if (input_id === 'per') {
        let valor = inputElement.value.replace(/\D/g, '');
        valor = (parseFloat(valor) / 100).toFixed(2);
        inputElement.value = valor
    }
}



let tipoCalculo = '';
function calculo(tipo) {
    tipoCalculo = tipo;

    const resultadoElement = document.getElementById("res");
    resultadoElement.classList.remove("cor-juros-simples", "cor-juros-compostos");
    if (tipo === 'simples') {
        document.getElementById("jc").classList.remove("active");
        document.getElementById("js").classList.add("active");

    } else if (tipo === 'compostos') {
        document.getElementById("js").classList.remove("active");
        document.getElementById("jc").classList.add("active");

    }

}


function montante() {
    let ini = parseFloat(document.getElementById('CA').value);
    let juros = parseFloat(document.getElementById('per').value) / 100;
    let prazo = parseFloat(document.getElementById('prazo').value);
    let anoFormatado = Math.floor(prazo / 12);
    let meses = prazo % 12
    document.getElementById('CA').innerHTML = ini.toFixed(2)
    if (isNaN(ini) || isNaN(juros) || isNaN(prazo) || ini === 0 || juros === 0 || prazo === 0) {
        document.getElementById('conclusão').innerHTML = `Insira os dados`;
        conclusão.style.color = '#1E2529'
    }
    else if (anoFormatado >= 1 && meses === 0) {
        document.getElementById('conclusão').innerHTML = `Em ${anoFormatado} ${anoFormatado > 1 ? 'anos' : 'ano'} você terá:`;
        conclusão.style.color = '#1E2529';
    } else {
        document.getElementById('conclusão').innerHTML = `Em ${anoFormatado} ${anoFormatado > 1 ? 'anos' : 'ano'} e ${meses} ${meses === 1 ? 'mês' : 'meses'} você terá:`;
        conclusão.style.color = '#1E2529';
    }


    if (tipoCalculo === 'simples') {
        const resultado = ini * juros * prazo;
        const res = ini + resultado;
        let resultadoFormatado = res.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById('res').innerHTML = resultadoFormatado;


    }
    else if (tipoCalculo === 'compostos') {
        let res = ini * (1 + juros) ** prazo;
        let resultadoFormatado = res.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById('res').innerHTML = resultadoFormatado;
        
    }
}



/* se prazo for 1 até 11, então retornará mês ou meses




*/

