<script>
import { products } from '../products_list.js';
import ProductCard from './ProductCard.vue';

export default {
    name: 'AppMain',
    components: {
        ProductCard
    },
    data() {
        return {
            products
        }

    },
    mounted() {
        console.log(products);
    }
}
</script>

<template>
    <main class="site-main">
        <div class="container">
            <!-- Card section -->
            <div class="row d-flex">

                <ProductCard :product="product" :key="products.id" v-for="product in products"></ProductCard>


            </div>
            <!-- /Card section -->
        </div>
    </main>

</template>

<style></style>