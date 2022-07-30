import axios from 'axios'

const BookStore_BASED_API_url = 'http://localhost:8094/BookStore'

class BookStoreService {

  getBookStoreAll() {
        return axios.get(`${BookStore_BASED_API_url}/getAll`);
      }
    
      createBookStore() {
        return axios.get(`${BookStore_BASED_API_url}/register`);
      }
    
    
    }
    export default new BookStoreService(); 
