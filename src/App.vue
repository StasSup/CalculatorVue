<template>
    <div class="appWrapper">
        <div class="mainFieldWrapper">
            <div class="calcWrapper">
                <InputField v-bind:result="resultCalc" v-bind:expression="expression"/>
                <div class="btnCalcWrap">
                    <BtnCalculator v-for="(btn, i) of calcBtns" :key="btn" v-bind:btn="btn" v-bind:index="i" v-on:calcFunc="calcFunc"/>
                    <keep-alive>
                        <EnterBtn v-on:updatedStateAfterPorst="updatedStateAfterPorst"/>
                    </keep-alive>
                </div>
            </div>
            <div class="wrapperOfComponentOperations">
                <div class="label">
                    История операций:
                </div>
                <div class="containerOfOperations" v-for="oper of historyOperations" :key="oper.id">
                    <div class="dateWrapper">{{oper.date}};</div>
                    <div>{{oper.operation}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import InputField from "./components/InputField.vue"
    import BtnCalculator from "./components/BtnCalculator.vue"
    import EnterBtn from "./components/EnterBtn.vue"
    import {mapGetters, mapMutations} from 'vuex'
    export default {
        name: 'App',
        components: {
            InputField,
            BtnCalculator,
            EnterBtn
        },
        async mounted() {
            this.$store.dispatch("getOperation");
        },
        computed: mapGetters(['calcBtns', 'resultCalc', 'expression', 'historyOperations']),
        methods: {
            updatedStateAfterPorst (){
                this.$store.commit("postOperation")
                this.$store.dispatch("getOperation")
            },
            ...mapMutations(['postOperation', 'calcFunc', 'btn'])
        }
    }
</script>

<style>
    .appWrapper {
        display: flex;
        padding: 100px;
    }
    .mainFieldWrapper{
        display: flex;
        margin: 0 auto;
        border: 2px solid ;
        height: 500px;
    }
    .calcWrapper {
        margin-right: 100px;
        padding: 10px;
    }
    .wrapperOfComponentOperations{
        display: flex;
        flex-direction: column;
        width: 400px;
        border-left: 2px solid;
        padding: 10px;
        font-size: 16px;
    }
    .label{
        font-weight: bold;
    }
    .containerOfOperations{
        display: flex;
        flex-wrap: nowrap;
    }
    .dateWrapper{
        margin-right: 15px;
    }
    .btnCalcWrap {
        display: grid;
        width: 350px;
        height: 378px;
        margin: 0 auto;
        grid-template-columns: repeat(4, 1fr);
        justify-content: center;
    }
</style>
