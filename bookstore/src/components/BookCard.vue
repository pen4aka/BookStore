<template>
  <div class="book-card">
    <img
      :src="book.image"
      :alt="book.name"
    >
    <div class="book-card-content">
      <h3 class="book-card-title">
        {{ book.name }}
      </h3>
      <p class="book-card-author">
        {{ book.author || 'Author Name' }}
      </p>
      <p class="book-card-price">
        ${{ book.price || '15.99' }}
      </p>
      <button @click="deleteBook">
        Delete
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({ book: Object })
const emit = defineEmits(['delete-book'])

const deleteBook = () => {
  emit('delete-book', props.book.id)
}
</script>
