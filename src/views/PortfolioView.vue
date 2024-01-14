<template>
  <main>
    <PortfolioContent />
  </main>
</template>

<script setup>
import PortfolioContent from '@/components/organisms/PortfolioContent.vue'
</script>

<style scoped lang="scss">
@import '@/styles/breakpoints';

main {
  height: 100%;
  @media (min-width: $desktop) {
    height: calc(100vh - 4rem);
  }
}
</style>
