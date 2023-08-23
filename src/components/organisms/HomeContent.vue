<template>
  <div class="Home" :class="bgColor">
    <section v-for="(sectionRef, index) in sectionRefs" :key="index" :id="sectionRef.id">
      <ContentSection :contentImage="sectionRef.image" />
    </section>
  </div>
</template>

<script setup>
import ContentSection from '@/components/molecules/ContentSection.vue'
import BlackImg from '@/assets/photos/black.png'
import WhiteImg from '@/assets/photos/white.png'
import CamelImg from '@/assets/photos/camel.png'
import BlueImg from '@/assets/photos/blue.png'
import PurpleImg from '@/assets/photos/purple.png'
import YellowImg from '@/assets/photos/yellow.png'
import OrangeImg from '@/assets/photos/orange.png'
import PinkImg from '@/assets/photos/pink.png'
import { onMounted, ref } from 'vue'

const sectionRefs = ref([
  { id: 'black', image: BlackImg },
  { id: 'white', image: WhiteImg },
  { id: 'camel', image: CamelImg },
  { id: 'pink', image: PinkImg },
  { id: 'blue', image: BlueImg },
  { id: 'yellow', image: YellowImg },
  { id: 'orange', image: OrangeImg },
  { id: 'purple', image: PurpleImg }
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
  &.white {
    background-color: #e1e3e7;
  }

  &.camel {
    background-color: #d2b38a;
  }

  &.blue {
    background-color: #013894;
  }

  &.pink {
    background-color: #c32c4f;
  }

  &.yellow {
    background-color: #e6e409;
  }

  &.orange {
    background-color: #cd7d29;
  }

  &.purple {
    background-color: #6907be;
  }

  section {
    scroll-snap-align: start;
    height: 100%;
    width: 100%;
    background-color: transparent;
  }
}
</style>
