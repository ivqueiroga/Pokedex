<template>
  <article class="cards-container" v-if="pokeInfo">
    <section class="card-container" :style="colorByType" >
      <div class="card-wrapper">
        <img :src="pokeInfo.sprites.front_default" :width="150" />
        <h3>{{pokeInfo.name}}</h3>
      </div>
    </section>
  </article>
</template>

<script>

export default {
  
  data() {
    return {
      pokeInfo: null,
    }
  },

  async created () {
    this.pokeInfo = this.pkm
  },

  name: 'PokeCard',
  props: {
    pkm: Object,
  },

  computed : {
    colorByType() {
      let color = 'white'
      switch (this.pokeInfo.types[0].type.name) {
        case 'grass':
          color = '#204000'
          break;
        case 'fire':
          color = '#fc0c0b'
          break;
        case 'water':
          color = '#08517a'
          break;
        case 'normal':
          color = '#aca974'
          break;
        case 'flying':
          color = '#085764'
          break;
        case 'bug':
          color = '#91ba2e'
          break;
        case 'poison':
          color = '#611380'
          break;
        case 'electric':
          color = '#969101'
          break;
        case 'ground':
          color = '#bfac21'
          break;
        case 'fighting':
          color = '#800b11'
          break;
        case 'psychic':
          color = '#8a0532'
          break;
        case 'rock':
          color = '#474026'
          break;
        case 'ice':
          color = '#103d43'
          break;
        case 'ghost':
          color = '#472b53'
          break;
        case 'dragon':
          color = '#29036a'
          break;
        case 'dark':
          color = '#2d221c'
          break;
        case 'steel':
          color = '#454545'
          break;
        case 'fairy':
          color = '#f87ea7'
          break;
    }
      return {
        boxShadow: `0px 0px 20px 5px ${color}`
      }
    },
  }
}
</script>

<style scoped>

.cards-container{
  padding: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  justify-items: center;
  height: auto;
}
.card-container{
  background-color: rgba(255, 255, 255, 0.3);
  text-shadow: 1px 1px black;
  border: 1px groove white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-items: center;
  height: 200px;
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