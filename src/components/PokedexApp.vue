<template>
  <main class="main">
    <form @submit.prevent="searchPkm">
      <input id="" name="" type="text" v-model="search" placeholder="Digite o nome de um Pokemon">
      <button @click="searchPkm"> Procurar </button>
    </form>
    <div class="poke-zone">
      <div class="poke-search">
        <PokeCard v-if="dataFulfilled" :pkm="pokemonData" :key="pokemonData.name" @click="openDetail" />
        <div>
          <ul class="evo-chain" v-if="pokemonChain.length > 0">
            <li v-for="(pokm) in pokemonChain[0]" :key="pokm.name">
              <PokeCard v-bind:pkm="pokm" @click="openDetail"/>
            </li>
          </ul>
        </div>
      </div>
      <div class="poke-detail">
        <PokeDetails v-if="isClicked" :pkm="pokemonData" :key="pokemonData.name" />
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
      await Promise.all(list.map(async (pk) => {
        pkList.push(await pokemonData(pk.name))
      }))
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
      pokemonChain: [],
      isClicked: false,
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
      this.isClicked = !this.isClicked
      this.clickedDetails = this.pokemonData
    },

    async searchPkm() {
      if(this.search.length > 0 ){
        const text = this.search
        const lowerText = text.toLowerCase();
        const pokeFiltered = this.pokemonsData.results.find(pkm => pkm.name === lowerText)
        this.pokemonChain.splice(0, this.pokemonChain.length)
        if (pokeFiltered === undefined) { 
          this.dataFulfilled = false
          this.search = ''
      } else {
          this.pokemonData = await pokemonData(pokeFiltered.name)
          const chain = await pokemonChainDataFetch(this.pokemonData.name)
          chain.length === 0 ? this.pokemonChain.splice(0, this.pokemonChain.length)  : this.pokemonChain.push(await chainLister(chain))
          console.log(this.pokemonChain)
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
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.poke-search {
  display: flex;
  flex-direction: column;
  width: 50%;
  flex-wrap: wrap;
}

.evo-chain{
  height: auto;
  padding-left: 5%;
  padding-right: 5%;
  justify-content: center;
  display: flex;
  flex: 1 0 50%;
  zoom: 0.5;
}

.poke-detail {
  display: flex;
  width: 50%;
  justify-content: center;
}

@media screen and (max-width: 1100px) {
  .poke-zone {
  display: flex;
  flex-direction: column;
  align-items: center;
  }
}
</style>
