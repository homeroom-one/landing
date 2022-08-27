<script lang="ts">
  import type { WhyHomeroomOne, InformationCard } from '../models'
  import IconInfoCard from './IconInfoCard.svelte'

  export let why: WhyHomeroomOne

  const cardList: InformationCard[] = why.informationCard
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div class="max-w-xl mx-auto lg:max-w-none">
        <div class="text-center max-w-xl mx-auto">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">{why.title}</h2>
          <p class="mt-4">{why.description}</p>
        </div>
        <div class="mt-12 max-w-sm mx-auto grid grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-4">
          {#each cardList as card}
            <!-- content here -->
            <IconInfoCard {card} />
          {/each}
        </div>
      </div>
  </div>
</template>

<style lang="less">
</style>
