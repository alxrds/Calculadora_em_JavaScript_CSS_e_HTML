calculadora = true;
operacao = '';

function inserir(btn){
    if(calculadora){
        numero = document.getElementById('display').innerHTML;
        document.getElementById('display').innerHTML = numero + btn;
        if(btn == '+' || btn == '-' || btn == '/' || btn == '*' || btn == '%'){
            operacao = btn;
            if(operacao){
                valor = document.getElementById('display').innerHTML = numero + btn;
                document.getElementById('valor').innerHTML = valor;
                valor1 = valor.substring(0, valor.length -1);
                document.getElementById('display').innerHTML = '';
            }
        }
    }
}

function limpar(){
    document.getElementById('display').innerHTML = '';
    document.getElementById('valor').innerHTML = '';
    calculadora = true;
}

function retroceder(){
    if(calculadora){
        let resultado = document.getElementById('display').innerHTML;
        document.getElementById('display').innerHTML = resultado.substring(0, resultado.length -1);
    }
}

function calcular(){
    valor2 = document.getElementById('display').innerHTML;
    document.getElementById('valor').innerHTML = valor1 + operacao + valor2;
    
    switch (operacao){
        case '+':
            document.getElementById('display').innerHTML = valor1 + valor2;
            break;
        case '-':
            document.getElementById('display').innerHTML = valor1 - valor2;
            break;
        case '/':
            document.getElementById('display').innerHTML = valor1 / valor2;
            break;
        case '*':
            document.getElementById('display').innerHTML = valor1 * valor2;
            break;
        case '%':
            document.getElementById('display').innerHTML = (valor2 - valor1) / valor1 * 100;
            break;
        default:
            document.getElementById('display').innerHTML = '';
            break;
    }

    calculadora = false;
}
