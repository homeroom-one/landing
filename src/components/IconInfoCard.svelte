<script lang="ts">
  import type { InformationCard } from '../models'

  export let card: InformationCard
</script>

<template>
  <div class="text-center sm:flex sm:text-left lg:block lg:text-center">
    <div class="sm:flex-shrink-0">
      <div class="flow-root">
        <img class="w-16 h-16 mx-auto" src="https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg" alt="">
        <img class="w-16 h-16 mx-auto" src={card.image.url} alt="">
      </div>
    </div>
    <div class="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
      <h3 class="text-sm font-medium text-gray-900">{card.title}</h3>
      <p class="mt-2 text-sm text-gray-500">{card.description}</p>
    </div>
  </div>
</template>

<style lang="less">
  
</style>