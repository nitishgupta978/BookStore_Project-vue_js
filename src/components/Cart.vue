<template>
  <v-container>
    <v-row>
      <v-col sm="8" md="5" offset-md="2" lg="4" offset-lg="3">
        <ProductList />
      </v-col>
      <v-col sm="4" md="3" order="first" order-sm="last">
        <CheckoutBox />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import ProductList from '../components/Cart/ProductList.vue'
import CheckoutBox from '../components/Cart/CheckBox.vue'
import HorizontalProducts from './cards/HorizontalProducts.vue'
 export default  {
  components: {
    ProductList,
    CheckoutBox,
    HorizontalProducts
  }
}
</script>




<!-- <template>
<div>
  <Header/>
     <section v-if="count > 0"  justify="center">
      <v-expansion-panels v-model="panel" :disabled="disabled" multiple>
        <v-expansion-panel>
          <h2 class="ml-10 mt-5">Your Cart</h2>
     
            <v-simple-table class="ml-15">
              <template v-slot:default>
                <thead>
                  <tr>
                      <th class="text-left"></th>
                     <th class="text-left">Product</th>
                    <th class="text-left">Price</th>
                    <th class="text-left">Quantity</th>
                    <th class="text-left">Total</th>
                    <th class="text-left">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="BookInfos in BookInfo" :key="BookInfos">
                  <div class="d-flex">
                    <td class="d-flex flex-column justify-center">
                  <v-img 
                 height="100px"
                 width="100px"
                :src="`../assets/${BookInfos.book.bookImage}`" 
              /> 
              </td>
              </div>
                 
                  <td> {{ BookInfos.book.bookName }}</td>
                    <td>{{ BookInfos.book.bookPrice }}</td>
                    
                    <td>
                      <v-btn
                      :disabled="BookInfos.quantity===1"
                        small
                        @click="
                          decrement(
                            BookInfos.cartId,
                            BookInfos.quantity,
                            BookInfos.book.bookPrice
                          )
                        "
                      >
                        <v-icon>mdi-minus</v-icon>
                      </v-btn>
                      {{ BookInfos.bookQuantity }}
                      <v-btn
                        small
                        @click="
                          increment(
                            BookInfos.cartId,
                            BookInfos.bookQuantity,
                            BookInfos.book.bookPrice
                          )
                        "
                      >
                        <v-icon> mdi-plus</v-icon>
                      </v-btn>
                    </td>
                    <td>{{ BookInfos.book.bookPrice* BookInfos.bookQuantity }}</td>
                    <td>
                      <button
                        class="delete-product"
                        @click="Remove(BookInfos.cartId)"
                      >
                        x
                      </button>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
         </v-expansion-panel>  
        <CustomerDetail/>
         <v-expansion-panel class="ml-16 mr-10 mx-auto mt-5"> 
          <v-expansion-panel-header>OrderSummery</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card class="mx-auto" max-width="944" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">Order</div>
                  <div
                    class="col-md-4"
                    v-for="BookInfos in CartData"
                    :key="BookInfos"
                  >
                    <div class="total">
                      <div class="caption">
                          <p><v-img
                 max-height="100"
                 max-width="100"
                :src="`../assets/${BookInfos.book.bookImage}`" 
              /> </p>
                        <p>
                          <strong
                            >BookName:{{ BookInfos.book.bookName }}</strong
                          >
                        </p>
                      
                        <p>authorName:{{ BookInfos.book.bookAuthor }}</p>
                        <p class="golden">Price:RS{{ BookInfos.book.bookPrice*BookInfos.bookQuantity}}</p>
                      </div>
                    </div>
                  </div>
                  <v-card-actions>
                    Subtotal:{{ BookInfo.total }}
                  </v-card-actions>

                  <v-list-item-subtitle class="px-2"
                    >Shipping:FreeShipping</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <hr />
              <v-list-item-title class="text-h5 mb-1 px-6">
                Total:{{ BookInfo.total }}
              </v-list-item-title>
                  <router-link to="/Order"><v-btn class="px-6"
                color="#a03037"
                text
                type="Submit"
                @click="addToOrder(BookInfo.total)"
              >
                PLACEORDER
              </v-btn>
               </router-link>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
         
        </v-expansion-panels>
        </section>
         <section  v-else>
       <v-card
    class="mx-auto"
    max-width="344"
   
  >
  
<v-row
    align="center"
     justify="center"
  >
   <v-col
          cols="20"
        >
    <v-card-text>
 
      <h2 color="#a03037" >Your Card</h2>
     
      <v-icon x-large   >mdi-cart-off</v-icon>
     
      <div class="text--primary">
      Your cart is empty, fill it up!
      </div>
     
    </v-card-text>
   </v-col>
     </v-row>
    <v-card-actions>
       <router-link to="/">
        <v-btn color="#a03037"> BackToHome </v-btn></router-link
      >
      
    </v-card-actions>
  
      </v-card>
    </section>
       
        </div>
        </template>

        <script>
        import Header from '../components/Header.vue'
        import CartService from '@/service/CartService'
        export default {
        name: "Cart",
        components : {
        Header,
            },
        }
        </script>-- -->