<template>
  <section class="cards-container" v-if="pokeInfo">
    <div class="card-wrapper"> 
      <img :src="pokeInfo.sprites.front_default" :width="150" />
      <h3>{{pokeInfo.name}}</h3>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      pokeInfo: null,
    }
  },

  created () {
    this.pokeInfo = null
    let fetchURL = this.pkm
    let { url } = fetchURL
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.pokeInfo = data)
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-items: center;
}
.card-wrapper{
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
</style>