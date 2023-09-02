<template>
  <nav class="MobileNavBar" role="navigation">
    <div class="MobileNavBar__menu">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <div class="MobileNavBar__menu__items">
        <RouterLink to="/"><h1>ENXING SHYU</h1></RouterLink>
        <RouterLink to="/al-natural">Al natural</RouterLink>
        <RouterLink to="/performance">Performance</RouterLink>
        <RouterLink to="/spots">Spots</RouterLink>
        <RouterLink to="/sobre-mi">Sobre mí</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="scss">
@import '@/styles/colors.scss';

.MobileNavBar {
  &__menu {
    display: block;
    position: fixed;
    right: 0;
    top: 2rem;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
    z-index: 22;

    a {
      transition: all 0.3s ease;

      &:focus,
      :active {
        color: $color__primary;
      }
    }

    input {
      display: block;
      width: 100vw;
      height: 32px;
      position: absolute;
      top: -7px;
      right: 0;
      cursor: pointer;
      opacity: 0;
      z-index: 24;
      -webkit-touch-callout: none;
    }

    span {
      position: relative;
      display: block;
      width: 1.7rem;
      height: 3px;
      margin-bottom: 5px;
      right: 1rem;
      background: #cdcdcd;
      border-radius: 3px;
      transform-origin: 4px 0px;
      z-index: 23;
      transition:
        transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
        opacity 0.55s ease;

      &:first-child {
        transform-origin: 0% 0%;
      }

      &:nth-last-child(2) {
        transform-origin: 0% 100%;
      }
    }

    &__items {
      right: 0;
      margin: -100px 0 0 0;
      position: absolute;
      width: 100vw;
      height: 50vh;
      padding: 1.5rem;
      padding-top: 5rem;
      background: rgba(0, 0, 0, 0.9);
      list-style-type: none;
      -webkit-font-smoothing: antialiased;
      transform-origin: 0% 0%;
      transform: translate(100%, 0);
      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-end;

      a {
        &:hover {
          padding-left: 5px;
        }
      }
    }
  }

  input {
    &:checked ~ span {
      opacity: 1;
      transform: rotate(45deg) translate(-3px, 0);
      background: $color__primary;

      &:nth-last-child(3) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }

      &:nth-last-child(2) {
        transform: rotate(-45deg) translate(0, -3px);
      }
    }
    &:checked ~ .MobileNavBar__menu__items {
      transform: none;
    }
  }
}
</style>
