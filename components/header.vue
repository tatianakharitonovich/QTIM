<template>
  <header class="header">
    <div class="header-wrap">
      <Logo />
      <div class="header-content">
        <nav class="header-links">
          <NuxtLink
            v-for="link in links"
            :key="link.title"
            :to="link.path"
            class="header-link"
          >
            {{ link.title }}
          </NuxtLink>
        </nav>
        <div class="header-buttons">
          <LanguageToggle />
          <button class="header-button">
            Let’s work
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const links: HeaderLinks[] = [
  {
    path: '/',
    title: 'Works',
  },
  {
    path: '/',
    title: 'About',
  },
]
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  max-width: 87rem;
  margin-left: auto;
  margin-right: auto;
  padding: 2.125rem 1rem;

  &-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-content {
    display: flex;
    justify-content: space-between;
    gap: 5.625rem;
  }

  &-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3.625rem;
  }

  &-link {
    font-size: 1.25rem;
    line-height: 1;
  }

  &-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

  }

  &-button {
    padding: 1rem 2rem;
    color: var(--main-bg-color);
    font-size: 1.25rem;
    line-height: 1;
    background-color: var(--main-color);
    border-radius: 1.625rem;
  }
}
</style>
