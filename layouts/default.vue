<template>
  <div class="wrap">
    <Header />
    <main>
      <slot />
    </main>    
    <Footer />
  </div>  
</template>

<style lang="scss" scoped>
.wrap {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
</style>
