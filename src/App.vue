<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import ProductCard from "./components/ProductCard.vue";
import AppFooter from "./components/AppFooter.vue";
import { state } from './state.js'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    ProductCard,
    AppFooter,
  },
  data() {
    return {
      //products,
      state,
      modalToggle: false,
      productSelected: {},
    }
  },
  methods: {
    showProducts(objProduct) {
      this.productSelected = objProduct;
      this.modalToggle = true;
      //console.log(this.productId);
    }
  },
  mounted() {
    this.state.callApiProducts(this.state.databaseUrl);
    console.log(this.state.products[0]);
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain>
    <ProductCard @show-product="showProducts" :product="product" :key="product.id"
      v-for="(product, index) in state.products">
    </ProductCard>
  </AppMain>
  <AppFooter></AppFooter>

  <div id="modal" v-if="modalToggle">
    <div id="modal-box">
      <button id="modal-close" @click="modalToggle = !modalToggle">
        <i class="fa-solid fa-xmark" style="color: #000000;"></i> </button>
      <ul>

        <li>
          Brand:
          <h4>
            {{ productSelected.brand }}
          </h4>
        </li>
        <li>
          Modello:
          <h4>
            {{ productSelected.type }}
          </h4>
        </li>
        <li>
          Prezzo Intero:
          <h4>
            {{ productSelected.fullPrice }} €
          </h4>
        </li>
        <template v-if="productSelected.discount">

          <li>
            Sconto:
            <h4>
              {{ productSelected.discount }} %
            </h4>
          </li>
          <li>
            Prezzo scontato:
            <h4>
              {{ productSelected.discountedPrice }} €
            </h4>
          </li>

        </template>

        <li v-show="productSelected.eco">
          <h4>
            Prodotto eco-sostenibile
          </h4>
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>
