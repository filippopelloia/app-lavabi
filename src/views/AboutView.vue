<template>
  <div>
    <h1>This is an about page</h1>

    <div class="card-about-content">
      <div v-for="(day, index) in week" :key="index"> 
        <CardAbout :cardContent="day"></CardAbout>
      </div>
    </div>

    <div class="product-section">
      <div v-for="(order, index) in orders" :key="index">
        <CardProduct :nomeCliente="order.customer"
                     :numeroProdotti="order.numProducts"
                     :totale="order.totalPayment"
                     :id="order.id"
        ></CardProduct>
      </div>
    </div>

  </div>
</template>

<script>
  import CardAbout from '../components/CardAbout.vue'
  import CardProduct from '../components/CardProduct.vue'

  export default{
    components: {
        CardAbout, 
        CardProduct
    },
    data(){
      return{
        week: [
          'It\'s Monday',
          'It\'s Tuesday',
          'It\'s Wednesday',
          'It\'s Thursday',
          'It\'s Friday',
          'It\'s Saturday',
          'It\'s Sunday'
        ],
        orders: [
          {id: 22, customer: 'Mario Rossi', totalPayment: 100, numProducts: 2},
          {id: 23, customer: 'Anna Bianchi', totalPayment: 75, numProducts: 3},
          {id: 24, customer: 'Luigi Verdi', totalPayment: 120, numProducts: 4},
          {id: 25, customer: 'Maria Russo', totalPayment: 50, numProducts: 1},
          {id: 26, customer: 'Giovanni Neri', totalPayment: 90, numProducts: 2},
          {id: 27, customer: 'Elena Gialli', totalPayment: 60, numProducts: 2},
          {id: 28, customer: 'Roberto Marroni', totalPayment: 200, numProducts: 5},
          {id: 29, customer: 'Francesca Rosa', totalPayment: 45, numProducts: 2},
          {id: 30, customer: 'Antonio Arancioni', totalPayment: 80, numProducts: 3},
          {id: 31, customer: 'Giulia Celesti', totalPayment: 55, numProducts: 2}
        ]
      }
    }
  }

</script>

<style scoped>
  .card-about-content, .product-section{
    display: grid;
    gap: 50px;
    margin-top: 100px;
  }
  .card-about-content{
    grid-template: auto auto / repeat(7, 1fr);
  }
  .product-section{
    grid-template: auto auto / repeat(4, 1fr);
  }
</style>
