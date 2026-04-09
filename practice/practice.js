import axios from "axios"

axios.get("https://pokeapi.co/api/v2/pokemon/pikachu/").then(response => console.log(response.data.weight))

axios.get("https://pokeapi.co/api/v2/pokemon/jigglypuff").then(response => console.log(response.data.weight))

async function get_weight(name) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    console.log(response.data.weight)
}

get_weight("pikachu")
get_weight("clefairy")