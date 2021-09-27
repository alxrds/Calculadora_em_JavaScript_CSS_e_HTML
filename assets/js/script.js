let valor = '';
let historico = '';
calculadora = true;

function inserir(btn){
    if(calculadora){
        numero = document.getElementById('display').innerHTML;

        if(btn == '+' || btn == '-' || btn == '*' || btn == '/'){
            numero = document.getElementById('display').innerHTML += ' ' + btn;
        }else{
            numero = document.getElementById('display').innerHTML += btn;
        }
        
        if(btn == '+' || btn == '-' || btn == '*' || btn == '/'){
            
            if(historico.length === 0){
                historico += numero;
            }else if(historico.length > 0){
                historico += ' ' + numero;
            }
    
            document.getElementById('valor').innerHTML = historico;
            document.getElementById('display').innerHTML = '';
        }
    }
}

function limpar(){
    window.location.reload();
}

function limparDisplay(){
    document.getElementById('display').innerHTML = '';
}

function retroceder(){
    let resultado = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = resultado.substring(0, resultado.length -1);
}

function igual(){
    if(calculadora){
        let numDisplay = document.getElementById('display').innerHTML;
        historico += ' ' + numDisplay;
        document.getElementById('valor').innerHTML = historico;
        calcular();
    }
}

function calcular(num1, operator, num2){

    switch (operator){
        case "+":
            return Number(num1) + Number(num2);
        case "-":
            return Number(num1) - Number(num2);
        case "*":
            return Number(num1) * Number(num2);
        case "/":
            return Number(num1) / Number(num2);
    }

    resultadoFinal()

}

function resultadoFinal(){

    inp = historico.split(' ');

    if(inp.includes('*') || inp.includes('/')){
        let i = 0;
        while(inp[i]){
            if(inp[i] === '*' || inp[i] === '/'){
                inp[i-1] = calcular(inp[i-1], inp[i], inp[i+1]);
                inp.splice(i, 2);
                i--;
            }
            i++;
        }
    }

    i = 0;
    while(inp[i]){
        if(inp[i] === "+" || inp[i] === "-"){
            inp[i-1] = calcular(inp[i-1], inp[i], inp[i+1]);
            inp.splice(i, 2);
            i--;
        }
        i++
    }
    document.getElementById('display').innerHTML = inp;
    calculadora = false;
}