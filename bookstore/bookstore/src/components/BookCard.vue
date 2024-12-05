<template>
  <div class="book-card">
    <img
      :src="book.image"
      :alt="book.name"
    >
    <h3>{{ book.name }}</h3>
    <p>{{ book.description }}</p>
    <button @click="deleteBook">
      Delete
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  book: Object
})

const emit = defineEmits(['delete-book'])

const deleteBook = () => {
  emit('delete-book', props.book.id)
}
</script>

  <style scoped>
  .book-card {
    border: 1px solid #ddd;
    padding: 15px;
    width: 200px;
    text-align: center;
    background: #fff;
  }
  .book-card img {
    max-width: 100%;
    height: auto;
  }
  </style>
