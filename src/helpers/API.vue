<script>
export default {
  name: 'APIHandler',
  
  created() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then((response) => response.json())
      .then((data) => this.pokemonsData = data)
  },

  data() {
    return {
      pokemonsData: [],
    }
  },
}
</script>