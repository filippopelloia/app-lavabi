<template>
    <div>

        <div class="search-section">


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
        };
    },
    components: {
        'modello-template': ModelloTemplate
    },
    computed: {
           filteredModels(){
            const search = this.searchText.toLowerCase();
            const searchBase = this.selected;
            const dimension = this.selectedDimension;
            const depth = this.selectedDepth;

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
        }
    }
};

</script>


  
<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;500&family=Open+Sans:wght@300;400&family=Oswald:wght@200&family=Poppins:wght@100&display=swap');
    body{
        font-family: 'Montserrat', sans-serif;
    }
    .image-product {
        width: 60%;
        display: block;
        margin-bottom: 25px;
        margin-left: auto;
        margin-right: auto;
    }
    h3{
        font-weight: 500;
    }
    h3, h4, h5{
        margin-bottom: 10px;
    }
    h4, h5, p{
        font-weight: 200;
    }
    p{
        font-size: 12.5px;
    }
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
        border-radius: 5px;
        padding: 50px 10px;
        text-align: center;
        border: 1px solid gray;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .search-section{
        padding: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #262626;
        gap: 25px;
    }
    .search-product{
        width: 300px;
        padding: 7.5px;
    }
    .reset-btn{
        background-color: red;
        color: #fff;
        padding: 7.5px;
        border: none;
        cursor: pointer;
    }
    .disabled-btn{
        opacity: 0;
    }
    .select-box{
        padding: 7.5px;
        color: gray;
    }
    .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    }

    .switch input {
    display: none;
    }

    .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    }

    .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    }

    input:checked + .slider {
    background-color: #101010;
    }

    input:focus + .slider {
    box-shadow: 0 0 1px #101010;
    }

    input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
    }

    .slider.round {
    border-radius: 34px;
    }

    .slider.round:before {
    border-radius: 50%;
    }
</style>