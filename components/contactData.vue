<template>
  <div class="contact">
    <p>{{ title }}</p>
    <div class="contact-info">
      <a v-if="tel" :href="`tel:${tel}`">{{ tel }}</a>
      <p v-if="address">{{ address }}</p>
      <a v-if="email" :href="`mailto:${email}`">{{ email }}</a>
      <a v-if="loco" href="/" class="contact-loco">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="16" fill="#101010"/>
          <path d="M17.5 20.5L20.5 11.5L11.5 14.5L15.25 16.75L17.5 20.5Z" stroke="#E2BEFF" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
  </div>
  
</template>

<script setup lang="ts">

const props = defineProps<{
  title: string;
  tel?: string;
  address?: string;
  email?: string;
  loco?: boolean;
}>();

</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  &-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  &-loco {
    height: 2rem;
    margin-top: 0.25rem;
  }
}
</style>
