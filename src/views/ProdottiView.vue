<template>
    <div>
      <input class="search-product" type="text" placeholder="Ricerca un prodotto" v-model="searchText">
  
      <div class="card-container">
        <div v-for="(product, index) in filteredProducts" 
             class="card-type"
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
  
  export default {
    data() {
      return {
        products: onpage.products,
        searchText: ''
      };
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
    }
  };
  </script>
  
  <style scoped>
    .image-product {
      width: 100%;
      display: block;
      margin-bottom: 25px;
    }
    .card-container {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 100px;
      display: grid;
      grid-template: auto auto / repeat(4, 1fr);
      gap: 20px;
    }
    .card-type {
      border: 1px solid #000000;
      border-radius: 5px;
      padding: 50px 10px;
      text-align: center;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .search-product {
      width: 300px;
      padding: 7.5px;
      margin-left: 50%;
      transform: translateX(-50%);
      margin-top: 100px;
    }
  </style>
  