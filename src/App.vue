<template>
  <header>
    <NavBar v-if="deviceType === 'Desktop'" />
    <MobileNavBar
      v-if="deviceType !== 'Desktop'"
      :isMenuOpen="isMenuOpen"
      @handle-menu="toggleMenu"
    />
  </header>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import { onMounted, onBeforeUnmount, ref, computed } from 'vue'
import NavBar from './components/organisms/NavBar.vue'
import MobileNavBar from './components/organisms/MobileNavBar.vue'

const deviceType = ref('Desktop') // Default to Desktop
const isMenuOpen = ref(false)

//text shadow
const getShadow = computed(() => {
  let shadow = ''
  for (let i = 0; i < 8; i++) {
    shadow += (shadow ? ',' : '') + -i * 1 + 'px ' + i * 1 + 'px 0 #d9d9d9'
  }
  return shadow
})

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

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMobileMenu = () => {
  isMenuOpen.value = false
}

const handleClickOutside = (event) => {
  const mobileNavBar = document.querySelector('.MobileNavBar')

  if (isMenuOpen.value && mobileNavBar && !mobileNavBar.contains(event.target)) {
    closeMobileMenu()
  }
}
</script>
