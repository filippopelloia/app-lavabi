<template>
    <div>

        <div class="search-section">

            
            <!-- BASE -->
            <select v-model="selected" class="select-box">
                <option disabled value="">Seleziona base</option>
                <option>300</option>
                <option>450</option>
                <option>500</option>
                <option>600</option>
                <option>800</option>
                <option>900</option>
                <option>Corner</option>
            </select>
            <!-- END BASE -->


            <!-- DIMENSION -->
            <select v-model="selectedDimension" class="select-box">
                <option disabled value="">Seleziona dimensione</option>
                <option>1160 x 500</option>
                <option>1000 x 500</option>
                <option>900 x 665</option>
                <option>900 x 635</option>
                <option>860 x 510</option>
                <option>860 x 500</option>
                <option>860 x 460</option>
                <option>860 x 180</option>
                <option>838 x 483</option>
                <option>790 x 500</option>
                <option>570 x 510</option>
                <option>570 x 500</option>
                <option>510 x 510</option>
            </select>
            <!-- END DIMENSION -->


            <!-- DEPTH -->
            <select v-model="selectedDepth" class="select-box">
                <option disabled value="">Seleziona profondità</option>
                <option>240</option>
                <option>235</option>
                <option>220</option>
                <option>200</option>
                <option>190</option>
                <option>155</option>
                <option>150</option>
            </select>
            <!-- END DEPTH -->


            <!-- SECOND SINK BASIN -->
            <select v-model="numeroVasche" class="select-box">
                <option disabled value="">Numero vasche</option>
                <option>1</option>
                <option>2</option>
            </select>
            <!-- SECOND SINK BASIN -->


            <!-- INPUT -->
            <input class="search-product" 
                   type="text" 
                   placeholder="Ricerca un prodotto..."
                   v-model="searchText"
            >
            <!-- END INPUT -->



            <!-- BUTTON RESET -->
            <button v-if="searchText === '' && selected === '' && selectedDimension === '' && selectedDepth === '' && numeroVasche === ''"
                    @click.prevent="resetData" 
                    class="reset-btn disabled-btn"
            >RESET</button>

            <button v-else @click.prevent="resetData" class="reset-btn">RESET</button>
            <!-- END BUTTON RESET -->

        </div>

        <div class="card-container">
            <div v-for="(model, index) in filteredModels" 
                 class="card-type"
                 :key="index"
            >
                <div v-if="model.val('image')">
                    <img :src="model.val('image') ? model.file('image').link({'x' : 200}) : ''" 
                        :alt="model.val('nome')"
                        class="image-product"
                    >
                </div>

                <div v-else>
                    <h3>No image.</h3>
                </div>

                <div v-if="model.val('nome')">
                    <h3>{{ model.val('nome') }}</h3>
                </div>

                <div v-if="model.val('dimensioni')">
                    <h4>Dimensioni: {{ model.val('dimensioni') }}</h4>
                </div>

                <div v-if="model.val('profondita') && model.val('profondita_seconda_vasca')">
                    <h5>Profondità prima vasca: {{ model.val('profondita') }}</h5>
                    <h5>Profondità seconda vasca: {{ model.val('profondita_seconda_vasca') }}</h5>
                </div>

                <div v-else>
                    <div v-if="model.val('profondita_vasca')">
                        <h5>Profondità vasca: {{ model.val('profondita_vasca') }}</h5>
                    </div>
                </div>

                <div v-if="model.val('base')">
                    <h4>Base: {{ model.val('base') }}</h4>
                </div>

                <div v-if="model.val('descrizione_breve')">
                    <p>{{ model.val('descrizione_breve') }}</p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import * as onpage from '../components/product-onpage.js';

export default {
    data(){
        return{
            models: onpage.models, 
            searchText: '',
            selected: '',
            selectedDimension: '',
            selectedDepth: '',
            numeroVasche: ''

        };
    },
/*     computed: {
        filteredModels(){
            const search = this.searchText.toLowerCase();
            const selected = this.selected.toLowerCase();
            const selectedDimension = this.selectedDimension;
            const selectedDepth = this.selectedDepth;
            const numeroVasche = this.numeroVasche; 

            return this.models.filter(model => {
                const nome = model && model.val('nome')?.toLowerCase();
                const base = model && model.val ('base')?.toLowerCase();
                const dimension = model && model.val('dimensioni');
                const depth = model && model.val('profondita_vasca');
                const vasche = model && model.val('descrizione_breve');

                return (
                    (nome.startsWith(search)) && 
                    (((selected === '') || (base === selected)) || ((selected === 'corner') && (base === 'corner'))) &&
                    ((selectedDimension === '') || (dimension === selectedDimension)) &&
                    ((numeroVasche === '') || ((vasche.includes(1) === numeroVasche) || (vasche.includes(2) === numeroVasche))
                    )
                );
            })
        }
    }, */
    computed: {
        filteredModels(){
            const search = this.searchText.toLowerCase();
            const selected = this.selected.toLowerCase();
            const selectedDimension = this.selectedDimension;
            const selectedDepth = this.selectedDepth;
            const numeroVasche = this.numeroVasche; 

            return this.models.filter(model => this.filteredModels(model, search, selected, selectedDimension, numeroVasche));
        },

        filterModel(model, search, selected, selectedDimension, numeroVasche)
    },
    methods: {
        //funzione RESET
        resetData(){
            this.searchText = '';
            this.selected = '';
            this.selectedDimension = '';
            this.selectedDepth = '';
            this.numeroVasche = '';
        }
    }
};

</script>


  
<style scoped>
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
</style>