<template>
  <main class="main">
    <h2> Aplicação pokedex que consome a API <a href="https://pokeapi.co/" target="_blank" rel="noopener"> https://pokeapi.co/ </a></h2>
    <label for="pokemon">
        Digite o nome do pokemon!
        <input id="pokemon" type="text">
    </label>
    <button @click="getData"> Procurar </button>
    <PokeCard />
  </main>
</template>

<script>
import PokeCard from './PokeCard.vue';

export default {
  data() {
    return {
      pokemon: {}
    }
  },

  name: 'PokedexApp',
  components: {
    PokeCard,
  },

  methods: {
    getData() {
      fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(response => response.json())
        .then(data => this.pokemon = data)
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
</style>
