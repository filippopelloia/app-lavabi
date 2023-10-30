<template>
    <div class="about-card">
        <h3>{{ titolo }}</h3>
    </div>
</template>

<script>

export default{
    data() {
        return{
            titolo: this.cardContent
        }
    },
    props: {
        cardContent: String
    }
}
</script>


<style>
    .about-card{
        background-color: gold;
        border-radius: 5px;
        padding: 10px;
        text-align: center;
    }
</style>