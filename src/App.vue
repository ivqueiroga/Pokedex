<template>
  <header class="header">
    <a href="http://ivqueiroga.com" target="_blank" rel="noopener"><img alt="Ivan logo" width="50" height="50" src="./assets/Logo.svg"></a>
    <h1>Pokedex por Ivan Queiroga</h1>
  </header> 
  <PokedexApp />
</template>

<script>
import PokedexApp from './components/PokedexApp.vue'

export default {
  name: 'App',
  components: {
    PokedexApp,
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100%;
  background: linear-gradient(90deg, rgba(22,44,64,1) 0%, rgba(13,13,13,1) 100%);
  color: #73B2D9;
  text-align: center;
  text-shadow: 2px 2px black;
}

.header {
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 2%;
  display: flex;
  justify-content: center;
  text-shadow: 2px 2px black;
  flex-direction: row;
}

.header > h1{
  display: flex;
  padding-left: 5%;
  align-items: center;
}
</style>
