<template>
    <div class="posts-list">
      <h2 class="posts-list-title">Articles</h2>
      <div class="posts-list-content">
        <PostCard
          v-for="post in displayList"
          :key="post.id"
          :id="post.id"
          :img="post.image"
          :preview="post.preview"
        />
      </div>      
      <div class="posts-list-pagination">
        <Pagination
          :totalItems="list.length"
          :itemsPerPage="perPage"
          @change="refreshCurrentPage"
        />
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  list: IPost[];
}>();

const currentPage = ref(1);
const perPage = 8;

function refreshCurrentPage(pageNumber: number): void {
  currentPage.value = pageNumber
}

const displayList = computed(() =>
  props.list.slice((currentPage.value - 1) * perPage, currentPage.value * perPage)
);

</script>

<style lang="scss" scoped>
.posts-list {
  padding: 7.5rem 0 8.75rem;

  &-title {
    margin-bottom: 2.5rem;
  }

  &-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 2rem;
    row-gap: 3.75rem;
  }

  &-pagination {
    margin-top: 3.125rem;
  }
}
</style>
