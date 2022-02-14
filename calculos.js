let print = document.getElementById('print');


//muestra la operacion en el input
let goCalculadora = function (valorCalcular) {
    print.value += valorCalcular;
}


//es llamado por el  operado '=' i valida y realiza la operacion 
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
                console.log(resultado);
                print.value = resultado;
            }
            if(num[i]=='-'){
                console.log(num[i])
                let num1 = num.split('-');
                let n1 = parseInt(num1[0]);
                let n2 = parseInt(num1[1]);
                let resultado = n1-n2;
                console.log(resultado);
                print.value = resultado;
            }
            if(num[i]=='*'){
                console.log(num[i])
                let num1 = num.split('*');
                let n1 = parseInt(num1[0]);
                let n2 = parseInt(num1[1]);
                let resultado = n1*n2;
                console.log(resultado);
                print.value = resultado;
            }
            if(num[i]=='/'){
                console.log(num[i])
                let num1 = num.split('/');
                let n1 = parseInt(num1[0]);
                let n2 = parseInt(num1[1]);
                if(n2===0){
                    alert('no se puede dividir por cero');
                    console.log('no cero')
                }else{
                    let resultado = n1/n2;
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