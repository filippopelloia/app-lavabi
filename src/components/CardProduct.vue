<template>
    <div>
        <div class="product">
            <h4>{{ customerName }}</h4>
            <h3>Tot: ${{ totalPayment }}</h3>
            <h5>Q.ty: {{ numberProducts }}</h5>
            <h6>#{{ orderId }}</h6>
        </div>
    </div>
</template>


<script>
    export default{
        props: {
            nomeCliente: String,
            totale: Number,
            numeroProdotti: Number,
            id: Number
        },
        data() {
            return{
                customerName: this.nomeCliente,
                totalPayment: this.totale,
                numberProducts: this.numeroProdotti,
                orderId: this.id
            }
        }
    }
</script>

<style scoped>
    .product{
        background-color: brown;
        text-align: center;
        padding: 12.5px;
        border-radius: 10px;
        color: antiquewhite;
    }
</style>
