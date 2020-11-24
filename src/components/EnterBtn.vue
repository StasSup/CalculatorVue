<template>
    <md-button class="enterBtn" v-on:click="$emit('updatedStateAfterPorst')">=</md-button>
</template>

<script>
    export default {
        name: "EnterBtn"
    }
</script>

<style scoped>
    .enterBtn{
        width: 100%;
        height: 100%;
        background-color: lightgray;
        border: 1px solid darkgray;
        font-size: 35px;
        font-weight: normal;
        grid-column-start: 1;
        grid-column-end: 5;
        background-color: darkorange;
        color: white;
    }
    .md-button {
        margin: 0;
    }
</style>