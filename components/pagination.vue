<template>
  <VueAwesomePaginate
    :total-items="totalItems"
    :items-per-page="itemsPerPage"
    :max-pages-shown="5"
    v-model="currentPage"
    :on-click="onClickHandler"
    :show-breakpoint-buttons="false"
    :hide-prev-next-when-ends="true"
  >
    <template #prev-button>
      <span>
        <svg width="24" height="24" transform="rotate(180)" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 7.5L14.5 12.5L9.5 17.5" stroke="#494949" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </template>
    <template #next-button>
      <span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 7.5L14.5 12.5L9.5 17.5" stroke="#494949" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </template>
  </VueAwesomePaginate> 
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  totalItems: number;
  itemsPerPage: number;
}>();

const emit = defineEmits(['change']);

const currentPage = ref(1);

const onClickHandler = (page: number) => {
  emit('change', page)
  console.log(page);
};

</script>

<style lang="scss">
.pagination-container {
  display: flex;
  gap: 0.5rem;
}
.paginate-buttons {
  height: 2.75rem;
  width: 2.75rem;
  border-radius: 0.75rem;
  cursor: pointer;
  background-color: var(--second-bg-color);
  color: var(--main-color);
  font-size: 1rem;
}
.paginate-buttons:hover {
  background-color: var(--hover-second-bg-color);
}
.active-page {
  background-color: var(--main-color);
  color: var(--main-bg-color);
  border: none;
}
.active-page:hover {
  background-color: var(--hover-bg-color);
}

.next-button,
.back-button {
  background-color: transparent;
  border: 1px solid var(--hover-second-bg-color);
}
</style>

