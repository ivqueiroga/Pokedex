<template>
  <main class="main">
    <form @submit.prevent="searchPkm">
      <input id="" name="" type="text" v-model="search" placeholder="Digite o nome de um Pokemon">
      <button @click="searchPkm"> Procurar </button>
    </form>
    <PokeCard v-if="dataFulfilled" :pkm="pokemonData" />
    <h1 v-else>POKEMON NÃO ENCONTRADO</h1>
  </main>
</template>

<script>
import PokeCard from './PokeCard.vue'

export default {
  data() {
    return {
      search: '',
      pokemonsData: [],
      pokemonData: {
        name: '',
        url: '',
      },
      dataFulfilled: false

    }
  },

  name: 'PokedexApp',
  components: {
    PokeCard,
  },

  created() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then((response) => response.json())
      .then((data) => this.pokemonsData = data)
  }, 

  methods: {
    searchPkm() {
      if(this.search.length > 0){
        const text = this.search
        const lowerText = text.toLowerCase();
        const pokeFiltered = this.pokemonsData.results.find(pkm => pkm.name === lowerText)
        this.pokemonData = pokeFiltered
        this.search = ''
        
      }
      if (this.pokemonData === undefined) { 
        this.dataFulfilled = false
        this.search = ''
      } else this.dataFulfilled = true
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  margin-top: 5%;
}
input {
  margin-top: 2%;
  width: 300px;
  height: 30px;
  border-radius: 5px;
}
button {
  margin-top: 2%;
  margin-bottom: 2%;
  height: 30px;
  width: 100px;
  border-radius: 5px;
}
a {
  text-decoration: none;
}
a:visited{
  color: inherit;
}
h1 {
  margin-top: 20%;
}
</style>
