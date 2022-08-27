<script lang="ts">
  import type { Hero } from '../models'

  export let hero: Hero
</script>

<template>
  <div>
    <div class="polygon relative">
      <div class="max-w-7xl pt-20 mx-auto px-4 sm:px-6 lg:px-8">
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div class="lg:py-24">
              <h1 class="mt-4 text-4xl tracking-tight font-bold text-white sm:mt-5 sm:text-6xl sm:tracking-tight lg:mt-6 xl:text-6xl xl:tracking-tight">
                <span class="block">{hero.titleColorOne}</span>
                <span class="block text-midnight-900">{hero.titleColorTwo}</span>
              </h1>
              <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                DESCRIPTION
              </p>
              <div class="mt-10 sm:mt-12">
                <form action="#" class="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <div class="sm:flex">
                    <div class="min-w-0 flex-1">
                      <label for="email" class="sr-only">Email address</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        class="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                      />
                    </div>
                    <div class="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        class="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                        >Start free trial</button
                      >
                    </div>
                  </div>
                  <p class="mt-3 text-sm text-gray-300 sm:mt-4">
                    Start your free 14-day trial, no credit card necessary. By providing your email, you agree to our <a href="/" class="font-medium text-white"
                      >terms of service</a
                    >.
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
              <img
                class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  .polygon {
    background-color: #6dc1dc;
    background-image: linear-gradient(112deg, #6dc1dc 0%, #a690fc 20%, #fc96bb 60%, #ffc397 100%);

    clip-path: polygon(0% 0%, 100% 0, 90% 80%, 0 95%);

    width: 100%;
    height: 700px;
    border-radius: 0 0 5px 0 / 0 0 50px 0;
    opacity: 0.8;
    margin-right: 20px;
  }
</style>
