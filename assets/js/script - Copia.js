
operacao = false;
let sinal = '';
let valor1 = '';
let valor2 = '';

function inserir(btn){


    numero = document.getElementById('display').innerHTML += btn;

    if(btn == '+' || btn == '-' || btn == '/' || btn == '*' || btn == '%' || btn == '='){
        
        let valor = document.getElementById('display').innerHTML = numero;

            document.getElementById('valor').innerHTML += valor;

        if(valor1 && operacao){
            valor2 = valor.substring(0, valor.length -1);
        }

        if(!valor1 && !valor2 && !operacao){
            valor1 = document.getElementById('display').innerHTML.substring(0, valor.length -1);
            operacao = true;
        }

        document.getElementById('display').innerHTML = '';
        
    }
  
    sinal = btn;

    if(!sinal){
        document.getElementById('calculo').innerHTML = 0;
    }

    if(valor2){

        if(sinal == '+'){
            calculo = parseFloat(valor1) + parseFloat(valor2);
            document.getElementById('calculo').innerHTML = calculo;
            valor1 = calculo;
            valor2 = '';
        }

        if(sinal == '-'){
            calculo = parseFloat(valor1) - parseFloat(valor2);
            document.getElementById('calculo').innerHTML = calculo;
            valor1 = calculo;
            valor2 = '';
        }

        if(sinal == '*'){
            calculo = parseFloat(valor1) * parseFloat(valor2);
            document.getElementById('calculo').innerHTML = calculo;
            valor1 = calculo;
            valor2 = '';
        }

        if(sinal == '/'){
            calculo = parseFloat(valor1) * parseFloat(valor2);
            document.getElementById('calculo').innerHTML = calculo;
            valor1 = calculo;
            valor2 = '';
        }

    }

}

function limpar(){
window.location.reload();
}

function retroceder(){

    let resultado = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = resultado.substring(0, resultado.length -1);

}

function calcular(){
    
}