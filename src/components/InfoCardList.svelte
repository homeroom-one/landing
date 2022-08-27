<script lang="ts">
  import type { WhyHomeroomOne, InformationCard } from '../models'
  import IconInfoCard from './IconInfoCard.svelte'

  export let why: WhyHomeroomOne
  
  const cardList: InformationCard[] = why.informationCard
</script>

<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div class="bg-gray-50 rounded-2xl px-6 py-16 sm:p-16">
        <div class="max-w-xl mx-auto lg:max-w-none">
          <div class="text-center">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900">{why.title}</h2>
          </div>
          <div class="mt-12 max-w-sm mx-auto grid grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3">
            {#each cardList as card}
              <!-- content here -->
              <IconInfoCard {card} />
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
</style>
