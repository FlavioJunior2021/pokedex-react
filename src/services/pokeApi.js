export async function fetchPokemon(id){
    const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const json = await req.json();
    const filteredPokemon = {
        name: json.name,
        sprite: json.sprites.front_default,
        hp: json.stats[0].base_stat,
        attack: json.stats[1].base_stat,
        defense: json.stats[2].base_stat,
        especial: json.stats[3].base_stat,
        especial2: json.stats[4].base_stat,
        speed: json.stats[5].base_stat,
        type: json.types[0].type.name,
        weight: json.weight,
        species: json.species.name
    }
    return filteredPokemon
}
