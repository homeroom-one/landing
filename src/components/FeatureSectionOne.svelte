<script lang="ts">
  import type { InformationAndGraphic8020 } from '../models'

  export let info: InformationAndGraphic8020
</script>

<template>
  <div class="relative">
    <div class="polygon"></div>
    <div class="feature-section-wrapper lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 z-10 relative">
      <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
        <div>
          <div>
            <span class="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
              <!-- Heroicon name: outline/inbox -->
              <svg
                class="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                />
              </svg>
            </span>
          </div>
          <div class="mt-6">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900">
              {info.titleColorOne}
            </h2>
            <p class="mt-4 text-lg text-gray-500">
              {info.description}
            </p>
          </div>
        </div>
      </div>
      <div class="mt-12 sm:mt-16 lg:mt-0">
        <div class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
          <img
            class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
            src={info.graphic.url}
            alt="Inbox user interface"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  .polygon {
    background-color: #6dc1dc;
    background: linear-gradient(-112deg, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%);

    // Right
    // clip-path: polygon(0% 0%, 100% 0, 90% 80%, 0 95%);
    // Left
    clip-path: polygon(0% 0%, 100% 0, 100% 100%, 20% 90%);

    position: absolute;
    z-index: 0;
    width: 100%;
    // min-height: 700px;
    // min-height: 500px;
    height: 100%;
    opacity: 0.4;
    margin-right: 20px;
  }

  .feature-section-wrapper {
    min-height: 460px;
  }
</style>
