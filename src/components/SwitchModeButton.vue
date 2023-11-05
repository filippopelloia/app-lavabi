<template>
    <div>
        <label class="switch">
            <input type="checkbox" v-model="toggleImage">
            <span class="slider round"></span>
        </label>
    </div>
</template>

<script>
export default{
    data() {
        return{
            toggleImage: this.visible
        }
    },
    methods: {
        toggleSwitch(){
            this.$emit('change', this.toggleImage);
        }
    },
    props: {
        visible: Boolean,
    }
}

</script>
