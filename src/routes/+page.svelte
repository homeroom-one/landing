<script lang="ts">
  // Models & Store
  import type { Hero, WhyHomeroomOne, InformationAndGraphic8020, ReportsInformationAndGraphic, ContactBanner } from '../models'
  import { hygraph } from '../store'

  // Components
  import Contact from '../components/Contact.svelte'
  import FeatureSectionOne from '../components/FeatureSectionOne.svelte'
  import FeatureSectionTwo from '../components/FeatureSectionTwo.svelte'
  import HeroHeader from '../components/HeroHeader.svelte'
  import InfoCardList from '../components/InfoCardList.svelte'

  let hero: Hero
  let why: WhyHomeroomOne
  let info: InformationAndGraphic8020
  let report: ReportsInformationAndGraphic
  let contact: ContactBanner

  $: hero = $hygraph.hero
  $: why = $hygraph.whyHomeroomOne
  $: info = $hygraph.informationAndGraphic8020
  $: report = $hygraph.reportsInformationAndGraphic
  $: contact = $hygraph.contactBanner
</script>

<template>
  {#if hero}
    <HeroHeader {hero} />
  {/if}
  {#if why}
    <InfoCardList {why} />
  {/if}
  <div id="features" class="relative pt-16 pb-32 overflow-hidden">
    {#if info}
      <FeatureSectionOne {info} />
    {/if}
    {#if report}
      <FeatureSectionTwo {report} />
    {/if}
  </div>
  {#if contact}
    <Contact {contact} />
  {/if}
</template>

<style lang="less">
</style>
