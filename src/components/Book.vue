<template>
   <div>
    
    <Header/>
    
      <div>
        
   <!-- <v-img src="../assets/Image 11.png">

   </v-img > -->

   <v-sheet
    :height="sheetHeight"
  >
    <v-container class="fill-height">
      <v-row
        align="center"
        justify="center"
      >
       <h1 class="text-center display-3 hidden-xs-only">
          Welcome to Awesome Shop!
        </h1>
        <h1 class="text-center display-1 hidden-sm-and-up">
          Welcome to Awesome Shop!
        </h1>
      </v-row>
    </v-container>
  </v-sheet>

      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="30"
          indeterminate
        ></v-progress-linear>
      </template>
        <!-- <v-card-title>Product ({{ count }}Items)</v-card-title> -->
        <v-card-title>Popular Books <v-btn to="store" color="primary" small text>( View All )</v-btn> </v-card-title>

      
        <v-text ></v-text>
          
      </div>
     <v-container fluid class="card">
        <v-row >
          <!-- <v-col sm="10" offset-sm="1" lg="8" offset-lg="2"> -->
            <v-col cols="3"  v-for="BookInfos in BookInfo.slice(0,3)" :key="BookInfos.bookId">
           
              <VerticalCards :BookInfos="BookInfos" 
               btnAction="addtoCart"
               />
           
            </v-col>
            <!-- </v-col> -->
            </v-row>
            </v-container>    
  </div>
   
</template>

<script>
import BookStoreService from '../service/BookStoreService';
import CartService from '@/service/CartService';
import Header from './Header.vue';
import Footer from '../components/Footer.vue'

import VerticalCards from './cards/VerticalCards.vue';
export default {
  name: "Book",
   components: {
    Header,
    Footer,
    VerticalCards
},
  data: () => {
    return {
      // formValues: {
      //    userId: "",
      //    bookId: "",
      //    quantity: "",
      //    totalPrice: "",
      // },
      BookInfo: [],
      count: 0,
   
      
    };
  },
   computed: {
    sheetHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '200px'
        case 'sm': return '300px'
        case 'md': return '300px'
        case 'lg': return '300px'
        case 'xl': return '350px'
      }
      return '300px'
    }
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
      "userId":1,
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