<template>
  <header>
    <NavBar v-if="deviceType === 'Desktop'" />
    <MobileNavBar v-if="deviceType !== 'Desktop'" />
  </header>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import { onMounted, onBeforeUnmount, ref } from 'vue'
import NavBar from './components/organisms/NavBar.vue'
import MobileNavBar from './components/organisms/MobileNavBar.vue'

const deviceType = ref('Desktop') // Default to Desktop
const isMenuOpen = ref(false)

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside)
})

onMounted(() => {
  checkDeviceType()
  window.addEventListener('resize', checkDeviceType)
  window.addEventListener('click', handleClickOutside)
})

const checkDeviceType = () => {
  if (window.innerWidth <= 768) {
    deviceType.value = 'Mobile'
  } else {
    deviceType.value = 'Desktop'
  }
}

const closeMobileMenu = () => {
  console.log('close')
}

const handleClickOutside = (event) => {
  console.log('---handleClickOutside')
  const mobileNavBar = document.querySelector('.MobileNavBar')

  if (isMenuOpen.value && mobileNavBar && !mobileNavBar.contains(event.target)) {
    closeMobileMenu()
  }
}
</script>
