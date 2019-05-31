<template>
    <div>
        <div
                id="on"
                @click="switched(true)"
                :class="{active: value}">On</div>
        <div
                id="off"
                @click="switched(false)"
                :class="{active: !value}">Off</div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        methods: {
            switched(isOn){
                this.$emit('input',isOn);
            }
        }
    }
</script>

<style scoped>
    #on, #off {
        width: 40px;
        height: 20px;
        background-color: lightgray;
        padding: 2px;
        display: inline-block;
        margin: 10px 2px;
        box-sizing: content-box;
        cursor: pointer;
        text-align: center;
        border-radius: 10%;
        
    }

    #on:hover, #on.active {
        background-color: rgb(142, 230, 142);
    }

    #off:hover, #off.active {
        background-color: rgb(248, 84, 84);
    }
</style>