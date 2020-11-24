<template>
    <div class="inputWrap">
        <input class="inputStyle" v-model="result" placeholder>
    </div>
</template>

<script>
    export default {
        name: "InputField",
        props: ['result'],
    }

</script>

<style scoped>
    .inputWrap{
        margin: 0 auto;
        width: 352px;
    }
    .inputStyle{
        width: 100%;
        height: 100px;
        background-color: darkgray;
        color: white;
        font-size: 60px;
        font-weight: lighter;
        font-family: 'Pathway Gothic One', sans-serif;
        border-radius: 2px;
        border: 0px solid;
        outline: none;
    }
</style>