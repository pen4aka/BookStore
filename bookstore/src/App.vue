<template>
  <div>
    <div>
      <header class="header">
        <h1 class="title">
          BOOKSTORE
        </h1>
      </header>
    </div>
    <main>
      <!-- Toggle View Button -->
      <div class="text-center my-4">
        <button
          class="cta-button"
          @click="toggleAddBook"
        >
          {{ isAddingBook ? 'Go Back to Book List' : 'Add a New Book' }}
        </button>
      </div>

      <!-- Conditional Rendering -->
      <section
        v-if="isAddingBook"
        class="form-section"
      >
        <AddBook @add-book="addBook" />
      </section>
      <section v-else>
        <div class="bg-pink-200 text-center py-12">
          <p class="text-xl mt-4">
            Find your next favorite book today
          </p>
        </div>
        <BookFilter @filter-books="filterBooks" />
        <BookList
          :books="filteredBooks"
          @delete-book="deleteBook"
        />
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BookFilter from './components/BookFilter.vue'
import AddBook from './components/AddBook.vue'
import BookList from './components/BookList.vue'

const books = ref([]) // Start with an empty array
const filterText = ref('')
const filteredBooks = ref([])
const isAddingBook = ref(false) // State to toggle between views

// Save books to LocalStorage
const saveBooksToLocalStorage = () => {
  localStorage.setItem('books', JSON.stringify(books.value))
}

// Load books from LocalStorage
const loadBooksFromLocalStorage = () => {
  const storedBooks = localStorage.getItem('books')
  if (storedBooks) {
    books.value = JSON.parse(storedBooks)
  }
}

// Lifecycle hook: Load books on app mount
onMounted(() => {
  loadBooksFromLocalStorage()
  applyFilter() // Apply the filter after loading
})

// Add a book and save to LocalStorage
const addBook = (newBook) => {
  books.value.push(newBook) // Add new book to the array
  saveBooksToLocalStorage() // Save updated array to LocalStorage
  applyFilter()
}

// Delete a book and save to LocalStorage
const deleteBook = (bookId) => {
  books.value = books.value.filter((book) => book.id !== bookId)
  saveBooksToLocalStorage() // Save updated array to LocalStorage
  applyFilter()
}

// Filter books based on input text
const filterBooks = (text) => {
  filterText.value = text
  applyFilter()
}

// Apply filter logic
const applyFilter = () => {
  filteredBooks.value = books.value.filter((book) =>
    book.name.toLowerCase().includes(filterText.value.toLowerCase())
  )
}

// Toggle between AddBook and BookList views
const toggleAddBook = () => {
  isAddingBook.value = !isAddingBook.value
}
</script>

<style>
.header {
  background-color: #87ceeb; /* Sky blue background */
  text-align: center; /* Center text horizontally */
  padding: 20px 0; /* Add padding for spacing */
}

.title {
  font-size: 3rem; /* Large text */
  font-weight: bold; /* Bold font */
  color: white; /* White text color for contrast */
  margin: 0; /* Remove default margin */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Center the Add Book button below the title */
.cta-button {
  margin-top: 20px; /* Space below the title */
  padding: 10px 20px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.cta-button:hover {
  background-color: #1d4ed8;
}

.bg-pink-200 {
  display: flex;
  justify-content: flex-end; /* Align everything to the right */
  align-items: center; /* Center vertically */
  padding: 20px;
  gap: 10px;
}

.bg-pink-200 p {
  margin: 0;
  font-size: 1.25rem;
  font-weight: bold;
}

.search-bar {
  display: flex;
  gap: 10px; /* Space between the search input and button */
}

.search-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
}

.search-button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.search-button:hover {
  background-color: #0056b3;
}

/* Styling for conditional sections */
.form-section {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
</style>
