<template>
  <div class="form">
    <h2 class="text-xl font-bold mb-4">
      Add a New Book
    </h2>
    <form @submit.prevent="submitForm">
      <label>Name:</label>
      <input
        v-model="newBook.name"
        type="text"
        required
      >
      <label>Image URL:</label>
      <input
        v-model="newBook.image"
        type="url"
        required
      >
      <label>Author Name:</label>
      <input
        v-model="newBook.author"
        type="text"
        required
      >
      <label>Price:</label>
      <input
        v-model="newBook.price"
        type="number"
        min="0"
        step="0.01"
        required
      >
      <button type="submit">
        Add Book
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive, defineEmits } from 'vue'

const emit = defineEmits(['add-book'])

const newBook = reactive({
  name: '',
  image: '',
  author: '',
  price: ''
})

const submitForm = () => {
  if (!newBook.name || !newBook.image || !newBook.author || !newBook.price) {
    alert('All fields are required!')
    return
  }
  emit('add-book', { ...newBook })
  // Reset the form fields
  newBook.name = ''
  newBook.image = ''
  newBook.author = ''
  newBook.price = ''
}
</script>

<style>
/* Reuse the .form styles from main.css */
</style>
