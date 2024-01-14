<template>
  <div class="Portfolio" ref="content" :class="bgColor">
    <section v-for="(sectionRef, index) in sectionRefs" :key="index" :id="sectionRef.id">
      <ContentSection
        :contentImage="sectionRef.image"
        :title="sectionRef.title"
        @click="goToBook(sectionRef.id)"
      />
    </section>
    <ScrollHelper v-if="!bottomReached" />
  </div>
</template>

<script setup>
import router from '@/router/index.js'
import { ref, computed, onMounted } from 'vue'
import { useScroll } from '@vueuse/core'

import ScrollHelper from '@/components/molecules/ScrollHelper.vue'
import ContentSection from '@/components/molecules/ContentSection.vue'
import EleganceImgCover from '@/assets/photos/elegance/elegance-1.jpg'
import PopImgCover from '@/assets/photos/pop/pop-1.jpg'
import WhiteImgCover from '@/assets/photos/white/white-1.jpg'
import FlameImgCover from '@/assets/photos/flame/flame-1.jpg'
import GreenImgCover from '@/assets/photos/green/green-1.jpg'
import PinkImgCover from '@/assets/photos/pink/pink-1.jpg'
import CamelImgCover from '@/assets/photos/camel/camel-1.jpg'
import MoreImgCover from '@/assets/photos/more/more-1.jpg'
import ChanceImgCover from '@/assets/photos/chance/chance-1.jpg'

const sectionRefs = ref([
  { id: 'elegance', image: EleganceImgCover, title: 'Elegance' },
  { id: 'chance', image: ChanceImgCover, title: 'Chance' },
  { id: 'pop', image: PopImgCover, title: 'Neon' },
  { id: 'white', image: WhiteImgCover, title: 'Ivory' },
  { id: 'flame', image: FlameImgCover, title: 'Flame' },
  { id: 'green', image: GreenImgCover, title: 'Mint' },
  { id: 'pink', image: PinkImgCover, title: 'Pink' },
  { id: 'camel', image: CamelImgCover, title: 'Camel' },
  { id: 'more', image: MoreImgCover, title: 'More' }
])

const observer = ref(null)
const bgColor = ref('elegance')
const content = ref()

const { arrivedState } = useScroll(content, { offset: { top: 30 } })

const bottomReached = computed(() => {
  return arrivedState.bottom
})

const goToBook = (id) => {
  router.push({ name: 'book', params: { id } })
}

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
@import '@/styles/colors.scss';

.Portfolio {
  overflow: scroll;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(300px);
  scroll-snap-type: y mandatory;
  height: 100%;
  transition: background-color 0.2s ease;

  &.chance {
    background-color: #d1c1be;
  }

  &.elegance {
    background-color: $color__dark;
  }

  &.pop {
    background-color: #b8b321;
  }

  &.white {
    background-color: #e1e3e7;
  }

  &.flame {
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

  &.more {
    background-color: $color__dark;
  }

  section {
    scroll-snap-align: start;
    height: 100%;
    width: 100%;
    background-color: transparent;
  }
}
</style>
