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
                    <h3>{{ randNum }}</h3>
                </div>


                <!-- altri prodotti -->
                <div class="block-products">
                    <h3>Altri prodotti: </h3>
                    <h4>Tot: {{ totNumProducts }}</h4>
                    <div>
                        <div class="card-container">
                            <RouterLink :to="{ name: 'prodotto', params: { productId: product.val('sku') } }" 
                                        v-for="(product, index) in products.slice(randNum, (randNum +3))"
                                        class="card-type"
                                        :class="isVisible ? 'dark' : 'white'"
                                        :key="index"
                            >


                                    <img v-if="product.val('image')" :src="product.val('image') ? product.file('image').link({'x' : 400}) : ''" 
                                        alt="Product image"
                                        class="image-product"
                                    >

                                    <h5>SKU: {{ product.val('sku') }}</h5>
                                    <h5>EAN: {{ product.val('ean') }}</h5>

                            </RouterLink>
                        </div>
                    </div>

                    <div v-show="!filtriMode">
                        <RouterLink class="filtro-btn show-more-btn" 
                                    :class="isVisible ? 'dark' : 'white'"
                                    to="/prodotti"
                        >Show more</RouterLink>
                    </div>
                </div>


            </div>
        </div>

    </div>
</template>

<script>
    import * as onpage from '../components/product-onpage.js';
    import { inject } from 'vue';

    export default {
        data(){
            return{
                currentProduct: '',
                products: onpage.products,
                models: onpage.models,
                totNumProducts: onpage.totNumProducts,
                filtriMode: false
            }
        },
        props: {
            prodotto: String,
        },
        created(){
            this.currentProduct = this.$route.params.productId
            this.randNum = Math.floor(Math.random() * this.totNumProducts) + 1,
            this.calculateRandNum()
        },
        setup(){
            const isVisible = inject('isVisible');
            return { isVisible };
        },
        methods: {
            calculateRandNum() {
                const maxRange = this.randNum + 3;
                if (maxRange > this.totNumProducts) {
                    this.randNum = Math.floor(Math.random() * this.totNumProducts) + 1;
                }
            },
        }
    }
</script>
