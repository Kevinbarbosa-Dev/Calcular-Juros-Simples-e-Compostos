
function clean() {
    document.getElementById('CA').value = "";
    document.getElementById('per').value = "";
    document.getElementById('prazo').value = "";
    document.getElementById('conclusão').innerHTML = "Resultado:";
    document.getElementById('res').innerHTML = "R$0,00";
}

function formatar(input_id) {
    let inputElement = document.getElementById(input_id)

    if (input_id === 'CA' || input_id === 'per') {
        let valor = inputElement.value.replace(/\D/g, '');
        valor = (parseFloat(valor) / 100).toFixed(2);
        inputElement.value = valor;
    }
    else if (input_id === 'prazo') {
        let valor = inputElement.value.replace(/\D/g, '');
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
    if (isNaN(ini) || isNaN(juros) || isNaN(prazo) || ini === 0 || juros === 0 || prazo === 0) {
        document.getElementById('conclusão').innerHTML = `Insira os dados`;
        document.getElementById('res').innerHTML = 'R$0,00'
        conclusão.style.color = '#1E2529'
    }
    if (anoFormatado >= 1 && meses === 0) {
        document.getElementById('conclusão').innerHTML = `Em ${anoFormatado} ${anoFormatado > 1 ? 'anos' : 'ano'} você terá:`;
        conclusão.style.color = '#1E2529';
    } else if (meses >= 1 && anoFormatado === 0) {
        document.getElementById('conclusão').innerHTML = `Em ${meses} ${meses === 1 ? 'mês' : 'meses'} você terá:`;
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

