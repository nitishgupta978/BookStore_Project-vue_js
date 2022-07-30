<template>
   <div>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <router-link to="/"
          ><v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="../assets/education.png"
            transition="scale-transition"
            width="40"
        /></router-link>

        <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" />

        <h1>BookStore</h1>
      </div>
      <v-spacer></v-spacer>
      
      <span class=" hidden-sm-and-up">
        <v-btn @click.stop="drawer = !drawer">Menu</v-btn>
      </span>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn to="/" text>
          <v-icon small left>mdi-home</v-icon>
          Home
        </v-btn>

      <v-btn to="store" text>
          <v-icon small left>mdi-shopping</v-icon>
        Store
        </v-btn>

        <v-btn to="cart" text>
          <v-icon small left>mdi-cart</v-icon>
          Cart
        </v-btn>

      </v-toolbar-items>

    </v-app-bar>

    <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
    right 
    >
    <v-list>
      <v-list-item 
      v-for="item in Items"
      :key="item.titel"
      :to="item.link"
      link
      >
      <v-list-item-icon>
        <v-icon small>fa-{{ item.icon }} </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-titel>{{ item.titel}}</v-list-item-titel>
        </v-list-item-content>
        

        </v-list-item>
      </v-list>

    </v-navigation-drawer>
   </div>
    
</template>

<script>
// import { component } from 'vue/types/umd';

export default {
  
  // data() {
  //   return {
  //     drawer: false,
  //     items: [
  //       { title: 'Home', link: '/', icon: 'mdi-home' },
  //       { title: 'Store', link: '/store', icon: 'mdi-shopping' },
  //       { title: 'Cart', link: '/cart', icon: 'mdi-cart' }
  //     ]
  //   }
  // }
}
</script>