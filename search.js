document.getElementById('searchButton').onclick = function() {
    const query = document.getElementById('pokemonInput').value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('pokemonResult').innerHTML = `
                <h3>${data.name}</h3>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p>ID: ${data.id}</p>
                <p>Type: ${data.types.map(t => t.type.name).join(', ')}</p>
            `;
        })
        .catch(error => {
            document.getElementById('pokemonResult').innerHTML = `<p>Pokémon not found!</p>`;
        });
};

document.getElementById('searchButton').onclick = function() {
    const query = document.getElementById('pokemonInput').value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('pokemonResult').innerHTML = `
                <h3>${data.name}</h3>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p>ID: ${data.id}</p>
                <p>Type: ${data.types.map(t => t.type.name).join(', ')}</p>
                <a href="details.html?pokemon=${data.id}" class="btn btn-info mt-2">View Details</a>
            `;
        })
        .catch(error => {
            document.getElementById('pokemonResult').innerHTML = `<p>Pokémon not found!</p>`;
        });
};
