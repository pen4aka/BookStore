<template>
  <div>
    <header>
      <h1>Bookstore Manager</h1>
    </header>
    <AddBook @add-book="addBook" />
    <BookFilter @filter-books="filterBooks" />
    <BookList
      :books="filteredBooks"
      @delete-book="deleteBook"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AddBook from './components/AddBook.vue'
import BookFilter from './components/BookFilter.vue'
import BookList from './components/BookList.vue'

const books = ref([
  { id: 1, name: 'The Great Gatsby', image: 'https://via.placeholder.com/150', description: 'A classic novel' },
  { id: 2, name: '1984', image: 'https://via.placeholder.com/150', description: 'A dystopian masterpiece' }
])

const filterText = ref('')
const filteredBooks = ref(books.value)

const addBook = (newBook) => {
  books.value.push({ ...newBook, id: Date.now() })
  applyFilter()
}

const deleteBook = (bookId) => {
  books.value = books.value.filter((book) => book.id !== bookId)
  applyFilter()
}

const filterBooks = (text) => {
  filterText.value = text
  applyFilter()
}

const applyFilter = () => {
  filteredBooks.value = books.value.filter((book) =>
    book.name.toLowerCase().includes(filterText.value.toLowerCase())
  )
}
</script>

<style>
header {
  text-align: center;
  padding: 20px;
  background-color: #f4f4f4;
}
</style>
