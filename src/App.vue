<script>
import { RouterLink, RouterView } from 'vue-router';
import SwitchModeButton from './components/SwitchModeButton.vue';


export default{
  components: {
    'mode-button': SwitchModeButton
  }
}



</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="65" height="65" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">HOME</RouterLink>
        <RouterLink to="/collezioni">COLLEZIONI</RouterLink>
        <RouterLink to="/modelli">MODELLI</RouterLink>
        <RouterLink to="/prodotti">PRODOTTI</RouterLink>
        <RouterLink to="/about">ABOUT</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Open+Sans:wght@300;400&family=Oswald:wght@200&family=Poppins:wght@100&display=swap');
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

body{
  font-family: 'Montserrat', sans-serif;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 35px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a.router-link-exact-active {
  color: #000000;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
