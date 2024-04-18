<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-main">
          <h5>Is there a project?</h5>
          <h1 class="footer-title">Let’s work together</h1>
        </div>
        <div class="footer-contacts">
          <ContactData
            v-for="data in info"
            :key="data.title"
            :title="data.title"
            :tel="data.tel"
            :address="data.address"
            :email="data.email"
            :loco="data.loco"
          />
        </div>
      </div>
      <div class="footer-links">
        <nav class="footer-nav">
          <div class="footer-nav-part">
            <a 
              v-for="link in linksLeft"
              :key="link.title"
              :href="link.path"
              class="footer-link"
              target="_blank"
            >
              {{ link.title }}
            </a>
          </div>
          <div class="footer-nav-part">
            <a 
              v-for="link in linksRight"
              :key="link.title"
              :href="link.path"
              class="footer-link"
              target="_blank"
            >
              {{ link.title }}
            </a>

          </div>
        </nav>
        <button class="footer-button">
          Go
        </button>

      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const info: InfoData[] = [
  {
    title: 'For all questions',
    tel: '+7 (920) 278—00—68',
    email: 'qtim@agency.com',
  },
  {
    title: 'Office in Russia',
    address: '139 Ruben Station Lake Drew, NM 52678',
    loco: true,
  },
  {
    title: 'Office in Dubai',
    address: '139 Ruben Station Lake Drew, NM 52678',
    loco: true,
  }
]

const linksLeft: HeaderLinks[] = [
  {
    path: '/',
    title: 'Facebook',
  },
  {
    path: '/',
    title: 'Instagram',
  },
  {
    path: '/',
    title: 'Telegram',
  },
]

const linksRight: HeaderLinks[] = [
  {
    path: '/',
    title: 'Behance',
  },
  {
    path: '/',
    title: 'LinkedIn',
  },
  {
    path: '/',
    title: 'Privacy Policy',
  },
]
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--footer-bg-color);
  padding-top: 8.75rem;

  &-content {
    display: flex;
    align-items: flex-start;
    gap: 30%;
    margin-bottom: 17.125rem;
  }

  &-main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3.5rem;
  }

  &-title {
    line-height: 1;
    text-decoration-line: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 0.875rem;
  }

  &-contacts {
    display: flex;
    flex-direction: column;
    gap: 2.25em;
    padding-top: 4.75rem;
    padding-right: 18%;
  }

  &-links {    
    position: relative;
    display: flex;
    justify-content: space-between;
    padding-bottom: 1.875rem;
  }

  &-nav {    
    width: 100%;
    display: flex;
    justify-content: space-between;

    &-part {
      display: flex;
      gap: 2rem;
    }
  }

  &-link {
    border-bottom: 1px solid var(--main-color);
    transition: all 0.15s ease-in;

    &:hover {
      text-decoration: none;
      border-bottom: 1px solid var(--underline-color);
    }
  }
  
  &-button {
    position: absolute;
    bottom: 0;
    left:50%;
    transform: translateX(-50%);
    font-size: 2rem;
    line-height: 1;
    color: var(--main-bg-color);
    background-color: var(--main-color);
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    padding: 7.625rem 10rem 1.5rem;

    &:hover {
      background-color: var(--hover-bg-color);
    }
  }
}
</style>