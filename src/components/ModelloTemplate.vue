<template>
    <div>

        <div v-if="filtro.val('image')">
            <img :src="filtro.file('image').link({'x' : 200})" 
                    :alt="filtro.val('nome')"
                    class="product-image"
            >
        </div>

        <div v-else><h4>No image.</h4></div>

        <h3 v-if="filtro.val('nome')">{{ filtro.val('nome') }}</h3>
        <h4 v-if="filtro.val('dimensioni')">Dimensioni: {{ filtro.val('dimensioni') }}</h4>
        <h5 v-if="filtro.val('base')">Base: {{ filtro.val('base') }}</h5>
        <p v-if="filtro.val('descrizione_breve')">{{ filtro.val('descrizione_breve') }}</p>

    </div> 
</template>

<script>
export default{
    props: {
        modelliRisultanti: Object
    },
    data(){
        return{
            filtro: this.modelliRisultanti
        }
    }
}
</script>

