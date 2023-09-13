//Ejercicio 2: Promesa de Múltiples Solicitudes

const data = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
];

function getdata(data){
    return Promise.all(data.map(urls =>{
        return fetch(urls)
        .then(resp => {
            return resp.json();
        })
    }))
}

const resp = getdata(data); 

resp.then(result => {
    console.log(result)
})