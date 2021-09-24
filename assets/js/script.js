let valor = '';
let lista = '';
let num1 = '';
let num2 = '';
let calcList = [];
let ultimaSoma = '';
let calculadora = true;



    function inserir(btn){

        numero = document.getElementById('display').innerHTML += btn;
        
        if(btn == '+'){
            valor = numero;
            ultimaOperacao = btn;
            lista += valor;
    
            if(!num1){
                num1 = document.getElementById('display').innerHTML.substring(0, valor.length -1);
            }else{
                num2 = document.getElementById('display').innerHTML.substring(0, valor.length -1);
            }
    
            if(num1 && num2){
                ultimaSoma = parseFloat(num1) + parseFloat(num2)
                num1 = ultimaSoma;
                num2 = '';
            }
    
            document.getElementById('valor').innerHTML = lista;
            document.getElementById('display').innerHTML = '';
        
        }
    
        if(btn == '-'){
            valor = numero;
            ultimaOperacao = btn;
            lista += valor;
            document.getElementById('valor').innerHTML = lista;
            document.getElementById('display').innerHTML = '';
        }
        if(btn == '*'){
            valor = numero;
            ultimaOperacao = btn;
            lista += valor;
            document.getElementById('valor').innerHTML = lista;
            document.getElementById('display').innerHTML = '';
        }
        if(btn == '/'){
            valor = numero;
            ultimaOperacao = btn;
            lista += valor;
            document.getElementById('valor').innerHTML = lista;
            document.getElementById('display').innerHTML = '';
        }
        if(btn == '%'){
            valor = numero;
            ultimaOperacao = btn;
            lista += valor;
            document.getElementById('valor').innerHTML = lista;
            document.getElementById('display').innerHTML = '';
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

    let numDisplay = document.getElementById('display').innerHTML;
    lista += numDisplay;
    document.getElementById('valor').innerHTML = lista;
    
    num2 = numDisplay;

    if(numDisplay != ''){
        if(ultimaOperacao == '+'){
            document.getElementById('display').innerHTML = parseFloat(num1) + parseFloat(num2);
        }
    }

    calculadora = false;

}