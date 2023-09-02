<template>
  <nav class="NavBar" role="navigation">
    <RouterLink to="/"><h1>ENXING SHYU</h1></RouterLink>
    <div class="NavBar__menu">
      <RouterLink to="/al-natural">Al natural</RouterLink>
      <RouterLink to="/performance">Performance</RouterLink>
      <RouterLink to="/spots">Spots</RouterLink>
      <RouterLink to="/sobre-mi">Sobre mí</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="scss">
@import '@/styles/breakpoints.scss';
@import '@/styles/colors.scss';

.NavBar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  padding-bottom: 0.5rem;
  position: sticky;
  border-bottom: 1px solid rgba(182, 182, 182, 0.7);
  letter-spacing: 1px;
  z-index: 100;
  background-color: $color__dark;

  @media (min-width: $desktop) {
    flex-direction: row;
  }

  &__menu {
    a {
      padding-left: 2rem;
    }

    a:first-of-type {
      padding-left: 0;
    }
  }
}
</style>
