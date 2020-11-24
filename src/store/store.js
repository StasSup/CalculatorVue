import Vue from 'vue'
import Vuex from 'vuex'
import {evaluate} from "mathjs";

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {
        async getOperation(ctx) {
            const res = await fetch("http://localhost:3012/operations")
            const operations = await res.json()
            ctx.commit('updateHistoryOperations', operations)
        }
    },
    state: {
        calcBtns: [7, 8, 9, 'AC', 4, 5, 6, '/', 1, 2, 3, '*', '.', 0, '-', '+'],
        result: '',
        expression: '',
        historyOperations: [],
    },
    getters: {
        calcBtns(state) {
            return state.calcBtns
        },
        resultCalc(state) {
            return state.result
        },
        expression(state) {
            return state.expression
        },
        historyOperations(state) {
            return state.historyOperations
        }
    },
    mutations: {
        calcFunc(state, btn) {
            if (Number.isInteger(btn)) {
                state.result += btn
            } else {
                switch (btn) {
                    case '+':
                    case '-':
                    case '*':
                    case '.':
                    case '/':
                        state.result += btn
                        break
                    case '=':
                        state.expression = state.result + '='
                        state.result = evaluate(state.result)
                        state.expression += state.result
                        break
                    case 'AC':
                        state.result = ''
                        state.expression = ''
                        break
                }
            }
        },
        updateHistoryOperations(state, operations) {
            state.historyOperations = operations;
        },
        async postOperation(state) {
            state.expression = state.result + '='
            state.result = evaluate(state.result)
            const postData = state.expression + state.result
            await fetch("http://localhost:3012/operations", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({operation: postData})
            })
        }
}
})