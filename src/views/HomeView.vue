<script setup>
import HomeContent from '@/components/organisms/HomeContent.vue'
</script>

<template>
  <main>
    <HomeContent />
  </main>
</template>

<style scoped lang="scss">
@import '@/styles/breakpoints';

main {
  height: 100%;
  @media (min-width: $desktop) {
    height: calc(100vh - 4rem);
  }
}
</style>
