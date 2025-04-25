import fetch from 'node-fetch';

const route = 'characters';

fetch(`https://dattebayo-api.onrender.com/${route}`, {
    method: 'GET',
    headers: {
        Accept: 'application/json'
    }
})
    .then((response) => response.json())
    .then((data) => {
        console.log('Primeiro jutsu do primeiro personagem:');
        console.log(data.characters[0].jutsu[0]);
    })
    .catch((error) => {
        console.error('Erro na requisição:', error);
    });
