<template>
    <div>
      <input class="search-product" 
             type="text" 
             placeholder="Ricerca un prodotto..."
             v-model="searchText"
      >

      <div class="card-container">
        <div v-for="(collection, index) in filteredCollections" 
             class="card-type"
             :key="index"
        >
            <div v-if="collection.val('image')">
                <img :src="collection.file('image').link({'x' : 400})" 
                    alt="Collection image"
                    class="image-collection"
                >
            </div>
            <div v-else-if="collection.val('ambientata')">
                <img :src="collection.file('ambientata').link({'x' : 400})" 
                    alt="Collection image"
                    class="image-collection"
                >
            </div>
            <div v-else>
                <h3>No image</h3>
            </div>


            <h5>{{ collection.val('nome') }}</h5>
        </div>
      </div>

    </div>
</template>

<script>
import * as onpage from '../components/product-onpage.js';

export default {
    data(){
        return{
            collections: onpage.collections, 
            searchText: ''
        };
    },
    computed: {
        filteredCollections(){
            const search = this.searchText.toLowerCase();

            return this.collections.filter(collection => {
                const nome = collection && collection.val('nome');
                return nome && nome.toLowerCase().startsWith(search);
            })
        }
    }
};

</script>


  
<style scoped>
    .image-collection{
        width: 100%;
        display: block;
        margin-bottom: 25px;
    }
    .card-container{
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 100px;
        display: grid;
        grid-template: auto auto / repeat(4, 1fr);
        gap: 20px;
    }
    .card-type{
        background-color: brown;
        border-radius: 5px;
        padding: 50px 10px;
        text-align: center;
        color: #fff;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .search-product{
        width: 300px;
        padding: 7.5px;
        margin-left: 50%;
        transform: translateX(-50%);
        margin-top: 100px;
    }
</style>