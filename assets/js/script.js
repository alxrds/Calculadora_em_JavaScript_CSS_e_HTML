let valor = '';
let lista = '';

function inserir(btn){
    let numero = document.getElementById('display').innerHTML += btn;
    if(btn == '+'){
        valor = numero;
        lista += valor;
        document.getElementById('valor').innerHTML = lista;
        document.getElementById('display').innerHTML = '';
    }
    if(btn == '-'){
        valor = numero;
        lista += valor;
        document.getElementById('valor').innerHTML = lista;
        document.getElementById('display').innerHTML = '';
    }
    if(btn == '*'){
        valor = numero;
        lista += valor;
        document.getElementById('valor').innerHTML = lista;
        document.getElementById('display').innerHTML = '';
    }
    if(btn == '/'){
        valor = numero;
        lista += valor;
        document.getElementById('valor').innerHTML = lista;
        document.getElementById('display').innerHTML = '';
    }
    if(btn == '%'){
        valor = numero;
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
    if(numDisplay != ''){

        document.getElementById('display').innerHTML = lista;

    }
}