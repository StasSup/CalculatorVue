<template>
        <md-button v-bind:class="'btnStyle' + index" v-on:click="$emit('calcFunc', btn)" >{{btn}}</md-button>
</template>

<script>
    export default {
        name: "BtnCalculator",
        props: ['btn', 'index']
    }
</script>

<style scoped>
    .btnStyle0, .btnStyle1, .btnStyle2,
    .btnStyle3, .btnStyle4, .btnStyle5,
    .btnStyle6, .btnStyle7, .btnStyle8,
    .btnStyle9, .btnStyle10, .btnStyle11,
    .btnStyle12, .btnStyle13, .btnStyle14,
    .btnStyle15, .btnStyle16{
        width: 100%;
        height: 100%;
        background-color: lightgray;
        border: 1px solid darkgray;
        font-size: 35px;
        font-weight: normal;

    }
    .btnStyle16 {
        grid-column-start: 1;
        grid-column-end: 5;
        background-color: darkorange;
        color: white;
    }
    .btnStyle3, .btnStyle7, .btnStyle11, .btnStyle15{
        background-color: darkorange;
        color: white;
    }
    .md-button {
        margin: 0;
    }
</style>