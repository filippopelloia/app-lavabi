<template>
  <div>
    <h1>This is an about page</h1>

    <div class="card-about-content">
      <div v-for="(day, index) in week" :key="index"> 
        <CardAbout :cardContent="day"></CardAbout>
      </div>
    </div>

  </div>
</template>

<script>
  import CardAbout from '../components/CardAbout.vue'

  export default{
    components: {
        CardAbout
    },
    data(){
      return{
        week: [
          'It\'s Monday',
          'It\'s Tuesday',
          'It\'s Wednesday',
          'It\'s Thursday',
          'It\'s Friday',
          'It\'s Saturday',
          'It\'s Sunday'
        ]
      }
    }
  }

</script>

<style scoped>
  .card-about-content{
    display: grid;
    grid-template: auto auto / repeat(7, 1fr);
    gap: 50px;
    margin-top: 100px;
  }
</style>
