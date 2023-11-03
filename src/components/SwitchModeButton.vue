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
/*             toggleImage: false, */
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

<style>
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
    background-color: #262626;
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
    background-color: #ccc;
    }

    input:focus + .slider {
    box-shadow: 0 0 1px #ccc;
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

