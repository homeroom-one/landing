<script lang="ts">
  import type { Hero } from '../models'
  import { hygraph } from '../store'
  
  import HeroHeader from '../components/HeroHeader.svelte'

  let hero: Hero

  $: hero = $hygraph.hero
</script>

<template>
  <div>
    {#if hero}
       <HeroHeader {hero} />
    {/if}
  </div>
</template>

<style lang="less">
</style>
