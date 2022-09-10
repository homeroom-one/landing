<script lang="ts">
  import type { ReportsInformationAndGraphic } from '../models'

  export let report: ReportsInformationAndGraphic
</script>

<template>
  <div class="relative mt-24">
    <div class="polygon"></div>
    <div class="feature-section-wrapper lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24 z-10 relative">
      <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
        <div>
          <div>
            <span class="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
              <!-- Heroicon name: outline/sparkles -->
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
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </span>
          </div>
          <div class="mt-6">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900">
              {report.titleColorOne}
            </h2>
            <p class="mt-4 text-lg text-gray-500">
              {report.description}
            </p>
          </div>
        </div>
      </div>
      <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
        <div class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
          <!-- <img
            class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
            src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
            alt="Customer profile user interface"
          /> -->
          <img
            class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
            src={report.graphic.url}
            alt="Customer profile user interface"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  .polygon {
    background-color: #6dc1dc;
    background: linear-gradient(112deg, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%);

    // Right
    clip-path: polygon(0% 0%, 100% 0, 90% 80%, 0 95%);
    // Left
    // clip-path: polygon(0% 0%, 100% 0, 100% 100%, 20% 90%);

    position: absolute;
    z-index: 0;
    width: 100%;
    // min-height: 700px;
    // min-height: 600px;
    height: 100%;
    opacity: 0.4;
    margin-right: 20px;
  }

  .feature-section-wrapper {
    min-height: 460px;
  }
</style>
