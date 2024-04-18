<template>
  <div class="container">
    <div v-if="pending">
      <h3>Loarding...</h3>
    </div>
    <div v-else class="post">
      <h2 class="post-title">{{ post.title }}</h2>
      <!-- The link to the image received from end point is not working. For clarity, replaced with random. -->
      <img class="post-img" src="https://penzavzglyad.ru/images/uploads/3047eadcf251c084f8237eda93395e72.jpg" alt="post-img">
      <div class="post-desc">
        <p class="post-subtitle">About</p>
        <p class="post-text">{{ post.description }}</p>
      </div>
    </div>
  </div>  
</template>

<script setup lang="ts">
const route = useRoute();
const {pending, data: post } = await useFetch<IPost>(
  `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${route.params.id}`,
  {
    lazy: false,
    server:false,
  }
)
</script>

<style lang="scss" scoped>
.post {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 7.5rem 0 5rem;

  &-title {
    line-height: 1;
  }

  &-img {
    max-height: 43.75rem;
    object-fit: cover;
    object-position: center;
  }

  &-desc {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 43.5rem;
  }

  &-subtitle {
    line-height: 1;
  }

  &-text {
    font-size: 2.25rem;
    line-height: 1.24;

  }
}
</style>
