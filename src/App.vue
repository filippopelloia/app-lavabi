<script>
  import { RouterLink, RouterView } from 'vue-router';
  import { ref, provide } from 'vue';
  import SwitchModeButton from './components/SwitchModeButton.vue';


  export default{
    components: {
      'mode-button': SwitchModeButton
    },
    methods: {
      toggleSwitch(){
        this.isVisible = !this.isVisible;
      },
      isCurrentPage(pageName){
        return this.$route.name === pageName
      }
    },
    data(){
      return{
        isVisible: true
      }
    },

    //================ COMPOSITION API ==========================
    setup(){
      const isVisible = ref(true);
      provide('isVisible', isVisible);

      const result = () => {
        return this.isVisible ? 'Visible' : 'Invisible'
      }

      return{
        isVisible, result
      }
    }
  }
</script>

<template>
  <header :class="isVisible ? 'dark' : 'white'">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="65" height="65" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/" :class="{ active: isCurrentPage('home') }">HOME</RouterLink>
        <RouterLink to="/collezioni" :class="{ active: isCurrentPage('collezioni') }">COLLEZIONI</RouterLink>
        <RouterLink to="/modelli" :class="{ active: isCurrentPage('modelli') }">MODELLI</RouterLink>
        <RouterLink to="/prodotti" :class="{ active: isCurrentPage('prodotti') }">PRODOTTI</RouterLink>
        <RouterLink to="/about" :class="{ active: isCurrentPage('about') }">ABOUT</RouterLink>
      </nav>
    </div>
    <mode-button :visible="isVisible" @change="toggleSwitch"></mode-button>
  </header>

  <RouterView />
</template>

