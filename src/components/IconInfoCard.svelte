<script lang="ts">
  import type { InformationCard } from '../models'

  export let card: InformationCard
</script>

<template>
  <div class="text-center sm:flex sm:text-left lg:block lg:text-center">
    <div class="sm:flex-shrink-0">
      <div class="inline-block rounded-full shadow-xl hover:bg-dusk-900 transition ease-in-out duration-500">
        <!-- <img class="w-16 h-16 mx-auto" src="https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg" alt=""> -->
        <img class="icon-info-card p-6 mx-auto transition ease-in-out duration-500" src={card.image.url} alt="">
      </div>
    </div>
    <div class="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
      <h3 class="text-sm font-medium text-gray-900">{card.title}</h3>
      <p class="mt-2 text-sm text-gray-500">{card.description}</p>
    </div>
  </div>
</template>

<style lang="less">
  @filter: invert(6%) sepia(46%) saturate(5902%) hue-rotate(253deg) brightness(99%) contrast(110%);
  @filter-hover: invert(100%) sepia(40%) saturate(2267%) hue-rotate(214deg) brightness(126%) contrast(111%);

  .icon-info-card {
    filter: @filter;
    
    &:hover {
      filter: @filter-hover;
    }
  }
</style>