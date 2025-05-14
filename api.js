// import fetch from 'node-fetch';

// const route = 'characters';

// fetch(`https://dattebayo-api.onrender.com/${route}`, {
//     method: 'GET',
//     headers: {
//         Accept: 'application/json'
//     }
// })
//     .then((response) => response.json())
//     .then((data) => {
//         console.log('Primeiro jutsu do primeiro personagem:');
//         console.log(data.characters[0].jutsu[0]);
//     })
//     .catch((error) => {
//         console.error('Erro na requisição:', error);
//     });

//     //=========AULA 08-05-25==========//

//     const host = 'https://dattebayo-api.onrender.com'

// fetch(`${host}/characters`, {
//     method: 'GET',
//     headers: {
//         Accept: 'application/json'
//     }
// }).then((response) => {
//     return response.json()

// }).then((data) => {
//     // console.log(data.characters[0].images[0])
//     // console.log(data.characters[0].jutsu)
//     var jutsu = data.characters[0].jutsu
//     for (let count = 0; count < jutsu.length; count++) {
//         console.log(jutsu[count].toUpperCase())

//     }

// }).catch((error) => {
//     console.log(error)
// })


// ============== ATIVIDADE================= //

const route = "characters";

const host = 'https://dattebayo-api.onrender.com';

fetch(`${host}/${route}`, {

    method: "GET",
    headers: {
        Accept: 'application/json'
    }

}).then((response) => {
    return response.json();

}).then((data) => { 
    console.log(data.characters[0].images[0]);

    for (let i = 0; i < data.characters.length; i++) {

        console.log('Personagem : ', i, 
            ' - ID:', data.characters[i].id, 
            ' - Nome: ', data.characters[i].name, 
            ' - Total Jutsus : ', data.characters[i].jutsu.length);
    }
    
}).catch((error) => {
    console.log(error);
});




