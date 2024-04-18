<template>
  <div class="post-card">
    <!-- The link to the image received from end point is not working. For clarity, replaced with random. -->
    <img class="post-card-img" src="https://penzavzglyad.ru/images/uploads/3047eadcf251c084f8237eda93395e72.jpg" alt="post-img">
    <div class="post-card-text">
      <p>
        {{ preview }}
      </p>
    </div>
    <NuxtLink
      :to="`/post/${id}`"
      class="post-card-link"
    >
      Read more
    </NuxtLink>
  </div>
  
</template>

<script setup lang="ts">

const props = defineProps<{
  id: string;
  img: string;
  preview: string;
}>();

</script>

<style lang="scss" scoped>
.post-card {
  min-height: 25.875rem;

  &-img {
    min-height: 17.5rem;
    object-fit: cover;
    object-position: center;
  }

  &-text {
    font-size: 1.25rem;
    min-height: 4.625rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    margin: 1.5rem 0 0.75rem;    
  }

  &-link {
    font-size: 1.25rem;
    color: var(--footer-bg-color);
  }
}
</style>
