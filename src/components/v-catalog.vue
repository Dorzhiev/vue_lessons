<template>
    <div class='v-catalog'>
        <h1>Catalog</h1>
        <!--ребенок-->
        <div class="catalog__list">
            <v-catalog-item 
                v-for="product in this.$store.state.products"
                :key="product.article"
                :product_data="product"
                @addToCart="addToCart"
            />
            <!--/ребенок-->
        </div>
    </div>
</template>

<script>
    import vCatalogItem from './v-catalog-item'
    import {mapActions} from 'vuex'

    export default {
        name: "v-catalog",
        components: {
           vCatalogItem
        },
        props: {},
        data() {
            return {
                
            }
        },
        computed: {},
        methods: {
            ...mapActions([
              'GET_PRODUCTS_FROM_API',
              'ADD_TO_CART'
            ]),
            addToCart(data) {
                this.ADD_TO_CART(data) 
            }
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
            .then((response) => {
                if (response.data) {
                    console.log('Data arrived');
                }
            })
        },
    }
</script>

<style lang="scss">
.v-catalog {
    .catalog__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
}
</style>