//recibimos el dato del documento HTML
let print = document.getElementById('print');



//muestra la operacion en el input
 function goCalculadora(valorCalcular) {
    //console.log('que es esto ?'+print.value);
    print.value += valorCalcular;
    goValidar(valorCalcular);
    return valorCalcular;
    
}

function goValidar(valorCalcular) {
    let operacion = print.value;
    //operacion += valorCalcular;
    let aux = [];
    for (const i of operacion) {
        aux.push(i);
    }
    if (valorCalcular == '+' || valorCalcular == '-' || valorCalcular == '*' || valorCalcular == '/') {
        console.log(operacion);
        let tamCadena = operacion.length;
        //console.log(operacion[tamCadena-2]);
        if (operacion[tamCadena - 2] == '+' || operacion[tamCadena - 2] == '-' || operacion[tamCadena - 2] == '*' || operacion[tamCadena - 2] == '/') {

            operacion = operacion.slice(0, -2);
            console.log('nuevo' + operacion);
            console.log('valaxu'+aux[tamCadena - 1]);
            
            operacion = operacion.concat(aux[tamCadena - 1]);
            valorCalcular = operacion;
             
            console.log('valor sin '+valorCalcular);
            return valorCalcular;
        }
        valorCalcular = operacion;
        console.log('valor fuera fi on '+valorCalcular);
        return valorCalcular;
        
    }
    
    
    console.log('valor fuera fi to '+operacion);
    valorCalcular = operacion;
    return valorCalcular;
}


//es llamado por el  operado '=' i valida y realiza la operacion 
let goRespuesta = function (respuesta) {

    let num = print.value;
    var numo=goCalculadora();
    console.log('val'+goCalculadora());

    let num2=numo.split('u');
    let numF=num2[0];
    console.log('el numero que llega es ' + numF );
    num=numF;
   // goValidar(num);

   
    if (respuesta === '=') {
                
        for (let i = 0; i < num.length; i++) {
            if (num[i] == '+') {
                console.log(num[i])
                let num1 = num.split('+');
                let n1 = parseInt(num1[0]);
                let n2 = parseInt(num1[1]);
                let resultado = n1 + n2;
                console.log(resultado);
                print.value = resultado;
            }
            if (num[i] == '-') {
                console.log(num[i])
                let num1 = num.split('-');
                let n1 = parseInt(num1[0]);
                let n2 = parseInt(num1[1]);
                let resultado = n1 - n2;
                console.log(resultado);
                print.value = resultado;
            }
            if (num[i] == '*') {
                console.log(num[i])
                let num1 = num.split('*');
                let n1 = parseInt(num1[0]);
                let n2 = parseInt(num1[1]);
                let resultado = n1 * n2;
                console.log(resultado);
                print.value = resultado;
            }
            if (num[i] == '/') {
                console.log(num[i])
                let num1 = num.split('/');
                let n1 = parseInt(num1[0]);
                let n2 = parseInt(num1[1]);
                if (n2 === 0) {
                    alert('no se puede dividir por cero');
                    console.log('no cero')
                } else {
                    let resultado = n1 / n2;
                    console.log(resultado);
                    print.value = resultado;
                }

            }
        }
    }
}

let goBorrar = function (respuesta) {
    if (respuesta === 'c') {
        print.value = '';
    }
}