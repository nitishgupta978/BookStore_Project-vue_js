<template>
  <div>
    <v-row
     v-for="BookInfos in cartData" :key="BookInfos.bookId"
    >
      <HorizontalProducts
        :BookInfos="BookInfos"
        btnAction="remove"
      />
    </v-row>
  </div>
</template>

<script>
import CartService from '@/service/CartService';
import HorizontalProduct from '../cards/HorizontalProducts.vue'
export default {
  components: {
    HorizontalProduct
  },
  data: () => {
    return {
     
      cartData: [],
      count: 0,
   
      
    };
  },
methods : {
 addtoCart (){
 CartService.getAllCart().then((response) =>{
 console.log(response.data.data);
 this.cartData = response.data.data;
 });
 }

},
created () {
  this. addtoCart()
}
}
</script>
