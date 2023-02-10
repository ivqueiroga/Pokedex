export const pokemonData = async (name) =>  {
  const url = 'https://pokeapi.co/api/v2/pokemon/'
  const data = await fetch(`${url}${name}`)
      .then((response) => response.json())
      .then((data) =>  data)
  return data
}

export const pokemonDetais =  (data) => {
  let mapStat = []
  let pokeDetails = {
    name: '',
    imgUrl: '',
    type: '',
    stats: []
  }
  data.stats.map((stat) => mapStat.push({ name: stat.stat.name, base_stat: stat.base_stat}))
  pokeDetails = {
        name: data.name,
        imgUrl: data.sprites.front_default,
        type: data.types[0].type.name,
        stats: mapStat
      }
  return pokeDetails
}

export const pokemonsData = async () => {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then((response) => response.json())
    return data
}

const pokemonChainData = async (data) => {
  const chainArr = []
  const {url} = data.evolution_chain
  const evoData = await fetch(url)
    .then((response) => response.json())
  evoData.chain.evolves_to.forEach(element => {chainArr.push(element.species)})
  return chainArr
}

export const pokemonChainDataFetch = async (specie) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${specie}`)
  .then((response) => response.json())
  return pokemonChainData(data)
}