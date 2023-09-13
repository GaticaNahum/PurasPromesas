//Ejercicio 4: Promesas en Cadena con Retraso

function resolvePr(n){
    let array = [];
    for (let i = 1; i <= n; i++) {
          array.push(new Promise((resolve, reject)=>{
            setTimeout(() => {
                console.log("Promesa numero: " + i)
                resolve();           
            }, n * i * 1000);
        }))
    }

    return Promise.all(array).then(()=>{
        setTimeout(() => {
            console.log("Se resolvieron todas las promesas")
        }, n * 1000);
    })
}


const resp = resolvePr(3);

