import axios from "axios";
const Cart_BASE_URL = 'http://localhost:8094/cart';

class CartService {

    addCart(data) {
        return axios.post(`${Cart_BASE_URL}/create`, data)
      }
      deleteContact(cartId) {
        return axios.delete(`${Cart_BASE_URL}/delete/${cartId}`);
      }
      getAllCart() {
        return axios.get(`${Cart_BASE_URL}/getAll`);
      }
      getCart(cartId) {
        return axios.get(`${Cart_BASE_URL}/getCartById/${cartId}`);
      }
      updateQuantity(cartId, quantity,totalPrice) {
        return axios.put(`${Cart_BASE_URL}/UpdateQuantityPrice/{Id}/${cartId}/${quantity}/${totalPrice}`);
      }
     
    }
export default new CartService();