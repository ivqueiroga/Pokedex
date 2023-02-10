<template>
  <main class="main">
    <form @submit.prevent="searchPkm">
      <input id="" name="" type="text" v-model="search" placeholder="Digite o nome de um Pokemon">
      <button @click="searchPkm"> Procurar </button>
    </form>
    <PokeCard v-if="dataFulfilled" :pkm="pokemonData" :key="pokemonData.name" />
    <h1 v-else>PESQUISE POR UM POKEMON VÁLIDO</h1>
  </main>
</template>

<script>
import PokeCard from './PokeCard.vue'
import { pokemonsData } from '../helpers/dataProcess'

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

  async created() {
    this.pokemonsData = await pokemonsData()
  }, 

  methods: {
    searchPkm() {
      if(this.search.length > 0 ){
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
  padding-left: 1%;
  margin-top: 2%;
  width: 300px;
  height: 30px;
  border-radius: 12px;
}
button {
  margin-top: 2%;
  margin-bottom: 2%;
  height: 30px;
  width: 100px;
  border-radius: 12px;
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
