<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <nav class="NavBar">
    <RouterLink to="/"><h1>ENXING SHYU</h1></RouterLink>
    <RouterLink to="/contact">Contact me</RouterLink>
  </nav>
</template>

<style scoped lang="scss">
.NavBar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  padding-bottom: 0.5rem;
  position: sticky;
  border-bottom: 1px solid rgba(182, 182, 182, 0.7);
}
</style>
