
const urlParams = new URLSearchParams(window.location.search);
const pokemonNameOrId = urlParams.get('pokemon');

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('pokemonName').innerText = data.name;
        document.getElementById('pokemonImage').src = data.sprites.front_default;
        document.getElementById('pokemonID').innerText = `ID: ${data.id}`;
        document.getElementById('pokemonTypes').innerText = `Type: ${data.types.map(t => t.type.name).join(', ')}`;

        const abilitiesList = document.getElementById('pokemonAbilities');
        data.abilities.forEach(ability => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerText = ability.ability.name;
            abilitiesList.appendChild(li);
        });

        const statsList = document.getElementById('pokemonStats');
        data.stats.forEach(stat => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerText = `${stat.stat.name}: ${stat.base_stat}`;
            statsList.appendChild(li);
        });
    })
    .catch(error => {
        document.getElementById('pokemonDetails').innerHTML = `<p>Pokémon not found!</p>`;
    });
