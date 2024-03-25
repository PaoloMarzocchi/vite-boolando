import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({
    products: [],
    databaseUrl: 'http://localhost:3000/products',
    callApiProducts(url) {
        axios
            .get(url)
            .then(response => {
                this.products = response.data;
            })
            .catch(err => {
                console.error(err.message)
            })
    }
})