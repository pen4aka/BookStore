<template>
  <section class="container py-8">
    <h3 class="text-2xl font-bold text-center mb-8">
      Books
    </h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <BookCard
        v-for="book in books"
        :key="book.id"
        :book="book"
        @delete-book="deleteBook"
      />
    </div>
  </section>
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
