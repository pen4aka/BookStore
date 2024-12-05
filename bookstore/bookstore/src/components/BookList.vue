<template>
  <div class="book-list">
    <BookCard
      v-for="book in books"
      :key="book.id"
      :book="book"
      @delete-book="deleteBook"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import BookCard from './BookCard.vue'

const props = defineProps({
  books: Array
})

const emit = defineEmits(['delete-book'])

const deleteBook = (bookId) => {
  emit('delete-book', bookId)
}
</script>

  <style scoped>
  .book-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  </style>
