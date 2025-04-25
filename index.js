// const MyPromise = new Promise ((resolve, reject) => {
//     const nome = "Wesley"

//     if (nome === "Wesley") {
//         resolve("Usuário encontrado");
//     } else {
//         reject("Usuário não encontrado")
//     }
// })

// MyPromise.then((sucess) => {
//     console.log(sucess)
// }).catch((error) => {
//     console.error(error)
// })

const MyPromise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "P2 ok!");
}) 

const MyPromise3 = new Promise((resolve, reject) => {
    resolve("P3 ok!")
}) 

const resolveAll = Promise.all([MyPromise2, MyPromise3])
    .then((data) => {
        console.log(data)
    })


    const resolveRace = Promise.race([MyPromise2, MyPromise3])
    .then((data) => {
        console.log(data);
    })

/* 
try {
//tentativa.Sucesso}
catch(){
//Primeiro catch}finally{
//executado independente do resultado}
*/