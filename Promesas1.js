//Ejercicio 1: Promesas Encadenadas

const waitResolve = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(Math.round(Math.random() * (99 - 2) + 2));
        }, 2000)
    });
}

waitResolve()
.then(firstNumber => {   
    console.log("Numero random: " + firstNumber )
    const waitResolveTwo = () => {
        return new Promise((resolve, reject) =>{
            setTimeout(()=>{
                resolve(Math.pow(firstNumber,2));
            }, 3000)
        });
    }
    waitResolveTwo()
    .then(secondNumber =>{
        console.log("Numero al cuadrado: " + secondNumber)
        const waitResolveThree = () => {
            return new Promise((resolve, reject) =>{
                setTimeout(()=>{
                    resolve(Math.sqrt(secondNumber));
                }, 3000)
            });
        }
        waitResolveThree()
        .then(thirdNumber =>{
            console.log("Raíz cuadrada: " + thirdNumber)
        })
        .catch(console.log)
    })
    .catch(console.log);
})
.catch(console.log);