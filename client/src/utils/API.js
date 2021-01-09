import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyCZkCQu642ygxLFMmSPBK5g4CLfWWvneOM";


export default {
  // Search Google Books API
  search(query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  // Gets all books
  getBooks() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook(bookData) {
    return axios.post("/api/books", bookData);
  }
};
