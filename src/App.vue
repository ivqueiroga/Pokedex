<template>
  <header class="header">
    <div class="header-owner">
      <img alt="Pokebola logo" width="50" height="50" src="./assets/Logo.svg">
      <h1>Pokedex</h1>
    </div>
    <h2 class="header-about"> Aplicação pokedex que consome a API <a href="https://pokeapi.co/" target="_blank" rel="noopener"> https://pokeapi.co/ </a></h2>
  </header> 
  <PokedexApp />
  <footer class="footer">
    <a href="http://ivqueiroga.com" target="_blank" rel="noopener"><img alt="Ivan logo" width="30" height="30" src="./assets/LogoIvan.svg"></a>
    <h3>Ivan Queiroga</h3>
  </footer>
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

body{
  background: linear-gradient(145deg, rgba(13,13,13,1) 0%, rgba(255,0,0,1) 100%);
  height: 120vh;
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  color: white;
  text-align: center;
  text-shadow: 2px 2px black;
}

.header {
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 2%;
  display: flex;
  flex-direction: column;
  text-shadow: 2px 2px black;
}

.header-owner {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.header-owner > h1{
  padding-left: 5%;
  align-items: center;
}

a {
  text-decoration: none;
}
a:visited{
  color: inherit;
}

.footer {
  background: linear-gradient(180deg, rgba(13,13,13,1) 0%, rgba(85,85,85,1) 100%);
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  justify-content: center;
  text-shadow: 2px 2px black;
  align-items: center;
  height: 80px;
  width: 100%;
  position: fixed;
  bottom: 0;
}

.footer > h3 {
  margin-left: 5%;
}
</style>
