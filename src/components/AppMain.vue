<script>
//import { products } from '../products_list.js';
//import ProductCard from './ProductCard.vue';
//import { state } from '../state.js'

export default {
    name: 'AppMain',
}
</script>

<template>
    <main class="site-main">
        <div class="container">
            <!-- Card section -->
            <div class="row d-flex">
                <slot />
            </div>
            <!-- /Card section -->
        </div>
    </main>
    <!-- <div id="modal" v-show="modalToggle">

    </div> -->
</template>

<style></style>