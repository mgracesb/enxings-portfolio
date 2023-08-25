<template>
  <div class="BookView">
    
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/breakpoints';

.BookView {
  height: calc(100vh - 4rem);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: $desktops) {
  .BookView {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
