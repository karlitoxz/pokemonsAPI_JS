//Tabla
//https://www.youtube.com/watch?v=cjrt3NilcNw
//Card
//https://www.youtube.com/watch?v=ydcm7GECaAI

console.log('JS de pokemones');

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

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
        conteo++
    });

    

    

}

