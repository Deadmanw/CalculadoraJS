let print = document.getElementById('print');
const erase = false;
let calc;

let goCalculadora = function (valorCalcular) {
    print.value += valorCalcular;
}


let goRespuesta = function (respuesta) {
    if (respuesta === '=') {
        let num = print.value;
        for(let i = 0 ; i<num.length; i++){
            if(num[i]=='+'){
                console.log(num[i])
                let num1 = num.split('+');
                let n1 = parseInt(num1[0]);
                let n2 = parseInt(num1[1]);
                let resultado = n1+n2;
                print.value = resultado;
            }
        }
    }
}

let goBorrar = function (respuesta) {
    if (respuesta === 'c') {
        print.value = '';
    }
}