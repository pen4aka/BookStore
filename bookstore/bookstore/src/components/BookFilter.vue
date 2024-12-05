<template>
  <div class="book-filter">
    <h2>Filter Books</h2>
    <input
      v-model="filterText"
      type="text"
      placeholder="Search by name"
      @input="updateFilter"
    >
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['filter-books'])
const filterText = ref('')

const updateFilter = () => {
  emit('filter-books', filterText.value)
}
</script>

  <style scoped>
  .book-filter {
    margin: 20px;
  }
  </style>
