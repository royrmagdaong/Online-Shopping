import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        products:[
            {name:'Banana', price: 20},
            {name: 'mango', price:10},
            {name:'guava', price:10},
            {name:'orange',price:30}
        ]
    }
})