<script>
export default {
    name: 'ProductCard',
    props: {
        product: Object
    }
}
</script>

<template>
    <div class="col">
        <div class="card">
            <div class="card-top">
                <img :src="product.frontImg" class="max-width" alt="">
                <img :src="product.backImg" class="display-none max-width" alt="">
                <div class="discount" v-if="product.discount">-{{ product.discount }}%</div>
                <div class="eco" :class="product.discount ? '' : 'position-left'" v-if="product.eco">{{ product.eco }}
                </div>
                <div class="heart">&hearts;</div>
            </div>
            <div class="card-description">
                <ul>
                    <li>
                        {{ product.brand }}
                    </li>
                    <li>
                        <h4>{{ product.type }}</h4>
                    </li>
                    <li>
                        <template v-if="product.discount">
                            <span class="discount-price">{{ product.discountedPrice }} €</span>
                            <span class="original-price">{{ product.fullPrice }} €</span>
                        </template>
                        <template v-else>
                            <span class="full-price">{{ product.fullPrice }} €</span>
                        </template>

                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<style></style>