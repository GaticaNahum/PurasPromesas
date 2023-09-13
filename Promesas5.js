//Ejercicio 5: Promesa con Cancelación

let cancel = true;

function promesas(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(cancel){
                resolve("Se resolvio correctamente")
            }else{
                reject("Se cancelo la promesa")
            }
        },5000)
    })
}


function cancelPromise(){
    cancel = false;
}

const resp = promesas();
resp.then(console.log)


setTimeout(()=>{
    cancelPromise()
},4000)

