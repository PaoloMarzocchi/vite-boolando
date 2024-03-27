<script>

export default {
    name: 'ProductCard',
    emits: ['show-product'],
    props: {
        product: Object,
    },
    data() {
        return {
            productObj: {},
        }
    },
    methods: {
        calcDiscountedPrice(fullPrice, discount) {
            const discountedPrice = (fullPrice - ((fullPrice * discount) / 100)).toFixed(2);
            this.productObj.discountedPrice = discountedPrice;
            return discountedPrice;
        },
        showProduct(objProduct) {
            this.productObj = objProduct;
            this.$emit('show-product', this.productObj);
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
                    <li @click="showProduct(product)">
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