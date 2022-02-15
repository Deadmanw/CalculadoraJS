//recibimos el dato del documento HTML
let print = document.getElementById('print');


//muestra la operacion en el input
 function goCalculadora(valorCalcular) {
    //console.log('que es esto ?'+print.value);
    print.value += valorCalcular;
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
            console.log(aux[tamCadena - 1]);
            operacion = operacion.slice(0, -2);
            //operacion = ;
            console.log('nuevo' + operacion);
            valorCalcular = operacion;
            console.log(valorCalcular);
        }
        valorCalcular = operacion;
        console.log('valor fuera fi 1'+valorCalcular);
    }
    valorCalcular = operacion;
    console.log('valor fuera fi 2'+valorCalcular);

    return valorCalcular;
}


//es llamado por el  operado '=' i valida y realiza la operacion 
let goRespuesta = function (respuesta) {

    let num = print.value;
    console.log('el numero que llega es ' + goCalculadora());
    num=goCalculadora();
    console.log('numero'+num);

    if (respuesta === '=') {
                
        for (let i = 0; i < num.length; i++) {
            if (num[i] == '+') {
                console.log(num[i])
                let num1 = num.split('+');
                let n1 = parseInt(num1[0]);
                let n2 = parseInt(num1[1]);
                let resultado = n1 + n2;
                console.log(resultado);
                print.value = resultado+'hola';
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