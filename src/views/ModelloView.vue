<template>
    <div>

        <div v-show="!filtriMode">
            <button class="filtro-btn" @click.prevent="showFiltri">Filtri</button>
        </div>

        <div class="search-section" v-show="filtriMode">

            <img src="../assets/IMG/close.png" 
                 class="close-btn"
                 @click.prevent="showFiltri"
            >

            <!-- DIMENSIONI -->
            <select v-model="selectedDimension" class="select-box">
                <option disabled value="">Seleziona dimensione</option>

                <option v-for="(model, index) in sortedModels" :key="index">
                    {{ model.val('dimensioni') }}
                </option>

            </select>



            <!-- INPUT -->
            <input class="search-product" 
                   type="text" 
                   placeholder="Ricerca un prodotto..."
                   v-model="searchText"
            >



            <!-- BUTTON RESET -->
            <button v-if="searchText === '' && selectedDimension === ''"
                    @click.prevent="resetData" 
                    class="reset-btn disabled-btn"
            >RESET</button>



            <button v-else @click.prevent="resetData" class="reset-btn">RESET</button>

        </div>


        <div class="card-container">

            <div v-for="(model, index) in filteredModels" 
                :key="index" 
                class="card-type"
            >

                <modello-template :modelliRisultanti="model"></modello-template>

            </div>
        </div>
    </div>
</template>

<script>
import * as onpage from '../components/product-onpage.js';
import ModelloTemplate from '../components/ModelloTemplate.vue';

export default {
    data(){
        return{
            models: onpage.models, 
            searchText: '',
            selectedDimension: '',
            filtriMode: false
        };
    },
    components: {
        'modello-template': ModelloTemplate
    },
    computed: {
           filteredModels(){
            const search = this.searchText.toLowerCase();
            /*const searchBase = this.selected; */
            const dimension = this.selectedDimension;
            /* const depth = this.selectedDepth; */

            return this.models
                .filter(model => {
                    const nome = model && model.val('nome');
                    return nome && nome.toLowerCase().startsWith(search);
                })
                .filter(model => {
                    const dimensione = model && model.val('dimensioni');
                    return dimensione && dimensione.startsWith(dimension);
                })
           },    

           sortedModels() {
                const uniqueDimensioni = {};

                this.models.forEach(model => {
                    const dimensioni = model.val('dimensioni');
                    if (!uniqueDimensioni[dimensioni]) {
                    uniqueDimensioni[dimensioni] = model;
                    }
                });

                const uniqueModelsArray = Object.values(uniqueDimensioni);

                uniqueModelsArray.sort((a, b) => {
                    const dimensioniA = a.val('dimensioni');
                    const dimensioniB = b.val('dimensioni');
                    if (dimensioniB < dimensioniA) {
                        return 1; 
                        }
                        if (dimensioniB > dimensioniA) {
                        return -1; 
                        }
                        return 0;
                    });

                    return uniqueModelsArray;
            }
    },
    methods: {
        //funzione RESET
        resetData(){
            this.searchText = '';
            this.selected = '';
            this.selectedDimension = '';
            this.selectedDepth = '';
            this.numeroVasche = '';
        },
        toggleImage() {
            this.switchText = !this.switchText
            this.$emit('setCheckboxVal', this.switchText)
        },
        showFiltri(){
            this.filtriMode = !this.filtriMode;
        }
    }
};

</script>
