function solicitud(datos){
    
    console.log('funcion no asincrona');
    return new Promise(resolve => setTimeOut(resolve, datos));
}

async function f() {
   console.log('Inicio de funcion asincrona');
   
   await solicutud(2000);
   
   console.log('Terminamos ejecucion de funcion  asincrona');
}

function bigFunction() {
    console.log('Funcion normal ejecutada');
    let result =0;
    for (let i = 0; i< 1e7; i++){
        result+= i;
    }
    console.log('Funcion normal terminada', result);
}

//f();
//bigFunction();

const COUNTER_P = document.getById('counter');
let counter = 0;

document.getElementById('btn-counter')
    .addEventListener('click', async (e) => {
        await setTimeOut(() => {
            counter++;
            COUNTER_P.textContent = counter;

        }, 2000);
})