export const pokemonData = async (url) =>  {
  let mapStat = []
  let poke = {
    name: '',
    imgUrl: '',
    type: '',
    stats: []
  }

  const data = await fetch(url)
      .then((response) => response.json())
      .then((data) =>  data)
      data.stats.map((stat) => mapStat.push({ name: stat.stat.name, base_stat: stat.base_stat}))
      poke = {
        name: data.name,
        imgUrl: data.sprites.front_default,
        type: data.types[0].type.name,
        stats: mapStat
      }
      console.log(poke)
  return poke  
}

export const pokemonsData = async () => {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then((response) => response.json())
    return data
}

const pokemonChainData = async (data) => {
  const {url} = data.evolution_chain
  const evoData = await fetch(url)
  console.log(evoData)
}

export const pokemonChainDataFetch = async (specie) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${specie}`)
  .then((response) => response.json())
  pokemonChainData(data)
}