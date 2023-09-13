//Ejercicio 3: Promesas Paralelas

const functions = [
     waitResolve = () => {
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                resolve(Math.round(Math.random() * (99 - 2) + 2));
            }, 1000)
        });
    },
    waitResolveTwo = () => {
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                resolve(Math.round(Math.random() * (100 - 1) + 1 ));
            }, 1000)
        });
    }
]

function ejecutarFunciones(functions){
    return  Promise.all(functions.map(functions => functions()));
}


const resp = ejecutarFunciones(functions);

resp.then(console.log).catch(console.log)
