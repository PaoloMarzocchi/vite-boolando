<script>
//import { products } from '../products_list.js';
import ProductCard from './ProductCard.vue';
import { state } from '../state.js'

export default {
    name: 'AppMain',
    components: {
        ProductCard
    },
    data() {
        return {
            //products,
            state,
        }
    },
    mounted() {
        this.state.callApiProducts(this.state.databaseUrl);
    }
}
</script>

<template>
    <main class="site-main">
        <div class="container">
            <!-- Card section -->
            <div class="row d-flex">

                <ProductCard :product="product" :key="state.products.id" v-for="product in state.products">
                </ProductCard>


            </div>
            <!-- /Card section -->
        </div>
    </main>

</template>

<style></style>