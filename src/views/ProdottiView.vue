<template>
    <div :class="isVisible ? 'white' : 'dark'">

      <div v-show="!filtriMode">
          <button class="filtro-btn" 
                  :class="isVisible ? 'dark' : 'white'"
                  @click.prevent="showFiltri"
          >Filtri</button>
      </div>

      <div class="search-section" 
           v-show="filtriMode"
           :class="isVisible ? 'dark-gray' : 'dark-white'"
      >

          <img src="../assets/IMG/close.png" 
                 class="close-btn"
                 @click.prevent="showFiltri"
            >
          <input class="search-product" type="text" placeholder="Ricerca un prodotto" v-model="searchText">
      </div>
  
      <div class="card-container">
        <div v-for="(product, index) in filteredProducts" 
             class="card-type"
             :class="isVisible ? 'dark' : 'white'"
             :key="index"
        >
          <img :src="product.val('image') ? product.file('image').link({'x' : 400}) : ''" 
               alt="Product image"
               class="image-product"
          >
          <h5>SKU: {{ product.val('sku') }}</h5>
          <h5>EAN: {{ product.val('ean') }}</h5>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import * as onpage from '../components/product-onpage.js';
  import { inject } from 'vue';
  
  export default {
    data() {
      return {
        products: onpage.products,
        searchText: '',
        filtriMode: false
      };
    },
    methods: {
      showFiltri(){
        this.filtriMode = !this.filtriMode;
      }
    },
    computed: {
        filteredProducts() {
            const search = this.searchText.toLowerCase();

            return this.products.filter(product => {

                //verifico che product non sia null e prendo il suo EAN
                const ean = product && product.val('ean');

                //verifico che campo EAN non sia null e prende EAN in base a valore in search
                return ean && ean.toLowerCase().startsWith(search);
            });
        }
    },
    setup(){
      const isVisible = inject('isVisible');
      return { isVisible };
    }
  };
  </script>
  