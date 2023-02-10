<template>
  <article v-if="pokeDetails" class="details-container" :style="cssBgDefine"  >
    <div class="detail-wrapper">
      <h3 >{{pokeDetails.name}}</h3>
      <ul class="list-wrapper">
        <li class="list-item" v-for="(stat, i) in pokeDetails.stats" :key="i">
          <p>{{stat.stat.name}}</p> <p>{{stat.base_stat}}</p>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      pokeDetails: null,
    }
  },

  async created () {
    this.pokeDetails = this.pkm
  },

  name: 'PokeDetails',
  props: {
    pkm: Object,
  },

  computed: {
    cssBgDefine() {
      const bg = this.pokeDetails.sprites.front_default
      return {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
      }
    }
  }
}
</script>

<style scoped>
.details-container{
  background-color: rgba(255, 255, 255, 0.3);
  text-shadow: 1px 1px black;
  width: 100%;
  height: 100%;
  border: 3px groove black;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5%;
  height: 300px;
  width: 300px;
  
}
h3 {
  text-transform: capitalize;
}

section {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}
li {
  list-style-type: none;
}

.list-item {
  display: flex;
  justify-content: space-between;
}
</style>