<script lang="ts">
  // Models & Store
  import type { Hero, WhyHomeroomOne } from '../models'
  import { hygraph } from '../store'

  // Components
  import Contact from '../components/Contact.svelte'
  import FeatureSectionOne from '../components/FeatureSectionOne.svelte';
  import FeatureSectionTwo from '../components/FeatureSectionTwo.svelte';
  import HeroHeader from '../components/HeroHeader.svelte'
  import InfoCardList from '../components/InfoCardList.svelte'

  let hero: Hero
  let why: WhyHomeroomOne

  $: hero = $hygraph.hero
  $: why = $hygraph.whyHomeroomOne
</script>

<template>
  {#if hero}
    <HeroHeader {hero} />
  {/if}
  {#if why}
    <InfoCardList {why} />
  {/if}
  <div class="relative bg-white pt-16 pb-32 overflow-hidden">
    <FeatureSectionOne />
    <FeatureSectionTwo />
  </div>
  <Contact />
</template>

<style lang="less">
</style>
