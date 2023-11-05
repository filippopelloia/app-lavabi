<template>
    <div>

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
                products: onpage.products
            }
        },
/*         data() {
            return{
                prodotto: 
            }
        }, */
        props: {
            prodotto: String,
        },
        created(){
            this.currentProduct = this.$route.params.productId 
        }
    }
</script>
