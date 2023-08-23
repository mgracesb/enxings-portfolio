<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/organisms/NavBar.vue'
</script>

<template>
  <header>
    <div>
      <NavBar />
    </div>
  </header>
  <RouterView />
</template>
