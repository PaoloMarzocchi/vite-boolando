<script>
import { state } from '../state.js'
export default {
    name: "ModalProduct",
    props: {
        product: Object,
    },
    data() {
        return {
            state,
        }
    }
}
</script>


<template>
    <div id="modal" v-if="state.modalToggle">
        <div id="modal-box">
            <button id="modal-close" @click="state.modalToggle = !state.modalToggle">
                <i class="fa-solid fa-xmark" style="color: #000000;"></i> </button>
            <div class="d-flex">
                <div class="img-container">
                    <img :src="product.frontImg" alt="">
                    <img :src="product.backImg" alt="">
                </div>
                <ul>

                    <li>
                        Brand:
                        <h4>
                            {{ product.brand }}
                        </h4>
                    </li>
                    <li>
                        Modello:
                        <h4>
                            {{ product.type }}
                        </h4>
                    </li>
                    <li>
                        Prezzo Intero:
                        <h4>
                            {{ product.fullPrice }} €
                        </h4>
                    </li>
                    <template v-if="product.discount">

                        <li>
                            Sconto:
                            <h4 class="discount">
                                {{ product.discount }} %
                            </h4>
                        </li>
                        <li>
                            Prezzo scontato:
                            <h4 class="discount">
                                {{ product.discountedPrice }} €
                            </h4>
                        </li>

                    </template>

                    <li v-show="product.eco" id="eco">
                        <h4>
                            Prodotto eco-sostenibile
                        </h4>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>



<style scoped></style>
