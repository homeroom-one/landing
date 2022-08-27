<script lang="ts">
  import '../assets/css/tailwind.css'
  import Nav from '../components/Nav.svelte'
</script>

<template>
  <Nav />
  <main>
    <slot />
  </main>
</template>

<style lang="less">
  * {
    @apply text-midnight-900;
  }

  .button-primary {
    display: block;
    height: 50px;
    width: 186px;
    overflow: hidden;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #fff;
    font-size: 14px;
    text-align: center;

    &:after {
      position: absolute;
      content: '';
      display: inline-block;
      background: #3bade3;
      background: linear-gradient(45deg, #3bade3, #576fe6 25%, #9844b7 51%, #ff357f);
      height: 50px;
      width: 372px;
      z-index: -1;
      transform: translateX(-280px);
      transition: transform 0.4s ease-in;
    }

    &:hover:after {
      transform: translateX(-200px);
    }
  }
</style>
