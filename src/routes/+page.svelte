<script lang="ts">
  import type { Hero, WhyHomeroomOne } from '../models'
  import { hygraph } from '../store'
  
  import HeroHeader from '../components/HeroHeader.svelte'
  import InfoCardList from '../components/InfoCardList.svelte'

  let hero: Hero
  let why: WhyHomeroomOne

  $: hero = $hygraph.hero
  $: why = $hygraph.whyHomeroomOne
</script>

<template>
  <div>
    {#if hero}
       <HeroHeader {hero} />
    {/if}
    {#if why}
       <InfoCardList {why} />
    {/if}
  </div>
</template>

<style lang="less">
</style>
