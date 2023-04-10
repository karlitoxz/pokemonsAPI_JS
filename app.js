//Tabla
//https://www.youtube.com/watch?v=cjrt3NilcNw
//Card
//https://www.youtube.com/watch?v=ydcm7GECaAI

console.log('JS de pokemones');


const fetchData = async () => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await res.json()
        pintarTabla(data)
    } catch (error) {
        console.log(error)
    }
}

const pintarTabla = (data) => {
    var table = document.getElementById('TablaPokemons')
    let conteo = 0
    data['results'].forEach(element => {
        var row = table.insertRow(conteo)
        row.insertCell().append(conteo)
        row.insertCell().append(element['name'])
        //Link a visitar
        var linkPokemonDetail = document.createElement('a')
                linkPokemonDetail.innerHTML = "Detalle de: " + element['name'];
                linkPokemonDetail.title = element['name'];
                linkPokemonDetail.href = "http://192.168.2.190/JSfetch/detail.html?name=" + element['name'];
                linkPokemonDetail.target = '_blank';
        row.insertCell().append(linkPokemonDetail)
        conteo++
    });
    
}

//Detalle del pokemon:

const fetchDataDetail = async () => {
    var name = getParameterByName('name');

    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/'+ name)
        const data = await res.json()
        pintarPokemon(name, data)
    } catch (error) {
        console.log(error)
    }
    
}

const pintarPokemon = (name, data) => {
    document.getElementById('namePokemon').append(name)
    console.log(data.sprites)
    //Insertar imagen
    var pokemon = document.createElement('img');
        pokemon.src = data.sprites.other.dream_world.front_default
    document.getElementById('sprites').append(pokemon)
    //Insertar JSON del pokemon
    document.getElementById('JSONPokemon').append(JSON.stringify(data))
    

}

function getParameterByName(name) {
    console.log(name)
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

