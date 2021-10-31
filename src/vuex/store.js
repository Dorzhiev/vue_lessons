import { createApp } from 'vue'
import { createStore } from 'vuex'
import axios from 'axios';


let store = createStore({ 
    state: { //хранилище
        products: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios('http://localhost:3000/products', {
            method: "GET"
            })
            .them((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data);
                return products;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        }
    }
})

const app = createApp({});
app.use(store);

export default store;