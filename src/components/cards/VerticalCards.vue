<template>

<v-card width="75%">
           <v-layout align-center
              >
              <v-img class="mx-auto"
               
                 max-height="300"
                 max-width="200"
                :src="BookInfos.bookLogo"
                 
              />    
              </v-layout>
             
              <v-card-title v-text="BookInfos.bookName"></v-card-title>
              <v-card-text>
                <div class="my-4 text-subtitle-1">
                  by {{ BookInfos.bookAuthor}}
                </div>
                <v-card-title>Price:Rs {{ BookInfos.bookPrice }}</v-card-title>
              </v-card-text>

              <v-row align="center" justify="space-around">
               <v-btn class="ml-4 mb-4"  
                  color="#a03037"
                  depressed
                  elevation="2"
                  x-small
                  height="40px"
                  @click="addtoCart(BookInfos.bookId, BookInfos.bookPrice)"
                >
                  <v-icon>mdi-cart</v-icon>Add To Cart
                </v-btn>
                <v-btn elevation="2" x-small text class="ml-4 mr-4 mb-4" height="40px">
                  <v-icon>mdi-cards-heart-outline</v-icon>WhishList</v-btn
                >
              </v-row>
            </v-card>
</template>

<script>
import CartService from '@/service/CartService';
export default {
  name: "VerticalCards",
  props:{
    BookInfos:Object,

  },
  methods:{
     addtoCart(bookId,price){
    let CartDto= {
      "userId":6,
      "bookId":bookId,
      "quantity":1,
      "totalPrice" :price
    }
    CartService.addCart(CartDto).then((response) =>{
      console.log(response.data.data);
      // this.BookInfo = response.data.data;
    });
    
  
  }
  }
  
}
</script>