<template>
  <div>
    <h1>Home page</h1>


<!--     <div v-for="(filter, index) in filters" :key="index">
      <div v-if="filter && filter.val('nome')">
        <h3>{{ filter.val('nome') }}</h3>
      </div>
    </div> -->


  </div>
</template>

<script>
  import * as onpage from '../components/product-onpage.js';


  export default{
    data() {
      return{
        casa: 'Casa mia',
        collections: onpage.collections,
        models: onpage.models,
        currentProduct: 'LKD36097BKM',
      }
    }
  }

</script>

