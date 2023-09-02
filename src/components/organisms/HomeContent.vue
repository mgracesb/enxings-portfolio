<template>
  <div class="Home" :class="bgColor">
    <section
      v-for="(sectionRef, index) in sectionRefs"
      :key="index"
      :id="sectionRef.id"
      @click="goToBook(sectionRef.id)"
    >
      <ContentSection :contentImage="sectionRef.image" />
    </section>
  </div>
</template>

<script setup>
import router from '@/router/index.js'
import { onMounted, ref } from 'vue'

import ContentSection from '@/components/molecules/ContentSection.vue'
import BlackImgCover from '@/assets/photos/black/black-1.jpg'
import PopImgCover from '@/assets/photos/pop/pop-1.jpg'
import WhiteImgCover from '@/assets/photos/white/white-1.jpg'
import RedImgCover from '@/assets/photos/red/red-1.jpg'
import GreenImgCover from '@/assets/photos/green/green-1.jpg'
import PinkImgCover from '@/assets/photos/pink/pink-1.jpg'
import CamelImgCover from '@/assets/photos/camel/camel-1.jpg'

const sectionRefs = ref([
  { id: 'black', image: BlackImgCover },
  { id: 'pop', image: PopImgCover },
  { id: 'white', image: WhiteImgCover },
  { id: 'red', image: RedImgCover },
  { id: 'green', image: GreenImgCover },
  { id: 'pink', image: PinkImgCover },
  { id: 'camel', image: CamelImgCover }
])

const observer = ref(null)
const bgColor = ref('black')

const handleIntersect = (entries) => {
  entries.forEach((entry) => {
    const intersectedSection = sectionRefs.value.find(
      (sectionRef) => sectionRef.id === entry.target.id
    )
    if (entry.isIntersecting && intersectedSection) {
      bgColor.value = intersectedSection.id
    }
  })
}

const goToBook = (id) => {
  router.push({ name: 'book', params: { id } })
}

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  }

  observer.value = new IntersectionObserver(handleIntersect, options)
  sectionRefs.value.forEach((sectionRef) => {
    const sectionElement = document.getElementById(sectionRef.id)
    if (sectionElement) {
      observer.value.observe(sectionElement)
    }
  })
})
</script>

<style scoped lang="scss">
.Home {
  overflow: scroll;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(300px);
  scroll-snap-type: y mandatory;
  height: 100%;
  transition: background-color 0.2s ease;

  &.black {
    background-color: #181818;
  }

  &.pop {
    background-color: #dbea07;
  }

  &.white {
    background-color: #e1e3e7;
  }

  &.red {
    background-color: #bd0502;
  }

  &.green {
    background-color: #8aae92;
  }

  &.pink {
    background-color: #bd7ea7;
  }

  &.camel {
    background-color: #d9c2b8;
  }

  section {
    scroll-snap-align: start;
    height: 100%;
    width: 100%;
    background-color: transparent;
  }
}
</style>
