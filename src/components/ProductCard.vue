<script>
export default {
    name: 'ProductCard',
    props: {
        product: Object
    },
    methods: {
        calcDiscountedPrice(fullPrice, discount) {
            const discountedPrice = fullPrice - ((fullPrice * discount) / 100);
            return discountedPrice.toFixed(2);
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="card">
            <div class="card-top">
                <img :src="product.frontImg" class="front-img max-width" alt="">
                <img :src="product.backImg" class=" back-img max-width" alt="">
                <div class="badge discount" v-if="product.discount">-{{ product.discount }}%</div>
                <div class="badge eco" :class="product.discount ? '' : 'position-left'" v-if="product.eco">{{
                    product.eco }}
                </div>
                <i class="fa-solid fa-heart"></i>
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
                            <span class="discount-price">{{ calcDiscountedPrice(product.fullPrice, product.discount) }}
                                €</span>
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