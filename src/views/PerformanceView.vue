<template>
  <div class="PerformanceView">
    <h1 class="PerformanceView__title" id="title" :style="{ textShadow: getShadow }" data-text="performance">
        performance
      </h1>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import DummyStore from '../store/DummyStore.json'

const bookID = ref()
const bookImages = ref([])
const activeOption = ref(1)
const imageList = DummyStore

onMounted(() => {
  const route = useRoute()
  bookID.value = route.params.id

  // eslint-disable-next-line no-prototype-builtins
  if (imageList.DummyStore.hasOwnProperty(bookID.value)) {
    bookImages.value = imageList.DummyStore[bookID.value]
  }
})

const handleClickOption = (num) => {
  activeOption.value = num
}
</script>

<style scoped lang="scss">
@import '@/styles/breakpoints';
@import '@/styles/colors';
$optionDefaultColours: #ed5565, #fc6e51, #ffce54, #2ecc71, #5d9cec, #ac92ec;

// .SpotsView {
//   background-color: $color__clear;
//   padding-top: 2rem;
//   padding-bottom: 1rem;
//   height: calc(100vh - 4rem);
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

.SpotsView {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100vh;
  transition: 0.25s;

  &__option {
    &__image {
      object-fit: cover;
      height: 100%;
      width: 100%;
      max-width: 60px;
      &.active {
        object-fit: cover;
        height: 100%;
        width: 100%;
        max-width: 1000px;
      }
    }
  }

  .options {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    overflow: hidden;
    min-width: 600px;
    max-width: 900px;
    width: calc(100% - 100px);
    height: 400px;

    @for $i from 1 through 4 {
      @media screen and (max-width: 798px - $i*80) {
        min-width: 600px - $i * 80;
        .option:nth-child(#{6-$i}) {
          display: none;
        }
      }
    }

    .option {
      position: relative;
      overflow: hidden;
      min-width: 60px;
      margin: 10px;
      background: var(--optionBackground, var(--defaultBackground, #e6e9ed));
      background-size: auto 120%;
      background-position: center;
      cursor: pointer;
      transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);

      @for $i from 1 through length($optionDefaultColours) {
        &:nth-child(#{$i}) {
          --defaultBackground: #{nth($optionDefaultColours, $i)};
        }
      }
      &.active {
        flex-grow: 10000;
        transform: scale(1);
        max-width: 600px;
        margin: 0px;
        border-radius: 40px;

        background-size: auto 100%;
        .shadow {
          box-shadow:
            inset 0 -120px 120px -120px black,
            inset 0 -120px 120px -100px black;
        }
        .label {
          bottom: 20px;
          left: 20px;
          .info > div {
            left: 0px;
            opacity: 1;
          }
        }
      }
      &:not(.active) {
        flex-grow: 1;

        border-radius: 30px;
        .shadow {
          bottom: -40px;
          box-shadow:
            inset 0 -120px 0px -120px black,
            inset 0 -120px 0px -100px black;
        }
        .label {
          bottom: 10px;
          left: 10px;
          .info > div {
            left: 20px;
            opacity: 0;
          }
        }
      }
      .shadow {
        position: absolute;
        bottom: 0px;
        left: 0px;
        right: 0px;

        height: 120px;

        transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
      }
      .label {
        display: flex;
        position: absolute;
        right: 0px;

        height: 40px;
        transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
        .icon {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          min-width: 40px;
          max-width: 40px;
          height: 40px;
          border-radius: 100%;
          background-color: white;
          color: var(--defaultBackground);
        }
        .info {
          display: flex;
          flex-direction: column;
          justify-content: center;

          margin-left: 10px;

          color: white;

          white-space: pre;
          > div {
            position: relative;

            transition:
              0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95),
              opacity 0.5s ease-out;
          }
          .main {
            font-weight: bold;
            font-size: 1.2rem;
          }
          .sub {
            transition-delay: 0.1s;
          }
        }
      }
    }
  }
}

// &__grid {
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-auto-flow: row;
//   overflow-y: scroll;
//   justify-items: center;
//   align-items: center;
//   gap: 0.5rem;

//   &__item {
//     width: 70%;
//     height: auto;
//     object-fit: cover;
//   }
// }

// @media (min-width: $desktop) {
//   &__grid {
//     padding: 5%;
//     grid-template-columns: repeat(2, 1fr);
//     align-items: stretch;

//     &__item {
//       width: 100%;
//     }
//   }
// }

// @include ipad-portrait {
//   padding-top: 4rem;
//   padding-bottom: 2rem;
// }
// }
</style>
