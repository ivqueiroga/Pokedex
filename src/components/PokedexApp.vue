<template>
  <main class="main">
    <form @submit.prevent="searchPkm">
      <input id="" name="" type="text" v-model="search" placeholder="Digite o nome de um Pokemon">
      <button @click="searchPkm"> Procurar </button>
    </form>
    <div class="poke-zone">
      <div >
        <PokeCard v-if="dataFulfilled" :pkm="pokemonData" :key="pokemonData.name" @click="openDetail" />
        <div>
          <ul v-if="pokemonChain">
            <li v-for="(pokm) in pokemonChain" :key="pokm.name">
              {{ pokm.name }}
              <!-- <PokeCard :pkm="pokm" :key="pokm.name" @click="openDetail"/> -->
            </li>
          </ul>
        </div>
      </div>
      <div>
        <PokeDetails v-if="clicked" :pkm="clickedDetails" :key="clickedDetails.name" />
      </div>
    </div>
  </main>
</template>

<script>
import PokeCard from './PokeCard.vue'
import PokeDetails from './PokeDetails.vue'
import { pokemonsData, pokemonData, pokemonChainDataFetch } from '../helpers/dataProcess'

const chainLister = async (list) => {
  let pkList = []
      if (list){
        list.forEach(async (pk) => {
              const pkData = await pokemonData(pk.name)
              pkList.push(pkData)
            })
          return pkList
        } else {
            return null
          }
} 

export default {
  data() {
    return {
      search: '',
      pokemonsData: [],
      pokemonData: Object,
      dataFulfilled: false,
      pokemonChain: null,
      clicked: false,
      clickedDetails: Object,
    }
  },

  name: 'PokedexApp',
  components: {
    PokeCard,
    PokeDetails,
  },

  async created() {
    this.pokemonsData = await pokemonsData()
  }, 

  methods: {

    openDetail() {
      this.clicked = !this.clicked
      this.clickedDetails = this.pokemonData
    },

    async searchPkm() {
      if(this.search.length > 0 ){
        const text = this.search
        const lowerText = text.toLowerCase();
        const pokeFiltered = this.pokemonsData.results.find(pkm => pkm.name === lowerText)
        if (pokeFiltered === undefined) { 
          this.dataFulfilled = false
          this.search = ''
      } else {
          this.pokemonData = await pokemonData(pokeFiltered.name)
          const chain = await pokemonChainDataFetch(this.pokemonData.name)
          chain.length === 0 ? this.pokemonChain = chainLister()  : this.pokemonChain = chainLister(chain)
          this.search = ''
          this.dataFulfilled = true
        }    
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  margin-top: 5%;
  height: auto;
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

.poke-zone {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

@media screen and (max-width: 1100px) {
  .poke-zone {
  display: flex;
  flex-direction: column;
  align-items: center;
  }
}
</style>
