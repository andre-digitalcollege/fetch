// function execucaoassincrona() {
//     console.log("executado assincrono")

// }
// setTimeout(execucaoassincrona, 10000)

// setInterval(execucaoassincrona, 100000)

// console.log("a");
// [1, 2, 3].forEach(function(elementoAtual) {
//     console.log(elementoAtual)
// })


// function executar(response) {
//     console.log(response.body)
//     if(response.ok){
//         console.log("funcionou")
//     } else{
//         console.log("nao funcionou")
//     }
//     return response.json();
// }

// let promessa = fetch("https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa");
// console.log(promessa);


// let promessa2 = promessa.then(executar) 
// console.log("promessa2")

// promessa2.then()
//teste 2
// function executar(response) {
//     return response.json();
// }
// function executar2(chuchu) {
//     console.log(chuchu)
// }

// let cachorro = fetch("https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa");
// console.log("cachorro");

// let salsicha = cachorro.then(executar);
// console.log(salsicha);

// salsicha.then(executar2)


//teste3
function retornoPromessaFetch(resposta) {
    let promessaBody = resposta.json();
    return promessaBody;
}

function retornoPromessaBody(body) {
   body.forEach(element => {
    
   });
    let lista = document.getElementById("lista");
    lista.innerHTML = lista.innerHTML + "<li>andre</li>";
}

let promessa = fetch("https://633867b7937ea77bfdbf9c86.mockapi.io/pessoa");

promessa.then(retornoPromessaFetch).then(retornoPromessaBody);

