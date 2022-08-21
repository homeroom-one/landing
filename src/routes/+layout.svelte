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
</style>
