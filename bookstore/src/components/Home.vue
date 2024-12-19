<template>
  <section class="bg-pink-200 text-center py-12">
    <h2 class="text-4xl font-bold">
      Welcome to My Bookstore
    </h2>
    <p class="text-xl mt-4">
      Find your next favorite book today
    </p>
  </section>
</template>

<script setup>
const addBook = (newBook) => {
  books.value = [...books.value, newBook] // Replace the array to trigger reactivity
  applyFilter()
}

</script>

  <style scoped></style>
