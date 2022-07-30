<template>
  <!-- <h1>Welcome to Book Store !</h1> -->
   <div>
    <Header/>
      <div>
        
   <!-- <v-img src="../assets/Image 11.png">

   </v-img > -->
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="30"
          indeterminate
        ></v-progress-linear>
      </template>
        <!-- <v-card-title>Product ({{ count }}Items)</v-card-title> -->
        <v-card-title>Books Store</v-card-title>
      </div>
     <v-container fluid class="card">
        <v-row >
            <v-col cols="3"  v-for="BookInfos in BookInfo" :key="BookInfos.bookId">
           <v-card width="75%">
           <v-layout align-center
              >
              <v-img class="mx-auto"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                 lazy-src="`../assets/${BookInfos.bookLogo}`"
                 max-height="300"
                 max-width="200"
                :src="`../assets/${BookInfos.bookLogo}`"
                 
              />    
              </v-layout>
             
              <v-card-title v-text="BookInfos.bookName"></v-card-title>
              <v-card-text>
                <div class="my-4 text-subtitle-1">
                  by {{ BookInfos.bookAuthor}}
                </div>
                <v-card-title>Price:Rs{{ BookInfos.bookPrice }}</v-card-title>
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
            </v-col>
            </v-row>
            </v-container>    
  </div>
   
</template>

<script>
import BookStoreService from '../service/BookStoreService';
import CartService from '@/service/CartService';
import Header from './Header.vue';

export default {
  name: "Book",
   components: {
    
    Header
  },
  data: () => {
    return {
      formValues: {
         userId: "",
         bookId: "",
         quantity: "",
         totalPrice: "",
      },
      BookInfo: [],
      count: 0,
   
      
    };
  },
methods: {
    getBooks() {
      BookStoreService.getBookStoreAll().then((response) => {
        console.log(response.data.data);
        this.BookInfo = response.data.data;
      });
    },
    insertBooks() {
      BookStoreService.createBookStore().then((response) => {
        console.log(response.data.data);
        this.BookInfo = response.data.data;
      });
    },  
    addtoCart(bookId,price){
    let CartDto= {
      "userId":7,
      "bookId":bookId,
      "quantity":1,
      "totalPrice" :price
    }
    CartService.addCart(CartDto).then((response) =>{
      console.log(response.data.data);
      // this.BookInfo = response.data.data;
    });
}
},
  created() {
    this.getBooks();
   
   }

}
</script>