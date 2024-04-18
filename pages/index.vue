<template>
  <div class="container">
    <div v-if="pending">
      <h3>Loarding...</h3>
    </div>
    <div v-else-if="error">
      <h3>Error code {{ error.statusCode }}</h3>
      <h3>Error message {{ error.message }}</h3>
    </div>
    <div v-else-if="posts">
      <PostsList :list="posts" />
    </div>
    <div v-else>
      <h3>There is no data</h3>      
    </div>
  </div>
</template>

<script setup lang="ts">

const {pending, data: posts, error } = await useFetch<IPost[]>(
  'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/',
  {
    lazy: false,
    server:false,
  }
)
</script>
