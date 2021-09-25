let valor = '';
let lista = '';
let num1 = '';
let num2 = '';
let calcList = [];
let ultimoCalculo = '';
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
                ultimoCalculo = parseFloat(num1) + parseFloat(num2)
                num1 = ultimoCalculo;
                num2 = '';
            }
    
            document.getElementById('valor').innerHTML = lista;
            document.getElementById('display').innerHTML = '';

            console.log('numero1: '+num1)
            console.log('operação: '+ultimaOperacao)
            console.log('numero2: '+num2)
            console.log('total: '+ultimoCalculo)
            console.log('lista: '+calcList)
        
        }
    
        if(btn == '-'){
            valor = numero;
            ultimaOperacao = btn;
            lista += valor;
    
            if(!num1){
                num1 = document.getElementById('display').innerHTML.substring(0, valor.length -1);
            }else{
                num2 = document.getElementById('display').innerHTML.substring(0, valor.length -1);
            }
    
            if(num1 && num2){
                ultimoCalculo = parseFloat(num1) - parseFloat(num2)
                num1 = ultimoCalculo;
                num2 = '';
            }
    
            document.getElementById('valor').innerHTML = lista;
            document.getElementById('display').innerHTML = '';
        
        }

        if(btn == '*'){
            valor = numero;
            ultimaOperacao = btn;
            lista += valor;
    
            if(!num1){
                num1 = document.getElementById('display').innerHTML.substring(0, valor.length -1);
            }else{
                num2 = document.getElementById('display').innerHTML.substring(0, valor.length -1);
            }
    
            if(num1 && num2){
                ultimoCalculo = parseFloat(num1) * parseFloat(num2)
                num1 = ultimoCalculo;
                num2 = '';
            }
    
            document.getElementById('valor').innerHTML = lista;
            document.getElementById('display').innerHTML = '';
        
        }

        if(btn == '/'){
            valor = numero;
            ultimaOperacao = btn;
            lista += valor;

            if(!num1){
                num1 = document.getElementById('display').innerHTML.substring(0, valor.length -1);
            }else{
                num2 = document.getElementById('display').innerHTML.substring(0, valor.length -1);
            }
    
            if(num1 && num2){
                ultimoCalculo = parseFloat(num1) / parseFloat(num2)
                num1 = ultimoCalculo;
                num2 = '';
            }
    
            document.getElementById('valor').innerHTML = lista;
            document.getElementById('display').innerHTML = '';
        
        }

        if(btn == '%'){
            valor = numero;
            ultimaOperacao = btn;
            lista += valor;
    
            if(!num1){
                num1 = document.getElementById('display').innerHTML.substring(0, valor.length -1);
            }else{
                num2 = document.getElementById('display').innerHTML.substring(0, valor.length -1);
            }
    
            if(num1 && num2){
                ultimoCalculo = (parseFloat(num2) - parseFloat(num1)) * num1 / 100;
                num1 = ultimoCalculo;
                num2 = '';
            }
    
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
    calcList.push(numDisplay)
    document.getElementById('valor').innerHTML = lista;
    
    num2 = numDisplay;

    if(numDisplay != ''){
        if(ultimaOperacao == '+'){
            document.getElementById('display').innerHTML = parseFloat(num1) + parseFloat(num2);
        }

        if(ultimaOperacao == '-'){
            document.getElementById('display').innerHTML = parseFloat(num1) - parseFloat(num2);
        }

        if(ultimaOperacao == '*'){
            document.getElementById('display').innerHTML = parseFloat(num1) * parseFloat(num2);
        }

        if(ultimaOperacao == '/'){
            document.getElementById('display').innerHTML = parseFloat(num1) / parseFloat(num2);
        }
    }

    calculadora = false;

    console.log('numero1: '+ num1)
    console.log('operação: '+ ultimaOperacao)
    console.log('numero2: '+ num2)
    console.log('total: '+ ultimoCalculo)
    console.log('lista: '+ calcList)



}