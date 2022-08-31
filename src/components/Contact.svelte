<script lang="ts">
  import type { ContactBanner } from '../models'

  export let contact: ContactBanner
</script>

<template>
  <div class="text-white gradient mt-16">
    <div class="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center">
      <div class="lg:w-0 lg:flex-1">
        <h2 class="text-3xl tracking-tight font-bold text-white sm:text-4xl">
          {contact.titleColorOne}
        </h2>
        <p class="mt-3 max-w-3xl text-lg text-white">
          {contact.description}
        </p>

        <div class="flex-shrink-0 mt-10">
          <a
            class="relative inline-flex items-center px-6 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            href="mailto:hello@homeroomone.com"
            target="_blank"
          >
            <!-- Heroicon name: outline/mail-open -->
            <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
              />
            </svg>
            <span>Contact</span>
          </a>
        </div>
        <!-- <p class="mt-3 text-sm text-white">
          We care about the protection of your data. Read our
          <a href="#" class="font-medium underline"> Privacy Policy. </a>
        </p> -->
      </div>
      <!-- <div class="mt-8 lg:mt-0 lg:ml-8">
        <form class="sm:flex">
          <label for="email-address" class="sr-only">Email address</label>
          <input
            id="email-address"
            name="email-address"
            type="email"
            autocomplete="email"
            required
            class="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs rounded-md"
            placeholder="Enter your email"
          />
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              type="submit"
              class="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >Notify me</button
            >
          </div>
        </form>
        <p class="mt-3 text-sm text-white">
          We care about the protection of your data. Read our
          <a href="#" class="font-medium underline"> Privacy Policy. </a>
        </p>
      </div> -->
    </div>
  </div>
</template>

<style lang="less">
  .gradient {
    background: rgb(20, 3, 66);
    background: linear-gradient(112deg, rgba(20, 3, 66, 1) 0%, rgba(40, 40, 96, 1) 50%, rgba(20, 3, 66, 1) 100%);
  }
</style>
