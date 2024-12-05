<template>
  <div class="add-book">
    <h2>Add a New Book</h2>
    <form @submit.prevent="submitForm">
      <label>
        Name:
        <input
          v-model="newBook.name"
          type="text"
          required
        >
      </label>
      <label>
        Image URL:
        <input
          v-model="newBook.image"
          type="url"
          required
        >
      </label>
      <label>
        Description:
        <textarea
          v-model="newBook.description"
          required
        />
      </label>
      <button type="submit">
        Add Book
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['add-book'])
const newBook = reactive({
  name: '',
  image: '',
  description: ''
})

const submitForm = () => {
  emit('add-book', { ...newBook })
  newBook.name = ''
  newBook.image = ''
  newBook.description = ''
}
</script>

  <style scoped>
  .add-book {
    margin: 20px;
  }
  </style>
