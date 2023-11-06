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

            <input class="search-product" 
                    type="text" 
                    placeholder="Ricerca una collezione..."
                    v-model="searchText"
            >
        </div>

      <div class="card-container">
        <div v-for="(collection, index) in filteredCollections" 
             class="card-type"
             :class="isVisible ? 'dark' : 'white'"
             :key="index"
        >
            <div v-if="collection.val('image')">
                <img v-if="collection.val('image')"
                     :src="collection.file('image').link({'x' : 400})" 
                     alt="Collection image"
                     class="image-collection"
                >
            </div>
            <div v-else-if="collection.val('ambientata')">
                <img v-if="collection.val('ambientata')"
                     :src="collection.file('ambientata').link({'x' : 400})" 
                     alt="Collection image"
                     class="image-collection"
                >
            </div>
            <div v-else>
                <div class="noImage">
                    <h5>No image.</h5>
                </div>
            </div>


            <h5 v-if="collection.val('nome')">{{ collection.val('nome') }}</h5>
            <h6 v-if="collection.val('tipologia1')">{{ collection.val('tipologia1') }}</h6>
        </div>
      </div>

    </div>
</template>

<script>
import * as onpage from '../components/product-onpage.js';
import { inject, ref } from 'vue';

export default {
    data(){
        return{
            collections: onpage.collections, 
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
        filteredCollections(){
            const search = this.searchText.toLowerCase();

            return this.collections.filter(collection => {
                const nome = collection && collection.val('nome');
                return nome && nome.toLowerCase().startsWith(search);
            })
        }
    },
    setup(){
        const isVisible = inject('isVisible');
        return { isVisible }; 
    }
};

</script>

