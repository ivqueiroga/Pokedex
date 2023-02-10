<template>
  <article class="cards-container" v-if="pokeInfo">
    <section class="card-container">
      <div class="card-wrapper">
        <img :src="pokeInfo.imgUrl" :width="150" />
        <h3>{{pokeInfo.name}}</h3>
      </div>
    </section>
  </article>
</template>

<script>
import { pokemonChainDataFetch, pokemonData } from '../helpers/dataProcess'

export default {
  
  data() {
    return {
      pokeInfo: null,
      pokeStats: null,
    }
  },

  async created () {
    let fetchURL = this.pkm.url
    this.pokeInfo = await pokemonData(fetchURL)
    this.pokeStats = await pokemonChainDataFetch(this.pkm.name)
  },

  name: 'PokeCard',
  props: {
    pkm: Object,
  },
}
</script>

<style scoped>

.cards-container{
  padding: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  justify-items: center;
}
.card-container{
  border: 3px groove white;
  border-radius: 5px;
  box-shadow: 0px 0px 20px 5px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-items: center;
  height: 300px;
  width: 200px;
}
h3 {
  text-transform: capitalize;
}

section {
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-between;
}

</style>