const apiUrl = `https://api.github.com/users/santiagobruna`;
let name = document.getElementById('name');
let bio = document.getElementById('bio');
let profile = document.getElementById('profile');
let followers = document.getElementById('followers');
let following = document.getElementById('following');
let repository = document.getElementById('repository');
let locations = document.getElementById('location');

async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {  // Verifica se a resposta foi bem-sucedida
            throw new Error('Erro ao buscar dados do GitHub');
        }
        const json = await response.json();

        profile.src = json.avatar_url;
        name.innerText = json.name;
        repository.innerText = json.public_repos;
        followers.innerText = json.followers;
        following.innerText = json.following;
        bio.innerText = json.bio;
        locations.innerText = json.location;
    } catch (error) {
        console.error('Erro:', error);
    }
}
fetchData();

// Utilizando o Ajax (XMLHttpRequest)
// document.addEventListener("DOMContentLoaded", function () {
//     const xhttp = new XMLHttpRequest();
//     const endpoint = `https://api.github.com/users/santiagobruna`;
    
//     let name = document.getElementById("name");
//     let bio = document.getElementById("bio");
//     let profile = document.getElementById("profile");
//     let followers = document.getElementById("followers");
//     let following = document.getElementById("following");
//     let repository = document.getElementById("repository");
//     let locations = document.getElementById("location");

//     // Configuração da requisição
//     xhttp.open("GET", endpoint, true);
    
//     // Definindo o que fazer quando a requisição for completada
//     xhttp.onload = function () {
//       if (xhttp.status === 200) {
//         const response = JSON.parse(xhttp.responseText);
//         profile.src = response.avatar_url;
//         name.innerText = response.name;
//         repository.innerText = response.public_repos;
//         followers.innerText = response.followers;
//         following.innerText = response.following;
//         bio.innerText = response.bio;
//         locations.innerText = response.location;
//       } else {
//         console.error("Erro na requisição:", xhttp.statusText);
//       }
//     };

//     xhttp.send();
//   });