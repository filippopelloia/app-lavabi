<template>
    <div class="single-product-page">

        <div v-for="(product, index) in products" :key="index">
            <div v-if="product.val('sku') === currentProduct" class="single-product-data">

                <img :src="product.val('image') ? product.file('image').link({'x' : 350}) : ''"
                     alt="Product image"
                     class="image-single-product"
                >
                <div class="codes">
                    <h2>EAN: {{ product.val('ean') }}</h2>
                    <h2>SKU: {{ product.val('sku') }}</h2>
                </div>

                <div class="block-relation">
                    <h3>Modello:</h3>

                    <div v-for="(model, index) in models" :key="index">

                    <!-- devi prendere il model che è in relazione con l'attuale prodotto -->
                        <div v-if="model.rel('modello')">
                            <h4>{{ product.rel('modello.nome') }}</h4>
                            <h4>Ciao</h4>
                        </div>

                        <div v-else>
                            <h3>Nothing</h3>
                        </div>
                    </div>
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
                currentProduct: '',
                products: onpage.products,
                models: onpage.models
            }
        },
        props: {
            prodotto: String,
        },
        created(){
            this.currentProduct = this.$route.params.productId
        },
    }
</script>
